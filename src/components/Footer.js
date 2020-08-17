import React, { Component } from "react";
import "styles/modules/footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footersubsection">
          <nav className="footernavlinks">
            <ul className="footerlinksection">
              {/* eslint-disable */}
              <li className="footerlink">
                <a href="#">ABOUT</a>
              </li>
              <li className="footerlink">
                <a href="#">HELP</a>
              </li>
              <li className="footerlink">
                <a href="#">PRESS</a>
              </li>
              <li className="footerlink">
                <a href="#">API</a>
              </li>
              <li className="footerlink">
                <a href="#">JOBS</a>
              </li>
              <li className="footerlink">
                <a href="#">PRIVACY</a>
              </li>
              <li className="footerlink">
                <a href="#">TERMS</a>
              </li>
              <li className="footerlink">
                <a href="#">LOCATION</a>
              </li>
              <li className="footerlink">
                <a href="#">TOP ACCOUNTS</a>
              </li>
              <li className="footerlink">
                <a href="#">HASHTAGS</a>
              </li>
              <li className="footerlink">
                <a href="#">LANGUAGES</a>
              </li>
              {/* eslint-enable */}
            </ul>
          </nav>
          <span className="copurightsection">
            © 2020 INSTAGRAM FROM FACEBOOK
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
