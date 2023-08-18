import Container from "@/components/shared/Container";
import projectHero from "@/assets/projects.svg";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects/projects";
import Link from "next/link";
export const metadata = {
  title: "Portfolio | Impressive Projects Showcasing MERN Stack Mastery",
  description:
    "Explore a showcase of my impressive projects that highlight my mastery in MERN stack development. From dynamic web applications to interactive user interfaces, each project exemplifies my commitment to innovation and quality.",
};

const ProjectsPage = async () => {
  const projects = await getAllProjects();
  const data = projects?.nodes;
  return (
    <>
      <section className="px-4">
        <Container>
          <div className="grid items-center grid-cols-1 overflow-hidden md:h-screen md:gap-10 md:grid-cols-2 py-[100px] md:py-0">
            <div>
              <h1 className={"text-white md:text-6xl text-2xl"}>
                My Recent Projects
              </h1>

              <p className="mt-3 text-lg font-normal text-white">
                Explore a showcase of my impressive projects that highlight my
                mastery in MERN stack development. From dynamic web applications
                to interactive user interfaces, each project exemplifies my
                commitment to innovation and quality.
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
      <section className="px-4">
        <Container>
          <h3 className="text-2xl font-bold text-center text-white md:text-4xl">
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mt-[50px] md:mb-20 mb-5">
            {data?.map((project) => (
              <div
                key={project.id}
                className="relative grid items-center grid-cols-1 gap-4 text-white group"
              >
                <Image
                  width={960}
                  height={100}
                  className="w-full h-[400px] col-span-8 object-cover"
                  src={project.featuredImage.node.mediaItemUrl}
                  alt={project.title}
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-0 md:flex items-center justify-between left-0 w-full backdrop-blur-[2px] bg-slate-600/60 p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-4 mt-4">
                    <Link
                      href={project.projectInfo.livePreview}
                      className="px-8 py-2 rounded-lg bg-primary text-slate-900"
                      target="_blank"
                    >
                      Live Preview
                    </Link>
                    <Link
                      href={project.projectInfo.githubRepo}
                      target="_blank"
                      className="px-8 py-2 rounded-lg bg-slate-600"
                    >
                      Github
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectsPage;
