"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import React from "react";
export const metadata = {
  name: "google-site-verification",
  content: "5o-vUqayTL-c9YWDGmYzfQI9MjGn0rAQtgAwM1-inSk",
};

const FrontLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
