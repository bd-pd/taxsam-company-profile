'use client'
import './css/index.css';
import Script from 'next/script';
import Footer from './global/Footer';
import Header from './global/header';

export default function Home() 
{
  return (
    <>
      <Header />
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
        <div style={{ margin: "88px 0" }} />
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
      
      {/* Section Our Services */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <div className="services-header-row">
              <div className="services-header-left">
                <span className="services-brand-line"></span>
                <span className="services-brand-text">[ TAXSAM.CO ]</span>
              </div>
              <div className="services-header-right">
                <h2 className="services-title">Our Services</h2>
                <div className="services-subtitle">
                  Your Partner in Tax Consulting and Innovative Business Solutions
                </div>
              </div>
            </div>
          </div>
          <div className="services-cards">
            {/* Tax Consulting Card */}
            <div className="services-card services-card-tax">
              <div className="services-card-img-container">
                <img
                  src="/assets/images/material/jabat tangan.jpg"
                  alt="Tax Consulting"
                  className="services-card-img"
                />
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">Tax Consulting</h3>
                <div className="services-card-desc">
                  Comprehensive Tax Consulting Services for Businesses and Individuals
                </div>
                <a href="#" className="services-card-btn">Learn More</a>
              </div>
            </div>
            
            {/* Business Solution Card */}
            <div className="services-card services-card-business">
              <div className="services-card-img-container">
                <img
                  src="/assets/images/material/analisis.jpg"
                  alt="Business Solution"
                  className="services-card-img"
                />
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">Business Solution</h3>
                <div className="services-card-desc">
                  Tailored Business Solutions to Drive Growth, Efficiency, and Sustainable Success
                </div>
                <a href="#" className="services-card-btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section About/Highlight */}
      <section className="about-highlight-section">
        <div className="about-highlight-bg"></div>
        <div className="about-highlight-content">
          <div className="about-highlight-title-small">Who We Are</div>
          <h2 className="about-highlight-title-big">We Provide Quality Tax Services</h2>
          <div className="about-highlight-desc">
            TAXSAM.CO, a tax attorney and consultant firm founded in 2015, offers tax and business solutions for both corporations and individuals in Indonesia. Led by S.R Soejono, a tax expert with over 30 years of experience, their team of professionals provides a range of services.
          </div>
          <a href="#" className="about-highlight-btn">DISCOVER OUR VALUES</a>
        </div>
      </section>
      {/* Section Our product */}
      <section className="product-section">
        <div style={{ margin: "250px 0" }} />
        <div className="product-container"></div>
        <div className="product-header">
          <div className="services-header-row">
              <div className="services-header-left">
                <span className="services-brand-line"></span>
                <span className="services-brand-text">[ TAXSAM.CO ]</span>
              </div>
              <div className="services-header-right">
                <h2 className="services-title">Our Products</h2>
                <div className="services-subtitle">
                 The Best Investment for Your Tax Future Starts Here
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Section TLC Learning Center */}
      
      <section className="tlc-section">
        <video
          className="tlc-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/TLC video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="tlc-content">
          <div className="tlc-title-small">MASTERING TAXES TOGETHER</div>
          <h2 className="tlc-title-big">TAXSAM LEARNING CENTER (TLC)</h2>
          <div className="tlc-desc">
            Taxsam.co Learning Center is dedicated to providing individuals, businesses, and tax professionals with the resources and education needed to navigate the complex world of taxation with confidence.
          </div>
          <a href="#" className="tlc-btn">Explore TLC</a>
          <span className="tlc-live-badge">LIVE</span>
        </div>
      </section>
      <section className="tlc-section">
        <video
          className="tlc-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/baca buku.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="tlc-content">
          <div className="tlc-title-small">ACCES YOUR TAX LIBRARY</div>
          <h2 className="tlc-title-big">TAXSAM TAXBASE</h2>
          <div className="tlc-desc">
            Unlock a world of tax knowledge with our comprehensive database. Start your free trial today and experience the power of our tax library database!
          </div>
          <a href="#" className="tlc-btn">Discover Taxbase</a>
        
        </div>
      </section>
      <section className="tlc-section tlc-section-taxbase">
        <div className="tlc-bg-slideshow">
          <img src="/assets/images/material/tax1.jpg" alt="Taxbase Slide 1" className="tlc-slide tlc-slide-1" />
          <img src="/assets/images/material/tax2.jpg" alt="Taxbase Slide 2" className="tlc-slide tlc-slide-2" />
        </div>
        <div className="tlc-content">
          <div className="tlc-title-small">SMART IN-HOUSE TRAINING SOLUTIONS.​</div>
          <h2 className="tlc-title-big">IN HOUSE TRAINING</h2>
          <div className="tlc-desc">
           In-house tax and business training isn't just about individual development – it's about building a more knowledgeable, confident, and cohesive team. By learning together, your employees will develop a shared understanding and a stronger ability to collaborate effectively. Empower your internal experts and foster a culture of continuous growth within your organization.
          </div>
          <a href="#" className="tlc-btn">Contact US</a>
        </div>
      </section>
      <Footer />
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
