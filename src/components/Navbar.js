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
            <button
              class="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span class="visually-hidden">Toggle navigation</span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNav" class="collapse navbar-collapse">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="projects-grid-cards.html">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="cv.html">
                    CV
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="hire-me.html">
                    Hire me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
