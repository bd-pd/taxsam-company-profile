'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './tax_legal_opinion.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';
import '../tax_attorney/tax_attorney.css';

export default function TaxLegalOpinionPage() {
  return (
    <div>
     <Header active="products" />
      <main>
        <section className="tax-attorney-hero">
          <div className="tax-attorney-hero-bg"></div>
          <div className="tax-attorney-hero-content">
            <h1 className="tax-attorney-hero-title">Tax Legal Opinion</h1>
            <div className="tax-attorney-hero-subtitle">
            Reliable Legal Opinions to Navigate Tax Challenges
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
        <section className="tax-legalopinion-whatwedo-section">
          <div className="tax-legalopinion-whatwedo-inner">
            <div className="tax-legalopinion-whatwedo-left">
              <div className="tax-legalopinion-whatwedo-brand">
                <span className="tax-legalopinion-whatwedo-line"></span>
                <span>[ TAXSAM.CO ]</span>
              </div>
            </div>
            <div className="tax-legalopinion-whatwedo-right">
              <h2 className="tax-legalopinion-whatwedo-title">What We Do</h2>
              <div className="tax-legalopinion-whatwedo-desc">
                Tax Legal Opinion services to help you make the right decision
              </div>
            </div>
          </div>
          <div className="tax-legalopinion-whatwedo-cards">
            <div className="tax-legalopinion-whatwedo-card">
              <div className="tax-legalopinion-whatwedo-card-title">Tax Legal Opinion</div>
              <div className="tax-legalopinion-whatwedo-card-desc">
                Written legal analysis and advice on tax issues, compliance, and disputes.
              </div>
            </div>
            <div className="tax-legalopinion-whatwedo-card">
              <div className="tax-legalopinion-whatwedo-card-title">Tax Due Diligence</div>
              <div className="tax-legalopinion-whatwedo-card-desc">
                Comprehensive review of tax risks and obligations for transactions or investments.
              </div>
            </div>
            <div className="tax-legalopinion-whatwedo-card">
              <div className="tax-legalopinion-whatwedo-card-title">Tax Compliance Review</div>
              <div className="tax-legalopinion-whatwedo-card-desc">
                Assessment of your company’s compliance with current tax regulations.
              </div>
            </div>
            <div className="tax-legalopinion-whatwedo-card">
              <div className="tax-legalopinion-whatwedo-card-title">Tax Risk Assessment</div>
              <div className="tax-legalopinion-whatwedo-card-desc">
                Identification and evaluation of potential tax exposures and solutions.
              </div>
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
