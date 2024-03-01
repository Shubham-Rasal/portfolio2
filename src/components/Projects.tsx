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

export function Projects() {
  return (
    <ul className="space-y-4 py-4">
      {p.map((project) => (
        <li>
          <a
            className="flex flex-col space-y-1.5 !no-underline"
            href={project.github}
          >
            <div>
              <span className="font-medium underline underline-offset-4 ">
                {project.title}
              </span>
            </div>
            <span className="text-slate-300">
              {project.description}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
