import React, { Component } from "react";
import android_get_app from "images/android_get_app.png";
import apple_get_app from "images/apple_get_app.png";
import Login from "./Login";
import Signup from "./Signup";
import "styles/modules/indexPage.scss";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logInPage: true,
      goToSignUpLogInText: "Don't have an account?",
      goToSignUpLogInButtonText: "Sign up",
    };
  }

  handleButtonClick() {
    this.setState((prevState) => ({
      logInPage: !prevState.logInPage,
    }));
  }

  render() {
    const {
      logInPage,
      goToSignUpLogInText,
      goToSignUpLogInButtonText,
    } = this.state;
    return (
      <div className="container">
        <div className="loginsignupsection">
          {logInPage === true ? <Login /> : <Signup />}
        </div>
        <div className="gotosignuplogin">
          <p>{logInPage === true ? goToSignUpLogInText : "Have an account?"}</p>
          <button onClick={() => this.handleButtonClick()}>
            {logInPage === true ? goToSignUpLogInButtonText : "Log in"}
          </button>
        </div>
        <div className="gettheapp">
          <p>Get the app.</p>
          <div className="gettheapplink">
            <img
              className="getandroidapp"
              src={android_get_app}
              alt="GetAndroidApp"
            />
            <img
              className="getappleapp"
              src={apple_get_app}
              alt="GetAppleApp"
            />
          </div>
        </div>
        <footer className="footer">
          <div className="footersubsection" >
            <nav className="footernavlinks">
              <ul className="footerlinksection">
                <li className="footerlink">ABOUT</li>
                <li className="footerlink">HELP</li>
                <li className="footerlink">PRESS</li>
                <li className="footerlink">API</li>
                <li className="footerlink">JOBS</li>
                <li className="footerlink">PRIVACY</li>
                <li className="footerlink">TERMS</li>
                <li className="footerlink">LOCATION</li>
                <li className="footerlink">TOP ACCOUNTS</li>
                <li className="footerlink">HASHTAGS</li>
                <li className="footerlink">LANGUAGES</li>
              </ul>
            </nav>
            <span className="copurightsection">© 2020 INSTAGRAM FROM FACEBOOK</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default IndexPage;
