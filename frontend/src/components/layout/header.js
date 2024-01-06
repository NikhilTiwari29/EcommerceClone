import React from "react";
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to={"/"} className="navbar-ecommerce">
              Nikhil Ecommerce
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink  to={"/"} className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={"/category"} className="nav-link " aria-current="page">
                  category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={"/SIgnUp"} className="nav-link">
                  SIgnUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={"/LogIn"} className="nav-link">
                   LogIn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={"/Cart"} className="nav-link">
                  Cart(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
