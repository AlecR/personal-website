import React from 'react';
import { Element } from 'react-scroll';
import SectionTitle from '../SectionTitle';
import TechnologyList from '../TechnologyList';
import SectionWaypoint from '../SectionWaypoint';
import './Experience.css';


const Experience = (props) => (
  <Element
    name='experience'
    className='experience__wrapper'
  >
    <SectionTitle
      title='Experience'
    />
    <div className='experience__list'>
      <Job 
        company='Brandeis University'
        title='Robotics Lab Manager'
        date='August 2018 - Current'
        logo='images/brandeis-logo.png'
        description="Currently working as the lab manager for Brandeis Unviersity robotics courses. As Lab Manager, my responsbilities include ensuring cirriculum is appropriate for students, providing assistance for students, and continuing to work on the major project of Brandeis Robotics, the Campus Rover. The Campus Rover is a robot which will deliver packages autonomously on campus, and the goal of the course each semester is to continually improve this robot. The robot's software has been developed using ROS (Robotics Operating System), and the code is primarily Python. As the Lab Manager, I work to continually improve the project and gain more knowledge in the field of robotics in order to develop new enhancements for the project. Research on the project is heavily focus on autonomous navigation."
        technologies={['ROS', 'Python', 'Linux (Ubuntu)', 'Raspberry Pi', 'Arduino', 'SLAM Algorithm', 'Autonomous Navigation', 'Git / GitHub']}
      />
      <Job 
        company='Lookout'
        title='Engineering Intern'
        date='Summer 2017 & Summer 2018'
        logo='images/lookout-logo.png'
        description='Worked on the iOS team at Lookout for two summers. In my first summer at Lookout, I contributed to an effort to rearchitect the Lookout Personal Security application. As a part of the effort to rearchitect the application, I implmeneted Breach Report, a feature for notifying users when a service they use is breached. As one of the first features added to the rearchitected app, Breach Report served as an example for other features, and my work established standards for how features should be implmeneted in the future. In my second summer at Lookout, I worked once again as part of the iOS team, this time working toward releasing a new major version of the application. This project involved a total redesign, along with new features being added. My main contributions to this project was an overhaul to much of the UI, along with preparing a new feature for production.'
        technologies={['Cocoa Touch', 'Swift', 'Cocoapods', 'Gerrit Code Review', 'JIRA', 'Jenkins', 'Git / GitHub']}
      />
    </div> 
    <SectionWaypoint 
      onScrollToWaypoint={() => props.onScrollToWaypoint(2)}
    />   
  </Element>
);

const Job = props => (
  <div className='job__wrapper'>
    <div className='job__header'>
      <div className='job__title'>{props.title}</div>
      <div className='job__date'>{props.date}</div>
    </div>
    <div className='job__company-wrapper'>
      <img 
        className='job__company-logo' 
        alt={props.company}
        src={props.logo} 
      />
      <div className='job__company-name'>{props.company}</div>
    </div>
    <div className='job__description'>{props.description}</div>
    <TechnologyList 
      technologies={props.technologies}
    />
  </div>
)

export default Experience;