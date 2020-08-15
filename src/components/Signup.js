import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";
import "styles/modules/signup.scss";
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
        <div className="signupwithfacebook">
          <span className="signupwithfacebookicon">
            <FontAwesomeIcon color="#3C5998" icon={faFacebookSquare} />
          </span>
          {/* eslint-disable-next-line */}
          <a href="#">Log in with Facebook</a>
        </div>
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
        <div className="termsandpolicy">
          <p>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
