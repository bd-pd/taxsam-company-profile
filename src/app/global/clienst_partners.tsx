import React from 'react';
import '../css/global/clients_partners.css';

export default function ClientsPartners() {
  return (
    <section className="clients-section">
      <div style={{ margin: "88px 0" }} />
      <div className="clients-container">
        <h2 className="clients-title">
          <span className="clients-title-highlight">RELIABLE</span> CLIENTS & PARTNERS
        </h2>
        <div className="clients-title-underline"></div>
        <div className="clients-logos-slider">
          <div className="clients-logos">
            {/* ...logo images... */}
            <img src="/assets/images/clients/CIMB.png" alt="Client TAXSAM CIMB Niaga" />
            <img src="/assets/images/clients/Logo-Inalum-MIND-ID.png" alt="Client TAXSAM Inalum Mind ID" />
            <img src="/assets/images/clients/pertamina-ep-cepu.png" alt="Client TAXSAM Pertamina EP Cepu" />
            <img src="/assets/images/clients/pertamina-geo.png" alt="Client TAXSAM Pertamina Geothermal" />
            <img src="/assets/images/clients/PT timah.png" alt="Client TAXSAM PT Timah" />
            <img src="/assets/images/clients/Emas-Antam-Indonesia-Logo.png" alt="Client TAXSAM Emas Antam Indonesia" />
            <img src="/assets/images/clients/Disdik-Jakarta-DKI-Logi.png" alt="Client TAXSAM Dinas Pendidikan DKI Jakarta" />
            <img src="/assets/images/clients/Inovasi-Parking-Mandiri-Logo.png" alt="Client TAXSAM Inovasi Parking Mandiri" />
            <img src="/assets/images/clients/Jakkon-Logo.png" alt="Client TAXSAM Jakkon" />
            <img src="/assets/images/clients/Jakpro-Logo.png" alt="Client TAXSAM Jakpro" />
            <img src="/assets/images/clients/Mwr-Logo.png" alt="Client TAXSAM MWR" />
            <img src="/assets/images/clients/PAM-Jaya-Logo.png" alt="Client TAXSAM PAM Jaya" />
            <img src="/assets/images/clients/Pelindo-Logo.png" alt="Client TAXSAM Pelindo" />
            <img src="/assets/images/clients/Pegadaian-Logo.png" alt="Client TAXSAM Pegadaian" />
            <img src="/assets/images/clients/PTPN-Logo.png" alt="Client TAXSAM PTPN" />
            <img src="/assets/images/clients/Pelni-min.png" alt="Client TAXSAM Pelni" />
            <img src="/assets/images/clients/ASDP-min.png" alt="Client TAXSAM ASDP" />
            <img src="/assets/images/clients/PTPN-5-Logo.png" alt="Client TAXSAM PTPN 5" />
            <img src="/assets/images/clients/Swarnim-Logo.png" alt="Client TAXSAM Swarnim" />
            <img src="/assets/images/clients/Risco-Energy-Logo.jpg" alt="Client TAXSAM Risco Energy" />
            {/* ...duplicate logos for infinite scroll... */}
            <img src="/assets/images/clients/CIMB.png" alt="Client TAXSAM CIMB Niaga" />
            <img src="/assets/images/clients/Logo-Inalum-MIND-ID.png" alt="Client TAXSAM Inalum Mind ID" />
            <img src="/assets/images/clients/pertamina-ep-cepu.png" alt="Client TAXSAM Pertamina EP Cepu" />
            <img src="/assets/images/clients/pertamina-geo.png" alt="Client TAXSAM Pertamina Geothermal" />
            <img src="/assets/images/clients/PT timah.png" alt="Client TAXSAM PT Timah" />
            <img src="/assets/images/clients/Emas-Antam-Indonesia-Logo.png" alt="Client TAXSAM Emas Antam Indonesia" />
            <img src="/assets/images/clients/Disdik-Jakarta-DKI-Logi.png" alt="Client TAXSAM Dinas Pendidikan DKI Jakarta" />
            <img src="/assets/images/clients/Inovasi-Parking-Mandiri-Logo.png" alt="Client TAXSAM Inovasi Parking Mandiri" />
            <img src="/assets/images/clients/Jakkon-Logo.png" alt="Client TAXSAM Jakkon" />
            <img src="/assets/images/clients/Jakpro-Logo.png" alt="Client TAXSAM Jakpro" />
            <img src="/assets/images/clients/Mwr-Logo.png" alt="Client TAXSAM MWR" />
            <img src="/assets/images/clients/PAM-Jaya-Logo.png" alt="Client TAXSAM PAM Jaya" />
            <img src="/assets/images/clients/Pelindo-Logo.png" alt="Client TAXSAM Pelindo" />
            <img src="/assets/images/clients/Pegadaian-Logo.png" alt="Client TAXSAM Pegadaian" />
            <img src="/assets/images/clients/PTPN-Logo.png" alt="Client TAXSAM PTPN" />
            <img src="/assets/images/clients/Pelni-min.png" alt="Client TAXSAM Pelni" />
            <img src="/assets/images/clients/ASDP-min.png" alt="Client TAXSAM ASDP" />
            <img src="/assets/images/clients/PTPN-5-Logo.png" alt="Client TAXSAM PTPN 5" />
            <img src="/assets/images/clients/Swarnim-Logo.png" alt="Client TAXSAM Swarnim" />
            <img src="/assets/images/clients/Risco-Energy-Logo.jpg" alt="Client TAXSAM Risco Energy" />
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
              <img src="/assets/images/partner/Logo_Institut_Teknologi_Bandung.png" alt="Partner TAXSAM Institut Teknologi Bandung (ITB)" className="partner-logo" />
              <img src="/assets/images/partner/Lambang_Universitas_Padjadjaran.svg.png" alt="Partner TAXSAM Universitas Padjadjaran (UNPAD)" className="partner-logo" />
              <img src="/assets/images/partner/LAMBANG_UNTAR.png" alt="Partner TAXSAM Universitas Tarumanagara (UNTAR)" className="partner-logo" />
              <img src="/assets/images/partner/logo-kemenkeu-black-font.png" alt="Partner TAXSAM Kementerian Keuangan" className="partner-logo" />
              <img src="/assets/images/partner/logo-kemnaker.png" alt="Partner TAXSAM Kementerian Ketenagakerjaan" className="partner-logo" />
              <img src="/assets/images/partner/Makara_of_Universitas_Indonesia.svg.png" alt="Partner TAXSAM Universitas Indonesia (UI)" className="partner-logo" />
              <img src="/assets/images/partner/logo-bnsp.png" alt="Partner TAXSAM BNSP" className="partner-logo" />
              <img src="/assets/images/partner/uia.png" alt="Partner TAXSAM Universitas Islam As-Syafiiyah (UIA)" className="partner-logo" />
              {/* Duplikat untuk efek infinite scroll */}
              <img src="/assets/images/partner/Logo_Institut_Teknologi_Bandung.png" alt="Partner TAXSAM Institut Teknologi Bandung (ITB)" className="partner-logo" />
              <img src="/assets/images/partner/Lambang_Universitas_Padjadjaran.svg.png" alt="Partner TAXSAM Universitas Padjadjaran (UNPAD)" className="partner-logo" />
              <img src="/assets/images/partner/LAMBANG_UNTAR.png" alt="Partner TAXSAM Universitas Tarumanagara (UNTAR)" className="partner-logo" />
              <img src="/assets/images/partner/logo-kemenkeu-black-font.png" alt="Partner TAXSAM Kementerian Keuangan" className="partner-logo" />
              <img src="/assets/images/partner/logo-kemnaker.png" alt="Partner TAXSAM Kementerian Ketenagakerjaan" className="partner-logo" />
              <img src="/assets/images/partner/Makara_of_Universitas_Indonesia.svg.png" alt="Partner TAXSAM Universitas Indonesia (UI)" className="partner-logo" />
              <img src="/assets/images/partner/logo-bnsp.png" alt="Partner TAXSAM BNSP" className="partner-logo" />
              <img src="/assets/images/partner/uia.png" alt="Partner TAXSAM Universitas Islam As-Syafiiyah (UIA)" className="partner-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
