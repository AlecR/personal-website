import React, { Component } from 'react';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProgressBar from './components/ProgressBar';
import { scroller } from 'react-scroll';

import './App.css';

class App extends Component {

  state = {
    activeStep: 0
  }

  scrollToStep = (name) => {
    scroller.scrollTo(name, {
      duration: 1000,
      smooth: true,
    });
  }

  setActiveStep = (activeStep) => {
    this.setState({ activeStep });
  }
  
  handleAboutMeClick = () => {
    this.scrollToStep('skills');
  }

  handleContactClick = () => {
    this.scrollToStep('contact');
  }

  render() {
    return (
      <div className='app'>
        <ProgressBar
          steps={['Introduction', 'Skills', 'Experience', 'Projects', 'Contact']}
          activeStep={this.state.activeStep}
          onStepClick={this.scrollToStep}
        />
        <Introduction
          onAboutMeClick={this.handleAboutMeClick}
          onContactClick={this.handleContactClick}
          onScrollToWaypoint={this.setActiveStep}
        />
        <Skills  
          onScrollToWaypoint={this.setActiveStep}
        />
        <Experience
          onScrollToWaypoint={this.setActiveStep}
        />
        <Projects 
          onScrollToWaypoint={this.setActiveStep}
        />
        <Contact 
          onScrollToWaypoint={this.setActiveStep}
        />
      </div>
    )
  }
}

export default App;
