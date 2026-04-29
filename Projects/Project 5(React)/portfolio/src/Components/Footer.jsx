import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <h3>Ankita Mane</h3>
          <p>FullStack Developer | Java Developer</p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ankita-mane-80b0792bb/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/AnkitaMane30"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:maneankita831@gmail.com">
              Email
            </a>
          </div>

          <p className="copyright">
            © 2026 All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;