"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Scan } from "lucide-react";

const InventoryControlShowcase = () => {
  return (
    <section className="py-20 px-6 bg-background text-foreground">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Intelligent Inventory Control</h2>
          <p className="text-lg text-foreground mb-8">
            Gain real-time visibility and smart stock management with automated reorder alerts, dedicated picking bins, and effortless organization to prevent waste and shortages.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Placeholder UI for Inventory Control */}
          <Card className="w-full max-w-md bg-card/10 backdrop-blur-xl p-6 rounded-xl shadow-lg shadow-white-glow">
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <div className="flex items-center space-x-2">
                <Package className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl font-semibold text-primary">Product A123</CardTitle>
              </div>
              <span className="text-sm text-muted-foreground">SKU: #INV456</span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div className="flex justify-between text-foreground">
                <span>Current Stock:</span>
                <span className="font-medium text-foreground">150 units</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Location:</span>
                <span className="font-medium text-foreground">Warehouse A, Bin 3B</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Last Updated:</span>
                <span className="font-medium text-foreground">2 mins ago</span>
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