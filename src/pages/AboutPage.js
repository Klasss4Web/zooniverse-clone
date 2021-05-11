import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/banner.js';


const AboutPage = () => (
    <div className="">
      <Banner title="About" active="about" paused="Publications" finished="Our Team" ackn="Acknowledgements"/>
      <div className="container text-left">
        <div className="content-container">
          <h1>What is the Zoomiverse</h1>
          <p>First of all, everyone who contributes to a Zooniverse project is a volunteer! We have a wonderful, global community who help us do what we do. The main ways of volunteering with us are helping us with classifications on data, being a beta tester on projects we've yet to launch, and being a moderator for a project. For more information about any of these roles, just read below.</p>
          <h2>At the Zooniverse Anybody can be a Researcher</h2>
          <p>Volunteering on a project is the easiest and most common way of volunteering. We always need volunteers to go onto our projects and classify the data contained in them. You can read more about what happens with the classifications and how it helps the scientific community and the progress of science on the <Link to="/about">About</Link> page.</p>
          <p>There is no minimum time requirement needed; do as much or as little as you'd like. To get started as a classifications volunteer, just to go to the <Link to="/projects">Projects</Link> page, have a look through, find one you like the look of, and get stuck in!</p>
          <h2>Volunteers and researchers make real discoveries together</h2>
          <p>Volunteers also help us test projects before they are launched to check that they work properly. This involves working through some classifications on the beta project to check that it works, looking for any bugs, and filling out a questionnaire at the end. This helps us find any issues in the project that need resolving and also assess how suitable the project is for the Zooniverse. You can read some guidelines on what makes a project suitable on the Policies page, under 'Rules and Regulations'.</p>
          <p>To sign up as a beta tester, go to www.zooniverse.org/settings/email and tick the box relating to beta testing. We'll then send you emails when a project is ready to be tested. You can change your email settings any time you want using the same email page and unticking the box.</p>
          <h2>We Accelerate Important Research by Workin together</h2>
          <p>Volunteer moderators have extra permissions in the Talk discussion tool for a particular project. They help moderate discussions and act as a point of contact for the project. Moderators are selected by the project owner. If you're interested in becoming a moderator on a project you're taking part in, go to the project's About page and get in touch with the researcher.</p>
          <h2>Further Information</h2>
          <p>If you'd like any more information on any of these different roles, contact us via the Contact Us page.</p>
        </div>
      </div>
      
    </div>
);

export default AboutPage;