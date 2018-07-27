import React from 'react';
import './SectionWaypoint.css';
import Waypoint from 'react-waypoint';

const SectionWaypoint = props => (
  <div className='section-waypoint__wrapper'>
    <div className='section-waypoint__waypoint'>
      <Waypoint
        onEnter={() => props.onScrollToWaypoint()}
      />
    </div>
  </div>
);

export default SectionWaypoint;