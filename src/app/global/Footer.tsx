import React from 'react';
import '../css/footer.css';
import { CiFacebook,CiLinkedin,CiYoutube,CiInstagram  } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-cta">
        <div className="footer-cta-title">
          <span className="footer-cta-line"></span>
          <span>LOOKING FOR A <span className="footer-cta-highlight">RELIABLE</span> PARTNER?</span>
        </div>
        <a href="#" className="footer-cta-btn">CONTACT US</a>
      </div>
      <div className="footer-menu-row">
        <div className="footer-menu-col">
          <div className="footer-menu-title">Menu</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Insight</a></li>
          </ul>
        </div>
        <div className="footer-menu-col">
          <div className="footer-menu-title">Tax Services</div>
          <ul>
            <li><a href="#">Transfer Pricing</a></li>
            <li><a href="#">Tax Legal Opinion</a></li>
            <li><a href="#">Tax Compliance</a></li>
            <li><a href="#">Tax Attorney</a></li>
          </ul>
        </div>
        <div className="footer-menu-col">
          <div className="footer-menu-title">Bigsam.co</div>
          <ul>
            <li><a href="#">Financial Services</a></li>
            <li><a href="#">Investment & Feasibility Study</a></li>
            <li><a href="#">Market & Business Research</a></li>
            <li><a href="#">Corporate Finance & Strategy</a></li>
          </ul>
        </div>
        <div className="footer-menu-col">
          <div className="footer-menu-title">Products Digital</div>
          <ul>
            <li><a href="#">Taxsam Learning Center</a></li>
            <li><a href="#">Tax Base</a></li>
            <li><a href="#">Business Learning Center</a></li>
          </ul>
        </div>
        <div className="footer-menu-col">
          <div className="footer-menu-title">Social</div>
          <div className="footer-social-row">
            <a href="#"><CiInstagram size={32} color="#fff" /></a>
            <a href="#"><CiYoutube size={32} color="#fff" /></a>
            <a href="#"><CiLinkedin size={32} color="#fff" /></a>
            <a href="#"><CiFacebook size={32} color="#fff" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-bottom-left">
          <div className="footer-address-title">Sudirman Park Office Complex</div>
          <div className="footer-address-detail">
            • Unit C-12 : Headquarters;<br />
            • Unit B-5 : Business Development;<br />
            • Unit B-8 : Tax Training & Business Development;<br />
            Sudirman Park, Jl. KH. Mas Mansyur Kav. 35, Karet Tengsin, Tanah Abang, Jakarta Pusat, DKI Jakarta, Indonesia, 10220
          </div>
          <div className="footer-logo-row">
        <img src="/assets/images/TaxsamLogo.png" alt="TAXSAM.CO" className="footer-logo-main" />
      </div>
        </div>
        <div className="footer-bottom-mid">
          <div className="footer-contact-list">
            <div><b>Company website :</b> <a href="https://www.taxsam.co">www.taxsam.co</a></div>
            <div><b>Educational web :</b> <a href="https://learning.taxsam.co">learning.taxsam.co</a></div>
            <div><b>Media web :</b> <a href="https://taxbase.taxsam.co">taxbase.taxsam.co</a></div>
            <div><b>E-mail :</b> <a href="mailto:cr@taxsam.co">cr@taxsam.co</a></div>
            <div><b>MB/WhatsApp :</b> <a href="https://wa.me/6282128400888">+62 821 2840 0888</a></div>
          </div>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-bottom-logos-title">Registered on and Supervised by:</div>
          <div className="footer-bottom-logos-row">
            <img src="/assets/images/goverment/logo cukai white font.png" alt="Bea Cukai" />
            <img src="/assets/images/goverment/logo kemenkeu white font.png" alt="Kemenkeu" />
            <img src="/assets/images/goverment/LOGO Kemendikbud white font.png" alt="Kemdikbud" />
            <img src="/assets/images/goverment/logo djp white font vertikal.jpg.png" alt="DJP" />
            <img src="/assets/images/goverment/logo kominfo white font.png" alt="Kominfo" />
            <img src="/assets/images/goverment/logo kemnaker white font.png" alt="Kemenkop" />
          </div>
        </div>
        
      </div>
      
      <div className="global-footer-copy">
        &copy; {new Date().getFullYear()} TAXSAM.CO. All rights reserved.
      </div>
    </footer>
  );
}
