import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialProfile = () => {
  return (
    <div className="flex gap-5 text-black">
      <div className="p-2 hover:text-primary duration-100 ease-linear bg-transparent hover:border-primary border-slate-600 border-[1px] rounded-full cursor-pointer text-slate-600 group">
        <FaFacebookF className="text-xl duration-300 ease-linear " />
      </div>
      <div className="p-2 hover:text-primary duration-300 ease-linear bg-transparent hover:border-primary border-slate-600  border-[1px] rounded-full cursor-pointer text-slate-600 group">
        <FaLinkedinIn className="text-xl duration-300 ease-linear " />
      </div>
      <div className="p-2 hover:text-primary duration-300 ease-linear bg-transparent hover:border-primary border-slate-600  border-[1px] rounded-full cursor-pointer text-slate-600 group">
        <FaGithub className="text-xl duration-300 ease-linear " />
      </div>
    </div>
  );
};

export default SocialProfile;
