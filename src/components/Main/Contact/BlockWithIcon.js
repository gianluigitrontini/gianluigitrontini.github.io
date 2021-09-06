import React from 'react';
import SvgIcon from './SvgIcon';

function BlockWithIcon({ icon, text, url }) {
  return (
    <div className='block--icon mx-4 justify-center'>
      <SvgIcon icon={icon} />
      {!url ? (
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      ) : (
        <a href={url} target='_blank' rel='noreferrer'>
          {text}
        </a>
      )}
    </div>
  );
}

export default BlockWithIcon;
