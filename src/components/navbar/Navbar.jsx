import "./Navbar.css";

import { useNavigate } from "react-router-dom";

import { IoColorPalette } from "react-icons/io5";
import { GiWarPick, GiOpenChest } from "react-icons/gi";

const logo = require("../../assets/logo.png");

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (goTo = String) => {
    navigate("/skyofskill/" + goTo);
    document.title = "SkyOfSkill - " + goTo.toString().toUpperCase();
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Logo"
          draggable={false}
          onClick={() => handleNavigate("home")}
        />
      </div>
      <div onClick={() => handleNavigate("colors")}>
        <h5>Colors</h5>
        <IoColorPalette />
      </div>
      <div onClick={() => handleNavigate("prestiges")}>
        <h5>Prestiges</h5>
        <GiWarPick />
      </div>
      <div onClick={() => handleNavigate("caisses")}>
        <h5>Caisses</h5>
        <GiOpenChest />
      </div>
    </div>
  );
};

export default Navbar;
