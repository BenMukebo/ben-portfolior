import { Metadata } from "next";
import { LetsTalk, ProjectCard } from "@/components";
import { ProjectCardI, workedProjects } from "@/components/project-card/constants";

export const metadata: Metadata = {
  title: "Projects",
};

function Work() {
  return (
    <div className="flex__column gap-16 md:gap-24 pt-12 pb-8 px-4 md:px-8 max-w-screen-xxxl mx-auto ">
      <section className="w-full max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-white-light pb-4 text-xl">My Works</p>
          <h1 className="header__h1 text-white-foreground">
            Creating unforgettable digital impressions
          </h1>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto">
        <div className="flex__between flex-wrap gap-1 mb-12">
          <h2 className="header__h2 text-white-foreground">Featured Works</h2>
        </div>

        <ul className="w-full max-w-5xl mx-auto flex__column gap-8 xl:max-w-none">
          {workedProjects.map((project: ProjectCardI) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </section>

      <LetsTalk />
    </div>
  );
}

export default Work;
