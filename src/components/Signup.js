import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";
import "styles/modules/signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="signupsection">
        <div className="instalogo">
          <img src={instagram_new_logo} alt="Logo" />
        </div>
        <form>
          <input
            type="text"
            className="signuptextbox"
            placeholder="Phone number, username, or email"
          />
          <input
            type="text"
            className="signuptextbox"
            placeholder="Full Name"
          />
          <input type="text" className="signuptextbox" placeholder="Username" />
          <input
            type="password"
            className="signuptextbox"
            placeholder="Password"
          />
          <input
            type="button"
            className="loginsignupbutton"
            value="Sign Up"
          />
        </form>
        <div className="loginsignupor">
          <div className="or">OR</div>
        </div>
        <div className="signupwithfacebook">
          {/* <span></span> *facebook logo* */}
          {/* eslint-disable-next-line */}
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
