"use client";
import React from "react";
import Container from "./shared/Container";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
// import Button from "./shared/Button";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useMenuContext } from "@/context/MenuContext";

const Navigation = () => {
  const { toggle, open } = useMenuContext();
  return (
    <div>
      <div className="fixed top-0 left-0 z-10 w-full px-4 py-2 text-white opacity-80 backdrop-blur-sm bg-slate-900 md:px-4">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Link href={"/"}>
              <Image
                src={logo}
                width={250}
                className="flex-shrink-0"
                alt="Logo"
              />
            </Link>
            <div className="flex-shrink-0">
              <HiOutlineMenuAlt2
                onClick={() => toggle()}
                className="text-3xl duration-300 ease-linear cursor-pointer text-primary"
              />
            </div>
          </div>
        </Container>
      </div>

      <div
        id="menu"
        className={`fixed z-20 ${
          open ? "w-screen h-screen opacity-95 " : "w-0 h-0 opacity-0"
        } flex justify-center items-center bg-slate-900 duration-300 ease-linear`}
      >
        <button
          className="fixed font-semibold duration-300 text-primary top-6 right-8 text-7xl"
          onClick={toggle}
        >
          &times;
        </button>
        <ul className="flex flex-col space-y-3 text-xl font-light text-center text-white">
          <li className="duration-300 hover:text-primary">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="duration-300 hover:text-primary">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="duration-300 hover:text-primary">
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li className="duration-300 hover:text-primary">
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li className="duration-300 hover:text-primary">
            <Link href={"/google-autocomplete-pro"}>Google Autocomplete</Link>
          </li>
          <li className="duration-300 hover:text-primary">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
