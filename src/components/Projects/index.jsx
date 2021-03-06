import React from 'react';
import { Element } from 'react-scroll';
import SectionWaypoint from '../SectionWaypoint';
import SectionTitle from '../SectionTitle';
import TechnologyList from '../TechnologyList';
import './Projects.css';

const MiniProject = props => (
  <div className='mini-project'>
    <div className='mini-project__header'>
      <p className='mini-project__title'>{props.title}</p>
      <div className='mini-project__links'>
        {props.links.map(link => (
          <a 
            className='mini-project__link'
            href={link.url} 
            target="#"
          >
            <img
              className='mini-project__link-image' 
              src={link.image} 
              alt={`${props.title} link`} 
            />
          </a>
        ))}
      </div>
    </div>
    
    <p className='mini-project__subtitle'>{props.subtitle}</p>
    <TechnologyList
      technologies={props.technologies}
    />
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
        title='Bang Links'
        links= {[
          {
            url: 'https://github.com/AlecR/bang-links',
            image: 'images/github-logo.png'
          },
          {
            url: 'https://chrome.google.com/webstore/detail/bang-links/cgjkfgaebafenkbcgdjkiplhcjngcoca',
            image: 'images/chrome-logo-white.png'
          }
        ]}
        subtitle='Chrome extension for custom URL shortcuts utilizing the Google Chrome Omnibox API. After creating a shortcut, typing "! <shortcut name>" will navigate to your specified URL.'
        technologies={['React.js', 'Node.js','yarn', 'Chrome Dev Tools', 'Git / GitHub']}
      />
      <MiniProject 
        title='Smart Mirror'
        links= {[
          {
            url: 'https://github.com/AlecR/smart-mirror',
            image: 'images/github-logo.png'
          }
        ]}
        subtitle='Touch screen smart mirror software providing weather, calendar, smart home controls, and more. Developed using React on the front end, and a Node server on the backend. Designed with an emphasis on a decentralized architecture, allowing for new modules to be easily created and plugged into the system.'
        technologies={['React.js', 'Node.js', 'Express.js', 'Python', 'React Router', 'Electron', 'HTML', 'CSS', 'Bash', 'Postman', 'npm', 'VS Code', 'ngrok', 'Chrome Dev Tools', 'Git / GitHub']}
      />
      <MiniProject 
        title='Lookout'
        links={[
          {
            url: 'https://itunes.apple.com/us/app/lookout/id434893913?mt=8',
            image: 'images/appstore-logo.png'
          }
        ]}
        subtitle='Worked as an Engineering Intern at Lookout for two summers (2017 and 2018) as a member of the iOS team. During my first summer at Lookout, I worked on implementing a new feature, Breach Report, into a newly architected version of the application. In my second summer, I worked on yet another new version of the application, focusing on integrating new features and completely updating the user interface.'
        technologies={['Cocoa Touch', 'Swift', 'Cocoapods', 'Gerrit Code Review', 'JIRA', 'Jenkins', 'Git / GitHub']}
      />
      <MiniProject 
        title='Drop The Ball'
        links={[
          {
            url: 'https://itunes.apple.com/py/app/drop-the-ball-simple-addicting-game/id1130841389?l=en&mt=8',
            image: 'images/appstore-logo.png'
          },
          {
            url: 'https://github.com/AlecR/DropTheBall',
            image: 'images/github-logo.png'
          }
        ]}
        subtitle='iOS application built with SpriteKit. Drop the Ball was a game developed with Cocoa Touch and SpriteKit, featuring 100 different levels. The game was designed to be simple, with the objective being to drop a ball into a moving cup at the bottom of the screen, getting through a variety of obstacles. The app was published and is currently available on the App Store.'
        technologies={['Cocoa Touch', 'Swift', 'Spritekit', 'Cocoapods']}
      />
      <MiniProject 
        title='WExchange'
        links={[
          {
            url: 'https://github.com/abubatjargal/WExchange',
            image: 'images/github-logo.png'
          }
        ]}
        subtitle='Web application built as part of a team of 4 for my Capstone Project for Software Engineering course. The premise of the website was a place where content creators can go to advertise their work and find clients to complete work for.'
        technologies={['Ruby on Rails', 'Elasticsearch', 'Pusher', 'Paperclip + AWS']}
      />
      <MiniProject 
        title='Campus Rover'
        links={[
          {
            url: 'https://github.com/campusrover',
            image: 'images/github-logo.png'
          }
        ]}
        subtitle='A robot built for my Autonomous Robotics class. The Campus Rover was designed to map and autonomously navigate around campus. The project was split up amongst the class, and my primary focus was autonomous navigation and remote operation of the robot. As a member of the team, I developed a web application which allowed users to connect to the server running on the robot and remotely control it, either by providing a waypoint and autonomously navigating or manually driving.'
        technologies={['Robotics Operating System (ROS)', 'Python', 'JavaScript', 'React', 'SLAM Algorithim']}
      />
      <MiniProject 
        title='Hacker News Twitter Bot'
        links={[
          {
            url: 'https://twitter.com/HNTopStories',
            image: 'images/twitter-logo.png'
          }
        ]}
        subtitle='Developed a twitter bot to tweet out the top story on Hacker News every 6 hours. Running on AWS Lambda, the bot will format the title and url of the top story to fit a tweet. The bot is live at @HNTopStories'
        technologies={['Python', 'AWS Lambda', 'Hacker News API']}
      />
    </div>
    <SectionWaypoint 
      onScrollToWaypoint={() => props.onScrollToWaypoint(3)}
    />
  </Element>
);

export default Projects;