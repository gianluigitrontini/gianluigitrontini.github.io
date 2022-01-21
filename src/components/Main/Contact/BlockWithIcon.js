import React from 'react';
import SvgIcon from './SvgIcon';

function BlockWithIcon({ icon, text, url }) {
  return (
    <div className='block--icon gap-4'>
      {url ? (
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2'>
          <SvgIcon icon={icon} />
          {text}
        </a>
      ) : (
        <SvgIcon icon={icon} />
      )}
      {!url && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
    </div>
  );
}

export default BlockWithIcon;
