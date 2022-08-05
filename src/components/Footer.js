import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faReact,
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
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
          <div className="container">
            <div className="row">
            <h2 className="title">Contact</h2>
              <section>
              <h4><FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon-contact"
                        size="1x"
                      ></FontAwesomeIcon> Email: brandoncastro12331@gmail.com</h4>
                <a
                  className="btn btn-link btn-floating btn-lg"
                  href="https://www.facebook.com/Brandon.Castro.Brenes"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                </a>
  
                <a
                  className="btn btn-link btn-floating btn-lg"
                  href="https://www.linkedin.com/in/brandon-castro-brenes-095536203/"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </a>
  
                <a
                  className="btn btn-link btn-floating btn-lg"
                  href="https://github.com/BrandonCastro932"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
  
                <a
                  className="btn btn-link btn-floating btn-lg"
                  href="https://www.instagram.com/brandon_castro12/"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faInstagram}
                  ></FontAwesomeIcon>
                </a>
              </section>
            </div>
          </div>
          <div className="footer-end">
            <p>Developed by Brandon Castro</p>
            <p>
              <FontAwesomeIcon icon={faReact} /> Powered by{" "}
              <a href="https://reactjs.org/"> ReactJS</a>
            </p>
          </div>
        </div>
      );
    }
  }
  export default Footer;