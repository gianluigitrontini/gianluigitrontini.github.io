import React from "react";
import Section from "../../global/Section";

import { Link } from "react-router-dom";

import { projects } from "../../../data";
import Project from "./Project";

export interface ProjectInterface {
  name: string;
  slug: string;
  repoName: string;
  description: string;
  image: any;
  logo?: any;
  status: string;
  linkToProject: string;
  hasCoverImage: boolean;
  hidden: boolean;
}

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="projects--wrapper">
        {projects.map(
          (prj, i) =>
            !prj.hidden && (
              <Link key={i} to={`projects/${prj.slug}`}>
                <Project project={prj} />
              </Link>
            )
        )}
      </div>
    </Section>
  );
};

export default Projects;
