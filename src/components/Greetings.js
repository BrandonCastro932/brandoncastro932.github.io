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
          <div className="dived"><h4 className="textChange">Full stack software developer..</h4></div>
        </div>
        <div className="about-me ">
          <p className="me">
            Proactive and personable, costa rican junior software engineer
            and honor student at Castro Carazo University. Collaborative and
            passionate about coding and currently looking for a job to
            improve my skills.
          </p>
          
        </div>
      </div>
    );
  }
}
export default Greetings;
