// src/components/News.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '86e60d2a844248b28ae13f088ca4293c'; // Replace with your News API key
  const API_URL = `https://newsapi.org/v2/everything?q=health&sortBy=publishedAt&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        // Get the latest article
        if (response.data.articles.length > 0) {
          setArticle(response.data.articles[0]);
        } else {
          setError('No articles found');
        }
      } catch (err) {
        setError('Failed to fetch news articles');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!article) {
    return <p className="text-center text-gray-500">No latest news available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Health News</h2>
      <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-semibold text-blue-600 hover:underline">{article.title}</h3>
          <p className="text-gray-700 mt-2">{article.description}</p>
          <span className="text-sm text-gray-500 block mt-2">{new Date(article.publishedAt).toLocaleDateString()}</span>
        </a>
      </div>
    </div>
  );
};

export default News;
