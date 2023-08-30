import React from "react";
import Container from "./shared/Container";
import Image from "next/image";
import Link from "next/link";
import Button from "./shared/Button";
import { getAllProjects } from "@/lib/projects/projects";

const Projects = async () => {
  const projects = await getAllProjects();
  const data = projects?.nodes;

  return (
    <section className="px-4">
      <Container>
        <h3 className="text-3xl font-bold text-white md:text-4xl">Projects</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-[50px]">
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

        <Button link={"/projects"} align="justify-center mt-10 md:mt-20">
          View All
        </Button>
      </Container>
    </section>
  );
};

export default Projects;
