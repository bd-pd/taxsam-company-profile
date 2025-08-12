"use client";
import Footer from '../global/Footer';
import Header from '../global/header';
import '../css/our_clients.css';
import ClientsPartnerLegal from './clients_partner_legal';



export default function OurClientsPage() {
  return (
    <div>
      <Header active="clients" />
      <main>
        <section className="clients-hero-section">
          <div className="clients-hero-bg"></div>
          <div className="clients-hero-content">
            <h1 className="clients-hero-title">
              Partnering with Trusted Clients for<br />Mutual Success
            </h1>
          </div>
        </section>
        <ClientsPartnerLegal />
      </main>
      <Footer />
    </div>
  );
}