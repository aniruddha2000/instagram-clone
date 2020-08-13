import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";
import "styles/modules/login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


class Login extends Component {
  render() {
    return (
      <div className="loginsection">
        <div className="instalogo">
          <img src={instagram_new_logo} alt="Logo" />
        </div>
        <form>
          <input
            type="text"
            className="logintextbox"
            placeholder="Phone number, username, or email"
          />
          <br />
          <input
            type="password"
            className="logintextbox "
            placeholder="Password"
          />
          <br />
          <input type="button" className="loginsignupbutton" value="Log In" />
        </form>
        <div className="loginsignupor">
          <div className="or">OR</div>
        </div>
        <button className="loginwithfacebook">
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          {/* eslint-disable-next-line */}
          <span href="#">Log in with Facebook</span>
        </button>
        <div className="passwordreset">
          <a href="google.com">Forgot password?</a>
        </div>
      </div>
    );
  }
}

export default Login;
