'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './taxsam-learning.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import TaxExpertSection from'@/app/global/tax-expert';

function CountUp({ end, duration = 1.5, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    let start = 0;
    const totalFrames = Math.round(duration * 60);
    function animateCount(frame: number) {
      const progress = Math.min(frame / totalFrames, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) {
        ref.current = requestAnimationFrame(() => animateCount(frame + 1));
      } else {
        setValue(end);
      }
    }
    animateCount(0);
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration]);

  return <span>{value.toLocaleString()}{suffix}</span>;
}

export default function TaxsamLearningPage() {
  return (
    <>
      <Header active='products' />
      <main>
        <section className="tlc-hero-section">
          <video
            className="tlc-hero-bg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/TLC video.mp4" type="video/mp4" />
          </video>
          <div className="tlc-hero-content">
            <div className="tlc-hero-label">TAXSAM LEARNING CENTER</div>
            <h1 className="tlc-hero-title">Mastering Taxes Together</h1>
            <div className="tlc-hero-desc">
              Welcome to the Taxsam Learning Center, where we believe that knowledge is the key to financial empowerment. Our Learning Center is dedicated to providing individuals, businesses, and tax professionals with the resources and education needed to navigate the complex world of taxation with confidence.
            </div>
            <div className="tlc-hero-row">
              <a href="#" className="tlc-hero-btn">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <MdOutlinePersonAddAlt size={20} color="#fff" />
                  REGISTER NOW
                </span>
              </a>
              <div className="tlc-stats-inline">
                <div className="tlc-stats-card">
                  <div className="tlc-stats-value">
                    <CountUp end={6024} duration={1.5} suffix="+" />
                  </div>
                  <div className="tlc-stats-label">Active User</div>
                </div>
                <div className="tlc-stats-card">
                  <div className="tlc-stats-value">
                    <CountUp end={3000} duration={1.5} suffix="+" />
                  </div>
                  <div className="tlc-stats-label">Certificate</div>
                </div>
              </div>
            </div>
            <span className="tlc-hero-live-badge">LIVE</span>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="tlc-welcome-section">
          <div className="tlc-welcome-container">
          <div className="tlc-welcome-left">
            <h2 className="tlc-welcome-title">
              Welcome to <span style={{ color: "#fcb006" }}>Taxsam Learning Center</span>
            </h2>
            <div className="tlc-welcome-desc">
              Taxsam Learning Center is your trusted partner in tax education. We provide up-to-date resources, expert-led courses, and practical guidance to help you master taxation, whether you are a student, professional, or business owner. Join our community and unlock your potential in the world of taxes!
            </div>
          </div>
          <div className="tlc-welcome-right">
            <div className="tlc-welcome-image-wrapper">
              <img
                className="tlc-welcome-image"
                src="/assets/images/learning-taxsam.jpeg"
                alt="Welcome to Taxsam Learning Center"
                loading="lazy"
              />
            </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="tlc-whyjoin-section">
          <div className="tlc-whyjoin-container">
            <h2 className="tlc-whyjoin-title">Why You Should Join ?</h2>
            <div className="tlc-whyjoin-grid">
              <div className="tlc-whyjoin-card highlight">
                <div className="tlc-whyjoin-icon">
                  {/* Star icon */}
                  <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75L6.16 21l1.12-6.54L2 9.97l6.58-.96L12 3.5l3.42 5.51 6.58.96-4.76 4.49L17.84 21z"/></svg>
                </div>
                <div>
                  <div className="tlc-whyjoin-card-title">100+ VIDEO BELAJAR PAJAK</div>
                  <div className="tlc-whyjoin-card-bar"></div>
                  <div className="tlc-whyjoin-card-desc">
                    Metode belajar fleksibel dan efektif dengan menonton video dimana saja dan kapan saja.
                  </div>
                </div>
              </div>
              <div className="tlc-whyjoin-card">
                <div className="tlc-whyjoin-icon">
                  {/* Webinar icon */}
                  <svg width="28" height="28" fill="none" stroke="#F6A100" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M7 19h10"/></svg>
                </div>
                <div>
                  <div className="tlc-whyjoin-card-title">WEBINAR DAN KELAS RUTIN</div>
                  <div className="tlc-whyjoin-card-bar"></div>
                  <div className="tlc-whyjoin-card-desc">
                    Webinar Interaktif dan Kelas Rutin untuk Memaksimalkan Pemahaman Perpajakan
                  </div>
                </div>
              </div>
              <div className="tlc-whyjoin-card">
                <div className="tlc-whyjoin-icon">
                  {/* Book icon */}
                  <svg width="28" height="28" fill="none" stroke="#F6A100" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v16"/></svg>
                </div>
                <div>
                  <div className="tlc-whyjoin-card-title">150+ MODUL DAN WORKBOOK</div>
                  <div className="tlc-whyjoin-card-bar"></div>
                  <div className="tlc-whyjoin-card-desc">
                    Akses 150+ Modul dan Workbook yang Siap Membentuk Ahli Pajak Profesional
                  </div>
                </div>
              </div>
              <div className="tlc-whyjoin-card">
                <div className="tlc-whyjoin-icon">
                  {/* Star icon */}
                  <svg width="28" height="28" fill="none" stroke="#F6A100" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75L6.16 21l1.12-6.54L2 9.97l6.58-.96L12 3.5l3.42 5.51 6.58.96-4.76 4.49L17.84 21z"/></svg>
                </div>
                <div>
                  <div className="tlc-whyjoin-card-title">UJIAN SERTIFIKASI BREVET</div>
                  <div className="tlc-whyjoin-card-bar"></div>
                  <div className="tlc-whyjoin-card-desc">
                    Langkah Terakhir Menuju Pengakuan Sebagai Ahli Perpajakan Profesional. Selesaikan ujian sertifikasi untuk mendapatkan keahlian dan pengakuan resmi dalam bidang perpajakan.
                  </div>
                </div>
              </div>
              <div className="tlc-whyjoin-card">
                <div className="tlc-whyjoin-icon">
                  {/* Star icon */}
                  <svg width="28" height="28" fill="none" stroke="#F6A100" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75L6.16 21l1.12-6.54L2 9.97l6.58-.96L12 3.5l3.42 5.51 6.58.96-4.76 4.49L17.84 21z"/></svg>
                </div>
                <div>
                  <div className="tlc-whyjoin-card-title">DATABASE PERPAJAKAN</div>
                  <div className="tlc-whyjoin-card-bar"></div>
                  <div className="tlc-whyjoin-card-desc">
                    Dapatkan informasi pajak terbaru dan akurat dari database komprehensif kami untuk kebutuhan perpajakan Anda.
                  </div>
                </div>
              </div>
              <div className="tlc-whyjoin-card">
                <div className="tlc-whyjoin-icon">
                  {/* Monitor icon */}
                  <svg width="28" height="28" fill="none" stroke="#F6A100" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/></svg>
                </div>
                <div>
                  <div className="tlc-whyjoin-card-title">EASY TO USE INTERFACE</div>
                  <div className="tlc-whyjoin-card-bar"></div>
                  <div className="tlc-whyjoin-card-desc">
                    Baik pemula maupun profesional, semua dapat dengan mudah menggunakan platform kami berkat antarmuka yang intuitif.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* CTA Bar */}
        <div className="tlc-cta-bar">
          <div className="tlc-cta-bar-content">
            <div className="tlc-cta-bar-desc">
              Navigate the complexities of taxes with confidence. TLC provides all the resources and support you need to learn taxes within days, and prepare your self to be an expert in taxes.
            </div>
            <div className="tlc-cta-bar-divider"></div>
            <a href="#" className="tlc-cta-bar-btn">
              <MdOutlinePersonAddAlt size={20} style={{ marginRight: 8, verticalAlign: 'middle' }} />
              JOIN PROGRAM
            </a>
          </div>
        </div>

        {/* Tax Expert Section */}
        <TaxExpertSection />

        {/* Pricing & Package Section */}
        <section className="tlc-pricing-section">
          <h2 className="tlc-pricing-title">
            <span style={{ color: "#fcb006", textShadow: "0 4px 12px #ffe3a1" }}>Pricing &amp; Package</span>
          </h2>
          <div className="tlc-pricing-grid">
            {/* Yearly */}
            <div className="tlc-pricing-card yearly">
              <div className="tlc-pricing-card-header">
                <div>
                  <div className="tlc-pricing-card-title">Yearly Program</div>
                  <div className="tlc-pricing-card-sub">Lebih Hemat 1 Tahun</div>
                </div>
                <span className="tlc-pricing-card-limited">LIMITED</span>
              </div>
              <div className="tlc-pricing-card-price">Rp850K</div>
              <div className="tlc-pricing-card-duration">1 TAHUN BERLANGGANAN</div>
              <ul className="tlc-pricing-card-features">
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Free Klaim Sertifikat Brevet AB/C</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Durasi Fleksibel, Sesuaikan dengan Kesibukan Kamu</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Akses Semua Materi dan Ujian Brevet AB &amp; C</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Ribuan Database Peraturan Perpajakan</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Webinar dan Kelas Online Rutin Setiap Minggu</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Free Materi + Akses Rekaman</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>100+ Video Pembelajaran</li>
                <li>100+ Kumpulan Modul, Workbook, dan Buku</li>
              </ul>
              <div className="tlc-pricing-card-action">
                <a href="#" className="tlc-pricing-card-btn">Get Started</a>
              </div>
            </div>
            {/* Monthly */}
            <div className="tlc-pricing-card monthly">
              <div className="tlc-pricing-card-header">
                <div>
                  <div className="tlc-pricing-card-title">Monthly Program</div>
                  <div className="tlc-pricing-card-sub">1 Bulan Berlangganan</div>
                </div>
              </div>
              <div className="tlc-pricing-card-price">100K</div>
              <div className="tlc-pricing-card-duration">1 BULAN BERLANGGANAN</div>
                <ul className="tlc-pricing-card-features">
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Durasi Fleksibel, Sesuaikan dengan Kesibukan Kamu</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Akses Semua Materi dan Ujian Brevet AB &amp; C</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Ribuan Database Peraturan Perpajakan</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Webinar dan Kelas Online Rutin Setiap Minggu</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>Free Materi + Akses Rekaman</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>100+ Video Pembelajaran</li>
                <li><span style={{fontWeight: 'bold', fontSize: 18, marginRight: 8}}>•</span>100+ Kumpulan Modul, Workbook, dan Buku</li>
                </ul>
              <div className="tlc-pricing-card-action">
                <a href="#" className="tlc-pricing-card-btn secondary">Get Started</a>
              </div>
              <div className="tlc-pricing-card-note">Harga Sertifikat Terpisah Rp500K</div>
            </div>
          </div>
        </section>

        <section className="tlc-testimonials-section">
          <div className="tlc-testimonials-container">
            <div className="tlc-testimonials-header">
              <h2 className="tlc-testimonials-title">What They Say About TLC</h2>
              <div className="tlc-testimonials-bar"></div>
            </div>
            
            <div className="tlc-testimonials-grid">
              <div className="tlc-testimonial-card">
                <div className="tlc-testimonial-image">
                  <img src="/assets/images/person/Student.jpg" alt="Sarah Johnson" />
                </div>
                <div className="tlc-testimonial-content">
                  <div className="tlc-testimonial-stars">★★★★★</div>
                  <div className="tlc-testimonial-text">
                    "The Tax Learning Center has been instrumental in advancing my career. The comprehensive courses and expert instructors made complex tax concepts easy to understand."
                  </div>
                  <div className="tlc-testimonial-author">
                    <div className="tlc-author-name">Sarah Johnson</div>
                    <div className="tlc-author-role">Tax Consultant</div>
                  </div>
                </div>
              </div>
              
              <div className="tlc-testimonial-card">
                <div className="tlc-testimonial-image">
                  <img src="/assets/images/person/a-student-tlc.jpg" alt="Michael Chen" />
                </div>
                <div className="tlc-testimonial-content">
                  <div className="tlc-testimonial-stars">★★★★★</div>
                  <div className="tlc-testimonial-text">
                    "Excellent platform for continuous learning. The interactive modules and real-world case studies helped me apply knowledge immediately in my practice."
                  </div>
                  <div className="tlc-testimonial-author">
                    <div className="tlc-author-name">Michael Chen</div>
                    <div className="tlc-author-role">Senior Accountant</div>
                  </div>
                </div>
              </div>
              
              <div className="tlc-testimonial-card">
                <div className="tlc-testimonial-image">
                  <img src="/assets/images/person/ancila-student-tlc.jpg" alt="Amanda Rodriguez" />
                </div>
                <div className="tlc-testimonial-content">
                  <div className="tlc-testimonial-stars">★★★★★</div>
                  <div className="tlc-testimonial-text">
                    "The certification program exceeded my expectations. Well-structured content and flexible learning schedule made it perfect for working professionals."
                  </div>
                  <div className="tlc-testimonial-author">
                    <div className="tlc-author-name">Amanda Rodriguez</div>
                    <div className="tlc-author-role">Finance Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ClientsPartners />
      </main>
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
