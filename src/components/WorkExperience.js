import "./WorkExperience.scss";
import React, { Component } from "react";

class WorkExperience extends Component {
  constructor() {
    super();
    this.state = {};
    }

 
  render() {

    return (
     <div className="container">
       <div className="title">
        <h2 className="text-center"><strong>Work experience</strong></h2>
      </div>
      <div className="cards row">
     
      <div className="col-md-4">
              <div className="card">
                <div className="img1">
                  <img src="https://user-images.githubusercontent.com/68369543/182790282-a35ab9b4-e2a8-41a7-a935-be4981a86dc2.png" alt="project"></img>
                  <div className="main-text">
                  <h2>Software for Mariscos La Puebla</h2>
                    <h5>Worked as:</h5>
                    <p>
                      <strong>Freelance Software Developer</strong> <br></br>
                      <br></br>
                      <strong>Responsabilities:</strong>
                      <br></br>
                      Design, coding, deploying, support and maintenance of a business software for the company.
                    </p>
                    <h5 className="fromDate">From January, 2022 - May, 2022</h5>
                  </div>
                  <div className="card-end">
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card">
                <div className="img1">
                  <img src="https://ii.ct-stc.com/3/logos/empresas/2018/01/25/software-enterprise-services-sac-FEB7B315BD2564ED165020899thumbnail.png" alt="project"></img>
                  <div className="main-text">
                    <h2>Software Enterprise Services</h2>
                    <h5>Currently working as:</h5>
                    <p>
                      <strong>RPGLE, Java & .NET intern Developer</strong> <br></br>
                      <br></br>
                      <strong>Responsabilities:</strong>
                      <br></br>
                      Coding, support and maintenance of eIBS banking systems in Costa Rica, Ecuador and Peru.
                    </p>
                    <h5 className="fromDate">From August, 2022 - Actual</h5>
                  </div>
                  
                </div>
              </div>
            </div>

      </div>    
     </div>
    );
  }
}

export default WorkExperience;
