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
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="img1">
                  <img src="https://user-images.githubusercontent.com/68369543/171981569-d999caa8-1c1e-428e-9fb3-b32919a69c1f.png"></img>
                  <div className="main-text">
                    <h2>Etwist</h2>
                    <p>
                      Simple Twitter-esque Social Webpage <br></br>
                      <br></br>
                      This is a project made in our first year of college. It
                      was about making a Social Nework webpage using Laravel as
                      BackEnd and Reactjs as Front End. The result is a look
                      similar to the one from Twitter, using similar shapes and
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
                      href="https://github.com/KillerBunny12/Etwist"
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
                      MPGC is an app made as a project for our college. It lets
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
                  <img src="https://camo.githubusercontent.com/72bae8a6f1d58f39b955b00e400c979b7e0a90b037b4e61e4f12ae34c6a9b794/68747470733a2f2f692e696d6775722e636f6d2f3844524e6d714b2e706e67"></img>
                  <div className="main-text">
                    <h2>Simple Sonic Platformer Demo</h2>
                    <p>
                      This project is a game made in the Unity engine in the
                      span of aprox. 2 months. The goal of the game is to reach
                      the end of the stage while collecting rings and defeating
                      enemies. The game is also both compatible with PC and
                      Android.
                    </p>
                  </div>
                  <div className="card-end">
                    <i className="icons">
                      <FontAwesomeIcon
                        title="Unity"
                        className="icons-tech"
                        size="2x"
                        icon={faUnity}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="Windows"
                        className="icons-tech"
                        size="2x"
                        icon={faWindows}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="Android"
                        className="icons-tech"
                        size="2x"
                        icon={faAndroid}
                      ></FontAwesomeIcon>
                    </i>
                    <a
                      href="https://github.com/KillerBunny12/SimpleSonicPlatformerDemo"
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
                  <img src="https://i.imgur.com/srlhkqb.png"></img>
                  <div className="main-text">
                    <h2>Infinity Pong</h2>
                    <p>
                      Circle pong game for Android made in Unity <br></br>
                      <br></br>
                      Simple circle pong gme for mobile devices i made as a
                      hobby project. You control the paddle and make sure the
                      ball stays inside the boundaries.
                    </p>
                  </div>
                  <div className="card-end">
                    <i className="icons">
                      <FontAwesomeIcon
                        title="Unity"
                        className="icons-tech"
                        size="2x"
                        icon={faUnity}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        title="Android"
                        className="icons-tech"
                        size="2x"
                        icon={faAndroid}
                      ></FontAwesomeIcon>
                    </i>
                    <a
                      href="https://github.com/KillerBunny12/InfinityPong"
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
                  <img src="https://i.imgur.com/6Nb9I8T.png"></img>
                  <div className="main-text">
                    <h2>Falcon Sushi</h2>
                    <p>
                      Maintenance app made on WinForms for FalconSushi during an
                      internship.
                      <br></br>
                      <br></br>
                      It allows the user to control all inventories and users.
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
                      href="https://github.com/KillerBunny12/Sistema-FalconSushi"
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