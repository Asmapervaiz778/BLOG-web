import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './BlogDetail.css'
import { blogService } from '../services/api'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true)
        const blogData = await blogService.getBlogById(parseInt(id))
        if (blogData) {
          setBlog(blogData)
        } else {
          setError('Blog not found')
        }
      } catch (err) {
        console.error('Error fetching blog:', err)
        setError('Failed to load blog details')
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (loading) {
    return (
      <div className="blog-detail">
        <p>Loading...</p>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="blog-detail">
        <p className="error">{error || 'Blog not found'}</p>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="blog-detail">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to Home
      </button>

      {blog.image && (
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      )}

      <article className="blog-article">
        <h1>{blog.title}</h1>
        
        <div className="blog-meta">
          <span className="author">By {blog.author || 'Unknown'}</span>
          <span className="source">{blog.source}</span>
          {blog.publishedAt && (
            <span className="date">
              {new Date(blog.publishedAt).toLocaleDateString()}
            </span>
          )}
        </div>

        <div className="blog-body">
          <p>{blog.body}</p>
        </div>

        <div className="blog-footer">
          <button onClick={() => navigate('/')} className="back-btn">
            Back to Home
          </button>
        </div>
      </article>
    </div>
  )
}

export default BlogDetail
