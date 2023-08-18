import Container from "@/components/shared/Container";
import projectHero from "@/assets/projects.svg";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects/projects";
import Link from "next/link";
import Skills from "@/components/Skills";
import SocialProfile from "@/components/shared/SocialProfile";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import ContactForm from "@/components/ContactForm";
export const metadata = {
  title: "Get in Touch | Connect with Experienced MERN Stack Developer",
  description:
    "Ready to collaborate or have questions? Contact me, an experienced MERN stack developer, through the provided form, social media channels, email, or phone. Let's discuss how I can contribute to your next web project.",
};

const ContactPage = async () => {
  const projects = await getAllProjects();
  const data = projects?.nodes;
  return (
    <>
      <section className="px-4 md:px-0">
        <Container>
          <div className="grid items-center grid-cols-1 overflow-hidden md:h-screen md:gap-10 md:grid-cols-2 py-[100px] md:py-0 px-4">
            <div>
              <h1 className={"text-white md:text-6xl text-2xl"}>Contact Me</h1>

              <p className="mt-3 text-lg font-normal text-white">
                Reach out and let's start a conversation! Whether you have a
                question, an exciting project in mind, or simply want to say
                hello, I'm here to listen. Feel free to use the contact form
                below, connect through my social media channels, drop an email,
                or even give me a call. Let's collaborate and bring your ideas
                to life.
              </p>
            </div>
            <div>
              <Image
                className="w-3/4 mx-auto rounded-lg"
                src={projectHero}
                alt="Nishath"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="px-4 mb-10 md:mb-20">
        <Container>
          <div className="grid items-center gap-6 px-4 md:grid-cols-12">
            <div className="p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60 md:col-span-4 col-span-12">
              <h4 className="text-lg font-semibold text-primary md:text-xl">
                Reach out and start conversation!
              </h4>
              <p className="mt-4 text-base text-slate-300">
                Have something to share or discuss? Fill out the form below, and
                I'll get back to you shortly!
              </p>
              <div className="mt-4">
                <SocialProfile />
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex gap-3">
                  <BsTelephoneForward className="text-2xl text-primary" />
                  <p className="text-slate-300">+8801767-591988</p>
                </div>
                <div className="flex gap-3">
                  <AiOutlineMail className="text-2xl text-primary" />
                  <p className="text-slate-300">nishath.khandakar@gmail.com</p>
                </div>
              </div>
              <div className="mt-4 overflow-auto rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4284523819147!2d89.35223289999999!3d25.289805200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcdf0dd119040f%3A0x383434f9922ce1b8!2sMd%20Nishath%20Khandakar!5e0!3m2!1sen!2sbd!4v1692132197134!5m2!1sen!2sbd"
                  width="600"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
            <div className="col-span-12 md:p-5 md:col-span-8">
              <div className="border-[1px] w-full p-5 rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60 col-span-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
