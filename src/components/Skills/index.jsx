import React from "react";
import { Element } from "react-scroll";
import SectionWaypoint from "../SectionWaypoint";
import SectionTitle from "../SectionTitle";
import "./Skills.css";

const languagesData = [
  {
    src: "images/javascript-logo.png",
    text: "JavaScript",
  },
  {
    src: "images/swift-logo.png",
    text: "Swift",
  },
  {
    src: "images/python-logo.png",
    text: "Python",
  },
  {
    src: "images/scala-logo.png",
    text: "Scala",
  },
  {
    src: "images/ruby-logo.png",
    text: "Ruby",
  },
  {
    src: "images/java-logo.png",
    text: "Java",
  },
  {
    src: "images/html5-logo.png",
    text: "HTML",
  },
  {
    src: "images/css-logo.png",
    text: "CSS",
  },
  {
    src: "images/c-logo.png",
    text: "C",
  },
  {
    src: "images/bash-logo.png",
    text: "Bash",
  },
];

const frameworksData = [
  {
    src: "images/react-logo.png",
    text: "React.js",
  },
  {
    src: "images/node-logo.png",
    text: "Node.js",
  },
  {
    src: "images/spark-logo.png",
    text: "Apache Spark",
  },
  {
    src: "images/express-logo.png",
    text: "Express.js",
  },
  {
    src: "images/react-logo.png",
    text: "React Native",
  },
  {
    src: "images/electron-logo.png",
    text: "Electorn",
  },
  {
    src: "images/rails-logo.png",
    text: "Rails",
  },
  {
    src: "images/apple-logo.png",
    text: "Cocoa Touch",
  },
  {
    src: "images/spritekit-logo.png",
    text: "SpriteKit",
  },
  {
    src: "images/ros-logo.png",
    text: "ROS",
  },
];

const toolsData = [
  {
    src: "images/elasticsearch-logo.svg",
    text: "Elasticsearch",
  },
  {
    src: "images/redis-logo.png",
    text: "Redis",
  },
  {
    src: "images/postgres-logo.png",
    text: "Postgresql",
  },
  {
    src: "images/aws-logo.png",
    text: "Amazon Web Services",
  },

  {
    src: "images/google-cloud-logo.png",
    text: "Google Cloud Platform",
  },
  {
    src: "images/docker-logo.png",
    text: "Docker",
  },
  {
    src: "images/kubernetes-logo.png",
    text: "Kubernetes",
  },
  {
    src: "images/git-logo.png",
    text: "Git / GitHub",
  },
  {
    src: "images/npm-logo.png",
    text: "npm",
  },
  {
    src: "images/cocoapods-logo.png",
    text: "Cocoapods",
  },
];

const SkillsListItem = (props) => (
  <li className="skills-list-item">
    <img className="skills-list-item__image" src={props.src} alt={props.text} />
    <p className="skills-list-item__text">{props.text}</p>
  </li>
);

const SkillsTable = (props) => (
  <div className="skills-table__wrapper">
    <p className="skills-table__title">{props.title}</p>
    <ul className="skills-table__list">
      {props.data.map((listItem) => (
        <SkillsListItem src={listItem.src} text={listItem.text} />
      ))}
    </ul>
  </div>
);

const Skills = (props) => (
  <Element name="skills" className="skills__wrapper">
    <SectionTitle title="Skills" />
    <div className="skills__tables-wrapper">
      <div className="skills__tables">
        <SkillsTable title="Languages" data={languagesData} />
        <SkillsTable title="Frameworks" data={frameworksData} />
        <SkillsTable title="Tools" data={toolsData} />
      </div>
    </div>
    <SectionWaypoint onScrollToWaypoint={() => props.onScrollToWaypoint(2)} />
  </Element>
);

export default Skills;
