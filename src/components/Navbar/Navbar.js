import NavMenu from "./NavMenu";
import logo from "./logo.jpg";
import "./Navbar.css";

function Navbar() {
  function toggleHandler() {
    const nav = document.querySelector("#navLinks");
    nav.classList.toggle("nav-open");
  }
  return (
    <header>
      <div className="navbar">
        <div className="container flex-nav">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <h2>Oscar Ubuntu</h2>
            <button
              className="nav-toggle"
              id="navToggle"
              onClick={toggleHandler}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
