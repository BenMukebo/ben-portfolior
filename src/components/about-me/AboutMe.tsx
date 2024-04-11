import React from 'react';
import SlideTechSkills from "./slide-tech-skills/SlideTechSkills";
import { frameworksLibraries, languagesList, toolsList } from "./constants";

// import { EmblaOptionsType } from "embla-carousel";

// import EmblaCarousel from "../ui/EmblaCarousel";
// const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
// const SLIDE_COUNT = 6
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export const AboutMe = () => {

  return (
    <div className="flex__column__center justify-center gap-4 xl:flex-row">
      <div className="xl:w-5/12 shrink-0">
        <h3 className="text-40 font-medium tracking-common text-white-foreground mb-4">
          My Mission to develop
        </h3>
      </div>

      <div className="w-full max-w-4xl xl:max-w-2xl">
        <article className="mb-6">
          <h4 className="text-xl text-white-foreground tracking-common mb-4">
            Languages
          </h4>

          <SlideTechSkills skills={languagesList} />
        </article>

        <article className="mb-6">
          <h4 className="text-xl text-white-foreground tracking-common mb-4">
            Labraries && Frameworks
          </h4>

          <SlideTechSkills skills={frameworksLibraries} />
        </article>

        <article className="mb-6">
          <h4 className="text-xl text-white-foreground tracking-common mb-4">
            Tools
          </h4>

          <SlideTechSkills skills={toolsList} />
        </article>
      </div>
    </div >
  )
}
