import './css/index.css';
export default function Home() 
{

  return (
    <>
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

      <section className="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/assets/videos/city.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>
            Navigating Taxes,
            <br />
            Simplifying Finances
          </h1>
          <a href="#" className="cta-button">
            See What Matters
          </a>
          <a href="#" className='book-button'>
            Book a Consultation
          </a>
        </div>
        {/* Hero Footer */}
        <div className="hero-footer">
            <div className="hero-footer-icons">
            <a href="#" className="hero-icon" aria-label="LinkedIn">
              <img src="/assets/icons/linked.svg" alt="LinkedIn" width={28} height={28} />
            </a>
            <a href="#" className="hero-icon" aria-label="YouTube">
              <img src="/assets/icons/youtube.svg" alt="YouTube" width={28} height={28} />
            </a>
            <a href="#" className="hero-icon" aria-label="Instagram">
              <img src="/assets/icons/instagram.svg" alt="Instagram" width={28} height={28} />
            </a>
            <a href="#" className="hero-icon" aria-label="Email">
              <img src="/assets/icons/email.svg" alt="Email" width={28} height={28} />
            </a>
            </div>
          <div className="hero-footer-text">
            <span className="hero-footer-brand">TAXSAM.CO</span>
            <span className="hero-footer-smarter"> SMARTER </span>
            <span className="hero-footer-desc">TAX CONSULTANT</span>
          </div>
        </div>
      </section>
    </>
  );
}
