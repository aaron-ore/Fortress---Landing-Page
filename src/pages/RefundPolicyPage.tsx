"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-transparent text-foreground">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-center drop-shadow-md text-primary">
            FORTRESS INVENTORY 30-DAY MONEY BACK GUARANTEE & REFUND POLICY
          </h1>
          <p className="text-muted-foreground text-sm mb-2 text-center">
            Applies to: First-time, paid Subscriptions (Standard, Pro, or Enterprise).
          </p>
          <p className="text-muted-foreground text-sm mb-12 text-center">
            Policy Date: November 6, 2025
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <p>
              We stand behind the power and utility of the Fortress Inventory service. If you are a first-time paid subscriber and are not satisfied with the Service for any reason, you are eligible for a full refund of your initial Subscription fee under the following terms:
            </p>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">1. GUARANTEE TERM</h2>
            <p>
              You must submit your written request for a refund within thirty (30) calendar days of the original payment date ("Guarantee Period").
            </p>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">2. ELIGIBILITY AND SCOPE</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>2.1 First-Time Customers Only:</strong> This Guarantee is exclusively available to customers purchasing a paid Subscription for the first time.</li>
              <li><strong>2.2 Initial Payment Only:</strong> The refund applies only to the initial payment made for the first month or first year of the Subscription. It does not apply to:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Subscription renewals (after the initial term).</li>
                  <li>Upgrades to a higher plan or additional user licenses purchased.</li>
                  <li>Fees incurred for optional third-party integrations or add-ons.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">3. REFUND PROCESS</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>3.1 Submission:</strong> To claim a refund under this Guarantee, you must send an email to <a href="mailto:billing@fortressinventory.com" className="text-secondary hover:underline">billing@fortressinventory.com</a>.</li>
              <li><strong>3.2 Required Information:</strong> Your request must include your company name, the primary account user name, and a brief reason for the cancellation (feedback is appreciated but does not affect your eligibility).</li>
              <li><strong>3.3 Processing:</strong> Once confirmed, the refund will be processed back to the original payment method within [Number] business days.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">4. EFFECT OF REFUND</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>4.1 Service Termination:</strong> Upon processing the refund, your access to the Fortress Inventory Service will be immediately terminated.</li>
              <li><strong>4.2 Data Handling:</strong> Following termination, we will delete your Customer Data as detailed in the Terms of Service (specifically the Data Retention section). Please ensure you have exported any necessary data before submitting your refund request.</li>
            </ul>

            <p>
              For all other terms and conditions related to service use, liability, and account termination, please refer to the Fortress Inventory Terms of Service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;