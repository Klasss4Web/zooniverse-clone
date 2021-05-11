import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import imgDolphin from '../images/dolphin.jpeg';
import imgDarkEnergy from '../images/dark-energy.jpeg';
import imgNestCam from '../images/nestcams.png';
import imgClimate from '../images/climate-history.jpeg';

const FeaturedProjects = () => {
  return (
    <CardGroup>
        <Card className="mx-2 cards">
            <Card.Img variant="top" src={imgDolphin} className="cards_img"/>              
              <Card.Text className="card_text py-2">
                <h4 className="h6">BELUGA BITS</h4>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
          </Card>
          <Card className="mx-2 cards">
            <Card.Img variant="top" src={imgDarkEnergy} className="cards_img"/>              
              <Card.Text className="card_text py-2">
                <h4 className="h6">DARK ENERGY</h4>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
          </Card>
          <Card className="mx-2 cards">
            <Card.Img variant="top" src={imgNestCam} className="cards_img"/>              
              <Card.Text className="card_text py-2">
                <h4 className="h6">NESTCAMS</h4>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
          </Card>
          <Card className="mx-2 cards">
            <Card.Img variant="top" src={imgClimate} className="cards_img"/>              
              <Card.Text className="card_text py-2">
                <h4 className="h6">CLIMATE HISTORY AUSTRALIA</h4>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
          </Card>
    </CardGroup>
  )
}

export default FeaturedProjects;