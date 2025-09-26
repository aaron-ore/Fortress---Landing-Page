"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-950 to-black text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-center drop-shadow-md">
            Privacy Policy for Fortress Inventory
          </h1>
          <p className="text-gray-400 text-sm mb-12 text-center">
            Last Updated: October 1, 2025
          </p>

          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            <p>
              This Privacy Policy describes how Fortress Inventory ("we," "us," or "our") collects, uses, and shares information in connection with your use of the Fortress Inventory web and mobile application and related services (collectively, the "Service").
            </p>

            <h2 className="text-3xl font-bold text-customPurple mt-10 mb-4">1. Information We Collect</h2>
            <p>
              We collect information to provide, maintain, and improve the Service. This information falls into two main categories:
            </p>

            <h3 className="text-2xl font-semibold text-customPurple mt-6 mb-3">A. Data You Provide Directly (Account and Inventory Data)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Account Information:</strong> Your name, email address, phone number, and password (hashed).</li>
              <li><strong>Billing Information:</strong> When you subscribe to a paid plan, we (or our third-party payment processor) collect necessary payment details, such as credit card information.</li>
              <li><strong>Inventory Data (Customer Data):</strong> This is the core business data you input into the Service, including:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Product names, SKUs, descriptions, and categories.</li>
                  <li>Stock quantities, locations, and value/cost data.</li>
                  <li>Purchase orders, supplier, and customer contact details.</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-customPurple mt-6 mb-3">B. Data We Collect Automatically (Technical and Usage Data)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Device Information:</strong> Information about the device you use to access the Service, including IP address, operating system, device identifiers, and mobile network information.</li>
              <li><strong>Usage Information:</strong> Details about how you access and use the Service, such as the features you use, the time and duration of your activity, error reports, and crash data.</li>
              <li><strong>Cookies and Tracking:</strong> We and our third-party partners may use cookies and similar technologies to track activity on the Service and hold certain information.</li>
            </ul>

            <h2 className="text-3xl font-bold text-customPurple mt-10 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>To Provide the Service:</strong> To manage your account, process transactions, manage your inventory data, and provide customer support.</li>
              <li><strong>To Improve and Customize the Service:</strong> To monitor usage trends, diagnose technical issues, and improve the functionality and performance of Fortress Inventory.</li>
              <li><strong>Security and Fraud Prevention:</strong> To protect the integrity of the Service, your account, and other users' data.</li>
              <li><strong>Communication:</strong> To send you service-related messages, such as low-stock alerts, security notices, and updates to the Privacy Policy or Terms of Service.</li>
              <li><strong>Marketing:</strong> To send you promotional communications about our products and services, where permitted by law and in line with your preferences.</li>
            </ul>

            <h2 className="text-3xl font-bold text-customPurple mt-10 mb-4">3. How We Share Your Information</h2>
            <p>
              We do not sell your personal data or your Inventory Data to third parties for their marketing purposes. We may share information only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>With Service Providers:</strong> We use trusted third parties (e.g., cloud hosting providers, analytics platforms, payment processors) to perform functions on our behalf. These third parties are obligated to protect your data and only use it as necessary to provide services to us.</li>
              <li><strong>With Your Consent:</strong> We may share information with third parties when you give us explicit permission to do so (e.g., integrating with a third-party accounting system).</li>
              <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law, to respond to a legal process (e.g., a court order or subpoena), or to protect our rights, property, or safety, or that of our users or the public.</li>
              <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>

            <h2 className="text-3xl font-bold text-customPurple mt-10 mb-4">4. Data Retention and Security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Data Retention:</strong> We retain your personal data and Inventory Data for as long as your account is active or as needed to provide you with the Service. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</li>
              <li><strong>Security:</strong> We implement technical and organizational measures (such as encryption and access controls) designed to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.</li>
            </ul>

            <h2 className="text-3xl font-bold text-customPurple mt-10 mb-4">5. Your Data Rights</h2>
            <p>
              You have rights regarding your personal data, which may include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Access:</strong> The right to request copies of your personal data we hold.</li>
              <li><strong>Correction:</strong> The right to request that we correct any information you believe is inaccurate or incomplete.</li>
              <li><strong>Deletion (Right to Erasure):</strong> The right to request that we delete your personal data (and associated Inventory Data) under certain conditions.</li>
              <li><strong>Objection/Opt-Out:</strong> The right to object to our processing of your personal data (e.g., for direct marketing).</li>
            </ul>
            <p>
              You can typically access and update your Account Information directly within the Service settings. For other requests, please contact us using the details below.
            </p>

            <h2 className="text-3xl font-bold text-customPurple mt-10 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="space-y-1">
              <strong>Fortress Inventory</strong><br />
              Email: <a href="mailto:privacy@fortressinventory.com" className="text-customPurple hover:underline">privacy@fortressinventory.com</a><br />
              Address: Fortress Inventory 333 W 39th St. Ste 303, NY,NY 10018
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;