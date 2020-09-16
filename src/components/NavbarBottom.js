import React from "react";
import { Link } from "react-router-dom";

export default function NavbarBottom() {
  return (
    <nav className="navbar-navbar-dark-bg-dark">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <Link to="/game" className="navbar-brand">
        Game
      </Link>
    </nav>
  );
}
