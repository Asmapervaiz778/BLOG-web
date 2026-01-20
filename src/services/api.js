import axios from 'axios';

// News API configuration from environment variables
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || '96574c13871048caa5e33dfeb828f9be';
const NEWS_API_BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL || 'https://newsapi.org/v2';

// Create axios instance for News API
const API = axios.create({
  baseURL: NEWS_API_BASE_URL,
  timeout: 10000,
});

// API service methods adapted for News API
export const blogService = {
  // Fetch all articles (adapted from News API articles)
  getAllBlogs: async () => {
    try {
      const response = await API.get('/top-headlines', {
        params: {
          sources: 'techcrunch',
          apiKey: NEWS_API_KEY
        }
      });
      // Transform News API articles to blog format
      const transformedArticles = response.data.articles.map((article, index) => ({
        id: index + 1,
        title: article.title,
        body: article.description || article.content || '',
        userId: 1,
        author: article.author || 'Unknown',
        image: article.urlToImage,
        source: article.source.name,
        publishedAt: article.publishedAt,
      }));
      console.log('Transformed articles:', transformedArticles);
      return transformedArticles;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Fetch single blog by ID (simulated from articles array)
  getBlogById: async (id) => {
    try {
      const articles = await blogService.getAllBlogs();
      return articles.find(article => article.id === id) || null;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  // Fetch comments for a blog (simulated - News API doesn't have comments)
  getBlogComments: async (postId) => {
    try {
      // Return mock comments since News API doesn't support this
      return [
        {
          postId: postId,
          id: 1,
          name: 'Great article!',
          email: 'user@example.com',
          body: 'Very informative and well-written.',
        },
      ];
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  },

  // Fetch users/authors (simulated - generating mock users from article data)
  getUsers: async () => {
    try {
      // Return mock users array
      return [
        { id: 1, name: 'Web DDev', email: 'W3 school.com', company: { name: 'News API' } },
        { id: 2, name: 'REACT', email: 'REACT.COM', company: { name: 'News API' } },
        { id: 3, name: 'Auto Industry', email: 'auto@news.com', company: { name: 'News API' } },
        { id: 4, name: 'Innovation Hub', email: 'innovation@news.com', company: { name: 'News API' } },
        { id: 5, name: 'Future Tech', email: 'future@news.com', company: { name: 'News API' } },
        { id: 6, name: 'Business Today', email: 'business@news.com', company: { name: 'News API' } },
        { id: 7, name: 'Market Watch', email: 'market@news.com', company: { name: 'News API' } },
        { id: 8, name: 'Industry Insights', email: 'insights@news.com', company: { name: 'News API' } },
      ];
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
};

export default API;
