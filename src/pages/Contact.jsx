import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setLoading(false)

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have a question or want to collaborate? I'd love to hear from you!</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Me a Message</h2>
            
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me more about your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-box">
              <h3>Email</h3>
              <p>
                <a href="mailto:asma@example.com">asma@example.com</a>
              </p>
            </div>

            <div className="info-box">
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </p>
            </div>

            <div className="info-box">
              <h3>Location</h3>
              <p> Pakistan</p>
            </div>

            <div className="info-box social">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">LinkedIn</a>
                <a href="#" className="social-icon">GitHub</a>
                <a href="#" className="social-icon">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h4>How long does it take to respond?</h4>
            <p>I typically respond within 24-48 hours during business days.</p>
          </div>

          <div className="faq-item">
            <h4>Do you offer freelance services?</h4>
            <p>Yes! I'm available for freelance projects. Please include details in your message.</p>
          </div>

          <div className="faq-item">
            <h4>Can I use your blog content?</h4>
            <p>Blog content is available for personal and educational use with attribution.</p>
          </div>

          <div className="faq-item">
            <h4>Are you available for collaborations?</h4>
            <p>Absolutely! I'd love to collaborate on interesting projects. Reach out!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
