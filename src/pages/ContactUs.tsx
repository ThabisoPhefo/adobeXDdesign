import { useState } from 'react'
import axios from 'axios'


interface FormData {
  FullName: string
  EmailAddress: string
  PhoneNumbers: string[]
  Message: string
  bIncludeAddressDetails: boolean
  AddressDetails?: {
    AddressLine1: string
    AddressLine2: string
    CityTown: string
    StateCounty: string
    Postcode: string
    Country: string
  }
}

interface FormErrors {
  FullName?: string
  EmailAddress?: string
  PhoneNumbers?: string
  Message?: string
  AddressLine1?: string
  CityTown?: string
  Postcode?: string
  Country?: string
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    FullName: '',
    EmailAddress: '',
    PhoneNumbers: [''],
    Message: '',
    bIncludeAddressDetails: false,
    AddressDetails: {
      AddressLine1: '',
      AddressLine2: '',
      CityTown: '',
      StateCounty: '',
      Postcode: '',
      Country: ''
    }
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validation
    if (!formData.FullName.trim()) {
      newErrors.FullName = 'Full name is required'
    }

    if (!formData.EmailAddress.trim()) {
      newErrors.EmailAddress = 'Email address is required'
    } else if (!validateEmail(formData.EmailAddress)) {
      newErrors.EmailAddress = 'Please enter a valid email address'
    }

    if (!formData.PhoneNumbers[0] || !formData.PhoneNumbers[0].trim()) {
      newErrors.PhoneNumbers = 'Phone number is required'
    }

    if (!formData.Message.trim()) {
      newErrors.Message = 'Message is required'
    }

    // Address validation if included
    if (formData.bIncludeAddressDetails && formData.AddressDetails) {
      if (!formData.AddressDetails.AddressLine1.trim()) {
        newErrors.AddressLine1 = 'Address line 1 is required'
      }
      if (!formData.AddressDetails.CityTown.trim()) {
        newErrors.CityTown = 'City/Town is required'
      }
      if (!formData.AddressDetails.Postcode.trim()) {
        newErrors.Postcode = 'Postcode is required'
      }
      if (!formData.AddressDetails.Country.trim()) {
        newErrors.Country = 'Country is required'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else if (name === 'PhoneNumbers') {
      setFormData(prev => ({
        ...prev,
        PhoneNumbers: [value]
      }))
    } else if (name.startsWith('AddressDetails.')) {
      const addressField = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        AddressDetails: {
          ...prev.AddressDetails!,
          [addressField]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
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
      const submitData = {
        ...formData,
        AddressDetails: formData.bIncludeAddressDetails ? formData.AddressDetails : undefined
      }

      const response = await axios.post(
        'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit',
        submitData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your message! We will get back to you soon.')
        // Reset form
        setFormData({
          FullName: '',
          EmailAddress: '',
          PhoneNumbers: [''],
          Message: '',
          bIncludeAddressDetails: false,
          AddressDetails: {
            AddressLine1: '',
            AddressLine2: '',
            CityTown: '',
            StateCounty: '',
            Postcode: '',
            Country: ''
          }
        })
      }
    } catch (error: any) {
      setSubmitStatus('error')
      if (error.response?.data?.message) {
        setSubmitMessage(error.response.data.message)
      } else {
        setSubmitMessage('An error occurred while submitting the form. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-us">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team. We'd love to hear from you.</p>
        </div>
      </div>

      <section className="contact-content">
        <div className="content-container">
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="FullName">Full Name *</label>
                  <input
                    type="text"
                    id="FullName"
                    name="FullName"
                    value={formData.FullName}
                    onChange={handleInputChange}
                    className={errors.FullName ? 'error' : ''}
                  />
                  {errors.FullName && <span className="error-message">{errors.FullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="EmailAddress">Email Address *</label>
                  <input
                    type="email"
                    id="EmailAddress"
                    name="EmailAddress"
                    value={formData.EmailAddress}
                    onChange={handleInputChange}
                    className={errors.EmailAddress ? 'error' : ''}
                  />
                  {errors.EmailAddress && <span className="error-message">{errors.EmailAddress}</span>}
                </div>
              </div>

                              <div className="form-group">
                  <label htmlFor="PhoneNumbers">Phone Number *</label>
                  <input
                    type="tel"
                    id="PhoneNumbers"
                    name="PhoneNumbers"
                    value={formData.PhoneNumbers[0] || ''}
                    onChange={handleInputChange}
                    className={errors.PhoneNumbers ? 'error' : ''}
                  />
                  {errors.PhoneNumbers && <span className="error-message">{errors.PhoneNumbers}</span>}
                </div>

              <div className="form-group">
                <label htmlFor="Message">Message *</label>
                <textarea
                  id="Message"
                  name="Message"
                  rows={5}
                  value={formData.Message}
                  onChange={handleInputChange}
                  className={errors.Message ? 'error' : ''}
                />
                {errors.Message && <span className="error-message">{errors.Message}</span>}
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="bIncludeAddressDetails"
                    checked={formData.bIncludeAddressDetails}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Include address details
                </label>
              </div>

              {formData.bIncludeAddressDetails && (
                <div className="address-section">
                  <h3>Address Details</h3>
                  
                  <div className="form-group">
                    <label htmlFor="AddressLine1">Address Line 1 *</label>
                    <input
                      type="text"
                      id="AddressLine1"
                      name="AddressDetails.AddressLine1"
                      value={formData.AddressDetails?.AddressLine1 || ''}
                      onChange={handleInputChange}
                      className={errors.AddressLine1 ? 'error' : ''}
                    />
                    {errors.AddressLine1 && <span className="error-message">{errors.AddressLine1}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="AddressLine2">Address Line 2</label>
                    <input
                      type="text"
                      id="AddressLine2"
                      name="AddressDetails.AddressLine2"
                      value={formData.AddressDetails?.AddressLine2 || ''}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="CityTown">City/Town *</label>
                      <input
                        type="text"
                        id="CityTown"
                        name="AddressDetails.CityTown"
                        value={formData.AddressDetails?.CityTown || ''}
                        onChange={handleInputChange}
                        className={errors.CityTown ? 'error' : ''}
                      />
                      {errors.CityTown && <span className="error-message">{errors.CityTown}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="StateCounty">State/County</label>
                      <input
                        type="text"
                        id="StateCounty"
                        name="AddressDetails.StateCounty"
                        value={formData.AddressDetails?.StateCounty || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="Postcode">Postcode *</label>
                      <input
                        type="text"
                        id="Postcode"
                        name="AddressDetails.Postcode"
                        value={formData.AddressDetails?.Postcode || ''}
                        onChange={handleInputChange}
                        className={errors.Postcode ? 'error' : ''}
                      />
                      {errors.Postcode && <span className="error-message">{errors.Postcode}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="Country">Country *</label>
                      <input
                        type="text"
                        id="Country"
                        name="AddressDetails.Country"
                        value={formData.AddressDetails?.Country || ''}
                        onChange={handleInputChange}
                        className={errors.Country ? 'error' : ''}
                      />
                      {errors.Country && <span className="error-message">{errors.Country}</span>}
                    </div>
                  </div>
                </div>
              )}

              {submitStatus !== 'idle' && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
