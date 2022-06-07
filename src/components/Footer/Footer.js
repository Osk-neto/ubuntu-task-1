import "./Footer.css";
import logo from "../Navbar/logo.jpg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-flex">
        <h2>Oscar Ubuntu</h2>
        <img src={logo} alt="logo" />
      </div>
      <p>© Copyright 2022 Oscar Ubuntu</p>
    </footer>
  );
}
export default Footer;
