import React from 'react';
import '../css/header.css';

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/assets/images/TaxsamLogo.png" alt="TAXSAM.CO Logo" />
        </div>
        <nav className="nav-links">
          <a href="#">ABOUT US</a>
          <a href="#">OUR CLIENTS</a>
          <div className="dropdown">
            <a href="#">
              PRODUCTS & SERVICES <span style={{ fontSize: "10px" }}>&#x25BE;</span>
            </a>
            <div className="dropdown-content">
              <div className="submenu">
                <a href="#">
                  Taxam.co Services{" "}
                  <span style={{ fontSize: "10px" }}>&#x25B6;</span>
                </a>
                <div className="sub-dropdown">
                  <a href="#">Tax Attorney</a>
                  <a href="#">Tax Legal Opinion</a>
                  <a href="#">Tax Compliance</a>
                  <a href="#">Transfer Pricing</a>
                </div>
              </div>
              <div className="submenu">
                <a href="#">
                  Bigsam.co Services{" "}
                  <span style={{ fontSize: "10px" }}>&#x25B6;</span>
                </a>
                <div className="sub-dropdown">
                  <a href="#">Payroll Service</a>
                  <a href="#">Accounting</a>
                </div>
              </div>
              <div className="submenu">
                <a href="#">
                  Products Digital{" "}
                  <span style={{ fontSize: "10px" }}>&#x25B6;</span>
                </a>
                <div className="sub-dropdown">
                  <a href="#">Tax Learning Center</a>
                  <a href="#">Tax Base</a>
                  <a href="#">
                    <b>
                      Business Learning Center
                      <br />
                      (Coming Soon)
                    </b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">
              TAXSAM CAREER <span style={{ fontSize: "10px" }}>&#x25BE;</span>
            </a>
            <div className="dropdown-content">
              <div className="submenu">
                <a href="#">Internship</a>
              </div>
            </div>
          </div>
          <a href="#">INSIGHT</a>
        </nav>
        <div className="login-btn">
          <a href="#">LOGIN</a>
        </div>
      </div>
    </header>
  );
}
