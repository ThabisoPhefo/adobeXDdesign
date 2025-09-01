import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import contactImage from '../assets/resources/Img_Contact.png'
import forgotPasswordData from '../data/forgotpassword.json'

interface ForgotPasswordFormData {
  EmailAddress: string
}

interface ForgotPasswordFormErrors {
  EmailAddress?: string
}

const ForgotPassword = () => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    EmailAddress: ''
  })

  const [errors, setErrors] = useState<ForgotPasswordFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  // Scroll to top when success message appears
  useEffect(() => {
    if (submitStatus === 'success') {
      window.scrollTo(0, 0)
    }
  }, [submitStatus])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: ForgotPasswordFormErrors = {}

    if (!formData.EmailAddress.trim()) {
      newErrors.EmailAddress = 'Email address is required'
    } else if (!validateEmail(formData.EmailAddress)) {
      newErrors.EmailAddress = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof ForgotPasswordFormErrors]) {
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
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setSubmitMessage(forgotPasswordData.form.messages.success)
      
      setFormData({
        EmailAddress: ''
      })
      
    } catch (error: any) {
      setSubmitStatus('error')
      setSubmitMessage(forgotPasswordData.form.messages.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-us-new">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>{forgotPasswordData.hero.title}</h1>
            <p>{forgotPasswordData.hero.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="simple-contact-form">
            <div className="form-group-simple">
              <label htmlFor="EmailAddress">{forgotPasswordData.form.fields.emailAddress.label}</label>
              <input
                type={forgotPasswordData.form.fields.emailAddress.type}
                id="EmailAddress"
                name="EmailAddress"
                value={formData.EmailAddress}
                onChange={handleInputChange}
                className={errors.EmailAddress ? 'error' : ''}
                placeholder={forgotPasswordData.form.fields.emailAddress.placeholder}
              />
              {errors.EmailAddress && <span className="error-message">{errors.EmailAddress}</span>}
            </div>

            {submitStatus !== 'idle' && (
              <div className={`submit-message ${submitStatus}`}>
                {submitStatus === 'success' ? (
                  <div className="success-message-container">
                    <div className="success-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="success-text">
                      <div className="success-title">{submitMessage}</div>
                      <div className="success-subtitle">{forgotPasswordData.form.messages.successSubtext}</div>
                    </div>
                  </div>
                ) : (
                  submitMessage
                )}
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
              {isSubmitting ? forgotPasswordData.form.submitButton.loadingText : forgotPasswordData.form.submitButton.text}
            </button>

            <div className="auth-links">
              <p>{forgotPasswordData.form.links.signin.text} <Link to={forgotPasswordData.form.links.signin.href} className="auth-link">{forgotPasswordData.form.links.signin.linkText}</Link></p>
              <p>{forgotPasswordData.form.links.signup.text} <Link to={forgotPasswordData.form.links.signup.href} className="auth-link">{forgotPasswordData.form.links.signup.linkText}</Link></p>
            </div>
          </form>
        </div>

        <div className="contact-logo">
          <LazyImage 
            src={contactImage} 
            alt="Forgot password illustration" 
            className="contact-image auth-image"
          />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
