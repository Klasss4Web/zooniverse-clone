import React from 'react';
import articles from './article-contents';
import ArticlesList from '../components/ArticlesList';

import Container from 'react-bootstrap/Container';

const ArticleListPage = (props) => (
  <Container>
    <h5>{props.title}</h5>
    <ArticlesList articles={articles}/>
  </Container>
)

export default ArticleListPage;