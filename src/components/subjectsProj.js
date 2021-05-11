// import { Card, CardDeck } from 'react-bootstrap';

import imgPhysics from '../images/dark-energy.jpeg';
import imgArts from '../images/climate-history.jpeg';
import imgBiology from '../images/dolphin.jpeg';
import imgGeography from '../images/nestcams.png';
import imgLanguage from '../images/bridge-star.jpeg';
import imgHistory from '../images/changes.png';
import imgLiterature from '../images/etch-cell.jpeg';
import imgFoot from '../images/dolphin-chat.png';
import imgDolphin from '../images/dolphin.jpeg';

const SubjectRows = () => {
  return(
    <>
      <div className="container">
        <div className="row">
        <div className="col mb-4 px-0">
          <div className="card">
            <img src={imgDolphin} class="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4 ml-0 px-0">
          <div className="card">
            <img src={imgGeography} class="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4 ml-0 px-0">
          <div className="card">
            <img src={imgBiology} class="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4 ml-0 px-0">
          <div className="card">
            <img src={imgArts} class="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4 ml-0 px-0">
          <div className="card">
            <img src={imgLanguage} class="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4 ml-0 px-0">
          <div className="card">
            <img src={imgPhysics} class="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4 ml-0 px-0">
          <div className="card">
            <img src={imgLiterature} class="card-img-top" alt="..." />
          </div>
        </div>
          <div className="col mb-4 ml-0 px-0">
            <div className="card">
              <img src={imgHistory} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col mb-4 ml-0 px-0">
            <div className="card">
              <img src={imgFoot} class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        </div>
        <div className="container">
        <div className="row">
          <div classNmae="col-md-4 btn-group">
            <button type="button" className="btn btn-outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              MOST RECENTLY LAUNCHED
            </button>
            <div class="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button">Most Active</button>
              <button className="dropdown-item" type="button">Most Help Needed</button>
              <button className="dropdown-item" type="button">Most Popular</button>
              <button className="dropdown-item" type="button">Most Recently Launched</button>
              <button className="dropdown-item" type="button">Most Recently Updated</button>
            </div>
          </div>
          <div className="col-md-4 btn-group">
            <h6 className="px-5 ml-5">Showing 1-20 of 77 projects found</h6><br />
          </div>
          <div className="col-md-4 btn-group">
            <button type="button" className="btn btn-outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Name:
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <input type="text" className="dropdown-item" placeholder="Type your search here" />
            </div>
          </div>
        </div>
        </div>
        
    </>
    
  )
}

export default SubjectRows;