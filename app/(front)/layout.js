"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";

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
