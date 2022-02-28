import React from "react";
import Section from "../global/Section";

const About = () => {
  return (
    <Section id="about" className="flex items-center">
      <div className="w-full lg:w-1/2 text-xl flex flex-col gap-8">
        <p className="text-left">
          I can count ~2 years of professional experience designing &amp;
          developing
          <span className="bold"> websites </span> and
          <span className="bold"> web applications </span> &mdash; and even more
          working on personal projects.
        </p>
        <p className="text-left">
          I'm used to work over
          <span className="gradient-text react font-bold"> React</span> and
          <span className="gradient-text symfony font-bold"> Symfony </span>
          projects, crafting interfaces for amazing applications in the ed-tech
          field.
        </p>
        <p className="text-left">
          I've also spent many hours practicing Node.js and MongoDB - getting to
          a point where I'm able to create simple{" "}
          <span className="bold">full-stack </span>applications.
        </p>
      </div>
    </Section>
  );
};

export default About;
