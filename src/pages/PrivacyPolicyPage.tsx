"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-transparent text-foreground">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-center drop-shadow-md text-primary">
            FORTRESS INVENTORY PRIVACY POLICY
          </h1>
          <p className="text-muted-foreground text-sm mb-12 text-center"> {/* Updated text color */}
            Effective Date: October 1, 2025 | Last Updated: November 6, 2025
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6"> {/* Updated text color */}
            <p>
              This Privacy Policy describes how Fortress Inventory ("Company," "we," "us," or "our"), the provider of the Fortress Inventory service, collects, uses, and discloses information about our users and customers ("you" or "your").
            </p>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">1. INFORMATION WE COLLECT</h2>
            <p>
              We collect information to provide and improve the Service, manage your account, and communicate with you.
            </p>

            <h3 className="text-2xl font-semibold text-secondary mt-6 mb-3">1.1 Information Provided by You</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Account Information:</strong> Name, email address, phone number, company name, billing address, and payment information (processed by a third-party service provider).</li>
              <li><strong>Customer Data:</strong> All data you upload or input into the Service, including inventory records, SKU details, vendor information, location data, and transaction logs.</li>
              <li><strong>Communications:</strong> Information exchanged when you contact customer support, participate in surveys, or interact with us via email.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary mt-6 mb-3">1.2 Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Usage Data:</strong> Information about how you access and use the Service, such as feature usage, access times, pages viewed, and the path taken through the application.</li>
              <li><strong>Device and Log Data:</strong> IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies (like web beacons) to maintain your session, authenticate users, and analyze usage patterns.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">2. HOW WE USE YOUR INFORMATION</h2>
            <p>
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>2.1 Service Provision:</strong> To operate, maintain, and provide all features of the Fortress Inventory Service, including processing, tracking, and managing your inventory data.</li>
              <li><strong>2.2 Security and Monitoring:</strong> To secure the Service, prevent fraud, and monitor for unauthorized activity.</li>
              <li><strong>2.3 Communication:</strong> To send you technical notices, security alerts, and administrative messages, as well as to respond to your customer service requests.</li>
              <li><strong>2.4 Improvement:</strong> To analyze usage trends and metrics to improve the quality, functionality, and performance of the Service.</li>
              <li><strong>2.5 Marketing (with Consent):</strong> To send you promotional and marketing communications, subject to your communication preferences and consent.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">3. HOW WE SHARE YOUR INFORMATION</h2>
            <p>
              We do not sell your Customer Data or personal information. We may share information with third parties only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>3.1 Service Providers:</strong> We share necessary information with vendors, consultants, and other third-party service providers who need access to the data to perform services on our behalf (e.g., cloud hosting, payment processing, customer support tools). These providers are legally bound to protect your data.</li>
              <li><strong>3.2 Legal Obligations:</strong> We may disclose information if required to do so by law, such as to comply with a subpoena or other legal process, or to protect the rights, property, or safety of the Company or others.</li>
              <li><strong>3.3 Business Transfers:</strong> Information may be transferred in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
              <li><strong>3.4 With Your Consent:</strong> We may share information with third parties when you give us explicit permission to do so.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">4. DATA SECURITY AND RETENTION</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>4.1 Security Measures:</strong> We use industry-standard technical and organizational security measures, including encryption and access controls, to protect the confidentiality and integrity of your data. However, no internet transmission is 100% secure.</li>
              <li><strong>4.2 Data Retention:</strong> We retain your Customer Data for as long as your account is active or as needed to provide you the Service. Following termination, we securely delete or anonymize your data in accordance with the terms outlined in the Terms of Service.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">5. YOUR RIGHTS AND CHOICES</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>5.1 Account Information:</strong> You may update or correct your account information at any time by logging into your account settings.</li>
              <li><strong>5.2 Opt-Out of Marketing:</strong> You can opt out of receiving promotional emails from us by following the unsubscribe instructions provided in those emails. You will still receive essential service-related communications.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">6. CHANGES TO THIS POLICY</h2>
            <p>
              We may change this Privacy Policy from time to time. If we make material changes, we will notify you by email or through a prominent notice on the Service before the change takes effect.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">7. CONTACT US</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="space-y-1">
              <strong>Fortress Inventory</strong><br />
              Email: <a href="mailto:support@fortressinventory.com" className="text-secondary hover:underline">support@fortressinventory.com</a><br />
              Address: 333 W 39th St New York, NY 10018
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;