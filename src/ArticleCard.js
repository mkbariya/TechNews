

import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-image-container">
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="article-image"/>
        )}
      </div>
      <div className="article-content">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-description">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;







    