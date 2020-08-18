import React, { Component } from "react";
import "styles/footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footersubsection">
          <nav>
            <ul>
              {/* eslint-disable */}
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">HELP</a>
              </li>
              <li>
                <a href="#">PRESS</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">JOBS</a>
              </li>
              <li>
                <a href="#">PRIVACY</a>
              </li>
              <li>
                <a href="#">TERMS</a>
              </li>
              <li>
                <a href="#">LOCATION</a>
              </li>
              <li>
                <a href="#">TOP ACCOUNTS</a>
              </li>
              <li>
                <a href="#">HASHTAGS</a>
              </li>
              <li>
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
