import { Component } from "react";
import "./Greetings.scss";

class Greetings extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="title-name">
          <h2>
            <strong>Brandon Castro Brenes</strong>
          </h2>
          <h4>Full stack software developer</h4>
        </div>
        <div className="about-me ">
          <p>
            Proactive and personable, aspiring professional software engineer
            and honored student at Castro Carazo University. Collaborative and
            passionate about coding and currently looking for a job to
            improve my skills.
          </p>
          
        </div>
      </div>
    );
  }
}
export default Greetings;
