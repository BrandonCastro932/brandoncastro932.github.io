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
        <nav class="navbar navbar-expand-lg fixed-top portfolio-navbar gradient">
          <div class="container">
            <a class="navbar-brand logo">
              Brandon Castro
            </a>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
