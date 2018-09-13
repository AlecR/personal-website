import React from 'react';
import './TechnologyList.css';

const TechnologyList = props => (
  <div className='technology-list__wrapper'>
    {
      props.technologies.map(technology => (
        <div className='technology-list__list-item'>{technology}</div>
      ))
    }
  </div>
)

export default TechnologyList;