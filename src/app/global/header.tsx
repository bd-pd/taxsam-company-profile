'use client'
import React, { useState, useEffect } from 'react';
import '../css/header.css';
import '../css/responsif/navbar-responsif.css';

interface HeaderProps {
  active?: string;
}

export default function Header({ active }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('.nav-links') && !target.closest('.hamburger')) {
        setMenuOpen(false);
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Handle dropdown toggle
  const handleDropdownToggle = (name: string, event: React.MouseEvent) => {
    event.preventDefault();
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  // Handle submenu toggle
  const handleSubmenuToggle = (name: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src="/assets/images/TaxsamLogo.png" alt="TAXSAM.CO Logo" />
          </a>
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <div className="nav-section">
            <a href="/about" className={active === 'about' ? 'active' : ''}>ABOUT US</a>
          </div>
          
          <div className="nav-section">
            <a href="/our_clients" className={active === 'clients' ? 'active' : ''}>OUR CLIENTS</a>
          </div>

          <div className={`dropdown nav-section${dropdownOpen === 'products' ? ' open' : ''}`}>
            <a 
              href="#" 
              className={`dropdown-toggle ${active === 'products' ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle('products', e)}
            >
              PRODUCTS & SERVICES <span className="arrow">&#x25BE;</span>
            </a>
            <div className="dropdown-content">
              <div className={`submenu${dropdownOpen === 'products-taxam' ? ' open' : ''}`}>
                <a 
                  href="#" 
                  className="submenu-toggle"
                  onClick={(e) => handleSubmenuToggle('products-taxam', e)}
                >
                  Taxam.co Services{" "}
                  <span className="arrow">&#x25B6;</span>
                </a>
                <div className="sub-dropdown">
                  <a href="/services/tax-attorney">Tax Attorney</a>
                  <a href="/services/tax-legal-opinion">Tax Legal Opinion</a>
                  <a href="/services/tax-complience">Tax Compliance</a>
                  <a href="/services/transfer-pricing">Transfer Pricing</a>
                </div>
              </div>
              <div className={`submenu${dropdownOpen === 'products-bigsam' ? ' open' : ''}`}>
                <a 
                  href="#" 
                  className="submenu-toggle"
                  onClick={(e) => handleSubmenuToggle('products-bigsam', e)}
                >
                  Bigsam.co Services{" "}
                  <span className="arrow">&#x25B6;</span>
                </a>
                <div className="sub-dropdown">
                  <a href="#">Payroll Service</a>
                  <a href="#">Accounting</a>
                </div>
              </div>
              <div className={`submenu${dropdownOpen === 'products-digital' ? ' open' : ''}`}>
                <a 
                  href="#" 
                  className="submenu-toggle"
                  onClick={(e) => handleSubmenuToggle('products-digital', e)}
                >
                  Products Digital{" "}
                  <span className="arrow">&#x25B6;</span>
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

          <div className={`dropdown nav-section${dropdownOpen === 'career' ? ' open' : ''}`}>
            <a 
              href="#" 
              className={`dropdown-toggle ${active === 'career' ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle('career', e)}
            >
              TAXSAM CAREER <span className="arrow">&#x25BE;</span>
            </a>
            <div className="dropdown-content">
              <div className="submenu">
                <a href="#">Internship</a>
              </div>
            </div>
          </div>

          <div className="nav-section">
            <a href="#" className={active === 'insight' ? 'active' : ''}>INSIGHT</a>
          </div>
        </nav>
        <div className="login-btn">
          <a href="#">LOGIN</a>
        </div>
      </div>
    </header>
  );
}

