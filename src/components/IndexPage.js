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
      goToSignUpText: "Don't have an account?",
      goToSignUpButtonText: "Sign up",
    };
  }

  handleButtonClick() {
    this.setState((prevState) => ({
      logInPage: !prevState.logInPage,
    }));
  }

  render() {
    const { logInPage, goToSignUpText, goToSignUpButtonText } = this.state;
    return (
      <div className="container">
        <div className="loginsignupsection">
          {logInPage === true ? <Login /> : <Signup />}
        </div>
        <div className="gotosignup">
          <p>{logInPage === true ? goToSignUpText : "Have an account?"}</p>
          <button onClick={() => this.handleButtonClick()}>
            {logInPage === true ? goToSignUpButtonText : "Log in"}
          </button>
        </div>
        <div className="gettheapp">
          <p>Get the app.</p>
          <div>
            <img src={android_get_app} alt="GetAndroidApp" />
            <img src={apple_get_app} alt="GetAppleApp" />
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
