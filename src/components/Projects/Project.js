import React, {useState} from "react";
import Modal from "../Main/Modal";

import Status from "./Status";

function Project({ image, title, description, status, project }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="projects--item" onClick={() => setIsOpen(true)}>
      <Status status={status} />
      <img src={image && image} alt={title} />
      <button className="projects--info-overlay">
        <h3 className="project--title">{title}</h3>
        <p className="project--description">{description}</p>
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal} project={project} />
    </div>
  );
}

export default Project;
