import { Component } from "react";
import './Navbar.scss';


class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar gradient">
          <div className="container">
            <a className="navbar-brand logo">
              Brandon Castro
            </a>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
