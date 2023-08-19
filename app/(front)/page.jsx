import Image from "next/image";
import profile from "@/assets/profile.png";
import SocialProfile from "@/components/shared/SocialProfile";
import Container from "@/components/shared/Container";
import developer from "@/assets/developer.svg";
import hero from "@/assets/hero.svg";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Type from "@/components/shared/Type";
import Projects from "@/components/Projects";
import Button from "@/components/shared/Button";
import Link from "next/link";
import Head from "next/head";
import AboutMeStructuredData from "@/components/AboutMeStructuredData ";
export const metadata = {
  title: "Experienced MERN Stack Developer | Building Dynamic Web Solutions",
  description:
    "As an experienced MERN stack developer, I specialize in crafting dynamic web solutions that drive results. Explore my portfolio and expertise in MongoDB, Express, React, and Node.js. Let's bring your ideas to life.",
};

export default async function Home() {
  return (
    <>
      <AboutMeStructuredData />

      {/* Hero Section Start */}
      <section className="px-4">
        <Container>
          <div className="items-center gap-20 py-20 md:grid md:grid-cols-12 md:justify-center md:h-screen h-1/2 md:py-0">
            <div className="sm:col-span-12 md:col-span-4">
              <div className="px-4 py-8 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
                <p className="text-xl font-bold text-center text-white md:text-2xl">
                  Md Nishath Khandakar
                </p>
                <Image
                  className="md:w-[200px] w-[180px] rounded-full border-[1px] border-slate-600 mx-auto mt-4"
                  src={profile}
                  alt="Profile"
                />
                <h1 className="flex justify-center mt-4 text-xl text-white md:text-lg">
                  <Type
                    text={[
                      "React Js Development",
                      "MERN Stack Development",
                      "Back-End Development",
                    ]}
                    loop={-1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <div className="flex justify-center mt-5">
                  <span className="text-base font-medium text-center text-white">
                    nishath.khandakar@gmail.com
                  </span>
                </div>
                <div className="flex justify-center mt-1">
                  <span className="text-lg font-bold text-center text-white">
                    Rangpur, Bangladesh
                  </span>
                </div>
                <div className="flex justify-center mt-5">
                  <SocialProfile />
                </div>
                <div className="flex justify-center mt-5">
                  <Link
                    className="inline-block px-8 py-2 mx-auto font-bold rounded-lg bg-primary text-slate-900"
                    href={
                      "https://api.whatsapp.com/send?phone=8801767591988&text=Hello"
                    }
                    target="_blanck"
                    align={"justify-center"}
                  >
                    Hire Me !
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:col-span-12 md:col-span-8">
              {/* <Image className="w-[600px] mx-auto" src={hero} alt="Profile" /> */}
              <h3 className="block mt-4 text-5xl font-light text-white md:text-5xl lg:text-8xl md:mt-0">
                Hello it's <span className="text-primary">Nishath</span>, MERN
                Stack Developer
              </h3>
              <p className="text-white md:w-[80%] w-full md:mt-8 mt-4 break-all">
                As an experienced MERN stack developer, I specialize in crafting
                dynamic web solutions that drive results. Explore my portfolio
                and expertise in MongoDB, Express, React, and Node.js. Let's
                bring your ideas to life.
              </p>
              <div className="flex gap-10 mt-4 text-white md:mt-8">
                <div className="rounded-lg md:p-5">
                  <p className="text-4xl text-center md:text-6xl text-primary">
                    5+
                  </p>
                  <p className="mt-4 text-xl text-center md:text-2xl">
                    Years of Experience
                  </p>
                </div>
                <div className="rounded-lg md:p-5 ">
                  <p className="text-4xl text-center md:text-6xl text-primary">
                    50+
                  </p>
                  <p className="mt-4 text-xl text-center md:text-2xl">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section Start */}
      <section className=" py-[50px] px-4">
        <Container>
          <div className="items-center gap-10 md:grid md:justify-center md:grid-cols-12">
            <div className="col-span-7">
              <div className="p-4 rounded-lg backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
                <h3 className="text-3xl font-bold text-white md:text-4xl">
                  About Me
                </h3>
                <p className="text-white">
                  {`Hello there! I'm thrilled to have this opportunity to introduce
                myself as a MERN Stack Developer. My name is Nishath, and I'm
                passionate about creating innovative web applications and
                crafting seamless user experiences. With a keen eye for detail
                and a dedication to excellence, I strive to bring the best
                possible results to every project I undertake.`}
                </p>
                <h4 className="mt-5 text-xl font-bold text-white md:text-2xl">
                  Technical Expertise:
                </h4>
                <p className="mt-4 text-white">
                  As a MERN Stack Developer, my expertise lies in building
                  robust and scalable applications using the MERN stack, which
                  comprises MongoDB, Express.js, React.js, and Node.js. Allow me
                  to shed some light on each component of this powerful
                  technology stack:
                </p>
                <div className="flex flex-wrap gap-4 mt-5">
                  <span className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded-full">
                    MongoDB
                  </span>
                  <span className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded-full">
                    Express Js
                  </span>
                  <span className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded-full">
                    React Js
                  </span>
                  <span className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded-full">
                    Node Js
                  </span>
                  <span className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded-full">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-5 ">
              <div className="rounded-lg shadow-2xl backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
                <Image src={developer} alt="About" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* About Section End */}
      {/* Skills Section Start */}
      <section className="py-[50px] px-4">
        <Container>
          <h3 className="text-3xl font-bold text-white md:text-4xl">Skills</h3>
          <Skills />
        </Container>
      </section>
      {/* Skills Section End */}
      {/* Project section start */}
      <Projects />
      {/* Project section end */}
      {/* Review Section Start */}
      <section className="py-[50px] px-4">
        <Container>
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            Testimonial
          </h3>
          <div className="grid items-center justify-center md:grid-cols-2">
            <div>
              <h4 className="mt-8 text-2xl font-bold text-white">
                All My clients syas sweet words...
              </h4>
              <p className="mt-3 text-white">
                It brings me immense joy and gratitude to share the heartwarming
                testimonials from my valued clients. Building meaningful
                relationships and delivering exceptional MERN stack solutions
                has been my utmost priority. Each kind word and appreciation
                from my clients fuels my passion for coding and motivates me to
                continuously improve and innovate. Their trust in my abilities
                is truly humbling, and I look forward to creating more success
                stories together.
              </p>
            </div>
            <div>
              <Reviews />
            </div>
          </div>
        </Container>
      </section>
      {/* Review Section End */}
    </>
  );
}
