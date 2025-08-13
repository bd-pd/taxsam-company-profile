'use client'
import Footer from '../global/Footer';
import Header from '../global/header';
import './insight.css';
import '../css/index.css';
import ClientsPartners from '@/app/global/clienst_partners';
import Script from 'next/script';

export default function InsightPage() {
  return (
    <>
      <Header active='insight' />
      <main>
        <h1>Insights</h1>
        <p>Welcome to the insights page.</p>
      </main>
      <Footer />
    </>
  );
}
