import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
// import { SidebarData } from './SidebarData.jsx';
import "./Navbar.css";
import { IconContext } from "react-icons";
// import { Home } from '@mui/icons-material';
import Home from "../pages/Home";
import Employees from "../pages/Employees";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  // const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(sidebar);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="dshbrd">
              <Link to="/" element={<Home />}>
                <h2>DashBoard</h2>
              </Link>
            </div>
            <div className="dshbrd">
              <Link to="/employees" element={<Employees />}>
                <h2>Employees</h2>
              </Link>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
