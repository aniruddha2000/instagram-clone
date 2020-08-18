import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";
import "styles/signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

class Signup extends Component {
  render() {
    return (
      <div className="signupsection">
        <div className="instalogo">
          <img src={instagram_new_logo} alt="Logo" />
        </div>
        <h2 className="welcometext">
          Sign up to see photos and videos from your friends.
        </h2>
        <button className="signupwithfacebook">
          <FontAwesomeIcon
            className="signupwithfacebookicon"
            color="white"
            icon={faFacebookSquare}
          />
          {/* <span className="signupwithfacebookicon">
            <FontAwesomeIcon color="white" icon={faFacebookSquare} />
          </span> */}
          <p>Log in with Facebook</p>
        </button>
        <div className="loginsignupor">
          <div className="or">OR</div>
        </div>
        <form>
          <input
            type="text"
            className="signuptextbox"
            placeholder="Phone number, username, or email"
          />
          <br />
          <input
            type="text"
            className="signuptextbox"
            placeholder="Full Name"
          />
          <br />
          <input type="text" className="signuptextbox" placeholder="Username" />
          <br />
          <input
            type="password"
            className="signuptextbox"
            placeholder="Password"
          />
          <br />
          <input type="button" className="loginsignupbutton" value="Sign Up" />
        </form>
        <p className="termsandpolicy">
          By signing up, you agree to our
          {/* eslint-disable-next-line */}
          <a className="termsandpolicylinks" href="#">
            Terms
          </a>
          ,{/* eslint-disable-next-line */}
          <a className="termsandpolicylinks" href="#">
            Data Policy
          </a>
          and
          {/* eslint-disable-next-line */}
          <a className="termsandpolicylinks" href="#">
            Cookies Policy
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Signup;
