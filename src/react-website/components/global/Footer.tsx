import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="text-center w-full">
          <span>
            © 2019 &mdash; {new Date().getFullYear()} Gianluigi Trontini. All
            rights reserved to their respective owners.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
