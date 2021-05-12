import React from 'react';

import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => 
{
return(
  <>
    {articles.map((article, key) => 
      <div key = {key}>
        <h6>{article.updated}</h6>
        <h4>{article.title}</h4>
        <Link to={`/project/${article.name}`}><span className="click-link">View Project</span></Link>
        <hr className="my-4" />
      </div>
      )}
  </>
)
}
export default ArticlesList;