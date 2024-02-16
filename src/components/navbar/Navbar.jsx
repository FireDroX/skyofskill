import "./Navbar.css";

import { useNavigate } from "react-router-dom";

import { FaCoins } from "react-icons/fa6";
import { GiWarPick } from "react-icons/gi";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = (goTo) => navigate(goTo); 
    
    return (
        <div className="navbar">
            <div onClick={() => handleNavigate("/minage")}>
                <h5>Minage</h5>
                <FaCoins />
            </div>
            <div onClick={() => handleNavigate("/prestiges")}>
                <h5>Prestiges</h5>
                <GiWarPick />
            </div>
        </div>
    )
}

export default Navbar;