import React from "react";
import ProfilePicture from "../../assets/images/profileImage.jpg";
import Section from "../global/Section";

const Hero = () => {
  return (
    <Section id="hero" className="h-[75vh]">
      <h1>
        Hi, I'm&nbsp;
        <span className="relative my_name">
          Gianluigi&nbsp;
          <img
            className="profile-picture"
            src={ProfilePicture}
            alt="The Designer and Developer"
          />
        </span>
        &mdash; a&nbsp;
        <span className="code">
          <small className="font-bold">&lt;&nbsp;</small>
          Frontend Developer
          <small className="font-bold">&nbsp;/&gt;</small>
        </span>
        &nbsp;that cares about usability.
      </h1>
    </Section>
  );
};

export default Hero;
