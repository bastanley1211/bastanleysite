import "../App.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <footer className="site-footer container-fluid align-bottom">
      <div className="row">
        <div className="col-12 col-md-4 footer-col">
          <h1 className="footer-col-title">Get Help</h1>
          <ul className="footer-link">
            <li>
              <a href="https://blog.bethanystanley.co">Blog</a>
            </li>
            <li>
              <a href="https://dev.bethanystanley.co">Website Services</a>
            </li>
            <li>
              <a href="https://music.bethanystanley.co">Background Music</a>
            </li>
            <li>
              <a href="https://music.bethanystanley.co">Music Lessons</a>
            </li>
            <li>
              <a href="https://notary.bethanystanley.co">Notary Services</a>
            </li>
            <li>
              <a href="https://writer.bethanystanley.co">Need a Blog Post</a>
            </li>
            <li>
              <a href="https://writer.bethanystanley.co">
                Need Written Content
              </a>
            </li>
            <li>
              <a href="https://writer.bethanystanley.co">Need a Writer</a>
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
