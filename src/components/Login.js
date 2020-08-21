import React, { Component } from "react";
import instagram_new_logo from "images/instagram_new_logo.png";
import "styles/login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      buttonClassName: "loginsignupbutton",
    };
  }

  handleInput(e) {
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
    if (this.state.username.length > 1 && this.state.password.length > 6) {
      this.setState({
        buttonClassName: "loginsignupbuttonactive"
      });
    }
  }

  render() {
    const { buttonClassName } = this.state;
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
            onChange={(e) => this.handleInput(e)}
          />
          <br />
          <input
            type="password"
            className="logintextbox "
            placeholder="Password"
            onChange={(e) => this.handleInput(e)}
          />
          <br />
          <input
            type="button"
            className={buttonClassName}
            value="Log In"
          />
        </form>
        <div className="loginsignupor">
          <div className="or">OR</div>
        </div>
        <button className="loginwithfacebook">
          <span className="loginwithfacebookicon">
            <FontAwesomeIcon
              size="lg"
              color="#3C5998"
              icon={faFacebookSquare}
            />
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
