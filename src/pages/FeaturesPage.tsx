"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Package, Scan, Boxes, QrCode, Upload, ClipboardCheck, Kanban, FileText, Smartphone, Barcode, Route, BarChart, LineChart, Bot, Settings, Users, Palette, BookOpen, Zap } from "lucide-react";

const featureCategories = [
  {
    title: "Intelligent Inventory Control",
    description: "Gain complete command over your stock with advanced tracking and optimization tools.",
    features: [
      {
        icon: <Scan className="h-6 w-6 text-customPurple" />,
        name: "Real-time Visibility",
        details: "Know exactly what you have, where it is, and its value, at any moment, across all locations.",
      },
      {
        icon: <Boxes className="h-6 w-6 text-customPurple" />,
        name: "Smart Stock Management",
        details: "Optimize stock levels with automated reorder alerts, dedicated picking bins, and overstock management to prevent shortages and minimize waste.",
      },
      {
        icon: <QrCode className="h-6 w-6 text-customPurple" />,
        name: "Effortless Organization",
        details: "Structure your warehouse with flexible folder systems and generate scannable QR code labels for lightning-fast item identification.",
      },
      {
        icon: <Upload className="h-6 w-6 text-customPurple" />,
        name: "Quick Setup & Updates",
        details: "Easily add new items with images and barcodes, or bulk import your entire inventory in minutes.",
      },
    ],
  },
  {
    title: "Streamlined Order Fulfillment",
    description: "Accelerate your order processes from creation to delivery with precision and professionalism.",
    features: [
      {
        icon: <ClipboardCheck className="h-6 w-6 text-customPurple" />,
        name: "Intuitive Order Management",
        details: "Create, track, and manage sales and purchase orders with a user-friendly interface and visual Kanban boards.",
      },
      {
        icon: <Zap className="h-6 w-6 text-customPurple" />,
        name: "Accelerated Workflows",
        details: "Expedite receiving and fulfillment processes, ensuring timely deliveries and happy customers.",
      },
      {
        icon: <FileText className="h-6 w-6 text-customPurple" />,
        name: "Professional Documentation",
        details: "Generate polished PDF invoices and purchase orders directly from the platform, enhancing your brand image.",
      },
    ],
  },
  {
    title: "Empowered Warehouse Operations (Mobile-Optimized)",
    description: "Boost your team's efficiency with powerful mobile tools for every warehouse task.",
    features: [
      {
        icon: <Smartphone className="h-6 w-6 text-customPurple" />,
        name: "On-the-Go Efficiency",
        details: "Equip your team with mobile-first tools for rapid item lookup, receiving, putaway, picking, packing, and shipping.",
      },
      {
        icon: <Barcode className="h-6 w-6 text-customPurple" />,
        name: "Accuracy at Your Fingertips",
        details: "Conduct precise cycle counts, process returns, and manage stock transfers with integrated barcode/QR scanning.",
      },
      {
        icon: <Route className="h-6 w-6 text-customPurple" />,
        name: "Optimized Picking",
        details: "Batch sales orders into efficient picking waves, guiding your team through the most effective routes.",
      },
    ],
  },
  {
    title: "Actionable Insights & Smart Reporting",
    description: "Transform raw data into strategic decisions with comprehensive analytics and AI-powered summaries.",
    features: [
      {
        icon: <BarChart className="h-6 w-6 text-customPurple" />,
        name: "Comprehensive Dashboards",
        details: "Gain a high-level overview of your key metrics, from stock value to order fulfillment rates, at a glance.",
      },
      {
        icon: <LineChart className="h-6 w-6 text-customPurple" />,
        name: "Deep Dive Analytics",
        details: "Access detailed reports on inventory valuation, stock movement, sales performance, purchase order status, and profitability.",
      },
      {
        icon: <Bot className="h-6 w-6 text-customPurple" />,
        name: "AI-Powered Summaries",
        details: "Get concise, intelligent summaries of your reports to quickly grasp key trends and make informed decisions.",
      },
    ],
  },
  {
    title: "Automate for Growth",
    description: "Let Fortress handle the routine, so your team can focus on strategic growth and innovation.",
    features: [
      {
        icon: <Settings className="h-6 w-6 text-customPurple" />,
        name: "Custom Automation Rules",
        details: "Set up powerful rules to automate repetitive tasks, from sending low-stock notifications to automatically generating purchase orders.",
      },
      {
        icon: <Zap className="h-6 w-6 text-customPurple" />,
        name: "Proactive Management",
        details: "Automate routine tasks and notifications, allowing your team to focus on strategic initiatives and business expansion.",
      },
    ],
  },
  {
    title: "Secure & Scalable Platform",
    description: "A robust and flexible foundation designed to protect your data and grow with your business.",
    features: [
      {
        icon: <Users className="h-6 w-6 text-customPurple" />,
        name: "Robust User Management",
        details: "Assign granular roles and permissions to your team, ensuring everyone has the right level of access and accountability.",
      },
      {
        icon: <Palette className="h-6 w-6 text-customPurple" />,
        name: "Customizable Experience",
        details: "Tailor your workspace with personalized themes and settings to match your brand and workflow preferences.",
      },
      {
        icon: <BookOpen className="h-6 w-6 text-customPurple" />,
        name: "Guided Onboarding",
        details: "Get up and running quickly with an intuitive setup wizard and helpful in-app tutorials, ensuring a smooth transition.",
      },
    ],
  },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-950 to-black text-white">
        <div className="container mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Fortress Features: Your Command Center for Inventory Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the powerful capabilities of Fortress, designed to transform your inventory management, streamline operations, and drive growth.
          </p>
        </div>

        <div className="container mx-auto space-y-24">
          {featureCategories.map((category, catIndex) => (
            <section key={catIndex} className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 border-b border-gray-800 last:border-b-0">
              <div className={`md:w-1/2 ${catIndex % 2 === 0 ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}>
                <h2 className="text-4xl font-bold mb-4 text-customPurple">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  {category.description}
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {category.features.map((feature, featIndex) => (
                    <Card key={featIndex} className="bg-background/10 backdrop-blur-xl p-4 rounded-xl shadow-lg">
                      <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-2">
                        <div className="p-2 bg-customPurple/10 rounded-full">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-customPurple">
                          {feature.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 text-left">
                        <CardDescription className="text-gray-300 text-base">
                          {feature.details}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className={`md:w-1/2 ${catIndex % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
                {/* Placeholder for category-specific visual */}
                <div className="w-full max-w-lg h-64 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-xl shadow-xl">
                  {category.title} Visual Placeholder
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;