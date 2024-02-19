import { IconSignature, IconTableColumn } from "@tabler/icons-react";
import { cn } from "../../utils/cn";
import type { Project } from "../BentoGrid";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = (p: Project) => {
  return (
    <div
      className={
        " rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none lg:p-4 p-2 dark:bg-transparent dark:border-white/[0.2]  border border-transparent justify-between flex flex-col h-fit space-y-4"
      }
    >
      <div className="group-hover/bento:translate-x-2  h-full flex flex-col transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {p.title}
        </div>
        <div className=" font-sans  text-wrap font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {p.description}
        </div>
        <div className="flex flex-row flex-1 space-x-4 p-2">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row space-x-2 items-end"
          >
            <IconSignature size={20} />
            <span className="text-neutral-600 dark:text-neutral-300 text-xs">
              Github
            </span>
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row space-x-2 items-end"
            >
              <IconTableColumn size={20} />
              <span className="text-neutral-600 dark:text-neutral-300 text-xs">
                Live
              </span>
            </a>
          )}

          {!p.live && (
            <div className="flex flex-row space-x-2 items-end">
              <IconTableColumn size={20} />
              <span className="text-neutral-600 dark:text-neutral-300 text-xs">
                Not Live
              </span>
            </div>
          )}

</div>


      </div>
    </div>
  );
};
