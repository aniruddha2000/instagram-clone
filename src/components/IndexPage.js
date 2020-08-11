import React, { Component } from "react";
import android_get_app from "images/android_get_app.png";
import apple_get_app from "images/apple_get_app.png";
import Login from "./Login";
import Signup from "./Signup";

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
      // goToSignUpText: "Don't have an account?",
      // goToSignUpButtonText: "Sign up",
    }));
  }

  render() {
    // const { goToSignUpText } = this.state.goToSignUpText;
    // const { goToSignUpButtonText } = this.state.goToSignUpButtonText;
    return (
      <div className="container">
        {this.state.logInPage === true ? <Login /> : <Signup />}
        <div className="gotosignup">
          <p>{goToSignUpText}</p>
          <button onClick={() => this.handleButtonClick()}>
            {goToSignUpButtonText}
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
