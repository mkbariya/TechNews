

import React, { useEffect, useState } from "react";
import "./App.css";
import ArticleCard from "./ArticleCard";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  let errorMessage = null; // Local variable for error message

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=Apple&%27from=2023-11-%2028&%27sortBy=popularity&apiKey=8328788601a8484eae8b847fd080f8a4"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Filter out articles with missing data
      const filteredArticles = data.articles.filter(
        (article) => article.title && article.description && article.urlToImage
      );
      setArticles(filteredArticles);
      setLoading(false);
    } catch (err) {
      errorMessage = err.message;
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <h1>News Articles</h1>
      {loading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      <div className="article-list">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default App;
