import "../App.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer container-fluid align-bottom">
      <div className="row">
        <div className="col footer-col">
          <h1 className="footer-col-title">Get Help</h1>
          <ul className="footer-link">
            <li>
              <Link to="/">Resource Link</Link>
            </li>
          </ul>
        </div>
        <div className="col footer-col">
          <h1 className="footer-col-title">Connect</h1>
          <div className="d-flex justify-content-evenly ">
            <Link className="social-icon" to="https://facebook.com">
              <FaFacebook />
            </Link>
            <Link className="social-icon" to="https://instagram.com">
              <FaInstagram />
            </Link>
            <Link className="social-icon" to="https://twitter.com">
              <FaTwitter />
            </Link>
            <Link className="social-icon" to="https://linkedin.com">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="col">
          <h1 className="footer-col-title">Site Map</h1>
          <ul className="footer-link">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
