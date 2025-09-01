import { useState } from 'react'
import axios from 'axios'
import LazyImage from '../components/LazyImage'
import contactImage from '../assets/resources/Img_Contact.png'
import contactData from '../data/contact.json'

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

  const addPhoneNumber = () => {
    setFormData(prev => ({
      ...prev,
      PhoneNumbers: [...prev.PhoneNumbers, '']
    }))
  }

  const updatePhoneNumber = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      PhoneNumbers: prev.PhoneNumbers.map((phone, i) => i === index ? value : phone)
    }))
  }

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

    // Phone numbers are optional, no validation needed

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
        setSubmitMessage(contactData.form.messages.success)
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
        setSubmitMessage(contactData.form.messages.error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-us-new">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <div className="contact-header">
            <h1>Contact us</h1>
            <p>Fusce efficitur eu purus ac posuere nean imperdiet risus dolor, nec accumsan velit ornare sit amet.</p>
          </div>

          <form onSubmit={handleSubmit} className="simple-contact-form">
            <div className="form-row-simple">
              <div className="form-group-simple">
                <label htmlFor="FullName">Full name</label>
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

              <div className="form-group-simple">
                <label htmlFor="EmailAddress">Email address</label>
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

            <div className="phone-section">
              {formData.PhoneNumbers.map((phone, index) => (
                <div key={index} className="form-group-simple">
                  <label htmlFor={`phone-${index}`}>
                    Phone number {index + 1 < 10 ? `0${index + 1}` : index + 1} - optional
                  </label>
                  <input
                    type="tel"
                    id={`phone-${index}`}
                    value={phone}
                    onChange={(e) => updatePhoneNumber(index, e.target.value)}
                  />
                </div>
              ))}
              
              <button 
                type="button" 
                className="add-phone-btn"
                onClick={addPhoneNumber}
              >
                Add new phone number
              </button>
            </div>

            <div className="form-group-simple message-group">
              <div className="message-header">
                <label htmlFor="Message">Message</label>
                <span className="char-limit">Maximum text length is 1000 characters</span>
              </div>
              <textarea
                id="Message"
                name="Message"
                placeholder="Type your text here"
                maxLength={1000}
                value={formData.Message}
                onChange={handleInputChange}
                className={errors.Message ? 'error' : ''}
              />
              {errors.Message && <span className="error-message">{errors.Message}</span>}
            </div>

            <div className="checkbox-section">
              <label className="simple-checkbox-label">
                <input
                  type="checkbox"
                  name="bIncludeAddressDetails"
                  checked={formData.bIncludeAddressDetails}
                  onChange={handleInputChange}
                />
                <span className="simple-checkmark"></span>
                Add address details
              </label>
            </div>

            {formData.bIncludeAddressDetails && (
              <div className="address-fields">
                <div className="form-row-simple">
                  <div className="form-group-simple">
                    <label htmlFor="AddressLine1">Address line 1</label>
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

                  <div className="form-group-simple">
                    <label htmlFor="AddressLine2">Address line 2 - optional</label>
                    <input
                      type="text"
                      id="AddressLine2"
                      name="AddressDetails.AddressLine2"
                      value={formData.AddressDetails?.AddressLine2 || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row-four">
                  <div className="form-group-simple">
                    <label htmlFor="CityTown">City/Town</label>
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

                  <div className="form-group-simple">
                    <label htmlFor="StateCounty">State/County</label>
                    <input
                      type="text"
                      id="StateCounty"
                      name="AddressDetails.StateCounty"
                      value={formData.AddressDetails?.StateCounty || ''}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group-simple">
                    <label htmlFor="Postcode">Postcode</label>
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

                  <div className="form-group-simple">
                    <label htmlFor="Country">Country</label>
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
                {submitStatus === 'success' ? (
                  <div className="success-message-container">
                    <div className="success-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="success-text">
                      <div className="success-title">{submitMessage}</div>
                      <div className="success-subtitle">{contactData.form.messages.successSubtext}</div>
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
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        <div className="contact-logo">
          <LazyImage 
            src={contactImage} 
            alt="Contact illustration" 
            className="contact-image"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
