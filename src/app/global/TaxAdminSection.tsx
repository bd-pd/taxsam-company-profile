'use client';
import React from 'react';
import '../css/global/Tax-Administration.css';

export default function TaxAdminSection() {
  return (
    <section className="tax-admin-section">
      <div className="tax-admin-wrapper">
        <div className="tax-admin-header">
          <div className="tax-admin-offerings">
            <span className="tax-admin-offerings-label">[ OUR OTHER OFFERINGS ]</span>
          </div>
          <h2 className="tax-admin-title">Tax Administration</h2>
          <div className="tax-admin-underline"></div>
        </div>
        <div className="tax-admin-grid">
          <div className="tax-admin-card">Tax Payment and Collection</div>
          <div className="tax-admin-card">Tax Audits and Investigations</div>
          <div className="tax-admin-card">Tax Dispute Resolution</div>
          <div className="tax-admin-card">Tax Registration and Identification</div>
          <div className="tax-admin-card">Tax Return Preparation and Filing</div>
          <div className="tax-admin-card">Tax Calculation and Assessment</div>
        </div>
      </div>
    </section>
  );
}
