import "./WorkExperience.scss";
import React, { Component } from "react";

class WorkExperience extends Component {
  constructor() {
    super();
    this.state = {};
    }

 
  render() {

    return (
      <div className="workComponent">
        <h3><strong>Work experience</strong></h3>
        <div className="workContainer container">
          <div className="row justify-content-center">
            <div className="workCol square-animation col shadow p-1 mb-1 rounded">
              <div className="colContent">
                <h4>Software Enterprice Services</h4>
                <h6>Location: Lima, Perú</h6>
                <p>
                  Working as a remote Software Engineer intern for Software Enterprice
                  Services
                </p>
                <h5>August, 2022 - Actual</h5>
                
              </div>
            </div>
           {/* 
             For adding more jobs to this column, just add two more divs
            <div className="workCol col shadow p-1 mb-1 rounded">
              <h3>Work 2</h3>
            </div>

            <div className="workCol col shadow p-1 mb-1 rounded">
              <h3>Work 3</h3>
            </div>
           
           */}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
