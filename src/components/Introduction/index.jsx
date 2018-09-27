import React from 'react';
import { Element } from 'react-scroll';
import SectionWaypoint from '../SectionWaypoint';
import './Introduction.css';

const Introduction = (props) => (
  <Element 
    className='introduction__wrapper' 
    name='introduction' 
  >
    <div className='introduction__header'>
      <div className='introduction__header-text-wrapper'>
        <p className='introduction__header-text'>ALEC RODGERS</p>
      </div>
      <div className='introduction__header-image-wrapper'>
        <button 
          className='box-button introduction__header-contact-button'
          onClick = {() => props.onContactClick()}
        >CONTACT</button>
      </div>
    </div>
    <p className='introduction__tag-line'>I'm <b>Alec Rodgers</b> and I'm a student at Brandeis Unviersity studying computer science and graduating in 2020. I have a strong passion for technology and I'm currently most interested in mobile application and full stack web development. </p>
    <div 
      className='introduction__about-me'
      onClick = {() => props.onAboutMeClick()}
    >
      <p>About Me</p>
      <img 
        className='introduction__about-me-image'
        src={'images/down-arrow.png'} 
        alt='Down Arrow' 
      />
    </div>
    <SectionWaypoint 
      onScrollToWaypoint={() => props.onScrollToWaypoint(0)}
    />
  </Element>
);

export default Introduction;