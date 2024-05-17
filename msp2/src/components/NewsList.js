import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const API_KEY_3 = process.env.REACT_APP_NEWS_API_KEY;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=usa&apiKey=${API_KEY_3}`);
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch articles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;