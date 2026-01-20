import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Categories.css'
import { blogService } from '../services/api'
import { storageService } from '../services/storage'

const Categories = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        
        // Check localStorage first
        const cachedUsers = storageService.getItem('users')
        if (cachedUsers && cachedUsers.length > 0) {
          setUsers(cachedUsers)
          setLoading(false)
          return
        }

        // Fetch from API
        const apiUsers = await blogService.getUsers()
        const userList = apiUsers.slice(0, 8).map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company?.name || 'N/A',
        }))

        storageService.setItem('users', userList)
        setUsers(userList)
      } catch (err) {
        console.error('Error fetching users:', err)
        setError('Failed to load categories.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <section className="categories-section"><p>Loading categories...</p></section>
  }

  if (error) {
    return <section className="categories-section"><p>{error}</p></section>
  }

  return (
    <section className="categories-section">
      <h2>Categories</h2>
      <div className="categories-grid">
        {users.map((user) => (
          <div key={user.id} className="category-card">
            <h3>{user.name}</h3>
            <p className="email">{user.email}</p>
            <p className="company">{user.company}</p>
            <button 
              className="view-btn"
              onClick={() => navigate(`/category/${user.id}/posts`)}
            >
              View Posts
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
   

export default Categories;
