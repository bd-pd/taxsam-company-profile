'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './tax-complience.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';
import '../tax-complience/tax-complience.css';
import TaxAdminSection from '../../global/TaxAdminSection';

export default function TaxCompliancePage() {
  return (
    <>
    <Header active="products" />
      <main>
        <section className="tax-complience-hero">
          <div className="tax-complience-hero-bg"></div>
          <div className="tax-complience-hero-content">
            <h1 className="tax-complience-hero-title">Tax Compliance</h1>
            <div className="tax-complience-hero-subtitle">
            Delivering Clarity in a Complex Tax Landscape.
            </div>
            <div className="tax-complience-hero-desc">
           Let our experienced tax professionals guide you.
            </div>
            <div className="tax-complience-hero-actions">
              <a href="#" className="tax-complience-btn primary">Learn more</a>
              <a href="#" className="tax-complience-btn secondary">Contact Us</a>
            </div>
          </div>
        </section>
        
        <section className="tax-complience-whatwedo-section">
          <div className="tax-complience-whatwedo-wrapper">
            <div className="tax-complience-whatwedo-header">
              <div className="tax-complience-whatwedo-brand">
                <span className="taxsamco-bar"></span>
                <span className="taxsamco-label">[ TAXSAM.CO ]</span>
              </div>
              <div>
                <h2 className="tax-complience-whatwedo-title">What We Do</h2>
                <div className="tax-complience-whatwedo-subtitle">
                  Services that help you grow and expand
                </div>
              </div>
            </div>
            <div className="tax-complience-whatwedo-grid">
              <div className="tax-complience-whatwedo-card">
                Efforts to increase the efficiency of the tax burden through modifying transaction processes and financial activities while maintaining taxpayer compliance with applicable regulations.
              </div>
              <div className="tax-complience-whatwedo-card">
                Identify potential tax risks arising from each transaction or company business activity, as well as calculate tax liabilities from the identified results.
              </div>
              <div className="tax-complience-whatwedo-card">
                <ul>
                    <li>1. Calculation of Employee Income Tax (PPh) Article 21</li>
                    <li>2. Calculation of Tax Withholding and Collection Articles 23, 26, and Article 4 Paragraph (2)</li>
                    <li>3. The calculation of corporate income tax under Article 25 includes the preparation and submission of monthly and annual reports.</li>
                    <li>4. Calculation of Income Tax (PPh) Article 22</li>
                    <li>5. Calculation of Value Added Tax (VAT)</li>
                    <li>6. Calculation of Corporate Income Tax (PPh).</li>
                </ul>
              </div>
              <div className="tax-complience-whatwedo-card">
                <ul>
                    <li>1. Review of Employee Income Tax (PPh) Calculations, Article 21</li>
                    <li>2. Review of Tax Withholding and Collection Calculations Articles 23, 26, and Article 4 Paragraph (2)</li>
                    <li>3. Review of Corporate Income Tax Calculations, Article 25, includes the preparation and submission of monthly and annual reports.</li>
                    <li>4. Review of Income Tax (PPh) Calculation Article 22</li>
                    <li>5. Review of Value Added Tax (VAT) Calculations</li>
                    <li>6. Review of Corporate Income Tax (PPh) Calculations</li>
                </ul>
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