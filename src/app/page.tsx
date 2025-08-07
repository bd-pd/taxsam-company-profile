'use client'
import './css/index.css';
import Script from 'next/script';
import Footer from './global/Footer';
import Header from './global/header';
import ClientsPartners from './global/clienst_partners';
import { CiLinkedin,CiYoutube,CiInstagram  } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() 
{
  return (
    <>
      <head>
        <title>TAXSAM.CO - Konsultasi Perpajakan & Bisnis Profesional</title>
        <meta name="description" content="TAXSAM.CO adalah konsultan pajak dan bisnis profesional. Layanan: konsultasi perpajakan, tax attorney, legal opinion, compliance, transfer pricing, payroll, akuntansi, training, dan solusi bisnis digital." />
        <meta name="keywords" content="konsultan pajak, konsultasi pajak, tax consultant, tax attorney, legal opinion, compliance, transfer pricing, payroll, akuntansi, training pajak, solusi bisnis, taxsam, bigsam, tax learning center, tax base" />
        <link rel="canonical" href="https://www.taxsam.co/" />
        <meta property="og:title" content="TAXSAM.CO - Konsultasi Perpajakan & Bisnis Profesional" />
        <meta property="og:description" content="Konsultan pajak & bisnis profesional. Solusi pajak, legal, payroll, akuntansi, training, dan digital untuk perusahaan & individu." />
        <meta property="og:url" content="https://www.taxsam.co/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/TaxsamLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
              <CiLinkedin size={28} />
              </a>
              <a href="#" className="hero-icon" aria-label="YouTube">
              <CiYoutube size={28} />
              </a>
                <a href="#" className="hero-icon" aria-label="Instagram">
                <CiInstagram size={28} />
                </a>
                <a href="mailto:info@taxsam.co" className="hero-icon" aria-label="Email">
                <HiOutlineMail size={28} />
                </a>
            </div>
          <div className="hero-footer-text">
            <span className="hero-footer-brand">TAXSAM.CO</span>
            <span className="hero-footer-smarter"> SMARTER </span>
            <span className="hero-footer-desc">TAX CONSULTANT</span>
          </div>
        </div>
      </section>
      
      <ClientsPartners />
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
