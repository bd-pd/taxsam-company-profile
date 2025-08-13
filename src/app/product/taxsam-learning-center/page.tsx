'use client'
import Footer from '../../global/Footer';
import Header from '../../global/header';
import './taxsam-learning.css';
import '../../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';

export default function TaxsamLearningPage() {
  return (
    <>
      <Header active='products' />
      <main>
        <h1>Taxsam Learning</h1>
        <p>Welcome to the Taxsam Learning page.</p>
      </main>
      <Footer />
    </>
  );
}
