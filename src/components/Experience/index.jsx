import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle";
import TechnologyList from "../TechnologyList";
import SectionWaypoint from "../SectionWaypoint";
import JobDetails from "../../content/experience.json";
import "./Experience.css";

const Experience = (props) => (
  <Element name="experience" className="experience__wrapper">
    <SectionTitle title="Experience" />
    <div className="experience__list">
      {JobDetails.map((job) => (
        <Job
          company={job.company}
          title={job.title}
          date={job.date}
          logo={job.logo}
          description={job.bullets}
          technologies={job.technologies}
        />
      ))}
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
