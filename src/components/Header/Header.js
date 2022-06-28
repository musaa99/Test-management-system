import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
    <div className="header">
      <Link to="/" className="title">
        Musa Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
    </React.Fragment>
  );
};

export default Header;
