import React, { useState } from 'react'
import './Resources.css'

const Resources = () => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const resources = [
    {
      id: 1,
      category: 'Web Development',
      icon: '💻',
      description: 'Essential tools and frameworks for modern web development',
      items: [
        { name: 'React', url: 'https://react.dev', description: 'A JavaScript library for building user interfaces' },
        { name: 'Vite', url: 'https://vitejs.dev', description: 'Next generation frontend tooling' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Comprehensive web development documentation' },
        { name: 'JavaScript.info', url: 'https://javascript.info', description: 'Modern JavaScript tutorial' },
        { name: 'CSS Tricks', url: 'https://css-tricks.com', description: 'Daily articles about CSS, HTML, JavaScript, web design' },
      ],
    },
    {
      id: 2,
      category: 'Design & UI',
      icon: '🎨',
      description: 'Tools and resources for beautiful design',
      items: [
        { name: 'Figma', url: 'https://figma.com', description: 'Design, prototype, and collaborate' },
        { name: 'Dribbble', url: 'https://dribbble.com', description: 'Community of design professionals' },
        { name: 'Unsplash', url: 'https://unsplash.com', description: 'Free stock photography' },
        { name: 'Google Fonts', url: 'https://fonts.google.com', description: 'Free, open-source fonts' },
        { name: 'ColorHunt', url: 'https://colorhunt.co', description: 'Beautiful color palettes' },
      ],
    },
    {
      id: 3,
      category: 'Learning Platforms',
      icon: '📚',
      description: 'Online courses and tutorials',
      items: [
        { name: 'Udemy', url: 'https://udemy.com', description: 'Online courses on any topic' },
        { name: 'Coursera', url: 'https://coursera.org', description: 'Learn from top universities and companies' },
        { name: 'freeCodeCamp', url: 'https://freecodecamp.org', description: 'Free coding education' },
        { name: 'Codecademy', url: 'https://codecademy.com', description: 'Learn coding by doing' },
        { name: 'Pluralsight', url: 'https://pluralsight.com', description: 'Technology learning platform' },
      ],
    },
    {
      id: 4,
      category: 'Development Tools',
      icon: '🛠️',
      description: 'Essential tools for developers',
      items: [
        { name: 'VS Code', url: 'https://code.visualstudio.com', description: 'Lightweight code editor' },
        { name: 'GitHub', url: 'https://github.com', description: 'Version control and collaboration' },
        { name: 'npm', url: 'https://npmjs.com', description: 'JavaScript package manager' },
        { name: 'Postman', url: 'https://postman.com', description: 'API testing platform' },
        { name: 'Vercel', url: 'https://vercel.com', description: 'Deploy web applications' },
      ],
    },
    {
      id: 5,
      category: 'Content & Blogging',
      icon: '📝',
      description: 'Tools for content creators and bloggers',
      items: [
        { name: 'Medium', url: 'https://medium.com', description: 'Publish and share your stories' },
        { name: 'Dev.to', url: 'https://dev.to', description: 'Community for developers' },
        { name: 'Hashnode', url: 'https://hashnode.com', description: 'Blogging platform for developers' },
        { name: 'Grammarly', url: 'https://grammarly.com', description: 'Writing assistant' },
        { name: 'Canva', url: 'https://canva.com', description: 'Create graphics and designs' },
      ],
    },
    {
      id: 6,
      category: 'APIs & Data',
      icon: '🔌',
      description: 'APIs and data sources for projects',
      items: [
        { name: 'NewsAPI', url: 'https://newsapi.org', description: 'Get news from around the web' },
        { name: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com', description: 'Fake online REST API' },
        { name: 'RapidAPI', url: 'https://rapidapi.com', description: 'Discover and connect to thousands of APIs' },
        { name: 'OpenWeather', url: 'https://openweathermap.org', description: 'Weather API' },
        { name: 'GitHub API', url: 'https://docs.github.com/en/rest', description: 'Build with GitHub' },
      ],
    },
  ]

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id)
  }

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <h1>Helpful Resources</h1>
        <p>A curated collection of tools, platforms, and resources to help you learn and build amazing things</p>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="resources-container">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-category">
              <div 
                className="category-header"
                onClick={() => toggleCategory(resource.id)}
              >
                <div className="header-content">
                  <span className="icon">{resource.icon}</span>
                  <div>
                    <h2>{resource.category}</h2>
                    <p className="category-desc">{resource.description}</p>
                  </div>
                </div>
                <span className={`toggle-icon ${expandedCategory === resource.id ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>

              {expandedCategory === resource.id && (
                <div className="category-items">
                  {resource.items.map((item, index) => (
                    <a 
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-item"
                    >
                      <div className="item-content">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                      <span className="external-icon">→</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations-section">
        <h2>My Top Recommendations</h2>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <h3>📖 Start with Fundamentals</h3>
            <p>Begin with MDN Web Docs and JavaScript.info to build a strong foundation in web technologies.</p>
          </div>

          <div className="recommendation-card">
            <h3>💡 Practice Regularly</h3>
            <p>Use platforms like freeCodeCamp and Codecademy to practice coding every day through interactive lessons.</p>
          </div>

          <div className="recommendation-card">
            <h3>🎨 Learn Design Principles</h3>
            <p>Study design on Dribbble and use Figma to practice creating beautiful, user-friendly interfaces.</p>
          </div>

          <div className="recommendation-card">
            <h3>🚀 Build Projects</h3>
            <p>Create real projects using React and Vite. Deploy them on Vercel and share your work on GitHub.</p>
          </div>

          <div className="recommendation-card">
            <h3>📚 Keep Learning</h3>
            <p>Enroll in courses on Udemy and Coursera to stay updated with the latest technologies and best practices.</p>
          </div>

          <div className="recommendation-card">
            <h3>🤝 Join Communities</h3>
            <p>Participate in communities like Dev.to and Hashnode to network, share knowledge, and grow together.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Pick a resource from the list above and start your learning journey today!</p>
        <a href="/" className="cta-btn">Back to Home</a>
      </section>
    </div>
  )
}

export default Resources
