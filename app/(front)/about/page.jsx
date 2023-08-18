import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import aboutMe from "@/assets/nish.png";
import journey from "@/assets/journey.svg";
import code from "@/assets/code.svg";
import exp from "@/assets/exp.svg";
import usergenaretic from "@/assets/usergenaretic.svg";
import learning from "@/assets/learning.svg";
import create from "@/assets/create.svg";
export const metadata = {
  title: "About Me | Passionate MERN Stack Developer and Tech Enthusiast",
  description:
    "Get to know me, a passionate MERN stack developer and tech enthusiast. With a strong foundation in MongoDB, Express, React, and Node.js, I'm dedicated to creating innovative web solutions that deliver exceptional user experiences.",
};

const AboutPage = () => (
  <>
    <section className="px-4">
      <Container>
        <div className="grid items-center grid-cols-1 overflow-hidden md:h-screen md:gap-10 md:grid-cols-2 py-[100px] md:py-0">
          <div>
            <h1 className={"text-white md:text-5xl text-2xl"}>
              Hello, I'm Md Nishath Khandakar!
            </h1>
            <h2 className="mt-3 text-xl font-semibold text-white ">
              Your MERN Stack Developer Extraordinaire
            </h2>
            <p className="mt-3 text-lg font-normal text-white">
              Get to know me, a passionate MERN stack developer and tech
              enthusiast. With a strong foundation in MongoDB, Express, React,
              and Node.js, I'm dedicated to creating innovative web solutions
              that deliver exceptional user experiences.
            </p>
          </div>
          <div>
            <Image
              className="w-full mx-auto rounded-lg"
              src={aboutMe}
              alt="Nishath"
            />
          </div>
        </div>
      </Container>
    </section>
    <section className="px-4">
      <Container>
        <div className="grid md:grid-cols-12 gap-5 mx-auto mb-10 rounded-lg backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60 items-center md:p-[100px] p-5">
          <div className="col-span-7">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                A Bit About Myself
              </h3>
              <p className="mt-3 text-white">
                {`I am a passionate MERN stack developer, deeply engrossed in the art of building dynamic and interactive web applications. From the early days of my coding journey, I knew I had found my calling in the world of technology, and the MERN stack captured my imagination like no other.`}
              </p>
            </div>
          </div>
          <div className="col-span-5">
            <Image
              className="w-full mx-auto rounded-lg"
              src={code}
              alt="Nishath"
            />
          </div>
          <div className="order-2 col-span-5 md:order-1">
            <Image
              className="md:w-[70%] w-full rounded-lg mx-auto"
              src={exp}
              alt="Nishath"
            />
          </div>
          <div className="order-1 col-span-7 md:order-2">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                My Expertise
              </h3>
              <p className="mt-3 text-white">
                As a MERN stack developer, I specialize in crafting robust and
                dynamic web applications using the powerful MERN stack. The MERN
                stack, which stands for MongoDB, Express.js, React, and Node.js,
                is a cutting-edge technology combination that empowers me to
                create full-stack applications with unparalleled efficiency and
                performance.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section className="px-4">
      <Container>
        <div className="grid md:grid-cols-12 gap-5 mx-auto mb-10 rounded-lg backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60 items-center md:p-[100px] p-5">
          <div className="col-span-7">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                My Journey with MERN
              </h3>
              <p className="mt-3 text-white">
                {`Throughout my career, I have had the privilege of working on a diverse range of projects, from small startups to large-scale enterprises. With every line of code I write, my passion for the MERN stack grows stronger, fueled by the possibilities it offers and the rewarding feeling of creating something meaningful.`}
              </p>
            </div>
          </div>
          <div className="col-span-5">
            <Image
              className="w-2/3 mx-auto rounded-lg"
              src={journey}
              alt="Nishath"
            />
          </div>
          <div className="order-2 col-span-5 md:order-1">
            <Image
              className="md:w-[70%] w-full rounded-lg"
              src={usergenaretic}
              alt="Nishath"
            />
          </div>
          <div className="order-1 col-span-7 md:order-2">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                Crafting User-Centric Experiences
              </h3>
              <p className="mt-3 text-white">
                {`For me, web development is not just about technology; it's about the end-users and the experiences we can create for them. I take pride in delivering applications that are not only high-performing but also user-friendly and visually captivating.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section className="px-4">
      <Container>
        <div className="grid md:grid-cols-12 gap-5 mx-auto mb-10 rounded-lg backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60 items-center md:p-[100px] p-5">
          <div className="col-span-7">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                Constantly Learning and Evolving
              </h3>
              <p className="mt-3 text-white">
                {`The world of technology is ever-changing, and I see it as an exciting challenge to stay on top of the latest trends and best practices. This drive to continuously learn and evolve enables me to push the boundaries of what's possible with the MERN stack and deliver cutting-edge solutions to my clients.`}
              </p>
            </div>
          </div>
          <div className="col-span-5">
            <Image
              className="w-2/3 mx-auto rounded-lg"
              src={learning}
              alt="Nishath"
            />
          </div>
          <div className="order-2 col-span-5 md:order-1">
            <Image
              className="md:w-[70%] w-full rounded-lg"
              src={create}
              alt="Nishath"
            />
          </div>
          <div className="order-1 col-span-7 md:order-2">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                Let's Create Together
              </h3>
              <p className="mt-3 text-white">
                {`Whether you have a brilliant idea for a startup, want to revamp your existing web presence, or need a custom web application, I'm here to make it happen. Let's collaborate and turn your vision into reality with the power of the MERN stack.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default AboutPage;
