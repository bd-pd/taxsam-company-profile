'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './tax_attorney.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';


export default function TaxAttorneyPage() {
  return (
    <div>
      <Header active="products" />
      <main>
        <section className="tax-attorney-hero">
          <div className="tax-attorney-hero-bg"></div>
          <div className="tax-attorney-hero-content">
            <h1 className="tax-attorney-hero-title">Tax Attorney</h1>
            <div className="tax-attorney-hero-subtitle">
              Trusted Legal Expertise to Manage Your Tax Liabilities
            </div>
            <div className="tax-attorney-hero-desc">
              Let our experienced tax professionals guide you.
            </div>
            <div className="tax-attorney-hero-actions">
              <a href="#" className="tax-attorney-btn primary">Learn more</a>
              <a href="#" className="tax-attorney-btn secondary">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="tax-attorney-whatwedo-section">
          <div className="tax-attorney-whatwedo-inner">
            <div className="tax-attorney-whatwedo-left">
              <div className="tax-attorney-whatwedo-brand">
                <span className="tax-attorney-whatwedo-line"></span>
                <span>[ TAXSAM.CO ]</span>
              </div>
            </div>
            <div className="tax-attorney-whatwedo-right">
              <h2 className="tax-attorney-whatwedo-title">What We Do</h2>
              <div className="tax-attorney-whatwedo-desc">
                Services that help you grow and expand
              </div>
            </div>
          </div>
          <div className="tax-attorney-whatwedo-cards">
            <div className="tax-attorney-whatwedo-card">
              Tax Examination Administration Efforts
            </div>
            <div className="tax-attorney-whatwedo-card">
              Level I Legal Effort Tax Services / Objection
            </div>
            <div className="tax-attorney-whatwedo-card">
              Level III Legal Effort Tax Services / Judicial Review
            </div>
            <div className="tax-attorney-whatwedo-card">
              Level II Legal Effort Tax Services / Appeals
            </div>
          </div>
        </section>

        <section className="tax-admin-section">
          <div className="tax-admin-inner">
            <div className="tax-admin-label">
              <span className="tax-admin-label-line"></span>
              <span>[ OUR OTHER OFFERINGS ]</span>
            </div>
            <h2 className="tax-admin-title">Tax Administration</h2>
            <div className="tax-admin-underline"></div>
            <div className="tax-admin-cards">
              <div className="tax-admin-card">Tax Payment and Collection</div>
              <div className="tax-admin-card">Tax Audits and Investigations</div>
              <div className="tax-admin-card">Tax Dispute Resolution</div>
              <div className="tax-admin-card">Tax Registration and Identification</div>
              <div className="tax-admin-card">Tax Return Preparation and Filing</div>
              <div className="tax-admin-card">Tax Calculation and Assessment</div>
            </div>
          </div>
        </section>

        <section className="tax-video-hero-section">
          <video
            className="tax-video-hero-bg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/Drive long US.mp4" type="video/mp4" />
          </video>
          <div className="tax-video-hero-content">
            <h2 className="tax-video-hero-title">
              Discover Our Commitment to Excellence in Tax Services
            </h2>
            <div className="tax-video-hero-subtitle">
              Trusted Advisors, Proven Results – Learn More About Our Mission and Values
            </div>
            <a href="#" className="tax-video-hero-btn">Contact Us</a>
          </div>
        </section>
        <ClientsPartners />
      </main>
      <Footer />
      <Script 
        src="../js/index.js" 
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
    </div>
  );
}