"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-transparent text-foreground">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-center drop-shadow-md text-primary">
            About Us: The Inventory Software That Gets It
          </h1>
          <p className="text-muted-foreground text-sm mb-12 text-center"> {/* Updated text color */}
            Our Story: From Frustration to Fortress
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6"> {/* Updated text color */}
            <p>
              Every business owner knows the feeling. You're scaling your operation, things are finally humming, and then you hit the inevitable wall: inventory management. We've been there. Before Fortress Inventory, our founders weren't software developers; they were business owners just like you, juggling growing product lines, multiple warehouses, and the soul-crushing reality of their existing inventory system.
            </p>

            <p>
              They felt the pain: the clunky interfaces that required an instruction manual just to find a SKU, the countless hours wasted reconciling stock counts that were still wrong, and the annual bill that made you question if you were paying for software or a small yacht. The frustrating truth was that the market offered extremes: either an overly simplistic system you outgrew in six months or an enterprise behemoth that was ridiculously overpriced and loaded with complex features you'd never use. Both left you feeling like you were paying for 80% bloat and 20% utility.
            </p>

            <p>
              We got tired of adapting our business to fit the rigid, one-size-fits-all mold of existing software. We decided to build the tool we wished we had.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">Built on a Better Foundation</h2>
            <p>
              Fortress Inventory was born not in a boardroom, but in a busy warehouse. The mission was simple: create an inventory management system that is powerful, flexible, and genuinely affordable.
            </p>

            <p>
              Our team focused on the core problems that sink most small-to-midsize businesses:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Real-Time Accuracy:</strong> We built a system focused on a single source of truth, ensuring that what you see on your screen is what's on your shelf. No more surprise stockouts or phantom inventory.</li>
              <li><strong>Intuitive Design:</strong> If you need a week of training to use a piece of software, it's poorly designed. We engineered Fortress to be clean, logical, and easy enough for anyone on your team to pick up and start using immediately.</li>
              <li><strong>Feature-Set for Growth:</strong> We stripped out the unnecessary complexity and focused on the features that truly drive efficiency and profit: multi-location tracking, seamless integrations with your existing e-commerce platforms and accounting software, and powerful reporting you can actually act on.</li>
            </ul>
            <p>
              We priced it not based on what we thought we could extract from you, but on a clear, value-driven model that makes sense for a business focused on growth.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4">The Result: Your Inventory, Under Control</h2>
            <p>
              Today, Fortress Inventory is helping thousands of business owners reclaim their time, their sanity, and their margins. We’re more than just a software provider; we’re a partner dedicated to eliminating the inventory friction that holds good businesses back.
            </p>

            <p>
              We know you've been burned by expensive, underperforming systems in the past. We built Fortress Inventory as the reliable, transparent, and high-performing alternative you've been searching for.
            </p>

            <p className="text-xl font-semibold text-primary mt-8 mb-4">
              Ready to stop fighting your software and start trusting your data?
            </p>

            <p className="text-2xl font-extrabold text-foreground mt-8">
              Our Motto:
            </p>
            <p className="text-3xl font-extrabold text-primary">
              Fortress Inventory: Control Your Stock. Control Your Future.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;