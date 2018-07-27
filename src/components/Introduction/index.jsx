import React from 'react';
import { Element } from 'react-scroll';
import SectionWaypoint from '../SectionWaypoint';
import './Introduction.css';

const Introduction = (props) => (
  <Element 
    className='introduction-wrapper' 
    name='introduction' 
  >
    <div className='introduction-header'>
      <div className='introduction-header-text-wrapper'>
        <p>ALEC RODGERS</p>
      </div>
      <div className='introduction-header-image-wrapper'>
        <button 
          className='box-button introduction-contact-button'
          onClick = {() => props.onContactClick()}
        >CONTACT</button>
      </div>
    </div>
    <p className='introduction-tag-line'>I'm <b>Alec Rodgers</b> and I'm a student at Brandeis Unviersity studying computer science and graduating in 2020. I have a strong passion for technology and I'm currently most interested in mobile applicaiton and full stack web development. </p>
    <div 
      className='introduction-about-me'
      onClick = {() => props.onAboutMeClick()}
    >
      <p>About Me</p>
      <img src={'images/down-arrow.png'} alt='Down Arrow' />
    </div>
    <SectionWaypoint 
      onScrollToWaypoint={() => props.onScrollToWaypoint(0)}
    />
  </Element>
);

export default Introduction;