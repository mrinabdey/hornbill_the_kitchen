import "./Navbar.css";
import restauco from "../static/restauco.webp";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="main-menu-container">
          <div className="main-menu">
            <div className="logo-container">
              <img src={restauco} alt="hornbill logo" />
            </div>
            <div className="nav-container">
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
                  <li>
                    <a href="#">Blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog_details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="elements.html">Element</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="buttons">
            <ul>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li className="button-header">
                <a href="#" class="header-btn mr-30">
                  Book a Table
                </a>
                <a href="#" class="btn header-btn2">
                  {" "}
                  <i class="fas fa-phone-alt"></i>+10 (78) 783 3674
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
