import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CategoryPosts.css'
import { blogService } from '../services/api'
import { storageService } from '../services/storage'

const CategoryPosts = () => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        
        // Fetch all blogs/posts
        const allPosts = await blogService.getAllBlogs()
        
        // Filter posts by userId
        const userPosts = allPosts.filter(post => post.userId === parseInt(userId))
        
        setPosts(userPosts)
        
        // Get user name if available
        if (userPosts.length > 0) {
          setUserName(userPosts[0].author || `Author ${userId}`)
        }
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError('Failed to load posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [userId])

  if (loading) {
    return (
      <div className="category-posts">
        <p>Loading posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="category-posts">
        <p className="error">{error}</p>
        <button onClick={() => navigate('/categories')} className="back-btn">
          Back to Categories
        </button>
      </div>
    )
  }

  return (
    <div className="category-posts">
      <button onClick={() => navigate('/categories')} className="back-btn">
        ← Back to Categories
      </button>

      <div className="posts-header">
        <h1>Posts by {userName}</h1>
        <p className="post-count">{posts.length} post{posts.length !== 1 ? 's' : ''}</p>
      </div>

      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No posts found for this author</p>
          <button onClick={() => navigate('/categories')} className="back-btn">
            Back to Categories
          </button>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="post-card"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {post.image && (
                <img src={post.image} alt={post.title} className="post-image" />
              )}
              <div className="post-content">
                <h3>{post.title}</h3>
                <p className="post-body">{post.body?.substring(0, 100)}...</p>
                <div className="post-meta">
                  <span className="author">{post.author}</span>
                  {post.publishedAt && (
                    <span className="date">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <button className="read-more">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryPosts
