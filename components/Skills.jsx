import React from "react";
import Skill from "./Skill";
import { getAllSkills } from "@/lib/skills/skills";

const Skills = async () => {
  const data = await getAllSkills();
  const skills = data?.nodes;

  console.log(skills);
  const tools = skills?.filter((tool) => tool.terms.nodes[0].slug === "tools");
  const languages = skills?.filter(
    (tool) => tool?.terms?.nodes[0].slug === "languages"
  );
  const javascriptLibrary = skills?.filter(
    (tool) => tool?.terms?.nodes[0]?.slug === "javascript-ui-frameworks-library"
  );
  const cssFrameworks = skills?.filter(
    (tool) => tool?.terms?.nodes[0]?.slug === "css-frameworks"
  );

  return (
    // <h1>hh</h1>
    <div className="py-[20px]">
      <div className="mt-5">
        <div>
          <h4 className="mt-4 text-sm text-white uppercase">languages</h4>
          <div className="grid gap-5 mt-5 md:grid-cols-3 sm:grid-cols-2">
            {languages?.map((skill) => (
              <Skill
                image={skill.featuredImage.node.mediaItemUrl}
                title={skill.title}
                type={"Expert"}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="mt-4 text-sm text-white uppercase">
            JAVASCRIPT UI, FRAMEWORKS & LIBRARY
          </h4>
          <div className="grid gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
            {javascriptLibrary?.map((skill) => (
              <Skill
                image={skill.featuredImage.node.mediaItemUrl}
                title={skill.title}
                type={"Expert"}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="mt-4 text-sm text-white uppercase">CSS FRAMEWORKS</h4>
          <div className="grid gap-5 mt-5 md:grid-cols-3 sm:grid-cols-2">
            {cssFrameworks?.map((skill) => (
              <Skill
                image={skill.featuredImage.node.mediaItemUrl}
                title={skill.title}
                type={"Expert"}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="mt-4 text-sm text-white uppercase">TOOLS</h4>
          <div className="grid gap-5 mt-5 md:grid-cols-3 sm:grid-cols-2">
            {tools?.map((skill) => (
              <Skill
                image={skill.featuredImage.node.mediaItemUrl}
                title={skill.title}
                type={"Expert"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
