import React from 'react';
import { Element } from 'react-scroll';
import SectionWaypoint from '../SectionWaypoint';
import SectionTitle from '../SectionTitle';
import './Skills.css';

const languagesData = [
  {
    src: 'images/javascript-logo.png',
    text: 'JavaScript'
  },
  {
    src: 'images/swift-logo.png',
    text: 'Swift'
  },
  {
    src: 'images/python-logo.png',
    text: 'Python'
  },
  {
    src: 'images/ruby-logo.png',
    text: 'Ruby'
  },
  {
    src: 'images/java-logo.png',
    text: 'Java'
  },
  {
    src: 'images/html5-logo.png',
    text: 'HTML'
  },
  {
    src: 'images/css-logo.png',
    text: 'CSS'
  },
  {
    src: 'images/c-logo.png',
    text: 'C'
  },
  {
    src: 'images/bash-logo.png',
    text: 'Bash'
  },
]

const frameworksData = [
  {
    src: 'images/react-logo.png',
    text: 'React.js'
  },
  {
    src: 'images/node-logo.png',
    text: 'Node.js'
  },
  {
    src: 'images/express-logo.png',
    text: 'Express.js'
  },
  {
    src: 'images/react-router-logo.png',
    text: 'React Router'
  },
  {
    src: 'images/electron-logo.png',
    text: 'Electorn'
  },
  {
    src: 'images/rails-logo.png',
    text: 'Rails'
  },
  {
    src: 'images/apple-logo.png',
    text: 'Cocoa Touch'
  },
  {
    src: 'images/spritekit-logo.png',
    text: 'SpriteKit'
  },
  {
    src: 'images/ros-logo.png',
    text: 'ROS'
  },
]

const toolsData = [
  {
    src: 'images/git-logo.png',
    text: 'Git / GitHub'
  },
  {
    src: 'images/chrome-logo.png',
    text: 'Chrome Dev Tools'
  },
  {
    src: 'images/npm-logo.png',
    text: 'npm'
  },
  {
    src: 'images/ngrok-logo.png',
    text: 'ngrok'
  },
  {
    src: 'images/postman-logo.png',
    text: 'Postman'
  },
  {
    src: 'images/vscode-logo.png',
    text: 'VS Code'
  },
  {
    src: 'images/xcode-logo.png',
    text: 'Xcode'
  },
  {
    src: 'images/cocoapods-logo.png',
    text: 'Cocoapods'
  },
  {
    src: 'images/gerrit-logo.png',
    text: 'Gerrit'
  },
]

const SkillsListItem = (props) => (
  <li className='skills-list-item'>
    <img 
      className='skills-list-item__image'
      src={props.src} 
      alt={props.text}
    />
    <p 
      className='skills-list-item__text'
    >{props.text}</p>
  </li>
)

const SkillsTable = (props) => (
  <div className='skills-table__wrapper'>
    <p className='skills-table__title'>{props.title}</p>
    <ul className='skills-table__list'>
      {
        props.data.map(listItem => (
          <SkillsListItem 
            src={listItem.src}
            text={listItem.text}
          />
        ))
      }
    </ul>
  </div>
)

const Skills = props => (
  <Element 
    name='skills' 
    className='skills__wrapper'
  >
    <SectionTitle 
      title='Skills'
    />
    <div className='skills__tables-wrapper'>
      <div className="skills__tables">
        <SkillsTable 
          title='Languages'
          data={languagesData}
        />
        <SkillsTable 
          title='Frameworks'
          data={frameworksData}
        />
        <SkillsTable 
          title='Tools'
          data={toolsData}
        />
      </div>
    </div>
    <SectionWaypoint 
      onScrollToWaypoint={() => props.onScrollToWaypoint(1)}
    />
  </Element>
);

export default Skills;