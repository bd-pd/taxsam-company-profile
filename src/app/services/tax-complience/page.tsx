'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './tax-complience.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';
import '../tax-complience/tax-complience.css';

export default function TaxCompliancePage() {
  return (
    <>
    <Header active="products" />
      <main>
        <h1>Tax Compliance</h1>
        <ClientsPartners />
      </main>
      <Footer />
    </>
  );
}
