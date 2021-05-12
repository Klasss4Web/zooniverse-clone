import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import ArticleListPage from './ArticleListPage';
import FeaturedProjects from '../components/featuredProjects';
import DailyZooniverse from '../components/daily-zooniverse-HomePage';
import SignIn from '../components/signIn';
import RegisterForm from '../components/registerForm';

import computer from '../images/home-computer.png';
import imgAppStore from '../images/home-appStore.png';
import imgPlayStore from '../images/home-googlePlay.png';
import imgResearchers from '../images/home-researchers3.jpg';
import imgIberian from '../images/imgIberian.jpeg';


const HomePage = () => 
{
  
  const myVideo = 'https://www.zooniverse.org/assets/home-video.ogv';
  
  return (
    <>
      <Card className="bg-dark text-white hero-video">
        <video src={myVideo} className="card-video" style={{width: '100%'}} autoPlay= "1" loop = "1" />      
        <Card.ImgOverlay className="card-contents">
          <Card.Title className="card-title_banner">WELCOME TO THE ZOONIVERSE</Card.Title>
          <Card.Text className="card-text_banner">
            people-powered research
          </Card.Text>
          <Link className="link-btn outline-links" to="/projects">See All Projects</Link>
        </Card.ImgOverlay>
      </Card> 
      <Container className="pt-4 pb-5">
        <h2 className="h4 py-4 main-font-color">FEATURED PROJECTS</h2>
        <FeaturedProjects />
      </Container>
      <section className="whats-this mt-5">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <h2 className="h5 my-5 main-font-color">WHAT'S THIS?</h2>
              <h3 className="h2 mb-5">Discover, teach and learn</h3>
              <p className="h6">The Zooniverse enables everyone to take part in real cutting edge research in many fields across the sciences, humanities, and more. The Zooniverse creates opportunities for you to unlock answers and contribute to real discoveries.</p>
              <div className="buttons-signUp-register pt-4">
                <SignIn />
                <RegisterForm styleReg={{color: "white", background: "orange", padding: "12px 60px", marginLeft: "-5px"}} />
              </div>
              <p className="h6 pt-5">DO SCIENCE ANYWHER</p>
              <p className="h6 pt-1">Bring the Zooniverse with you. Download the app for iOS and Android devices.</p>
              <div className="play-appStores mt-3">
                <img src={imgAppStore} alt="" className="app-store" />
                <img src={imgPlayStore} alt="" className="play-store ml-3" />
              </div>
            </Col>
            <Col xs={6} md={4} className="pt-5">
                <img src={computer} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="py-5 px-5">
          <div className="zoon-works compact-container">
            <h2 className="h5 pt-5">THE ZOONIVERSE WORKS</h2>
            <p className="zooniverse-works-figure main-font-color">588,751,159</p>
            <h3 className="h2 classification">CLASSIFICATIONS SO FAR BY<br/> 2,302,080 REGISTERED VOLUNTEERS</h3>
            <p className="h6"><strong>A vibrant community.</strong>  Zooniverse gives people of all ages and backgrounds the chance to participate in real research with over 50 active online citizen science projects. Work with 1.6 million registered users around the world to contribute to research projects led by hundreds of researchers.</p>
            <small>SIGN IN OR REGISTER TO GET STARTED</small>
            <div className="buttons-signUp-register pt-4">
              <SignIn />
              <RegisterForm styleReg={{color: "white", background: "orange", padding: "12px 60px", marginLeft: "-5px"}} />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Card className="bg-dark text-white researchers-card my-5">
          <Card.Img className="researchers-photos" src={imgResearchers} alt="Card image" />
          <Card.Img className="researchers-photos" src={imgResearchers} alt="Card image" />
          <Card.Img className="researchers-photos" src={imgResearchers} alt="Card image" />
        </Card>
        <div className="compact-container">
          <h4>REAL RESEARCHERS, REAL RESULTS</h4>
          <p className="h2">Meet the researchers who've created projects for free on the Zooniverse</p>
          <p><strong>Meet the researchers who’ve created projects for free on the Zooniverse</strong> From classifying animals in the Serengeti to discovering new exoplanets using the Kepler space telescope, researchers of all backgrounds have used the free project builder to create engaging, accessible citizen science projects. Our researchers have used the data from their projects to publish over 100 peer-reviewed publications that encourage many fascinating discoveries. Researchers take part in project creation, data analysis, and even communicate directly with volunteers through Zooniverse Talk.</p>
          <Link className="btn-lg btn btn-labs mb-5" to="/lab">Zoniverse Labs</Link>
        </div>
      </section>
      <section className="community-section py-5">
        <div className="zoon-community mb-5">
          <h2 className="h5 main-font-color">DISCOVER, TEACH, LEARN</h2>
          <h3 className="h1">The Zooniverse Community</h3>
          <div className="social-media-icons center">
            <hr className="social-media-icon_line" /><i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-google-plus-g"></i>
            <hr className="social-media-icon_line" />
          </div>
        </div>
        <div className="community-section_container align-left">
            <Row>
              <Col xs={12} md={3} className="vertical-line ml-0">
                <h3 className="h2">News</h3>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={imgIberian} />
                  <Card.Body>
                    <Card.Title className="h6">IBERIAN CAMERA TRAP PROJECT</Card.Title>
                    <hr/>
                    <Card.Text>
                      Help us implement an automated biodiversity monitoring system in the... 
                    </Card.Text>
                    <Link className="link-btn" to="/projects" style={{color: "black"}}>View All Projects</Link>
                  </Card.Body>
                </Card>
                <hr className="my-5" />
                <ArticleListPage title='PROJECT UPDATE' />
                <Button variant="warning" className="btn-lg btn buttons-register btn-labs mb-5">See All Publications</Button>{' '}
              </Col>
              <Col xs={6} md={9} className="">
                <h3 className="h2 ml-4">The Daily Zooniverse</h3>
                  <DailyZooniverse />
              </Col>
            </Row>
        </div>
      </section>
    </>
  );
  
}

export default HomePage;