import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../myLogo.png";

// const footerStyle = {
//   position: "absolute",
//   left: 0,
//   bottom: 0,
//   right: 0,
// };
//style={footerStyle}
const footerImg = {
  width: "100%",
  height: "auto",
};

const Footer = ({ user }) => {
  return (
    <div className="footer fixed-bottom navbar-dark bg-dark">
      <div className="">
        <Link className="nav-item footer-item footer-img" to="/movies">
          <img id="" src={logo} alt="logo" style={footerImg} />
        </Link>
        <Link className="nav-item footer-item" to="/movies">
          Movies
        </Link>
        <Link className="nav-item footer-item" to="/customers">
          Customers
        </Link>
        <Link className="nav-item footer-item" to="/rentals">
          Rentals
        </Link>
        {!user && (
          <React.Fragment>
            <Link className="nav-item footer-item" to="/login">
              Login
            </Link>
            <Link className="nav-item footer-item" to="/register">
              Register
            </Link>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <Link className="" to="/profile">
              {user.name}
            </Link>
            <Link className="" to="/logout">
              Logout
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Footer;
