import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="main-header header-style-one">
      <div className="header-lower">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link to="/"><img src={logo} alt="Venturi Logo" title="venturi-logo" /></Link>
            </div>
          </div>

          <div className="nav-outer">
            <nav className="nav main-menu">
              <ul className="navigation">
                <li className="current"><Link to="/">Home</Link></li>
                <li><Link to="/about">About Venturi</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>

            <div className="outer-box">
              <Link to="/contact" className="theme-btn btn-style-one bg-theme-color3">
                <span className="btn-title">Sign up for a FREE CONSULTATION</span>
              </Link>
              <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>

        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/"><img src={logo} alt="" title="" /></Link>
            </div>
            <div className="close-btn"><i className="icon fa fa-times"></i></div>
          </div>

          <ul className="navigation clearfix">
          </ul>

          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <a href="tel:9004997740">+91-9004997740</a>
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </nav>
      </div>

      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/"><img src={logo} alt="" title="" /></Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                  </ul>
                </div>
              </nav>
              <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;