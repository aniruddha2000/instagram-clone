import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";
import "styles/signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrPhone: "",
      fullName: "",
      username: "",
      password: "",
      buttonClassName: "loginsignupbutton",
    };
  }

  handleInput(e, field) {
    this.setState({
      [field]: e.target.value,
    });
    if (this.state.fullName.length > 1 && this.state.username.length > 1 && this.state.password.length > 6) {
      this.setState({
        buttonClassName: "loginsignupbuttonactive",
      });
    } else {
      this.setState({
        buttonClassName: "loginsignupbutton",
      });
    }
  }

  render() {
    const { buttonClassName } = this.state;
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
            onChange={(e) => this.handleInput(e, "emailOrPhone")}
          />
          <br />
          <input
            type="text"
            className="signuptextbox"
            placeholder="Full Name"
            onChange={(e) => this.handleInput(e, "fullName")}
          />
          <br />
          <input
            type="text"
            className="signuptextbox"
            placeholder="Username"
            onChange={(e) => this.handleInput(e, "username")}
          />
          <br />
          <input
            type="password"
            className="signuptextbox"
            placeholder="Password"
            onChange={(e) => this.handleInput(e, "password")}
          />
          <br />
          <input
            type="button"
            className={buttonClassName}
            value="Sign Up"
            onChange={(e) => this.handleInput(e)}
          />
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
