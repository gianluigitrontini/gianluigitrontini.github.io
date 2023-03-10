import React from "react";
import { ProjectInterface } from "./Projects";
import Status from "./Status";

function Project({ project }: { project: ProjectInterface }) {
  return (
    <div className="projects--item">
      <Status status={project.status} />
      {!project.hasCoverImage && (
        <h3 className="absolute top-[50%] left-[50%] text-center transform translate-y-[-50%] translate-x-[-50%] text-3xl text-black opacity-30 font-bold tracking-wider">
          {project.name}
        </h3>
      )}
      <img src={project.image && project.image} alt={project.name} />
      <button className="projects--info-overlay">
        <h3 className="project--title font-bold">{project.name}</h3>
        <p className="project--description">{project.description}</p>
      </button>
    </div>
  );
}

export default Project;
