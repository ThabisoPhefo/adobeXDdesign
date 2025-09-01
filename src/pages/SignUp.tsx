import { useState } from 'react'
import contactImage from '../assets/resources/Img_Contact.png'
import signupData from '../data/signup.json'

interface SignUpFormData {
  FullName: string
  EmailAddress: string
  Password: string
  ConfirmPassword: string
  AcceptTerms: boolean
  ReceiveUpdates: boolean
}

interface SignUpFormErrors {
  FullName?: string
  EmailAddress?: string
  Password?: string
  ConfirmPassword?: string
  AcceptTerms?: string
}

const SignUp = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    FullName: '',
    EmailAddress: '',
    Password: '',
    ConfirmPassword: '',
    AcceptTerms: false,
    ReceiveUpdates: false
  })

  const [errors, setErrors] = useState<SignUpFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string): boolean => {
    // Password should be at least 8 characters and contain at least one number and one letter
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/
    return passwordRegex.test(password)
  }

  const validateForm = (): boolean => {
    const newErrors: SignUpFormErrors = {}

    // Required field validation
    if (!formData.FullName.trim()) {
      newErrors.FullName = 'Full name is required'
    } else if (formData.FullName.trim().length < 2) {
      newErrors.FullName = 'Full name must be at least 2 characters'
    }

    if (!formData.EmailAddress.trim()) {
      newErrors.EmailAddress = 'Email address is required'
    } else if (!validateEmail(formData.EmailAddress)) {
      newErrors.EmailAddress = 'Please enter a valid email address'
    }

    if (!formData.Password.trim()) {
      newErrors.Password = 'Password is required'
    } else if (!validatePassword(formData.Password)) {
      newErrors.Password = 'Password must be at least 8 characters and contain at least one letter and one number'
    }

    if (!formData.ConfirmPassword.trim()) {
      newErrors.ConfirmPassword = 'Please confirm your password'
    } else if (formData.Password !== formData.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Passwords do not match'
    }

    if (!formData.AcceptTerms) {
      newErrors.AcceptTerms = 'You must accept the terms and conditions'
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
    if (errors[name as keyof SignUpFormErrors]) {
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
      // Simulate API call - replace with actual registration endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, simulate success
      setSubmitStatus('success')
      setSubmitMessage(signupData.form.messages.success)
      
      // Reset form on success
      setFormData({
        FullName: '',
        EmailAddress: '',
        Password: '',
        ConfirmPassword: '',
        AcceptTerms: false,
        ReceiveUpdates: false
      })
      
    } catch (error: any) {
      setSubmitStatus('error')
      setSubmitMessage(signupData.form.messages.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-us-new">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>{signupData.hero.title}</h1>
            <p>{signupData.hero.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="simple-contact-form">
            <div className="form-group-simple">
              <label htmlFor="FullName">{signupData.form.fields.fullName.label}</label>
              <input
                type={signupData.form.fields.fullName.type}
                id="FullName"
                name="FullName"
                value={formData.FullName}
                onChange={handleInputChange}
                className={errors.FullName ? 'error' : ''}
                placeholder={signupData.form.fields.fullName.placeholder}
              />
              {errors.FullName && <span className="error-message">{errors.FullName}</span>}
            </div>

            <div className="form-group-simple">
              <label htmlFor="EmailAddress">{signupData.form.fields.emailAddress.label}</label>
              <input
                type={signupData.form.fields.emailAddress.type}
                id="EmailAddress"
                name="EmailAddress"
                value={formData.EmailAddress}
                onChange={handleInputChange}
                className={errors.EmailAddress ? 'error' : ''}
                placeholder={signupData.form.fields.emailAddress.placeholder}
              />
              {errors.EmailAddress && <span className="error-message">{errors.EmailAddress}</span>}
            </div>

            <div className="form-row-simple">
              <div className="form-group-simple">
                <label htmlFor="Password">{signupData.form.fields.password.label}</label>
                <input
                  type={signupData.form.fields.password.type}
                  id="Password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  className={errors.Password ? 'error' : ''}
                  placeholder={signupData.form.fields.password.placeholder}
                />
                {errors.Password && <span className="error-message">{errors.Password}</span>}
              </div>

              <div className="form-group-simple">
                <label htmlFor="ConfirmPassword">{signupData.form.fields.confirmPassword.label}</label>
                <input
                  type={signupData.form.fields.confirmPassword.type}
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  value={formData.ConfirmPassword}
                  onChange={handleInputChange}
                  className={errors.ConfirmPassword ? 'error' : ''}
                  placeholder={signupData.form.fields.confirmPassword.placeholder}
                />
                {errors.ConfirmPassword && <span className="error-message">{errors.ConfirmPassword}</span>}
              </div>
            </div>

            <div className="checkbox-section">
              <label className="simple-checkbox-label">
                <input
                  type="checkbox"
                  name="AcceptTerms"
                  checked={formData.AcceptTerms}
                  onChange={handleInputChange}
                />
                <span className="simple-checkmark"></span>
                {signupData.form.options.acceptTerms.label.replace('Terms and Conditions', '')} 
                <a href={signupData.form.options.acceptTerms.href} className="auth-link">{signupData.form.options.acceptTerms.linkText}</a>
              </label>
              {errors.AcceptTerms && <span className="error-message">{errors.AcceptTerms}</span>}
            </div>

            <div className="checkbox-section">
              <label className="simple-checkbox-label">
                <input
                  type="checkbox"
                  name="ReceiveUpdates"
                  checked={formData.ReceiveUpdates}
                  onChange={handleInputChange}
                />
                <span className="simple-checkmark"></span>
                {signupData.form.options.receiveUpdates.label}
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
              {isSubmitting ? signupData.form.submitButton.loadingText : signupData.form.submitButton.text}
            </button>

            <div className="auth-links">
              <p>{signupData.form.links.signin.text} <a href={signupData.form.links.signin.href} className="auth-link">{signupData.form.links.signin.linkText}</a></p>
            </div>
          </form>
        </div>

        <div className="contact-logo">
          <img 
            src={contactImage} 
            alt="Sign up illustration" 
            className="contact-image"
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp
