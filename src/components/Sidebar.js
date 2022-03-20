import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import "./Sidebar.css";

const SideBar = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div className="navbar-icon-container">
      <div className="navbar-lines" onClick={showSideBar}>
        <div className="navbar-icon">
          <AiOutlineBars />
        </div>

        <div className={sideBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <div className="navbar-items">
              <nav>
                <ul id="navigation">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="menu.html">Menu</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                </ul>
              </nav>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
