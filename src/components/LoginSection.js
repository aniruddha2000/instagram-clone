import React, { Component } from "react";

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
          <button className="loginsignupbutton" >Log In</button>
        </form>
        <div className="borderloginsignup">
          <div className="borderbash"></div>
          <div className="norderor">OR</div>
          <div className="borderbash"></div>
        </div>
        <div className="loginwithfacebook">
          {/* <span></span> */}
          <span>Log in with Facebook</span>
        </div>
        <div className="passwordreset">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    );
  }
}

export default LoginSection;
