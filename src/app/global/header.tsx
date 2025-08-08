import React from 'react';
import '../css/header.css';

interface HeaderProps {
  active?: string;
}

export default function Header({ active }: HeaderProps) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src="/assets/images/TaxsamLogo.png" alt="TAXSAM.CO Logo" />
          </a>
        </div>
        <nav className="nav-links">
          <a href="/about" className={active === 'about' ? 'active' : ''}>ABOUT US</a>
          <a href="/our_clients" className={active === 'clients' ? 'active' : ''}>OUR CLIENTS</a>
          <div className="dropdown">
            <a href="#" className={active === 'products' ? 'active' : ''}>
              PRODUCTS & SERVICES <span style={{ fontSize: "10px" }}>&#x25BE;</span>
            </a>
            <div className="dropdown-content">
              <div className="submenu">
                <a href="#">
                  Taxam.co Services{" "}
                  <span style={{ fontSize: "10px" }}>&#x25B6;</span>
                </a>
                <div className="sub-dropdown">
                    <a href="/taxsam.co_service/tax_attorney">Tax Attorney</a>
                  <a href="/taxsam.co_service/tax_legal_opinion">Tax Legal Opinion</a>
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
            <a href="#" className={active === 'career' ? 'active' : ''}>
              TAXSAM CAREER <span style={{ fontSize: "10px" }}>&#x25BE;</span>
            </a>
            <div className="dropdown-content">
              <div className="submenu">
                <a href="#">Internship</a>
              </div>
            </div>
          </div>
          <a href="#" className={active === 'insight' ? 'active' : ''}>INSIGHT</a>
        </nav>
        <div className="login-btn">
          <a href="#">LOGIN</a>
        </div>
      </div>
    </header>
  );
}
