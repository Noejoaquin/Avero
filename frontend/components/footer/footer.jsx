import React from "react";

export const Footer = ({ id, number }) => {
  return (
    <div className="footer-container">
      <div className="border" />
      <h2 className="footer-name">Learn More About Noe Jimenez</h2>
      <ul className="link-list">
        <a href="https://www.linkedin.com/in/noe-jimenez/" target="_blank">
          <i className="fa fa-linkedin-square link-fa" aria-hidden="true" />
        </a>
        <a href="https://github.com/Noejoaquin" target="_blank">
          <i className="fa fa-github-square link-fa" aria-hidden="true" />
        </a>
        <a href="http://www.noejimenez.com" target="_blank">
          <i className="fa fa-user-circle link-fa" aria-hidden="true" />
        </a>
      </ul>
    </div>
  );
};
