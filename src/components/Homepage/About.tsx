import React from "react";
import Section from "../global/Section";

const About = () => {
  return (
    <Section id="about" className="flex items-center">
      <div className="leading-normal lg:w-3/4 mx-auto text-3xl text-center flex flex-col gap-16">
        <p>
          3+ years of professional experience designing &amp; developing&nbsp;
          <span className="font-bold inline-block">websites</span>,&nbsp;
          <span className="font-bold inline-block">web applications</span>{" "}
          and&nbsp;
          <span className="font-bold inline-block">mobile apps</span>.
        </p>
        <p>
          I've been working with&nbsp;
          <span className="gradient-text react font-bold">React</span>
          &nbsp;and&nbsp;
          <span className="gradient-text angular font-bold">Angular</span>,
          crafting amazing applications mostly in the ed-tech and healthcare
          fields.
        </p>
        <p>
          Currently, I'm into hybrid apps with{" "}
          <span className="font-bold"> Ionic</span> as well.
        </p>
      </div>
    </Section>
  );
};

export default About;
