"use client";
import React from "react";

const AboutMeStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md Nishath Khandakar",
    jobTitle: "MERN Stack Developer",
    url: "https://www.nishath.com.bd",
    sameAs: [
      "https://www.linkedin.com/in/md-nishath-khandakar",
      "https://github.com/mdnishath",
      "https://www.facebook.com/nishathkhandakar",
      // Add other social media profiles if applicable
    ],
  };
  return (
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  );
};

export default AboutMeStructuredData;
