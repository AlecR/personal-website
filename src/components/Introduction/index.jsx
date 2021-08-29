import React from "react";
import { Element } from "react-scroll";
import SectionWaypoint from "../SectionWaypoint";
import "./Introduction.css";

const Introduction = (props) => (
  <Element className="introduction__wrapper" name="introduction">
    <div className="introduction__header">
      <div className="introduction__header-text-wrapper">
        <p className="introduction__header-text">ALEC RODGERS</p>
      </div>
      <div className="introduction__header-image-wrapper">
        <button
          className="box-button introduction__header-contact-button"
          onClick={() => props.onContactClick()}
        >
          CONTACT
        </button>
      </div>
    </div>
    <p className="introduction__tag-line">
      I'm <b>Alec Rodgers</b> and I'm currently a Lead Engineer at proton.ai. I
      have a strong passion for technology and building scalable systems to
      solve interesting problems with software. Scroll down to learn more about
      me and my experience.
    </p>
    <div
      className="introduction__about-me"
      onClick={() => props.onAboutMeClick()}
    >
      <p>About Me</p>
      <img
        className="introduction__about-me-image"
        src={"images/down-arrow.png"}
        alt="Down Arrow"
      />
    </div>
    <SectionWaypoint onScrollToWaypoint={() => props.onScrollToWaypoint(0)} />
  </Element>
);

export default Introduction;
