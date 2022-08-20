import { Component } from "react";
import "./Skills.scss";

class Skills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="comp">
        <h3 className="skTitle"><strong>Professional skills</strong></h3>
        <div className="skContainer container">
          <div className="skRow row">
            <div className="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">C#</h5>
            </div>
            <div className="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">.NET</h5>
            </div>
            <div className="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">Xamarin Forms</h5>
            </div>
          </div>

          <div className="skRow row">
            <div className="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">ASP .NET</h5>
            </div>
            <div className="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">Laravel</h5>
            </div>
            <div className="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">SQL Server</h5>
            </div>
          </div>

          <div className="skRow row">
            <div className="skCol col shadow p-1 mb-1 rounded">
            <h5 className="skItem">MySQL</h5>
            </div>
            <div className="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">HTML5</h5>
            </div>
            <div className="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">CSS</h5>
            </div>
          </div>

          <div className="skRow row">
          <div className="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">Javascript</h5>
            </div>
            <div className="skCol col shadow p-1 mb-1 rounded">
                <h5 className="skItem">NodeJS</h5>
            </div>
            
            <div className="skCol col shadow p-1 mb-1 rounded">
              <h5 className="skItem">ReactJS</h5>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Skills;
