"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import React from "react";

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
