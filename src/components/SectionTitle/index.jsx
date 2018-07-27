import React from 'react';
import './SectionTitle.css';

const SectionTitle = props => (
  <div className='section-title__wrapper'>
    <p className='section-title__text'>{props.title}</p>
  </div>
);

export default SectionTitle;