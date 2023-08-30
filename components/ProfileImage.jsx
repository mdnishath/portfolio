"use client";
import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.png";

const ProfileImage = () => {
  return (
    <Image
      className="rounded-full border-[1px] border-slate-600 mx-auto mt-4"
      src={profile}
      alt="Profile"
      priority
    />
  );
};

export default ProfileImage;
