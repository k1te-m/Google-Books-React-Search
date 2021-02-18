import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div``;

const Header = () => {
  return (
    <HeaderStyle className="container">
      <div className="row">
        <h1>(React) Google Books Search</h1>
      </div>
      <div className="row">
        <h4>Search for and Save Books of Interest</h4>
      </div>
    </HeaderStyle>
  );
};

export default Header;
