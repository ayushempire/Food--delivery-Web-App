import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  //  Css for Nav brand
  var Nav_heading = {
    fontFamily: "Bebas Neue, sans-serif",
  };
  // end of Css Nav brand

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-1 fst-bold"
            to="/"
            style={Nav_heading}
          >
            MyFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fw-bold"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white font-weight-light fw-bold"
                  to="/Login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/Signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
