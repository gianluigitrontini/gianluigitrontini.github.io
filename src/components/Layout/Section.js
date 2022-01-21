import React from 'react';

function Section({ children, id, className, title, isSecondary }) {
  return (
    <section id={id} className={` ${className ? className : ''}`}>
      <div className='container'>
        {title && !isSecondary && <h2 className='title text-left'>{title}</h2>}
        {title && isSecondary && <h2 className='title-overlay'>{title}</h2>}

        {children}
      </div>
    </section>
  );
}

export default Section;
