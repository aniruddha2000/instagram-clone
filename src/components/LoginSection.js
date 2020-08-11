import React, { Component } from "react";
import android_get_app from "images/android_get_app.png";
import apple_get_app from "images/apple_get_app.png";

class LoginSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Instagram</h1>
        </div>
        <form>
          <input
            className="logintextbox"
            placeholder="Phone number, username, or email"
          />
          <input className="logintextbox" placeholder="Password" />
          <button className="loginsignupbutton">Log In</button>
        </form>
        <div className="borderloginsignup">
          <div className="borderbash"></div>
          <div className="norderor">OR</div>
          <div className="borderbash"></div>
        </div>
        <div className="loginwithfacebook">
          {/* <span></span> *facebook logo* */}
          <span>Log in with Facebook</span>
        </div>
        <div className="passwordreset">
          <a href="google.com">Forgot password?</a>
        </div>
        {/* ^ */}
        <div className="gotosignup">
          <p>Don't have an account?</p>
          <a>Sign up</a>
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

export default LoginSection;
