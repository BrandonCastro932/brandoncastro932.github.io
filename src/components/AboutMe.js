import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./AboutMe.scss";
import {
  faCakeCandles,
  faEnvelope,
  faGlobe,
  faLanguage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
        <div className="titles">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="aboutTitle">
                  <strong>Contact</strong>
                </h3>
              </div>
              <div className="col">
                <h3 className="personalTitle">
                  <strong>Personal skills</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="container">
            <div className="infoRow row">
              <div className="infoCol col shadow rounded animation fade-left">
                <div className="contactContent">
                <h5>
                  <FontAwesomeIcon
                    icon={faCakeCandles}
                    size="sm"
                  ></FontAwesomeIcon>
                  : February 20th, 2001
                </h5>
                <h5>
                  <FontAwesomeIcon icon={faGlobe} size="sm"></FontAwesomeIcon>:
                  Alajuela, Costa Rica
                </h5>
                <h5>
                  <FontAwesomeIcon
                    icon={faLanguage}
                    size="sm"
                  ></FontAwesomeIcon>
                  : Spanish and English
                </h5>
                <h5>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon-contact"
                    size="1x"
                  ></FontAwesomeIcon>
                  : bcastro.dev@gmail.com
                </h5>
                <div className="socialCont container">
                  <div className="row">
                    <div className="socialTitle col">
                      
                    </div>
                  </div>
                  <div className="socialMedia row">
                    <div className="socialIcon col">
                      <a
                        className="btn btn-link btn-floating btn-md"
                        href="https://www.facebook.com/Brandon.Castro.Brenes"
                        role="button"
                      >
                        <FontAwesomeIcon
                          className="icon"
                          icon={faFacebook}
                          size="2x"
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                    <div className="socialIcon col">
                    <a
                  className="btn btn-link btn-floating btn-md"
                  href="https://www.linkedin.com/in/brandon-castro-brenes-095536203/"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faLinkedin}
                    size="2x"
                  ></FontAwesomeIcon>
                </a>
                    </div>
                    <div className="socialIcon col">
                    <a
                  className="btn btn-link btn-floating btn-md"
                  href="https://github.com/BrandonCastro932"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
                    </div>
                    <div className="socialIcon col">
                    <a
                  className="btn btn-link btn-floating btn-md"
                  href="https://www.instagram.com/brandon_castro12/"
                  role="button"
                >
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faInstagram}
                  ></FontAwesomeIcon>
                  
                </a>
                    </div>

                  </div>
                </div>
                </div>
              </div>

              <div className="infoCol col shadow rounded animation fade-right">
                <div className="content">
                <h5>Collaborative</h5>
                <h5>Responsible</h5>
                <h5>Self-motivated</h5>
                <h5>Flexible and adaptable</h5>
                <h5>Bilingual</h5>
                <h5>Self-taught</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
