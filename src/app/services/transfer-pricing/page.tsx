'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './transfer-pricing.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';
import '../transfer-pricing/transfer-pricing.css';

export default function TransferPricingPage() {
  return (
    <>
      <Header active="products" />
      <main>
        <h1>Transfer Pricing</h1>
        <ClientsPartners />
      </main>
      <Footer />
    </>
  );
}
