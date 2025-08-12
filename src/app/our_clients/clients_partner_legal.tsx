"use client";
import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";

interface ClientItem {
  name: string;
  logo: string;
  desc: string;
}

const CLIENTS: ClientItem[] = [
  {
    name: 'PT ANTAM Tbk',
    logo: '/assets/images/clients/Emas-Antam-indonesia-Logo.png',
    desc: 'PT ANTAM Tbk merupakan perusahaan pertambangan yang memiliki tiga bisnis inti yakni nikel, emas dan permuian, serta bauksit dan alumina. Perusahaan ini juga mengolah dan menjalankan pertambangan dalam unit lain seperti transportasi, industri, dan perdagangan. PT ANTAM Tbk tergabung dalam asosiasi pertambangan MIND ID.'
  },
  {
    name: 'PT PLN Persero',
    logo: '/assets/images/clients/pln.png',
    desc: 'PT PLN (Persero) adalah perusahaan listrik milik negara yang menyediakan layanan kelistrikan nasional di Indonesia.'
  }
];

const PARTNERS: ClientItem[] = [
  {
    name: 'KAP ABC & Partners',
    logo: '/assets/images/partners/kapabc.png',
    desc: 'Kantor Akuntan Publik yang menjadi mitra strategis dalam audit dan konsultasi keuangan.'
  },
  {
    name: 'Law Firm XYZ',
    logo: '/assets/images/partners/lawfirmxyz.png',
    desc: 'Firma hukum yang membantu klien dalam penyelesaian sengketa dan konsultasi hukum bisnis.'
  }
];

const LEGALS: ClientItem[] = [
  {
    name: 'Notaris DEF',
    logo: '/assets/images/legals/notarisdef.png',
    desc: 'Notaris yang mendukung legalitas dokumen dan transaksi bisnis klien kami.'
  }
];

const TABS = [
  {
    key: 'all',
    label: 'All',
    icon: <CiFilter style={{ fontSize: 20, verticalAlign: 'middle' }} />,
  },
  {
    key: 'clients',
    label: 'Clients',
    icon: <span role="img" aria-label="clients"></span>,
  },
  {
    key: 'partners',
    label: 'Partners',
    icon: <span role="img" aria-label="partners"></span>,
  },
  {
    key: 'legals',
    label: 'Legals',
    icon: <span role="img" aria-label="legals"></span>,
  },
];

export default function ClientsPartnerLegal() {
const [activeTab, setActiveTab] = useState('all');

let data: ClientItem[] = [];
if (activeTab === 'all') data = [...CLIENTS, ...PARTNERS, ...LEGALS];
else if (activeTab === 'clients') data = CLIENTS;
else if (activeTab === 'partners') data = PARTNERS;
else if (activeTab === 'legals') data = LEGALS;


  return (
    <section className="clients-main-section">
      <div className="clients-main-container">
        <aside className="clients-sidebar">
          <div className="clients-tab-list">
            {TABS.map(tab => (
              <button
                key={tab.key}
                className={`clients-tab-btn${activeTab === tab.key ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span className="clients-tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="clients-partnership-box">
            <div className="clients-partnership-title">
              Partnerships For Authentic Experiences.
            </div>
            <a href="#" className="clients-partnership-btn">
              <span role="img" aria-label="chat"><IoChatboxOutline /></span> TALK TO US
            </a>
          </div>
        </aside>
        <div className="clients-content">
          <h2 className="clients-content-title">Our Clients, Partners, And Legals</h2>
          <div className="clients-content-underline"></div>
          <div className="clients-content-desc">
            We are deeply committed to our clients, providing exceptional tax and business consulting services, and building long-lasting partnerships. Our clients trust us with their financial well-being, and we strive to exceed their expectations through expert guidance and insightful education. Furthermore, we foster strategic partnerships with other professionals, such as lawyers and accountants, to offer comprehensive solutions. We prioritize legal compliance and maintain a strong understanding of tax laws and regulations to ensure our clients’ success while adhering to the highest ethical standards.
          </div>
          <div className="clients-list-section">
            <div className="clients-list-title">{TABS.find(t => t.key === activeTab)?.label}</div>
            <div className="clients-list-cards">
              {data.map((item, idx) => (
                <div className="clients-list-card" key={idx}>
                  <div className="clients-list-card-header">
                    {item.logo && (
                      <img src={item.logo} alt={item.name} className="clients-list-card-logo" />
                    )}
                    <div className="clients-list-card-name"><b>{item.name}</b></div>
                  </div>
                  <div className="clients-list-card-desc">{item.desc}</div>
                </div>
              ))}
              {data.length === 0 && (
                <div className="clients-list-card clients-list-card-empty">
                  No data available.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
