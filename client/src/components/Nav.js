import React from "react";
import styled from "styled-components";

const NavStyle = styled.div``;

const Nav = () => {
  return (
    <NavStyle>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <h3>Google Books</h3>
        </a>
        <div className="navbar" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">
                Saved
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavStyle>
  );
};

export default Nav;
