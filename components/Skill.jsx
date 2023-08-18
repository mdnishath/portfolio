import React from "react";
import Image from "next/image";

const Skill = ({ title, image, type }) => {
  return (
    <div className="flex items-center gap-3 shadow-xl p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
      <div className="flex items-center gap-3">
        <Image
          width={100}
          height={100}
          className={"w-[40px]"}
          src={image}
          alt={title}
        />
        <h5 className="text-lg font-bold text-white">{title}</h5>
      </div>
      <span className="text-sm text-white">( {type} )</span>
    </div>
  );
};

export default Skill;
