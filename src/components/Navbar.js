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
        <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark portfolio-navbar gradient">
          <div class="container">
            <a class="navbar-brand logo" href="#">
              Brandon Castro
            </a>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
