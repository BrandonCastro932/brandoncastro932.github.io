import {
  faAndroid,
  faGithub,
  faLaravel,
  faReact,
  faSass,
  faUnity,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faA, faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Projects.scss";
class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          
          <div className="wasd row">
          <h2 className="titlecollege">College projects</h2>
            <div className="col-md-4">
              <div className="card">
                <div className="img1">
                  <img src="https://user-images.githubusercontent.com/68369543/171981569-d999caa8-1c1e-428e-9fb3-b32919a69c1f.png"></img>
                  <div className="main-text">
                    <h2>Etwist</h2>
                    <p>
                      Simple Twitter-esque Social Webpage <br></br>
                      <br></br>
                      This is a project made in my first year of college. It
                      was about making a social media webpage using Laravel as
                      BackEnd and ReactJS as Front End. The result is a look
                      similar to Twitter, using similar shapes and
                      colors.
                    </p>
                  </div>
                  <div className="card-end">
                    <i className="icons">
                      {" "}
                      <FontAwesomeIcon
                        title="React"
                        className="icons-tech"
                        size="2x"
                        icon={faReact}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="Laravel"
                        className="icons-tech"
                        size="2x"
                        icon={faLaravel}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="Sass"
                        className="icons-tech"
                        size="2x"
                        icon={faSass}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="Mysql"
                        className="icons-tech"
                        size="2x"
                        icon={faDatabase}
                      ></FontAwesomeIcon>
                    </i>

                    <a
                      href="https://github.com/BrandonCastro932/Etwist"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="Github"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="img1">
                  <img src="https://i.imgur.com/FUCFw3l.png"></img>
                  <div className="main-text">
                    <h2>My Pocket Game Collection</h2>
                    <p>
                      Mobile app to organize your game collection<br></br>
                      <br></br>
                      MPGC is an app made as a project for college. It lets
                      the user browse using their phone through a variety of
                      titles, music, screenshots and information about games
                      hosted on a database.
                    </p>
                  </div>
                  <div className="card-end">
                    <i className="icons">
                      {" "}
                      <FontAwesomeIcon
                        title="Xamarin Forms"
                        className="icons-tech"
                        size="2x"
                        icon={faAndroid}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="ASP .NET"
                        className="icons-tech"
                        size="2x"
                        icon={faServer}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="SQL Server"
                        className="icons-tech"
                        size="2x"
                        icon={faDatabase}
                      ></FontAwesomeIcon>
                    </i>
                    <a
                      href="https://github.com/BrandonCastro932/MPGC_APP"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="Github"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="img1">
                  <img src="https://user-images.githubusercontent.com/68369543/182790282-a35ab9b4-e2a8-41a7-a935-be4981a86dc2.png"></img>
                  <div className="main-text">
                    <h2>Software for Mariscos La Puebla</h2>
                    <p>
                      Business management software for Mariscos La Puebla, developed in C# Windows Forms App and SQL Server.
                      <br></br>
                      Donated to the company in an intership supervised by Castro Carazo University.
                    </p>
                  </div>
                  <div className="card-end">
                    <i className="icons">
                      <FontAwesomeIcon
                        title="Windows Forms"
                        className="icons-tech"
                        size="2x"
                        icon={faWindows}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="SQL Server"
                        className="icons-tech"
                        size="2x"
                        icon={faDatabase}
                      ></FontAwesomeIcon>
                    </i>
                    <a
                      href="https://github.com/BrandonCastro932/SistemaMLP"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="Github"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;