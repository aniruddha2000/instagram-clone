import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";

class Signup extends Component {
  render() {
    return (
      <div className="loginsection">
        <div className="instalogo">
          <img src={instagram_new_logo} alt="Logo" />
        </div>
        <form>
          <input
            className="logintextbox"
            placeholder="Phone number, username, or email"
          />
          <input className="logintextbox" placeholder="Password" />
          <input className="logintextbox" placeholder="Password" />
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
          {/* eslint-disable-next-line */ }
          <a href="#">Log in with Facebook</a>
        </div>
        <div className="passwordreset">
          <a href="google.com">Forgot password?</a>
        </div>
      </div>
    );
  }
}

export default Signup;
