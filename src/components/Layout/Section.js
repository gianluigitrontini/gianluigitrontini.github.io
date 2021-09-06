import React from "react";

function Section({ children, id, className, title, isSecondary }) {
  return (
    <section id={id} className={`container ${className ? className : ""}`}>
      {title && !isSecondary && <h2 className="title text-left">{title}</h2>}
      {title && isSecondary && <h2 className="title-overlay">{title}</h2>}

      {children}
    </section>
  );
}

export default Section;
