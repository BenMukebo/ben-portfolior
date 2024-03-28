import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { ProjectCardI } from "./constants";
import { cn } from "@/lib/utils";

type ProjectProps = {
  project: ProjectCardI;
};

export const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <li className="w-full p-4 md:p-8 card__backg__border rounded-[32px]">
      <div className="flex__column gap-4 xl:flex-row-reverse">
        <div className="w-full h-[50vw] shrink-0  md:h-[476px] mx-auto xl:w-7/12 xl:h-[448px]"> {/*w-632 h-476 */}
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover border__fade__10 rounded-3xl"
          />
        </div>

        <div className="flex__column gap-4 xl:py-2"> {/*xl:py-6*/}
          <h3 className="text-40 font-medium -tracking-[0.03em] text-white-foreground mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-white-light">
            {project.description}
          </p>

          <ul className="flex items-center flex-wrap gap-x-1 gap-y-2 py-6">
            {project.techStack.map((tech: string) => (
              <li key={tech} className="py-1 px-4 bg-white-fade-5 border__fade__10 rounded-[256px]">
                <p className="text-sm leading-6 text-white-light">
                  {tech}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mt-auto">
            <p className="p-4">
              <Link
                href={project.demoLink}
                target='_blank'
                className="flex__center gap-1 text-lg text-white-foreground hover:text-white-light"
              >
                <span>Website</span>
                <ArrowTopRightIcon className="h-18 w-18" />
              </Link>
            </p>

            <div className="w-2 h-2 bg-brand rounded-full" />

            <p className="p-4">
              <Link
                href={project.sourceCodeLink}
                target='_blank'
                aria-disabled={project.sourceCodeLink === "#"} // to give the screen readers insight that the link is disabled.
                tabIndex={project.sourceCodeLink === "#" ? -1 : undefined} // to disable keyboard navigation.
                className={cn(
                  "flex__center gap-1 text-lg text-white-foreground hover:text-white-light", {
                  "cursor-not-allowed pointer-events-none": project.sourceCodeLink === "#" // to disable mouse events.
                })}
              >
                <span>
                  {project.sourceCodeLink === "#" ? "Private" : "Source Code"}
                </span>
                <ArrowTopRightIcon className="h-18 w-18" />
              </Link>

            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
