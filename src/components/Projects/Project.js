import React from 'react';

import Status from './Status';

function Project({ image, title, description, status }) {
  return (
    <div className='projects--item'>
      <Status status={status} />
      <img src={image && image} alt={title} />
      <button className='projects--info-overlay'>
        <h3 className='project--title font-bold'>{title}</h3>
        <p className='project--description'>{description}</p>
      </button>
    </div>
  );
}

export default Project;
