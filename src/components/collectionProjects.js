import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import imgDolphin from '../images/dolphin.jpeg';
import imgDarkEnergy from '../images/dark-energy.jpeg';
import imgNestCam from '../images/nestcams.png';
import imgClimate from '../images/climate-history.jpeg';
import imgHistory from '../images/changes.png';
import imgLiterature from '../images/etch-cell.jpeg';
import imgFoot from '../images/dolphin-chat.png';
import imgLanguage from '../images/bridge-star.jpeg';
import imgBees from '../images/bees.png';
import imgAssasin from '../images/asasin.jpeg';
import imgAourora from '../images/aourora-zoo.jpeg';
import imgBorder from '../images/beyond-borders.jpeg';
import imgIberian from '../images/imgIberian.jpeg';
import imgOldShip from '../images/old-ship.jpeg';
import imgTorch from '../images/torch.jpeg';
import imgTides from '../images/uk-tides.jpeg';
import imgArchi from '../images/world-archi.jpeg';
import imgScience from '../images/science-scribble.png';
import imgShot from '../images/screen-shot.png';

const CollectionProjects = () => {
  return (
    <Container className="py-5">
      <CardGroup className="cardGroup_collection">
        <Card className="mx-2 collection-cards cards">
          <Card.Img variant="top" src={imgScience} className="cards_img"/>              
          <Card.Text className="card_text py-2">
            <h4 className="h6">BELUGA BITS</h4>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgLanguage} className="cards_img"/>              
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
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgBees} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">CLIMATE HISTORY AUSTRALIA</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
      </CardGroup>
      <CardGroup className="cardGroup_collection py-3">
        <Card className="mx-2 collection-cards cards" style={{width: "18rem"}}>
          <Card.Img variant="top" src={imgShot} className="cards_img"/>              
          <Card.Text className="card_text py-2">
            <h4 className="h6">BELUGA BITS</h4>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgAssasin} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">DARK ENERGY</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgTorch} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">NESTCAMS</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgFoot} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">CLIMATE HISTORY AUSTRALIA</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgHistory} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">CLIMATE HISTORY AUSTRALIA</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
      </CardGroup>
      <CardGroup className="cardGroup_collection pb-3">
        <Card className="mx-2 collection-cards cards" style={{width: "18rem"}}>
          <Card.Img variant="top" src={imgLiterature} className="cards_img"/>              
          <Card.Text className="card_text py-2">
            <h4 className="h6">BELUGA BITS</h4>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgAourora} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">DARK ENERGY</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgTides} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">NESTCAMS</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgArchi} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">CLIMATE HISTORY AUSTRALIA</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgBorder} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">CLIMATE HISTORY AUSTRALIA</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
      </CardGroup>
      <CardGroup className="cardGroup_collection pb-5">
        <Card className="mx-2 collection-cards cards" style={{width: "18rem"}}>
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
          <Card.Img variant="top" src={imgIberian} className="cards_img"/>              
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
        <Card className="mx-2 cards">
          <Card.Img variant="top" src={imgOldShip} className="cards_img"/>              
            <Card.Text className="card_text py-2">
              <h4 className="h6">CLIMATE HISTORY AUSTRALIA</h4>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
        </Card>
      </CardGroup>
    </Container>
    
  )
}

export default CollectionProjects;