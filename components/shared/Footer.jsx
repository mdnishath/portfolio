import React from "react";
import Container from "./Container";
import white from "@/assets/white.svg";
import Image from "next/image";
import SocialProfile from "./SocialProfile";

const Footer = () => {
  const d = new Date();
  return (
    <footer
      className={`w-full z-[100] text-white 
    bg-slate-900 py-8 px-4
  }`}
    >
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Image
              src={white}
              width={250}
              className="mx-auto md:ml-0"
              alt="Logo"
            />
          </div>

          <div className="mx-auto md:ml-0">
            <SocialProfile />
          </div>
          <div>
            <p className="text-center md:text-left">
              Copyright <span className="mx-1">{d.getFullYear()}</span>© All
              rights Reserved. Website Design & SEO Services By Md Nishath
              Khandakar
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
