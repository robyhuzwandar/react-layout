import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default class Navbar extends Component {
  render() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            Tes App
          </a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <Link className="nav-item nav-link" to="/news">
            Post
          </Link>
        </nav>
      </div>;
  }
}



  /* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <ul classNameName="nav_menu">
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
     </nav> */
