import "./Navbar.css";

import { createElement } from "react";
import { useNavigate } from "react-router-dom";

import { FaSackDollar } from "react-icons/fa6";
import { IoColorPalette } from "react-icons/io5";
import { GiWarPick, GiOpenChest } from "react-icons/gi";

const logo = require("../../assets/logo.png");

const componentsMap = {
  Caisses: GiOpenChest,
  Prestiges: GiWarPick,
  Minage: FaSackDollar,
};

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

      {["Minage", "Prestiges", "Caisses"].map((el, i) => (
        <div onClick={() => handleNavigate(el)} key={el + i}>
          <h5>{el}</h5>
          {createElement(componentsMap[el])}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
