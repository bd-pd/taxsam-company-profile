'use client'
import './css/index.css';
import Script from 'next/script';

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

      <section className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title">
            <span className="clients-title-highlight">RELIABLE</span> CLIENTS & PARTNERS
          </h2>
          <div className="clients-title-underline"></div>
          <div className="clients-logos-slider">
            <div className="clients-logos">
              <img src="/assets/images/clients/CIMB.png" alt="CIMB Niaga" />
              <img src="/assets/images/clients/Logo-Inalum-MIND-ID.png" alt="pertamina inalun" />
              <img src="/assets/images/clients/pertamina-ep-cepu.png" alt="pertamina ep cepu" />
              <img src="/assets/images/clients/pertamina-geo.png" alt="pertamina geo" />
              <img src="/assets/images/clients/PT timah.png" alt="pt timah" />
              <img src="/assets/images/clients/Emas-Antam-Indonesia-Logo.png" alt="pertamina ep" />
              <img src="/assets/images/clients/Disdik-Jakarta-DKI-Logi.png" alt="pertamina ep" />
              <img src="/assets/images/clients/Inovasi-Parking-Mandiri-Logo.png" alt="pertamina ep" />
              <img src="/assets/images/clients/Jakkon-Logo.png" alt="Jakkon-Logo" />
              <img src="/assets/images/clients/Jakpro-Logo.png" alt="Jakpro-Logo" />
              <img src="/assets/images/clients/Mwr-Logo.png" alt="Mwr-Logo" />
              <img src="/assets/images/clients/PAM-Jaya-Logo.png" alt="PAM-Jaya-Logo" />
              <img src="/assets/images/clients/Pelindo-Logo.png" alt="Pelindo-Logo" />
              <img src="/assets/images/clients/Pegadaian-Logo.png" alt="Pegadaian" />
              <img src="/assets/images/clients/PTPN-Logo.png" alt="PTPN-Logo" />
              <img src="/assets/images/clients/Pelni-min.png" alt="pelni" />
              <img src="/assets/images/clients/ASDP-min.png" alt="ASDP-min" />
              <img src="/assets/images/clients/PTPN-5-Logo.png" alt="PTPN-5-Logo" />
              <img src="/assets/images/clients/Swarnim-Logo.png" alt="Swarnim-Logo" />
              <img src="/assets/images/clients/Risco-Energy-Logo.jpg" alt="Risco-Energy-Logo" />
              {/* Duplikat logo untuk efek scroll tak terbatas */}
              <img src="/assets/images/clients/CIMB.png" alt="CIMB Niaga" />
              <img src="/assets/images/clients/Logo-Inalum-MIND-ID.png" alt="pertamina inalun" />
              <img src="/assets/images/clients/pertamina-ep-cepu.png" alt="pertamina ep cepu" />
              <img src="/assets/images/clients/pertamina-geo.png" alt="pertamina geo" />
              <img src="/assets/images/clients/PT timah.png" alt="pt timah" />
              <img src="/assets/images/clients/Emas-Antam-Indonesia-Logo.png" alt="pertamina ep" />
              <img src="/assets/images/clients/Disdik-Jakarta-DKI-Logi.png" alt="pertamina ep" />
              <img src="/assets/images/clients/Inovasi-Parking-Mandiri-Logo.png" alt="pertamina ep" />
              <img src="/assets/images/clients/Jakkon-Logo.png" alt="Jakkon-Logo" />
              <img src="/assets/images/clients/Jakpro-Logo.png" alt="Jakpro-Logo" />
              <img src="/assets/images/clients/Mwr-Logo.png" alt="Mwr-Logo" />
              <img src="/assets/images/clients/PAM-Jaya-Logo.png" alt="PAM-Jaya-Logo" />
              <img src="/assets/images/clients/Pelindo-Logo.png" alt="Pelindo-Logo" />
              <img src="/assets/images/clients/Pegadaian-Logo.png" alt="Pegadaian" />
              <img src="/assets/images/clients/PTPN-Logo.png" alt="PTPN-Logo" />
              <img src="/assets/images/clients/Pelni-min.png" alt="pelni" />
              <img src="/assets/images/clients/ASDP-min.png" alt="ASDP-min" />
              <img src="/assets/images/clients/PTPN-5-Logo.png" alt="PTPN-5-Logo" />
              <img src="/assets/images/clients/Swarnim-Logo.png" alt="Swarnim-Logo" />
              <img src="/assets/images/clients/Risco-Energy-Logo.jpg" alt="Risco-Energy-Logo" />
            </div>
          </div>
          <div className="clients-info-row">
            <div className="clients-info-left">
              <div className="clients-info-label">WE SERVE MORE THAN</div>
              <div className="clients-info-main">200+ Clients</div>
            </div>
            <div className="clients-info-desc">
              We are proud to serve a diverse clientele, ranging from individuals to large corporations. Our clients come from various industries and backgrounds, each with unique tax needs and financial business challenges.
            </div>
            <a href="#" className="clients-btn">SEE ALL CLIENTS</a>
          </div>
          <div className="clients-stats-row">
            <div className="clients-stat">
              <div className="clients-stat-main" data-target="1370">0+</div>
              <div className="clients-stat-label">Cases Handled</div>
            </div>
            <div className="clients-stat">
              <div className="clients-stat-main" data-target="1249">0+</div>
              <div className="clients-stat-label">Tax FGDs</div>
            </div>
            <div className="clients-stat">
              <div className="clients-stat-main" data-target="2922">0+</div>
              <div className="clients-stat-label">Legal Opinions</div>
            </div>
            <div className="clients-stat">
              <div className="clients-stat-main" data-target="6024">0+</div>
              <div className="clients-stat-label">TLC Students</div>
            </div>
          </div>
<div style={{ margin: "48px 0" }} />
          <div className="partner-container">
            <h2 className="partner-title">
              TAXSAM.CO UNIVERSITY PARTNER & LEGAL
            </h2>
            <div className="partner-title-underline"></div>
            <div className="partner-logos-slider">
              <div className="partner-logos partner-logos-animate">
                <img src="/assets/images/partner/Logo_Institut_Teknologi_Bandung.png" alt="ITB" className="partner-logo" />
                <img src="/assets/images/partner/Lambang_Universitas_Padjadjaran.svg.png" alt="UNPAD" className="partner-logo" />
                <img src="/assets/images/partner/LAMBANG_UNTAR.png" alt="UNTAR" className="partner-logo" />
                <img src="/assets/images/partner/logo-kemenkeu-black-font.png" alt="Kemenkeu" className="partner-logo" />
                <img src="/assets/images/partner/logo-kemnaker.png" alt="Kemnaker" className="partner-logo" />
                <img src="/assets/images/partner/Makara_of_Universitas_Indonesia.svg.png" alt="UI" className="partner-logo" />
                <img src="/assets/images/partner/logo-bnsp.png" alt="BNSP" className="partner-logo" />
                <img src="/assets/images/partner/uia.png" alt="UIA" className="partner-logo" />
                {/* Duplikat untuk efek infinite scroll */}
                <img src="/assets/images/partner/Logo_Institut_Teknologi_Bandung.png" alt="ITB" className="partner-logo" />
                <img src="/assets/images/partner/Lambang_Universitas_Padjadjaran.svg.png" alt="UNPAD" className="partner-logo" />
                <img src="/assets/images/partner/LAMBANG_UNTAR.png" alt="UNTAR" className="partner-logo" />
                <img src="/assets/images/partner/logo-kemenkeu-black-font.png" alt="Kemenkeu" className="partner-logo" />
                <img src="/assets/images/partner/logo-kemnaker.png" alt="Kemnaker" className="partner-logo" />
                <img src="/assets/images/partner/Makara_of_Universitas_Indonesia.svg.png" alt="UI" className="partner-logo" />
                <img src="/assets/images/partner/logo-bnsp.png" alt="BNSP" className="partner-logo" />
                <img src="/assets/images/partner/uia.png" alt="UIA" className="partner-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      </section>
      <Script 
        src="/js/index.js" 
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Script berhasil dimuat dan dieksekusi');
        }}
        onReady={() => {
          console.log('Script ready');
        }}
        onError={(e) => {
          console.error('Script error:', e);
        }}
      />
    </>
  );
}
