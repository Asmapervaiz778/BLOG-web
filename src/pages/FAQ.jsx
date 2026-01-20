import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null)

  const faqs = [
    {
      id: 1,
      category: 'Getting Started',
      questions: [
        {
          id: 'gs-1',
          question: 'How do I start reading blogs on this site?',
          answer: 'Simply navigate to the Home page to see the latest blog posts. You can click on any blog card to read the full article. Use the search bar in the navigation to find specific topics.',
        },
        {
          id: 'gs-2',
          question: 'How can I filter posts by category?',
          answer: 'Go to the Categories page from the navigation menu. Here you\'ll see different author categories. Click the "View Posts" button to see all posts from that author.',
        },
        {
          id: 'gs-3',
          question: 'Is there a mobile app available?',
          answer: 'Currently, our blog is fully responsive and works great on mobile browsers. We are planning to launch dedicated mobile apps in the near future.',
        },
      ],
    },
    {
      id: 2,
      category: 'Account & Preferences',
      questions: [
        {
          id: 'ap-1',
          question: 'Do I need to create an account to read blogs?',
          answer: 'No, you can browse and read all blog posts without creating an account. An account feature will be available soon for saving favorites and personalizing your experience.',
        },
        {
          id: 'ap-2',
          question: 'Can I save my favorite articles?',
          answer: 'This feature is coming soon! We\'re working on a favorites system that will allow you to save and organize your preferred articles.',
        },
        {
          id: 'ap-3',
          question: 'How do I change my reading preferences?',
          answer: 'Visit your profile settings (coming soon) to customize font size, theme (dark/light mode), and notification preferences.',
        },
      ],
    },
    {
      id: 3,
      category: 'Content & Updates',
      questions: [
        {
          id: 'cu-1',
          question: 'How often are new blogs posted?',
          answer: 'We update our blog with fresh content daily! New articles from TechCrunch are featured regularly. Check back often or use the search function to find the latest posts.',
        },
        {
          id: 'cu-2',
          question: 'Can I submit my own blog posts?',
          answer: 'We currently curate content from top sources like TechCrunch. Contact us through the Contact page if you\'re interested in contributing or partnering with us.',
        },
        {
          id: 'cu-3',
          question: 'How can I get notifications about new posts?',
          answer: 'Subscribe to our newsletter on the Contact page to receive updates about new blog posts in your email inbox.',
        },
      ],
    },
    {
      id: 4,
      category: 'Technical Questions',
      questions: [
        {
          id: 'tq-1',
          question: 'Which browsers are supported?',
          answer: 'Our site works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated to the latest version.',
        },
        {
          id: 'tq-2',
          question: 'Why are images not loading?',
          answer: 'If images aren\'t loading, try refreshing the page or clearing your browser cache. If the problem persists, check your internet connection or contact us.',
        },
        {
          id: 'tq-3',
          question: 'Is the site mobile-friendly?',
          answer: 'Yes! Our website is fully responsive and optimized for all devices including smartphones, tablets, and desktops.',
        },
      ],
    },
    {
      id: 5,
      category: 'Support & Contact',
      questions: [
        {
          id: 'sc-1',
          question: 'How do I report a problem or bug?',
          answer: 'Please use the Contact page to report any issues. Include details about the problem, your browser, and device. Our team will investigate and get back to you shortly.',
        },
        {
          id: 'sc-2',
          question: 'How can I contact the support team?',
          answer: 'You can reach us through the Contact page with your name, email, and message. We aim to respond within 24-48 hours.',
        },
        {
          id: 'sc-3',
          question: 'Where can I find social media links?',
          answer: 'Follow us on social media for the latest updates and news. Links to our social profiles are available on the Contact page.',
        },
      ],
    },
    {
      id: 6,
      category: 'Learning Resources',
      questions: [
        {
          id: 'lr-1',
          question: 'Are there recommended resources for learning web development?',
          answer: 'Yes! Visit our Resources page to find a curated list of learning platforms, tools, and communities to help you learn web development and stay updated.',
        },
        {
          id: 'lr-2',
          question: 'What topics does this blog cover?',
          answer: 'We focus on technology news, web development trends, and tech industry updates. Our content is sourced from leading tech publications.',
        },
        {
          id: 'lr-3',
          question: 'Can I request specific topics to be covered?',
          answer: 'Absolutely! Send us your topic suggestions through the Contact page. We\'d love to hear what you\'re interested in learning about.',
        },
      ],
    },
  ]

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our blog and services</p>
      </section>

      {/* Search Section */}
      <section className="faq-search-section">
        <div className="faq-search-container">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="faq-search-input"
          />
          <button className="faq-search-btn">Search</button>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section">
        <div className="faq-container">
          {faqs.map((category) => (
            <div key={category.id} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-accordion">
                {category.questions.map((faq) => (
                  <div
                    key={faq.id}
                    className={`faq-item ${expandedId === faq.id ? 'active' : ''}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleAccordion(faq.id)}
                    >
                      <span className="question-text">{faq.question}</span>
                      <span className="faq-toggle">+</span>
                    </button>
                    {expandedId === faq.id && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="still-questions-section">
        <h2>Still Have Questions?</h2>
        <p>Can't find the answer you're looking for? Please contact our support team.</p>
        <a href="/contact" className="contact-btn">Contact Us</a>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <h2>Quick Links</h2>
        <div className="quick-links-grid">
          <a href="/" className="quick-link">
            <span className="icon">🏠</span>
            <span>Home</span>
          </a>
          <a href="/categories" className="quick-link">
            <span className="icon">📂</span>
            <span>Categories</span>
          </a>
          <a href="/resources" className="quick-link">
            <span className="icon">📚</span>
            <span>Resources</span>
          </a>
          <a href="/about" className="quick-link">
            <span className="icon">ℹ️</span>
            <span>About</span>
          </a>
          <a href="/contact" className="quick-link">
            <span className="icon">✉️</span>
            <span>Contact</span>
          </a>
          <a href="/" className="quick-link">
            <span className="icon">📝</span>
            <span>Blog</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default FAQ
