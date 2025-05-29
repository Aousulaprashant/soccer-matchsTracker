import React from "react";
import LOGO from "../IMG/soccer.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div
        className="logo-section"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={LOGO} alt="soccer Logo" className="logo-img" />
        <h1 className="logo-text">
          Soccer<span>Verse</span>
        </h1>
      </div>

      <nav className="nav-links">
        <Link to="/" className="active">
          Home
        </Link>
        <div className="dropdown">
          <Link to="/aboutUs">About Us</Link>
        </div>
        <div className="dropdown">
          <Link to="/schedule" s>
            Upcoming Schedule
          </Link>
        </div>
      </nav>

      <div className="header-right">
        <a href="mailto:sportsorcateam@gmail.com" className="call-btn">
          📞 Call Us
        </a>
      </div>
    </header>
  );
};

export default Header;
