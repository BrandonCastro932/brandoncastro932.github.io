import { Component } from "react";
import "./Skills.scss";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faSignal,
  faSignal5,
} from "@fortawesome/free-solid-svg-icons";

class Skills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="comp">
        <h3 className="skTitle">Professional skills</h3>
        <div class="skContainer container">
          <div class="skRow row">
            <div class="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">C#</h5>
            </div>
            <div class="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">.NET</h5>
            </div>
            <div class="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">Xamarin Forms</h5>
            </div>
          </div>

          <div class="skRow row">
            <div class="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">ASP .NET</h5>
            </div>
            <div class="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">Laravel</h5>
            </div>
            <div class="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">SQL Server</h5>
            </div>
          </div>

          <div class="skRow row">
            <div class="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">MySQL</h5>
            </div>
            <div class="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">HTML5</h5>
            </div>
            <div class="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">CSS</h5>
            </div>
          </div>

          <div class="skRow row">
          <div class="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">Javascript</h5>
            </div>
            <div class="skCol col shadow p-1 mb-1 rounded">
                <h5 className="skItem">NodeJS</h5>
            </div>
            
            <div class="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">ReactJS</h5>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Skills;
