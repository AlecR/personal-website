import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle";
import TechnologyList from "../TechnologyList";
import SectionWaypoint from "../SectionWaypoint";
import "./Experience.css";

const Experience = (props) => (
  <Element name="experience" className="experience__wrapper">
    <SectionTitle title="Experience" />
    <div className="experience__list">
      <Job
        company="Thumbtack"
        title="Software Engineering Intern"
        date="May 2019 - August 2019"
        logo="images/thumbtack-logo.png"
        description={[
          "Wrote Scala scripts to automate the nightly aggregation of millions of data points into metrics measuring Thumbtack pro’s performance.",
          "Integrated new performance metrics on the Thumbtack website’s Pro Insights page to allow pros to compare their performance versus the top pros on the platform. Used JavaScript with React on the frontend and PHP on the backend.",
          "Inherited a full stack development project from a departing team member for the launch of a new feature on the Thumbtack website. Wrote Scala scripts with Apache Spark to aggregate data and implemented the feature on the website backend and frontend. Completed the project with just a two-week deadline.",
        ]}
        technologies={[
          "Javascript",
          "React",
          "Scala",
          "PHP",
          "Apache Spark",
          "Apache Thrift",
          "AWS",
          "Postgres",
          "Google Dataproc",
          "Git / GitHub",
          "JIRA",
          "Gerrit",
        ]}
      />
      <Job
        company="Brandeis University"
        title="Robotics Lab Manager"
        date="August 2018 - May 2019"
        logo="images/brandeis-logo.png"
        description="Lab manager for Brandeis Unviersity robotics courses. As Lab Manager, my responsbilities included ensuring cirriculum was appropriate for students, providing assistance to students, and continuing to work on the major project of Brandeis Robotics, the Campus Rover. The Campus Rover is a robot which will deliver packages autonomously on campus, and the goal of the course each semester is to continually improve this robot. The robot's software has been developed using ROS (Robotics Operating System), and the code is primarily Python. As the Lab Manager, I worked to continually improve the project and gain more knowledge in the field of robotics in order to develop new enhancements for the project. Research on the project is heavily focus on autonomous navigation."
        technologies={[
          "ROS",
          "Python",
          "Linux (Ubuntu)",
          "Raspberry Pi",
          "Arduino",
          "SLAM Algorithm",
          "Autonomous Navigation",
          "Git / GitHub",
        ]}
      />
      <Job
        company="Lookout"
        title="Software Engineering Intern"
        date="Summer 2017 & Summer 2018"
        logo="images/lookout-logo.png"
        description="Worked on the iOS team at Lookout for two summers. In my first summer at Lookout, I contributed to an effort to rearchitect the Lookout Personal Security application. As a part of the effort to rearchitect the application, I implmeneted Breach Report, a feature for notifying users when a service they use is breached. As one of the first features added to the rearchitected app, Breach Report served as an example for other features, and my work established standards for how features should be implmeneted in the future. In my second summer at Lookout, I worked once again as part of the iOS team, this time working toward releasing a new major version of the application. This project involved a total redesign, along with new features being added. My main contributions to this project was an overhaul to much of the UI, along with preparing a new feature for production."
        technologies={[
          "Cocoa Touch",
          "Swift",
          "Cocoapods",
          "Gerrit Code Review",
          "JIRA",
          "Jenkins",
          "Git / GitHub",
        ]}
      />
    </div>
    <SectionWaypoint onScrollToWaypoint={() => props.onScrollToWaypoint(2)} />
  </Element>
);

const Job = (props) => (
  <div className="job__wrapper">
    <div className="job__header">
      <div className="job__title">{props.title}</div>
      <div className="job__date">{props.date}</div>
    </div>
    <div className="job__company-wrapper">
      <img className="job__company-logo" alt={props.company} src={props.logo} />
      <div className="job__company-name">{props.company}</div>
    </div>
    <div className="job__description">
      {Array.isArray(props.description) ? (
        <ul>
          {props.description.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      ) : (
        props.description
      )}
    </div>
    <TechnologyList technologies={props.technologies} />
  </div>
);

export default Experience;
