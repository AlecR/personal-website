import React from 'react';
import { Element } from 'react-scroll';
import SectionWaypoint from '../SectionWaypoint';
import SectionTitle from '../SectionTitle';
import './Projects.css';


// TODO: Use the Project component once mirror build is complete and I have images

// const ProjectContentOne = props => (
//   <div>
//     <div>Independently developed and built a Smart Mirror.  The mirror is made up of modules for a variety of purposes, and the layout / modules displayed are completely configurable. Using an infrared touch frame to make the mirror touch screen, everything on the mirror can be moved and interacted with. Some of the modules include: </div>
//     <ul>
//       <li>Weather</li>
//       <li>Time / Calendar</li>
//       <li>Smart Home Controls</li>
//       <li>To Do (connected with iPhone via Todoist)</li>
//       <li>Strava</li>
//       <li>HackerNews top stories</li>
//     </ul>
//   </div>
// )

// const ProjectContentTwo = props => (
//   <div className='project-content-two'>
//     <div className='project__technology-content-title'>Technologies Used</div>
//     <ProjectTechnologiesList 
//       title='Front End'
//       technologies={['React.js', 'React Router', 'Electron', 'HTML', 'CSS']}
//     />
//     <ProjectTechnologiesList 
//       title='Back End'
//       technologies={['Node.js', 'Express.js', 'Python', 'Bash']}
//     />
//     <ProjectTechnologiesList 
//       title='Tools'
//       technologies={['Postman', 'npm', 'VS Code', 'ngrok', 'Chrome Dev Tools', 'Git (GitHub)']}
//     />
//   </div> 
// )

// const Project = props => (
//   <div className='project'>
//     <p className='project__title'>{props.title}</p>
//     <p className='project__subtitle'>{props.subtitle}</p>
//     {
//       props.content.map((content, index) => (
//           index % 2 === 0 ? (
//             <div className='project__detail'>
//               <div className='project__detail-image-wrapper'>
//                 <img 
//                   className='project__detail-image'
//                   src={content.image} 
//                   alt={`${props.title} image`} 
//                 />
//               </div>
//               <div className='project__detail-content'>
//                 {content.text}
//               </div>
//             </div>
//           ) : (
//             <div className='project__detail'>
//               <div className='project__detail-content'>
//                 {content.text}
//               </div>
//               <div className='project__detail-image-wrapper project__detail-image-wrapper--reverse'>
//                 <img 
//                   className='project__detail-image'
//                   src={content.image} 
//                   alt={`${props.title} image`} 
//                 />
//               </div>
//             </div>
//           )
//       ))
//     }  
//   </div>
// )

// const ProjectTechnologiesList = props => (
//   <div>
//     <div className='project-technologies-list__title'>{props.title}</div>
//     <div className='project-technologies-list__list'>
//       {
//         props.technologies.map(technology => (
//           <div className='project-technologies-list__list-item'>{technology}</div>
//         ))
//       }
//     </div>
//   </div>
// )

const MiniProject = props => (
  <div className='mini-project'>
    <p className='mini-project__title'>{props.title}</p>
    <p className='mini-project__subtitle'>{props.subtitle}</p>
    <MiniProjectTechnologiesList 
      technologies={props.technologies}
    />
  </div>
)

const MiniProjectTechnologiesList = props => (
  <div>
    <div className='mini-project-technologies-list__list'>
      {
        props.technologies.map(technology => (
          <div className='mini-project-technologies-list__list-item'>{technology}</div>
        ))
      }
    </div>
  </div>
)

const Projects = props => (
  <Element 
    name='projects' 
    className='projects__wrapper'
  >
    <SectionTitle
      title='Projects'
    />
    <div className='projects__grid'>
      <MiniProject 
        title='Smart Mirror'
        subtitle='Touch screen smart mirror providing weather, calendar, smart home controls, and more. Developed using React on the front end, and a Node server on the backend. Designed with an emphasis on a decentralized architecture, allowing for new modules to be easily created and plugged into the system.'
        technologies={['React.js', 'Node.js', 'Express.js', 'Python', 'React Router', 'Electron', 'HTML', 'CSS', 'Bash', 'Postman', 'npm', 'VS Code', 'ngrok', 'Chrome Dev Tools', 'Git (GitHub)']}
      />
      <MiniProject 
        title='Lookout'
        subtitle='Worked as an Engineering Intern at Lookout for two summers (2017 and 2018) as a member of the iOS team. During my first summer at Lookout, I worked on implementing a new feature, Breach Report, into a newly architected version of the application. In my second summer, I worked on yet another new version of the application, focusing on integrating new features and completely updaying the user interface.'
        technologies={['Cocoa Touch', 'Swift', 'Cocoapods', 'Gerrit Code Review', 'JIRA', 'Jenkins', 'Git / GitHub']}
      />
      <MiniProject 
        title='Drop The Ball'
        subtitle='iOS application built with SpriteKit. Drop the Ball was built with SpriteKit and featured 100 levels. The game was designed to be simple, with the objective being to drop a ball into a moving cup at the bottom of the screen, getting through a variety of different obstacles.'
        technologies={['Cocoa Touch', 'Swift', 'Spritekit', 'Cocoapods']}
      />
      <MiniProject 
        title='WExchange'
        subtitle='Web applcation built as part of a team of 4 for my Capstone Project for Software Engineering course. The premise of the website was a place where content creators can go to advertise their work and find clients to complete work for.'
        technologies={['Ruby on Rails', 'Elasticsearch', 'Pusher', 'Paperclip + AWS']}
      />
      <MiniProject 
        title='Campus Rover'
        subtitle='A robot built for my Autonomous Robotics class. The Campus Rover was designed to map and autonomously navigate around campus. The project was split up amongst the class, and my primary foucs was autonomous navigation and remote operation of the robot. As a member of the team, I developed a web application which allowed users to connect to the server running on the robot and remotely control it, either by providing a waypoint and autonomously navigating or manually driving.'
        technologies={['Robotics Operating System (ROS)', 'Python', 'Javascript', 'React', 'SLAM Algorithim']}
      />
    </div>
    <SectionWaypoint 
      onScrollToWaypoint={() => props.onScrollToWaypoint(2)}
    />
  </Element>
);

export default Projects;