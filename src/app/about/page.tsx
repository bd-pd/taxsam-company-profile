import '../css/other/about.css';
import '../css/index.css';
import Footer from '../global/Footer';
import Header from '../global/header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="about-section">
        <video
          className="about-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/Drive long US.mp4" type="video/mp4" />
        </video>
        <div className="about-hero-content">
          <h1 className="about-hero-title">It's Been A Long Drive For Us</h1>
          <div className="about-hero-subtitle">
            Know our journey and the Experts behind it
          </div>
        </div>
      </section>
      <section className="about-who-section">
        <div className="about-who-header">
          <div className="about-who-label">
            <span className="about-who-label-line"></span>
            <span>[ ABOUT US ]</span>
          </div>
          <h2 className="about-who-title">WHO WE ARE</h2>
          <div className="about-who-underline"></div>
        </div>
        <div className="about-who-desc-box">
          <div className="about-who-desc">
            PT Solusi Allindo Mandiri, often known as TAXSAM.CO, was founded in 2015 as a tax consultant and lawyer. TAXSAM.CO covers a wide range of business and tax issues. We offer the greatest, quickest, and most intelligent services to help clients’ businesses thanks to a team of qualified and experienced professionals with a focus on law, company management, and finance, as well as a robust and wide-ranging network. In accordance with the relevant tax laws in Indonesia and for worldwide business objectives, Taxsam.co is dedicated to offering better, quicker, and more intelligent services for organizing and resolving problems or disputes with tax authorities. TAXSAM.CO specializes on offering tax legal compliance, strategies, and business management services pertaining to tax laws and regulations in order to handle the difficulties of the global business environment. Taxsam.co is here to assist in tax administration matters, legal efforts in court, and all tax-related issues, so that every client (corporate or individual) can focus on growing their business.
          </div>
        </div>
        <div className="about-core-container">
          <div className="about-core-left">
            <h2 className="about-core-title">CORE VALUES</h2>
            <div className="about-core-underline"></div>
            <a href="#" className="about-core-btn">LEARN MORE</a>
          </div>
          <div className="about-core-right">
            <div className="about-core-desc-box">
              We’re committed to helping each and every employee explore their potential and find the right career path within our company. From entry-level roles to leadership positions, we provide resources and opportunities for growth that allow you to thrive in your career.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}