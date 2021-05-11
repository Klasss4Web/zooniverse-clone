// import React, { useState, useEffect} from 'react';
import articles from './article-contents';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const articleContents = articles.find(article => article.name === name);

  const otherArticles = articles.filter(article => article.name !== name);

  if(!articleContents) return <h1>No article with the name "{name}" in our archive</h1>;
 
  return (
    <div className="container">
      <h1>{articleContents.title}</h1>
      {articleContents.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
      ))}
      <h2>Other Articles</h2>
      <ArticlesList articles={otherArticles} />
    </div>
  );
  
}

export default ArticlePage;