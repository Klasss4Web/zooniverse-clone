// import logo from '/logo';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Projects from './pages/Projects'
import ArticlePage from './pages/ArticlePage';
import BuildAProject from './pages/BuildAProject';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import GetInvolvedPage from './pages/GetInvolvedPage';
import RegistrationForm from './components/form';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignIn from './components/signIn';

import  './components/App.css';

const App = () => {
 return (
   <Router>
     <NavBar />
     <div className="App">
       <Switch>
         <Route path="/" component={HomePage} exact />
         <Route path="/sign-in" component={SignIn} />
         <Route path="/about" component={AboutPage} />
         <Route path="/projects" component={Projects} />
         <Route path="/project/:name" component={ArticlePage} />
         <Route path="/get-involved" component={GetInvolvedPage} />
         <Route path="/form" component={RegistrationForm} />
         <Route path="/lab" component={BuildAProject} />
         <Route component={PageNotFound} />
       </Switch>
     </div>
     <Footer />
   </Router>  
 );
}

export default App;
