import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Home.css";
import { blogService } from "../services/api";
import { storageService } from "../services/storage";

const defaultBlogs = [
  {
    id: 1,
    title: "10 Tips for Effective Remote Work",
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6dv8NJ3Tovk_iYL0QghIdMQNFwPKFxj__A&s",
    description: "Learn how to stay productive and motivated while working from home.",
    author: "Asma",
    date: "Jan 15, 2026",
  },
  {
    id: 2,
    title: "React Basics: A Beginner's Guide",
    Image:"data:image/jpeg;base64,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XzkvhEokbDipQ8m33Z0rXEsm6CXAC+XFBrBtuo+6fced/tQ7FzOGO2LFiviw49+f4luab7RNqRxiJtY/CAAC5kTngDK2NzC49pJPFcsiC0khcS5xLnOJc5ziS5zibkknMkkk3KqiICIiAiIgIiICIiDIJVHPVXPVF0yz9GJiklQiLm2IiICIiAiIgLO2HtI0tRFUNaHGJ4eGkkAkdBI3LBRBajkdE5j2Gzo3Mcx2Vw5hDmu7iAVutocoGyMlbHSxwuqCDUPY6R2OzxJhY15IhYXgOLRfcBewstGiDe0vKaRkccBbihbBNTviL3YZGzSyS4yPyva57SHDP2B1rQubcW4WUog6La/KgTNmw0rI5KlsLJ5OckdibCYyyzDZrTeJmdid9rXusWfa8UkEcUlKHSQxOijm56QEAySSAmMey4h0h371p0QbrZW3hExkcsDZhE98kJ5yWN8TpABIMURBcx2FpLeu+ea8ht2QyVUsgD31cckch3BvOyxyEtHAxgAdRWqRBu9m8ppYPuvNgf2pn3klsrKh4dIx7d2EgW777wFjS7XLjWewP7w3dmfY/uWVOXXmzD2Fa1EG+ruVMs09JUSNaZKXmsxlzropzNjfYZOcXHERvNz0rA23VwzkmOmEDnF5eRLJJiL89z8m2N93WsBEG+25yokqxMJW3Ek/3iO7nHmHEFr2sJ3sc0gFuQu0FUptvNjheyOljZLJTmmkma+QB8ZGEudDfCZS3856fatdaREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==",
    description: "Understand the core concepts of React and start building apps.",
    author: "Asma",
    date: "Jan 10, 2026",
  },
  {
    id: 3,
    title: "UI Design Trends in 2026",
    Image:"data:image/jpeg;base64,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",
    description: "Discover the latest trends in UI/UX design for modern web apps.",
    author: "Asma",
    date: "Jan 5, 2026",
  },
   
];

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        // Check localStorage first
        const cachedBlogs = storageService.getItem("blogs");
        if (cachedBlogs && cachedBlogs.length > 0) {
          setBlogs(cachedBlogs);
          filterBlogs(cachedBlogs, searchQuery);
          setLoading(false);
          return;
        }

        // Fetch from API
        const apiBlogs = await blogService.getAllBlogs();
        const formattedBlogs = apiBlogs.slice(0, 12).map((blog) => ({
          id: blog.id,
          title: blog.title,
          body: blog.body,
          userId: blog.userId,
          author: blog.author,
          image: blog.image,
        }));

        storageService.setItem("blogs", formattedBlogs);
        setBlogs(formattedBlogs);
        filterBlogs(formattedBlogs, searchQuery);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Using default data.");
        setBlogs(defaultBlogs);
        filterBlogs(defaultBlogs, searchQuery);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [searchQuery]);

  const filterBlogs = (blogsToFilter, query) => {
    if (!query) {
      setFilteredBlogs(blogsToFilter);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = blogsToFilter.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerQuery) ||
        blog.body.toLowerCase().includes(lowerQuery) ||
        blog.author.toLowerCase().includes(lowerQuery)
    );
    setFilteredBlogs(filtered);
  };

  if (loading) {
    return (
      <div className="home">
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Blog</h1>

      </section>

      {error && <p className="error">{error}</p>}

      {searchQuery && (
        <div className="search-results-header">
          <p>Search results for: "<strong>{searchQuery}</strong>" ({filteredBlogs.length} found)</p>
        </div>
      )}

      {/* Featured Blogs */}
      <section className="blogs">
        <h2>{searchQuery ? "Search Results" : "Featured Posts"}</h2>
        {filteredBlogs.length === 0 && searchQuery && (
          <p className="no-results">No blogs found matching your search.</p>
        )}
        <div className="blog-list">
          {filteredBlogs.map((blog) => (
            <div 
              key={blog.id} 
              className="blog-card"
              onClick={() => navigate(`/blog/${blog.id}`)}
              style={{ cursor: 'pointer' }}
            >
              {blog.image && (
                <img src={blog.image} alt={blog.title} className="blog-image" />
              )}
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
                <span>By {blog.author || "User " + blog.userId}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category">React</div>
          <div className="category">CSS</div>
          <div className="category">JavaScript</div>
          <div className="category">Design</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Asma's Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
