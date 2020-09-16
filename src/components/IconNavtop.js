import React from "react";
import { Link } from "react-router-dom";
import LogoBakergun from "../assets/icons/logo-bakergun.png";

function IconNavtop() {
  return (
    <Link className="logo-in-topnav navbar-brand" to="/">
      <img src={LogoBakergun} alt="" />
    </Link>
  );
}

export default IconNavtop;
