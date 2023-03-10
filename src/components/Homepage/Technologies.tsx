import React from "react";
import Tippy from "@tippyjs/react";
import { technologies } from "../../data";

const Technologies = () => {
  return (
    <div className="technologies my-16">
      {technologies.map((icon, i) => (
        <Tippy key={i} content={icon.name} placement="top">
          <img src={icon.url} alt={icon.name} />
        </Tippy>
      ))}
    </div>
  );
};

export default Technologies;
