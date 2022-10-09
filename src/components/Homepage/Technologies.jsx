import React from "react";
import { technologies } from "../../data";

import { Tooltip } from "react-tippy";

const Technologies = () => {
  return (
    <div className="technologies my-16">
      {technologies.map((icon, i) => (
        <Tooltip key={i} title={icon.name} position="bottom">
          <img src={icon.url} alt={icon.name} />
        </Tooltip>  
      ))}
    </div>
  );
};

export default Technologies;
