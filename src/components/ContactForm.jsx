import { useMemo, useState } from 'react'

// ContactForm — formulario de contacto con validación
// Props:
//   endpoint: string — URL de Formspree (PUBLIC_FORMSPREE_ENDPOINT en .env)
// Campos: nombre, email, mensaje
// Patrón: validators + touched state + status (idle/submitting/success/error)

const validators = {
  name: (value) => /[A-Za-zÀ-ÿ0-9 .'-]{3,}/.test(value.trim()),
  email: (value) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.trim()),
  message: (value) => value.trim().length >= 10,
}

const labels = {
  name: 'Nombre',
  namePlaceholder: 'Tu nombre completo',
  nameError: 'El nombre debe tener al menos 3 caracteres.',
  email: 'Email',
  emailPlaceholder: 'tu@email.com',
  emailError: 'Ingresa un email válido.',
  message: 'Mensaje',
  messagePlaceholder: '¿En qué puedo ayudarte?',
  messageError: 'El mensaje debe tener al menos 10 caracteres.',
  submit: 'Enviar mensaje',
  loading: 'Enviando...',
  success: '¡Mensaje enviado! Te responderé pronto.',
  error: 'Hubo un error al enviar. Intenta de nuevo.',
}

const ContactForm = ({ endpoint }) => {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const errors = useMemo(
    () => ({
      name: !validators.name(values.name),
      email: !validators.email(values.email),
      message: !validators.message(values.message),
    }),
    [values]
  )

  const setFieldValue = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (status !== 'idle' && status !== 'submitting') setStatus('idle')
  }

  const setFieldTouched = (field) => setTouched((prev) => ({ ...prev, [field]: true }))

  const getValidationState = (field) => {
    const isTouched = touched[field]
    const hasError = errors[field]
    return {
      isValid: isTouched ? !hasError : false,
      isInvalid: isTouched ? hasError : false,
    }
  }

  const getLabelClass = (field) => {
    const { isValid, isInvalid } = getValidationState(field)
    if (isValid) return 'text-(--color-primary)'
    if (isInvalid) return 'text-red-600'
    return 'text-(--text-secondary)'
  }

  const getInputClass = (field) => {
    const { isValid, isInvalid } = getValidationState(field)
    if (isValid) return 'border-(--color-primary)'
    if (isInvalid) return 'border-red-500'
    return 'border-(--color-border)'
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    setTouched({ name: true, email: true, message: true })
    if (Object.values(errors).some(Boolean)) return
    if (!endpoint) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      })

      if (response.ok) {
        setStatus('success')
        setValues({ name: '', email: '', message: '' })
        setTouched({ name: false, email: false, message: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'
  const nameVal = getValidationState('name')
  const emailVal = getValidationState('email')
  const messageVal = getValidationState('message')

  const inputBase =
    'w-full rounded-lg border bg-(--surface-input) px-4 text-sm text-(--text-primary) outline-none focus:border-(--color-primary) transition-colors duration-150 disabled:opacity-60'

  return (
    <form
      onSubmit={handleSubmit}
      action={endpoint || undefined}
      method="POST"
      aria-label="Formulario de contacto"
      aria-busy={isSubmitting}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Nombre */}
      <label className={`flex flex-col gap-1.5 text-xs font-medium ${getLabelClass('name')}`}>
        {labels.name}
        <input
          type="text"
          name="name"
          placeholder={labels.namePlaceholder}
          value={values.name}
          onChange={(e) => setFieldValue('name', e.target.value)}
          onBlur={() => setFieldTouched('name')}
          aria-invalid={nameVal.isInvalid || undefined}
          aria-describedby={nameVal.isInvalid ? 'name-error' : undefined}
          disabled={isSubmitting}
          className={`${inputBase} h-11 ${getInputClass('name')}`}
        />
        {nameVal.isInvalid && (
          <p id="name-error" className="text-[11px] text-red-600" role="alert">
            {labels.nameError}
          </p>
        )}
      </label>

      {/* Email */}
      <label className={`flex flex-col gap-1.5 text-xs font-medium ${getLabelClass('email')}`}>
        {labels.email}
        <input
          type="email"
          name="email"
          placeholder={labels.emailPlaceholder}
          value={values.email}
          onChange={(e) => setFieldValue('email', e.target.value)}
          onBlur={() => setFieldTouched('email')}
          aria-invalid={emailVal.isInvalid || undefined}
          aria-describedby={emailVal.isInvalid ? 'email-error' : undefined}
          disabled={isSubmitting}
          className={`${inputBase} h-11 ${getInputClass('email')}`}
        />
        {emailVal.isInvalid && (
          <p id="email-error" className="text-[11px] text-red-600" role="alert">
            {labels.emailError}
          </p>
        )}
      </label>

      {/* Mensaje */}
      <label className={`flex flex-col gap-1.5 text-xs font-medium ${getLabelClass('message')}`}>
        {labels.message}
        <textarea
          name="message"
          rows={5}
          placeholder={labels.messagePlaceholder}
          value={values.message}
          onChange={(e) => setFieldValue('message', e.target.value)}
          onBlur={() => setFieldTouched('message')}
          aria-invalid={messageVal.isInvalid || undefined}
          aria-describedby={messageVal.isInvalid ? 'message-error' : undefined}
          disabled={isSubmitting}
          className={`${inputBase} py-3 resize-none ${getInputClass('message')}`}
        />
        {messageVal.isInvalid && (
          <p id="message-error" className="text-[11px] text-red-600" role="alert">
            {labels.messageError}
          </p>
        )}
      </label>

      {/* Submit + feedback */}
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg bg-(--color-primary) text-(--surface-primary) text-sm font-medium hover:bg-(--color-secondary) transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? labels.loading : labels.submit}
        </button>

        {(status === 'success' || status === 'error') && (
          <p
            className={`text-xs text-center ${status === 'success' ? 'text-(--color-primary)' : 'text-red-600'}`}
            role={status === 'error' ? 'alert' : 'status'}
            aria-live="polite"
          >
            {status === 'success' ? labels.success : labels.error}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
