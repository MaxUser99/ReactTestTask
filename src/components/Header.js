import React from "react";

const Header = ({ login }) => (
  <div className="navbar navbar-dark bg-dark box-shadow">
    <div className="container d-flex justify-content-center">
      <p className="header-text m-3">Hello {login}</p>
    </div>
  </div>
);

export default Header;
