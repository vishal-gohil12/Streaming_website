import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-10 h-56">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Company</h2>
            <ul className="list-none text-base">
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Services</h2>
            <ul className="list-none">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Privacy</h2>
            <ul className="list-none">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Follow Us</h2>
            <ul className="flex space-x-4 justify-center">
              <li>
                <a
                  href="https://instagram.com/divyanshujha86?igshid=MzRlODBiNWFlZA=="
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                  <span className="ml-2">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/VishalG55498637"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  <span className="ml-2">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/parth_kalma?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                  <span className="ml-2">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
