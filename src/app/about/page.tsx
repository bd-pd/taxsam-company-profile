import '../css/other/about.css';
import '../css/index.css';
import Footer from '../global/Footer';
import Header from '../global/header';

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
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
      <section className="about-vision-section">
        <div className="about-vision-container">
          <div className="about-vision-img">
            <img src="/assets/images/rocket-launch.jpg" alt="Rocket Launch - Vision TAXSAM.CO" />
          </div>
          <div className="about-vision-box">
            <h2 className="about-vision-title">Our Vision & Mission</h2>
            <div className="about-vision-desc">
              Taxsam.co builds trust by making businesses more efficient and effective in handling legal compliance and tax rules. This transformation helps them become reliable and smart companies, skilled in business growth and managing all tax matters. Taxsam.co aims to provide the most comprehensive, fastest, and highest quality tax services, offering competitive solutions both in Indonesia and internationally. Their commitment is to deliver tax services with exceptional accuracy and speed, providing top-tier and rapid access to tax information for everyone. Ultimately, Taxsam.co seeks to offer tax services in innovative and groundbreaking ways.
            </div>
          </div>
        </div>
      </section>
      <section className="org-culture-section">
        <div className="org-culture-header-row">
          <div className="org-culture-brand">
            <span className="org-culture-line"></span>
            <span>[ TAXSAM.CO ]</span>
          </div>
          <div className="org-culture-title-col">
            <h2 className="org-culture-title">Organizational Culture</h2>
            <div className="org-culture-subtitle">What Makes Us Unique?</div>
          </div>
        </div>
        <div className="org-culture-cards-grid">
          <div className="org-culture-card">Structured, fast, efficient, and effective decision-making;</div>
          <div className="org-culture-card">Adaptive, innovative, and collaborative;</div>
          <div className="org-culture-card">Today's decision is better than tomorrow's perfect decision;</div>
          <div className="org-culture-card">We reward high performers;</div>
          <div className="org-culture-card">Deliver fast; no need for perfection; iterate at every stage; adjust to customer expectations.</div>
        </div>
        <div className="org-culture-bottom-row">
          <div className="org-culture-img">
            <img src="/assets/images/Taxsamorganization.jpg" alt="Organizational Culture Meeting" />
          </div>
          <div className="org-culture-principal">
            <h2 className="org-culture-principal-title">Principal Idea</h2>
            <div className="org-culture-principal-desc">
              Our main philosophy is the excellence of business processes that are always adaptive, innovative, and collaboration-based in order to improve the efficiency and effectiveness of the company; This philosophy is taken based on a mixture of continental European and Anglo-Saxon bureaucratic models that prioritize structural and systematic values but remain adaptive, innovative, and fast in decision-making; This philosophy is taken based on the lack of human resource capabilities and work ethics in the majority of HR in Indonesia, so that superior business processes become very important.
            </div>
          </div>
        </div>
      </section>
      <section className="about-quote-section">
        <div className="about-quote-container">
          <div className="about-quote-left">
            <div className="about-quote-text">
              In this world nothing can be said to be certain, except death and taxes.
            </div>
            <div className="about-quote-line"></div>
            <div className="about-quote-author">
              <b>Benjamin Franklin</b>
            </div>
            <div className="about-quote-source">
              Letter to Jean-Baptiste Le Roy, 1789
            </div>
          </div>
          <div className="about-quote-right">
            <div className="about-quote-img-wrap">
              <img src="/assets/images/dolar.jpg" alt="Benjamin Franklin Money" className="about-quote-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="team-header">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-underline"></div>
          <div className="team-subtitle">Board of Director</div>
        </div>
        <div className="team-carousel">
          <div className="team-cards">
            <div className="team-card">
              <img src="/assets/images/team/Rises-2.jpg" alt="Dr. Aulia Rizki Wicaksono, S.H., MA., BKP - Director/Lawyer" className="team-card-img" />
              <div className="team-card-name">
                <b>Dr.AULIA RIZKI WICAKSONO,<br />S.H., MA., BKP</b>
              </div>
              <div className="team-card-role">Director/Lawyer</div>
            </div>
            <div className="team-card">
              <img src="/assets/images/team/Foto-_0008_Wahyono-Eko-P-scaled-1.jpg" alt="Wahyono E.P, SE., MA - Director/Lawyer" className="team-card-img" />
              <div className="team-card-name">
                <b>WAHYONO E.P, SE., MA</b>
              </div>
              <div className="team-card-role">Director/Lawyer</div>
            </div>
          </div>
          </div>
          <div className="mb-20"></div>
          <div className="team-underline"></div>
          <div className="team-subtitle">Board of Management</div>
          <div className="mb-10"></div>
          <div className="team-cards">
            <div className="team-card">
              <img src="/assets/images/team/Foto-_0016_Faza-Al-Ghifari-scaled-1.jpg" alt="Masayu Nurul Aini, S.H., M.H. - Board of Management" className="team-card-img" />
              <div className="team-card-name">
              <b>FAZA AL GHIFARI,<br /> S.T.</b>
              </div>
              <div className="team-card-role">General Manager</div>
            </div>
            <div className="team-card">
              <img src="/assets/images/team/Foto-_0020_Radhitya-Utama-scaled-1.jpg" alt="Rizki Amalia, S.H., M.H. - Board of Management" className="team-card-img" />
              <div className="team-card-name">
              <b>RADHITYA UTAMA,<br /> S.E.</b>
              </div>
              <div className="team-card-role">Board of Management</div>
            </div>
          </div>

        <div className="mb-20"></div>
          <div className="team-underline"></div>
          <div className="team-subtitle">Board of Human Development</div>
          <div className="mb-10"></div>
          <div className="team-cards">
            <div className="team-card">
              <img src="/assets/images/team/Foto-_0014_Dwiko-Wolma-Putera-scaled-1.jpg" alt="Dwiko Wolma P., S.M. - Head of Human Development" className="team-card-img" />
              <div className="team-card-name">
                <b>DWIKO WOLMA P., S.M.</b>
              </div>
              <div className="team-card-role">Head of Human Development</div>
            </div>
            <div className="team-card">
              <img src="/assets/images/team/Foto-_0006_Muhammad-Aulia-scaled-1.jpg" alt="Muhammad Aulia, S.Ds. - Human Development" className="team-card-img" />
              <div className="team-card-name">
                <b>MUHAMMAD AULIA, S.Ds.</b>
              </div>
              <div className="team-card-role">Human Development</div>
            </div>
            <div className="team-card">
              <img src="/assets/images/team/Foto-_0034_Afra-Khairunnisa-scaled-1.jpg" alt="Afra Khairunnisa, S.Psi. - Human Development" className="team-card-img" />
              <div className="team-card-name">
                <b>AFRA KHAIRUNNISA, S.Psi.</b>
              </div>
              <div className="team-card-role">Human Development</div>
            </div>
            <div className="team-card">
              <img src="/assets/images/team/Foto-_0023_Salsabila-Aura-Putri-scaled-1.jpg" alt="Salsabila Aura Putri, S.Psi. - Human Development" className="team-card-img" />
              <div className="team-card-name">
                <b>SALSABILA AURA PUTRI, S.Psi.</b>
              </div>
              <div className="team-card-role">Human Development</div>
            </div>
            </div>

            <div className="mb-20"></div>
              <div className="team-underline"></div>
              <div className="team-subtitle">Board of Tax Law Analyst</div>
              <div className="mb-10"></div>
              <div className="team-cards">
              <div className="team-card">
                <img src="/assets/images/team/Foto-_0018_Kiagoos-Adhimas-scaled-1.jpg" alt="Kiagoos Adhimas, S.H. - Head of Tax Law Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>KIAGOOS ADHIMAS,<br />S.H.</b>
                </div>
                <div className="team-card-role">Head of Tax Law Analyst</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-_0013_Septian-Martadinata-scaled-1.jpg" alt="Septian M., S.H. - Tax Law Analyst Officer" className="team-card-img" />
                <div className="team-card-name">
                  <b>SEPTIAN M.,<br />S.H.</b>
                </div>
                <div className="team-card-role">Tax Law Analyst Officer</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-_0025_Muhammad-Salahuddin-scaled-1.jpg" alt="Muhammad Salahuddin, S.H. - Tax Law Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>MUHAMMAD SALAHUDDIN,<br />S.H.</b>
                </div>
                <div className="team-card-role">Tax Law Analyst</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-_0024_Ahmadie-Azra-Isnain-scaled-1.jpg" alt="Ahmadie Azra Isnain, S.H. - Tax Law Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>AHMADIE AZRA ISNAIN,<br />S.H.</b>
                </div>
                <div className="team-card-role">Tax Law Analyst</div>
              </div>
            </div>
            <div className="mb-20"></div>
              <div className="team-underline"></div>
              <div className="team-subtitle">Board of Tax Compliance</div>
              <div className="mb-10"></div>
              <div className="team-cards">
              <div className="team-card">
                <img src="/assets/images/team/Foto-_0004_Albert-Permana-scaled-1.jpg" alt="Albert Permana, S.T. - Head of Tax Compliance" className="team-card-img" />
                <div className="team-card-name">
                  <b>ALBERT PERMANA, S.T.</b>
                </div>
                <div className="team-card-role">Head of Tax Compliance</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-Website_0007_Hans.jpg" alt="Handreansyah Wibowo, S.Ak - Tax Compliance" className="team-card-img" />
                <div className="team-card-name">
                  <b>HANDREANSYAH WIBOWO, S.Ak</b>
                </div>
                <div className="team-card-role">Tax Compliance</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-Website_0006_Lutfiyah.jpg" alt="Luthfiyah Safitri, S.Ak - Tax Compliance" className="team-card-img" />
                <div className="team-card-name">
                  <b>LUTHFIYAH SAFITRI, S.Ak</b>
                </div>
                <div className="team-card-role">Tax Compliance</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-Website_0008_Kemas.jpg" alt="Kemas Muhammad Farhan, S.Ab - Tax Compliance" className="team-card-img" />
                <div className="team-card-name">
                  <b>KEMAS MUHAMMAD FARHAN, S.Ab</b>
                </div>
                <div className="team-card-role">Tax Compliance</div>
              </div>
            </div>
            <div className="mb-20"></div>
              <div className="team-underline"></div>
              <div className="team-subtitle">Board of Client & Relations</div>
              <div className="mb-10"></div>
              <div className="team-cards">
                <div className="team-card">
                  <img src="/assets/images/team/Foto-_0015_Rizki-Hermawan-scaled-1.jpg" alt="Rizki Hermawan, S.H. - Head of Marketing & Client Relationship" className="team-card-img" />
                  <div className="team-card-name">
                    <b>RIZKI HERMAWAN, S.H.</b>
                  </div>
                  <div className="team-card-role">Head of Marketing & Client Relationship</div>
                </div>
                <div className="team-card">
                  <img src="/assets/images/team/Foto-_0011_Firmandi-Fazri-scaled-1.jpg" alt="Firmandi Fazri, S.H. - Manager Client & Relations" className="team-card-img" />
                  <div className="team-card-name">
                    <b>FIRMANDI FAZRI, S.H.</b>
                  </div>
                  <div className="team-card-role">Manager Client & Relations</div>
                </div>
                <div className="team-card">
                  <img src="/assets/images/team/Foto-_0012_Mubdi-Mulya-Isfahami-scaled-1.jpg" alt="Mubdi Mulya I., S.Tr.Log., M.M. - Marketing Manager" className="team-card-img" />
                  <div className="team-card-name">
                    <b>MUBDI MULYA I., S.Tr.Log., M.M.</b>
                  </div>
                  <div className="team-card-role">Marketing Manager</div>
                </div>
                <div className="team-card">
                  <img src="/assets/images/team/Foto-_0022_Hanifah-Hindra-Putri-scaled-1.jpg" alt="Hanifah Hindra Putri, S.M. - Client Relations" className="team-card-img" />
                  <div className="team-card-name">
                    <b>HANIFAH HINDRA PUTRI, S.M.</b>
                  </div>
                  <div className="team-card-role">Client Relations</div>
                </div>
              </div>
            <div className="mb-20"></div>
              <div className="team-underline"></div>
              <div className="team-subtitle">Board of Business Development</div>
              <div className="mb-10"></div>
              <div className="team-cards">
                <div className="team-card">
                  <img src="/assets/images/team/Foto-_0019_Ageng-Harris-Signori-scaled-1.jpg" alt="Ageng Harris S, S.Ikom - Head of Business Development" className="team-card-img" />
                  <div className="team-card-name">
                    <b>AGENG HARRIS S, S.Ikom</b>
                  </div>
                  <div className="team-card-role">Head of Business Development</div>
                </div>
                <div className="team-card">
                  <img src="/assets/images/team/Foto-Website_0004_Olija-191x300.jpg" alt="Olija Nur Khalissa, S.S. - Multimedia" className="team-card-img" />
                  <div className="team-card-name">
                    <b>OLIJA NUR KHALISSA, S.S.</b>
                  </div>
                  <div className="team-card-role">Multimedia</div>
                </div>
                <div className="team-card">
                  <img src="/assets/images/team/Foto-Website_0003_Rio.jpg" alt="Rio C Andesta, S.T. - Marketing" className="team-card-img" />
                  <div className="team-card-name">
                    <b>RIO C ANDESTA, S.T.</b>
                  </div>
                  <div className="team-card-role">Marketing</div>
                </div>
                <div className="team-card">
                  <img src="/assets/images/team/Foto-_0028_Hasbi-Lazawardi-scaled.jpg" alt="Hasbi Lazawardi - Product Manager" className="team-card-img" />
                  <div className="team-card-name">
                    <b>HASBI LAZAWARDI</b>
                  </div>
                  <div className="team-card-role">Product Manager</div>
                </div>
              </div>
            <div className="mb-20"></div>
              <div className="team-underline"></div>
              <div className="team-subtitle">Board of Business Analyst</div>
              <div className="mb-10"></div>
              <div className="team-cards">
              <div className="team-card">
                <img src="/assets/images/team/Foto-_0017_Priandoko-Satryobud-scaled-1.jpg" alt="Priandoko Satryobudi, S.T - Head of Business Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>PRIANDOKO SATRYOBUDI,<br />S.T</b>
                </div>
                <div className="team-card-role">Head of Business Analyst</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-Website_0002_Guritno.jpg" alt="Gurinto Suro Amijoyo, S.T, MBA - Business Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>GURINTO SURO AMIJOYO,<br />S.T, MBA</b>
                </div>
                <div className="team-card-role">Business Analyst</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-Website_0001_Dyah.jpg" alt="Dyah Puspita Sari, S.T, MBA - Business Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>DYAH PUSPITA SARI,<br />S.T, MBA</b>
                </div>
                <div className="team-card-role">Business Analyst</div>
              </div>
              <div className="team-card">
                <img src="/assets/images/team/Foto-Website_0009_Dhiku.jpg" alt="Muhammad Dhiku Widyosekti, S.T, MBA - Business Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>MUHAMMAD DHIKU WIDYOSEKTI,<br />S.T, MBA</b>
                </div>
                <div className="team-card-role">Business Analyst</div>
              </div>
            </div>
            <div className="mb-20"></div>
              <div className="team-underline"></div>
              <div className="team-subtitle">Committee Of International and Growth</div>
              <div className="mb-10"></div>
              <div className="team-cards">
              <div className="team-card">
                <img src="/assets/images/team/Foto-_0038_Verrel-Hatmosroyo-scaled-1.jpg" alt="Muhammad Dhiku Widyosekti, S.T, MBA - Business Analyst" className="team-card-img" />
                <div className="team-card-name">
                  <b>VERREL HATMOSROYO,<br />S.Tr.Par.</b>
                </div>
                <div className="team-card-role">Board of CIG</div>
              </div>
            </div>
            
                <div className="mb-20"></div>
                <div className="team-header">
                  <div className="team-underline"></div>
                  <h2 className="team-title">Committee Of Expert</h2>
                </div>
                <div className="committee-expert-slider">
                    <div className="committee-expert-cards">
                      <div className="team-card">
                        <img src="/assets/images/team/committee/SATRIA-WIBAWA.jpg" alt="SATRIA WIBAWA, Ak., M.Ak., CERA., C.T.L.C" className="team-card-img" />
                        <div className="team-card-name">
                          <b>SATRIA WIBAWA,<br />Ak., M.Ak., CERA., C.T.L.C</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/YUDHA-AVIANTARA.jpg" alt="YUDHA AVIANTARA, SE" className="team-card-img" />
                        <div className="team-card-name">
                          <b>YUDHA AVIANTARA,<br />SE</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/SEPTIAN-FACHRIZAL.jpg" alt="SEPTIAN FACHRIZAL S.S.T, LL.M.Int.Tax." className="team-card-img" />
                        <div className="team-card-name">
                          <b>SEPTIAN FACHRIZAL<br />S.S.T, LL.M.Int.Tax.</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/SULTONI.jpg" alt="SULTONI, S.E., MSE., MIDEC" className="team-card-img" />
                        <div className="team-card-name">
                          <b>SULTONI,<br />S.E., MSE., MIDEC</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/YATI-MULYATI.jpg" alt="YATI MULYATI, SE, M.Ak., Ak., CA" className="team-card-img" />
                        <div className="team-card-name">
                          <b>YATI MULYATI,<br />SE, M.Ak., Ak., CA</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/TEGUH-PUTRA.jpg" alt="TEGUH PUTRA SYAMSOERI, SE, MSc, APCTP" className="team-card-img" />
                        <div className="team-card-name">
                          <b>TEGUH PUTRA SYAMSOERI,<br />SE, MSc, APCTP</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/YOSEP-POERNOMO.jpg" alt="YOSEP POERNOMO, S. Ak" className="team-card-img" />
                        <div className="team-card-name">
                          <b>YOSEP POERNOMO,<br />S. Ak</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/HARIS-BUDI.jpg" alt="Haris Budi Setiawan" className="team-card-img" />
                        <div className="team-card-name">
                          <b>HARIS BUDI SETIAWAN</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/HELMI.jpg" alt="HELMI" className="team-card-img" />
                        <div className="team-card-name">
                          <b>HELMI</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/LUKMAN-NUL-HAKIM.jpg" alt="LUKMAN NUL HAKIM. S.E." className="team-card-img" />
                        <div className="team-card-name">
                          <b>LUKMAN NUL HAKIM.<br />S.E.</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/MIERZA.jpg" alt="MIERZA" className="team-card-img" />
                        <div className="team-card-name">
                          <b>MIERZA</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/DENDY-KRISTAWIGUNA.jpg" alt="Dendy Kristawiguna" className="team-card-img" />
                        <div className="team-card-name">
                          <b>DENDY KRISTAWIGUNA</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/MUHAMMAD-SALIM.jpg" alt="Muhammad Salim Noviansyah" className="team-card-img" />
                        <div className="team-card-name">
                          <b>MUHAMMAD SALIM NOVIANSYAH</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      {/* Duplikat untuk seamless loop */}
                      <div className="team-card">
                        <img src="/assets/images/team/committee/SATRIA-WIBAWA.jpg" alt="SATRIA WIBAWA, Ak., M.Ak., CERA., C.T.L.C" className="team-card-img" />
                        <div className="team-card-name">
                          <b>SATRIA WIBAWA,<br />Ak., M.Ak., CERA., C.T.L.C</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/YUDHA-AVIANTARA.jpg" alt="YUDHA AVIANTARA, SE" className="team-card-img" />
                        <div className="team-card-name">
                          <b>YUDHA AVIANTARA,<br />SE</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/SEPTIAN-FACHRIZAL.jpg" alt="SEPTIAN FACHRIZAL S.S.T, LL.M.Int.Tax." className="team-card-img" />
                        <div className="team-card-name">
                          <b>SEPTIAN FACHRIZAL<br />S.S.T, LL.M.Int.Tax.</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                      <div className="team-card">
                        <img src="/assets/images/team/committee/SULTONI.jpg" alt="SULTONI, S.E., MSE., MIDEC" className="team-card-img" />
                        <div className="team-card-name">
                          <b>SULTONI,<br />S.E., MSE., MIDEC</b>
                        </div>
                        <div className="team-card-role">Committee Of Expert</div>
                      </div>
                    </div>
                  </div>
              </section>
    
    <Footer />
    
    </>
  );
}
