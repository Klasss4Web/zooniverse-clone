import React from 'react';

import { Link } from 'react-router-dom';
import dailyZooniverseDb from '../pages/daily-zooniverse'

// import myImage from '../images/zooniverse-logo.png';

const DailyZooniverse = () => 
{
return(
  <>
    {dailyZooniverseDb.map((article, key) => 
      <div key = {key} className="pl-4">     
        <div className="card mb-3 py-4 px-4" style={{maxwidth: 540, height: 370}}>
            <h6>{article.updated}</h6>
            <h4>{article.title}</h4>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={article.image} className="card-img pt-3 img-fluid" alt="collection of hands" style={{height: "250px"}} />
                {/* <img src={article?.imgTag} className="card-img mt-n5" alt="Zooniverse-log" /> */}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">{article.content[0].substr(0, 550)}</p>
                  <Link to={`/project/${article.name}`}><span className="click-link">Read More...</span></Link>
                </div>
              </div>
            </div>
          </div>         
          <hr className="my-4" />
        </div>
      )}
  </>
)
}
export default DailyZooniverse;