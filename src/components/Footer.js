import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faReact,
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faEgg } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Component } from "react";
  import "./Footer.scss";
  class Footer extends Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      return (
        <div className="footer">
          <div className="footer-end">
          <a
                  className="btn-easter btn-link btn-floating btn-lg"
                  href="https://brandoncastro932.github.io/easter-egg/"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon-easter"
                    title="Definitely not an easter egg"
                    icon={faEgg}
                  ></FontAwesomeIcon>
                  
                </a>

            <p>Developed by Brandon Castro</p>
            <p>
              <FontAwesomeIcon icon={faReact} className="icon-react" /> Powered by{" "}
              <a href="https://reactjs.org/"> React</a>
            </p>

          </div>
        </div>
      );
    }
  }
  export default Footer;