"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Fortress Inventory?",
    answer: "Fortress Inventory is a cloud-based inventory management system designed to help businesses of all sizes gain real-time visibility, optimize stock levels, streamline order fulfillment, and empower warehouse operations with intelligent tools and reporting.",
  },
  {
    question: "How does Fortress Inventory help my business?",
    answer: "Fortress helps you eliminate stockouts, prevent overstocking, reduce manual errors, accelerate order processing, and make data-driven decisions. This leads to increased efficiency, reduced costs, and improved profitability.",
  },
  {
    question: "Is Fortress Inventory suitable for small businesses?",
    answer: "Absolutely! Fortress offers a flexible Free Plan for startups and small businesses, along with scalable paid plans that grow with your needs, ensuring you only pay for what you use.",
  },
  {
    question: "Can I track inventory across multiple locations?",
    answer: "Yes, Fortress Inventory supports multi-location tracking, allowing you to manage stock levels, transfers, and orders across all your warehouses, stores, or distribution centers from a single platform.",
  },
  {
    question: "Does Fortress Inventory integrate with other platforms?",
    answer: "Fortress is built with integration in mind. We offer (or are actively developing) integrations with popular e-commerce platforms like Shopify and accounting software like QuickBooks to ensure seamless data flow.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support including in-app tutorials, a detailed knowledge base, and dedicated customer support via email and chat to help you get the most out of Fortress Inventory.",
  },
  {
    question: "Is my data secure with Fortress Inventory?",
    answer: "Yes, data security is a top priority. We implement robust technical and organizational measures, including encryption and access controls, to protect your information from unauthorized access and ensure its confidentiality and integrity.",
  },
  {
    question: "How do I get started with Fortress Inventory?",
    answer: "You can start with our Free Plan or a 14-day free trial of any paid plan directly from our website. Simply click 'Start Your Free 14-Day Trial' and follow the registration steps.",
  },
  {
    question: "What is the pricing for Fortress Inventory?",
    answer: "We offer a Free Plan and several paid subscription tiers (Standard, Pro, Enterprise) designed to fit different business sizes and needs. You can find detailed pricing information on our Pricing page.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can easily upgrade or downgrade your subscription plan at any time directly from your account settings to match your evolving business requirements.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have more questions? We've got answers. Find quick solutions to common inquiries about Fortress Inventory.
        </p>
      </div>

      <div ref={ref} className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className={cn(
                "border-b border-border/50 bg-card/50 backdrop-blur-sm rounded-lg mb-4 px-4 glow-shadow",
                "opacity-0 translate-y-10", // Initial hidden state
                isVisible && `animate-slide-in-from-bottom animation-delay-${index * 70}` // Staggered animation
              )}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;