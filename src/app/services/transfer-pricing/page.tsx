'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './transfer-pricing.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';
import '../transfer-pricing/transfer-pricing.css';
import TaxAdminSection from '../../global/TaxAdminSection';

export default function TransferPricingPage() {
  return (
    <>
      <Header active="products" />
      <main>
        <section className="tax-transfer-pricing-hero">
          <div className="tax-transfer-pricing-hero-bg"></div>
          <div className="tax-transfer-pricing-hero-content">
            <h1 className="tax-transfer-pricing-hero-title">Transfer Pricing</h1>
            <div className="tax-transfer-pricing-hero-subtitle">
           Expert Guidance for Effective Cross-Border Pricing Strategies
            </div>
            <div className="tax-transfer-pricing-hero-desc">
           Let our experienced tax professionals guide you.
            </div>
            <div className="tax-transfer-pricing-hero-actions">
              <a href="#" className="tax-transfer-pricing-btn primary">Learn more</a>
              <a href="#" className="tax-transfer-pricing-btn secondary">Contact Us</a>
            </div>
          </div>
        </section>
        <section className="tp-whatwedo-section">
          <div className="tp-whatwedo-wrapper">
            <div className="tp-whatwedo-header">
              <div className="tp-whatwedo-brand">
                <span className="tp-bar"></span>
                <span className="tp-label">[ TAXSAM.CO ]</span>
              </div>
              <div>
                <h2 className="tp-whatwedo-title">What We Do</h2>
                <div className="tp-whatwedo-subtitle">
                  Services that help you grow and expand
                </div>
              </div>
            </div>
            <div className="tp-whatwedo-grid">
              <div className="tp-whatwedo-card">
                <h3>Preparation of Master File</h3>
                <p>
                  The Master File serves as the foundation of the TP Doc, providing a comprehensive overview of the multinational enterprise (MNE) and its global operations.
                </p>
              </div>
              <div className="tp-whatwedo-card">
                <h3>Preparation of Local Files</h3>
                <p>
                  Local Files are prepared for each jurisdiction where the MNE has a taxable presence. They provide specific details about the MNE’s operations and transfer pricing practices in that jurisdiction.
                </p>
              </div>
              <div className="tp-whatwedo-card">
                <h3>Preparation of Behavioral Analysis</h3>
                <p>
                  The Behavioral Analysis assesses whether the MNE’s transfer pricing practices align with its overall business strategy and economic behavior.
                </p>
              </div>
              <div className="tp-whatwedo-card">
                <h3>Preparation of Country-by-Country Reports (CbCR)</h3>
                <p>
                  CbCRs are standardized reports required for MNEs with global revenues exceeding a certain threshold. They provide an overview of the MNE’s global operations.
                </p>
              </div>
              <div className="tp-whatwedo-card" style={{ gridColumn: "1 / span 2" }}>
                <h3>Ongoing Monitoring and Review</h3>
                <p>
                  Transfer pricing requires ongoing monitoring and review to ensure continued compliance and adapt to changes in business activities, economic conditions, or tax regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TaxAdminSection />
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
    </>
  );
}
