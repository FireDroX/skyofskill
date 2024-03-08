import "./Navbar.css";

import { useNavigate } from "react-router-dom";

import { FaCoins } from "react-icons/fa6";
import { GiWarPick } from "react-icons/gi";

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
          onClick={() => handleNavigate("")}
        />
      </div>
      <div onClick={() => handleNavigate("minage")}>
        <h5>Minage</h5>
        <FaCoins />
      </div>
      <div onClick={() => handleNavigate("prestiges")}>
        <h5>Prestiges</h5>
        <GiWarPick />
      </div>
    </div>
  );
};

export default Navbar;