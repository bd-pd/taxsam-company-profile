'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './taxbase-taxsam.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';

export default function TaxbasePage() {
  return (
    <>
      <Header active='products' />
      <main>
        <h1>Taxbase</h1>
        <p>Welcome to the Taxbase page.</p>
      </main>
      <Footer />
    </>
  );
}
