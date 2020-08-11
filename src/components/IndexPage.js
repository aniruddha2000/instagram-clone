import React, { Component } from "react";
import android_get_app from "images/android_get_app.png";
import apple_get_app from "images/apple_get_app.png";
import Login from "./Login";
import Signup from "./Signup";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: "login",
    };
  }

  handleButtonClick(page) {
    this.setState({ screen: page });
  }

  render() {
    return (
      <div className="container">
        {this.state.screen === "login" ? <Login /> : <Signup />}
        <div className="gotosignup">
          <p>Don't have an account?</p>
          <button onClick={(e) => this.handleButtonClick(e.target.value)}>
            Sign up
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
