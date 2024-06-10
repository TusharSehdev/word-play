import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [DarkMode, setDarkmode] = useState("Enable Dark Mode");

  const navStyle = {
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode}`}
        style={navStyle}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={navStyle}>
            Word-Play
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={navStyle}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={navStyle}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={navStyle}
                >
                  Home
                </a>
              </li>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={props.toggleMode}
                  checked={props.mode === "dark"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                  style={navStyle}
                >
                  {DarkMode}
                </label>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
