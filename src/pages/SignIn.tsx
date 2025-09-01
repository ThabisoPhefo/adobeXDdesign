import { useState } from 'react'
import contactImage from '../assets/resources/Img_Contact.png'
import signinData from '../data/signin.json'

interface SignInFormData {
  EmailAddress: string
  Password: string
  RememberMe: boolean
}

interface SignInFormErrors {
  EmailAddress?: string
  Password?: string
}

const SignIn = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    EmailAddress: '',
    Password: '',
    RememberMe: false
  })

  const [errors, setErrors] = useState<SignInFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: SignInFormErrors = {}

    // Required field validation
    if (!formData.EmailAddress.trim()) {
      newErrors.EmailAddress = 'Email address is required'
    } else if (!validateEmail(formData.EmailAddress)) {
      newErrors.EmailAddress = 'Please enter a valid email address'
    }

    if (!formData.Password.trim()) {
      newErrors.Password = 'Password is required'
    } else if (formData.Password.length < 6) {
      newErrors.Password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    // Clear error when user starts typing
    if (errors[name as keyof SignInFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual authentication endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, simulate success
      setSubmitStatus('success')
      setSubmitMessage(signinData.form.messages.success)
      
      // In a real app, you would handle the authentication response here
      // e.g., store tokens, redirect to dashboard, etc.
      
    } catch (error: any) {
      setSubmitStatus('error')
      setSubmitMessage(signinData.form.messages.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-us-new">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>{signinData.hero.title}</h1>
            <p>{signinData.hero.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="simple-contact-form">
            <div className="form-group-simple">
              <label htmlFor="EmailAddress">{signinData.form.fields.emailAddress.label}</label>
              <input
                type={signinData.form.fields.emailAddress.type}
                id="EmailAddress"
                name="EmailAddress"
                value={formData.EmailAddress}
                onChange={handleInputChange}
                className={errors.EmailAddress ? 'error' : ''}
                placeholder={signinData.form.fields.emailAddress.placeholder}
              />
              {errors.EmailAddress && <span className="error-message">{errors.EmailAddress}</span>}
            </div>

            <div className="form-group-simple">
              <label htmlFor="Password">{signinData.form.fields.password.label}</label>
              <input
                type={signinData.form.fields.password.type}
                id="Password"
                name="Password"
                value={formData.Password}
                onChange={handleInputChange}
                className={errors.Password ? 'error' : ''}
                placeholder={signinData.form.fields.password.placeholder}
              />
              {errors.Password && <span className="error-message">{errors.Password}</span>}
            </div>

            <div className="checkbox-section">
              <label className="simple-checkbox-label">
                <input
                  type="checkbox"
                  name="RememberMe"
                  checked={formData.RememberMe}
                  onChange={handleInputChange}
                />
                <span className="simple-checkmark"></span>
                {signinData.form.options.rememberMe.label}
              </label>
            </div>

            {submitStatus !== 'idle' && (
              <div className={`submit-message ${submitStatus}`}>
                {submitMessage}
              </div>
            )}

            <button 
              type="submit" 
              className="simple-submit-btn"
              disabled={isSubmitting}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
              </svg>
              {isSubmitting ? signinData.form.submitButton.loadingText : signinData.form.submitButton.text}
            </button>

            <div className="auth-links">
              <p>{signinData.form.links.signup.text} <a href={signinData.form.links.signup.href} className="auth-link">{signinData.form.links.signup.linkText}</a></p>
              <p><a href={signinData.form.links.forgotPassword.href} className="auth-link">{signinData.form.links.forgotPassword.text}</a></p>
            </div>
          </form>
        </div>

        <div className="contact-logo">
          <img 
            src={contactImage} 
            alt="Sign in illustration" 
            className="contact-image"
          />
        </div>
      </div>
    </div>
  )
}

export default SignIn
