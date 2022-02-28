import React from "react";

function BlockWithIcon({ icon, text, url }) {
  return (
    <div className="block--icon gap-4">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          {icon}
          {text}
        </a>
      ) : (
        icon
      )}
      {!url && <p>{text}</p>}
    </div>
  );
}

export default BlockWithIcon;
