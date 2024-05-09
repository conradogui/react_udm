// 2 - links com react-router
import React from "react";
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
      <NavLink
        to="/"
        // className={({ isActive }) =>
        //   isActive ? "está ativo" : "não está ativo"
        // }
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
