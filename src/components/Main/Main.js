import React from "react";

import AircuryLogo from "../../assets/images/aircury-bw.png";
import CarouselLogo from "../../assets/images/carousel-bw.png";
import ProfilePicture from "../../assets/images/profileImage.jpg";
import Project from "../Projects/Project";

import projects from "../../projects";
import Section from "../Layout/Section";
import ContactForm from "./Contact/ContactForm";
import BlockWithIcon from "./Contact/BlockWithIcon";

const technologiesIcons = [
  {
    name: "Figma",
    url: "/images/icons/figma.png",
  },
  {
    name: "TailwindCss",
    url: "/images/icons/tailwindcss.png",
  },
  {
    name: "Html5",
    url: "/images/icons/html5.png",
  },
  {
    name: "Css",
    url: "/images/icons/css3.png",
  },
  {
    name: "Javascript",
    url: "/images/icons/javascript.png",
  },
  {
    name: "React",
    url: "/images/icons/react.png",
  },
];

function Main() {
  // const [isSorted, setIsSorted] = useState(false);

  // const [projectList, setProjectList] = useState(projects);

  // const orderProjects = () => {
  //   const sortedByStatus = [...projects].sort((a, b) => (
  //     a.status > b.status ? 1 : a.status === b.status ? 0 : -1
  //   ))
  //   setIsSorted(!isSorted)
  //   isSorted ? setProjectList([...projects]) : setProjectList(sortedByStatus)
  // }

  return (
    <main>
      <Section id="hero">
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
          &mdash; a&nbsp;<span>UI Designer&nbsp;</span>
          who loves to&nbsp;
          <span className="code">
            <small>&lt;&nbsp;</small>
            code
            <small>&nbsp;/&gt;</small>
          </span>
        </h1>
      </Section>

      <Section id="logos" title="Trusted by" isSecondary>
        <div className="logo-container">
          <a href="http://www.aircury.com/" rel="noreferrer" target="_blank">
            <img src={AircuryLogo} alt="Aircury" className="brand-logos" />
          </a>
          <a
            href="http://www.carousel-learning.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={CarouselLogo} alt="Carousel" className="brand-logos" />
          </a>
        </div>
      </Section>

      <Section id="about">
        <p className="text-left">
          I have ~2 years of professional experience in the design & development
          of&nbsp;
          <span className="bold">websites</span> and&nbsp;
          <span className="bold">web applications</span> &mdash; and{" "}
          <span className="font-several">several</span> more learning modern
          tools.
        </p>
        <p className="text-left">
          However, I'm used to work over&nbsp;
          <span className="gradient-text react">React</span>&nbsp; and&nbsp;
          <span className="gradient-text symfony">Symfony</span>&nbsp; projects,
          crafting interfaces for amazing applications in the{" "}
          <span className="wavy-underline">ed-tech </span> field.
        </p>

        <div className="technologies">
          {technologiesIcons.map((icon, index) => (
            <img
              key={`technology-icon--${index}`}
              src={icon.url}
              alt={icon.name}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        {/* <button onClick={orderProjects}>Sort</button> */}
        <div className="projects--wrapper">
          {/* {projectList.map((prj) => ( */}
          {projects.map((prj) => (
            <Project
              project={prj}
              key={`project-${prj.name}`}
              image={prj.image}
              title={prj.name}
              description={prj.description}
              status={prj.status}
            />
          ))}
        </div>
      </Section>
      <Section id="contact" title="Want to work together?">
        <div className="flex-wrapper">
          <div className="contact--form-box">
            <ContactForm />
          </div>
          <div className="contact--details">
          <BlockWithIcon icon="location" text="Monteprandone, Italy <br /> Cabo de Gata, Almería" />

            <BlockWithIcon icon="mail" text="gianluigitrontini@gmail.com" />

            <span className="subtitle">Find more on</span>
            <div className="social--container">
              <BlockWithIcon icon="github" url="https://github.com/gianluigitrontini" text="Github" />
              <BlockWithIcon icon="linkedin" url="https://www.linkedin.com/in/gianluigi-trontini-9b5a0b103/" text="Linkedin" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default Main;
