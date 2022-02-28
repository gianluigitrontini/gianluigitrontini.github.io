import React from "react";
import Section from "../../global/Section";

import { Link } from "react-router-dom";

import { projects } from "../../../data";
import Project from "./Project";

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="projects--wrapper">
        {projects.map((prj, i) => (
          <Link key={i} to={`projects/${prj.slug}`}>
            <Project project={prj} />
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
