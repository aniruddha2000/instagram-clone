import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";
import "styles/login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

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
          <span className="loginwithfacebookicon">
            <FontAwesomeIcon color="#3C5998" icon={faFacebookSquare} />
          </span>
          {/* eslint-disable-next-line */}
          <span className="loginwithfacebooktext" href="#">
            Log in with Facebook
          </span>
        </button>
        <div className="passwordreset">
          {/* eslint-disable-next-line */}
          <a href="#">Forgot password?</a>
        </div>
      </div>
    );
  }
}

export default Login;
