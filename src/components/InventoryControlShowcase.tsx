"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Scan } from "lucide-react";

const InventoryControlShowcase = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-950 to-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Intelligent Inventory Control</h2>
          <p className="text-lg text-gray-300 mb-8">
            Gain real-time visibility and smart stock management with automated reorder alerts, dedicated picking bins, and effortless organization to prevent waste and shortages.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Placeholder UI for Inventory Control */}
          <Card className="w-full max-w-md bg-background/10 backdrop-blur-xl p-6 rounded-xl shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <div className="flex items-center space-x-2">
                <Package className="h-6 w-6 text-customPurple" />
                <CardTitle className="text-xl font-semibold text-customPurple">Product A123</CardTitle>
              </div>
              <span className="text-sm text-gray-400">SKU: #INV456</span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Current Stock:</span>
                <span className="font-medium text-white">150 units</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Location:</span>
                <span className="font-medium text-white">Warehouse A, Bin 3B</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Last Updated:</span>
                <span className="font-medium text-white">2 mins ago</span>
              </div>
              <div className="bg-green-500/20 text-green-300 text-center py-2 rounded-md mt-4">
                <Scan className="inline-block h-4 w-4 mr-2" /> Ready for picking
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InventoryControlShowcase;