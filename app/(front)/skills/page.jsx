import Container from "@/components/shared/Container";
import projectHero from "@/assets/projects.svg";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects/projects";
import Link from "next/link";
import Skills from "@/components/Skills";
export const metadata = {
  title: "My Skills | Expertise in MERN Stack Development and More",
  description:
    "Discover my comprehensive skill set, ranging from MERN stack development to UI/UX design and problem-solving. With proficiency in MongoDB, Express, React, Node.js, and more, I'm equipped to tackle diverse challenges in the digital realm.",
};

const SkillsPage = async () => {
  const projects = await getAllProjects();
  const data = projects?.nodes;
  return (
    <>
      <section className="px-4 md:px-0">
        <Container>
          <div className="grid items-center grid-cols-1 overflow-hidden md:h-screen md:gap-10 md:grid-cols-2 py-[100px] md:py-0 px-4">
            <div>
              <h1 className={"text-white md:text-6xl text-2xl"}>
                All My Top Skills
              </h1>

              <p className="mt-3 text-lg font-normal text-white">
                Greetings! I am excited to showcase my diverse skill set that
                spans both technical expertise and interpersonal prowess. As of
                August 2023, these are some of my top skills that enable me to
                excel in various professional endeavors:
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
      <section>
        <Container>
          <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
              <h4 className="text-lg font-semibold text-primary md:text-xl">
                Full-Stack Web Development
              </h4>
              <p className="text-base text-slate-300">
                Discover my comprehensive skill set, ranging from MERN stack
                development to UI/UX design and problem-solving. With
                proficiency in MongoDB, Express, React, Node.js, and more, I'm
                equipped to tackle diverse challenges in the digital realm.
              </p>
            </div>
            <div className="p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
              <h4 className="text-lg font-semibold text-primary md:text-xl">
                User-Centric Design
              </h4>
              <p className="text-base text-slate-300">
                I specialize in crafting intuitive user interfaces that
                seamlessly blend aesthetics with functionality. My design
                approach focuses on enhancing user experiences and engagement.
              </p>
            </div>
            <div className="p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
              <h4 className="text-lg font-semibold text-primary md:text-xl">
                Problem-Solving
              </h4>
              <p className="text-base text-slate-300">
                I possess a knack for dissecting complex challenges and devising
                innovative solutions. My analytical thinking and creativity
                empower me to tackle intricate problems head-on.
              </p>
            </div>
            <div className="p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
              <h4 className="text-lg font-semibold text-primary md:text-xl">
                Project Management
              </h4>
              <p className="text-base text-slate-300">
                From concept to completion, I exhibit exceptional project
                management skills. I am adept at organizing tasks, setting
                priorities, and ensuring timely delivery of high-quality
                results.
              </p>
            </div>
            <div className="p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
              <h4 className="text-lg font-semibold text-primary md:text-xl">
                Active Listening
              </h4>
              <p className="text-base text-slate-300">
                My ability to actively listen and comprehend others' viewpoints
                enhances my collaboration skills. I focus on truly understanding
                the needs of stakeholders, clients, and team members.
              </p>
            </div>
            <div className="p-5 border-[1px] rounded-lg border-slate-600 backdrop-blur-[2px] bg-slate-600/30 bg-opacity-60">
              <h4 className="text-lg font-semibold text-primary md:text-xl">
                Time Management
              </h4>
              <p className="text-base text-slate-300">
                Organizing tasks, setting priorities, and adhering to deadlines
                are second nature to me. My impeccable time management skills
                ensure efficient project execution.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-[50px] px-4">
        <Container>
          <h3 className="text-3xl font-bold text-white md:text-4xl">Skills</h3>
          <Skills />
        </Container>
      </section>
    </>
  );
};

export default SkillsPage;
