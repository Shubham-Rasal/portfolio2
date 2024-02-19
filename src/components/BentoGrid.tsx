import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { projects } from "../content/_project";

export type Project = {
  index: number;
  title: string;
  description: string;
  github: string;
  live?: string;
};



//type cast to avoid type errors
const p: Project[] = projects;
console.log(p);

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {p.map((project) => (
        <BentoGridItem
          key={project.index}
          title={project.title}
          description={project.description}
          github={project.github}
          live={project.live}
          index={project.index}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
