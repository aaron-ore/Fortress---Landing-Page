"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, TrendingUp } from "lucide-react";

const InsightsReportingShowcase = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black to-gray-950 text-white">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Actionable Insights & Smart Reporting</h2>
          <p className="text-lg text-gray-300 mb-8">
            Access comprehensive dashboards, deep-dive analytics, and AI-powered summaries to quickly grasp trends and make informed, strategic decisions.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-start">
          {/* Placeholder UI for Insights & Reporting */}
          <Card className="w-full max-w-md bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <div className="flex items-center space-x-2">
                <BarChart className="h-6 w-6 text-customPurple" />
                <CardTitle className="text-xl font-semibold text-white">Sales Performance</CardTitle>
              </div>
              <span className="text-sm text-gray-400">Q3 2024</span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Total Revenue:</span>
                <span className="font-medium text-green-400">$125,000</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Growth (YoY):</span>
                <span className="font-medium text-green-400 flex items-center">
                  +18% <TrendingUp className="h-4 w-4 ml-1" />
                </span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Top Product:</span>
                <span className="font-medium text-white">Widget Pro</span>
              </div>
              <div className="bg-blue-500/20 text-blue-300 text-center py-2 rounded-md mt-4">
                AI Summary: Strong growth, focus on Widget Pro.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsReportingShowcase;