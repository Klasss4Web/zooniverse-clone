// import Container from 'react-bootstrap/Container';

import Banner from '../components/banner';
import FeaturedProjects from '../components/featuredProjects';
import CollectionProjects from '../components/collectionProjects';
import SubjectRows from '../components/subjectsProj';

const Projects = () => 
(
  <div className="projects-page_body">
    <Banner title="Projects" active="Active" paused="Paused" finished="Finished"/>
      <div className="projects_welcome mt-n4">
        <h2 className="h6 py-4">WELCOME! WE'RE SO GLAD YOU ARE HERE</h2>
        <div className="project-desc">
          <p>Thank you for your interest in helping real research. Here we've gathered a few projects we could really use your help on right now. For more options just scroll down to browse all of our active projects</p>
          <p>Make sure to also check out Talk where you can chat to other like-minded volunteers.</p>
        </div>
        <FeaturedProjects />
        <p className="py-4">SCROLL DOWN FOR EVEN MORE</p>
      </div>
      <SubjectRows />
      <CollectionProjects /> 
      <div>
      </div> 
  </div>
)

export default Projects;
