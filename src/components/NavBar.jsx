import Logo from "../assets/pizzaLogo.png";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [openLink ,setOpenLink]=useState(false)
  const toggle =()=>{
    setOpenLink(!openLink)
  }
  return (
    <nav className="navbar">
      <div className="leftSide" id={openLink? "open":"close"}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="about">
            About
          </NavLink>
          <NavLink className="nav-link" to="menu">
            Menu
          </NavLink>
          <NavLink className="nav-link" to="contact">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="rightSide">
        <div className="nav-list">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="menu">
            Menu
          </NavLink>
          <NavLink className="nav-link" to="about">
            About
          </NavLink>
          <NavLink className="nav-link" to="contact">
            Contact
          </NavLink>
        </div>
        <Menu className="burger" onClick={toggle} />
      </div>
    </nav>
  );
};

export default NavBar;
