import "./Navbar.css";

import { useNavigate } from "react-router-dom";

import { FaCoins, FaKey } from "react-icons/fa6";
import { GiWarPick } from "react-icons/gi";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = (goTo = String) => {
        navigate("/sos/" + goTo);
        document.title = "SkyOfSkill - " + goTo.toString().toUpperCase();
    }; 
    
    return (
        <div className="navbar">
            <div onClick={() => handleNavigate("minage")}>
                <h5>Minage</h5>
                <FaCoins />
            </div>
            <div onClick={() => handleNavigate("prestiges")}>
                <h5>Prestiges</h5>
                <GiWarPick />
            </div>
            <div onClick={() => handleNavigate("stuffs")}>
                <h5>Stuffs</h5>
                <FaKey />
            </div>
        </div>
    )
}

export default Navbar;