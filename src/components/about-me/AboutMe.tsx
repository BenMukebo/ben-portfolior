import React from 'react';
import { Metadata } from 'next';
import { Slider } from "@/components/ui/slider"
import { frameworksLibraries, greatExperience, languagesList, toolsList } from "./constants";
import CarouselSlideTechStack from './carousel-slide/CarouselSlideTechStack';

export const metadata: Metadata = {
  title: "About Me",
};

export const AboutMe = () => {
  return (
    <div className="flex__column__center gap-8 xl:flex-row xl:justify-around xl:items-stretch xxl:justify-between">
      <div className="w-full max-w-3xl xl:w-[45%] grow-0 xl:max-w-lg">
        <h3 className="text-40 font-medium tracking-common text-white-foreground mb-4">
          {/* My Mission to develop */}
          Great Experience
        </h3>
        <p className="text-white-light text-lg mb-6">
          I have serious passion for UI effects,
          animations and creating intuitive, dynamic user experiences.
        </p>

        <ul className="w-full flex__column gap-7 px-1">
          {greatExperience.map((expereince, index) => (
            <li key={index} className="">
              <div className="flex__between text-white-foreground mb-2">
                <h5 className="text-lg">
                  {expereince.name}</h5>
                <p className="text-base">
                  {expereince.percentage}%</p>
              </div>
              <div>
                <Slider
                  defaultValue={[expereince.percentage]}
                  max={100}
                  step={1}
                  disabled={true}
                  isSliderThumb={true}
                // className={cn("w-[60%]", expereince.percentage === 0 && "hidden")}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-3xl xl:w-5/12 grow-0 xl:max-w-2xl">
        <article className="mb-5">
          <h4 className="text-[20px] font-medium text-white-foreground tracking-common mb-2 px-2">
            Languages
          </h4>

          <CarouselSlideTechStack skills={languagesList} />
        </article>

        <article className="mb-5">
          <h4 className="text-[20px] font-medium text-white-foreground tracking-common mb-2 px-2">
            Labraries & <span className="text-brand-foreground">Frameworks</span>
          </h4>

          <CarouselSlideTechStack skills={frameworksLibraries} />
        </article>

        <article className="mb-5">
          <h4 className="text-[20px] font-medium text-white-foreground tracking-common mb-2 px-2">
            Development Tools
          </h4>

          <CarouselSlideTechStack skills={toolsList} />
        </article>
      </div>
    </div >
  )
}
