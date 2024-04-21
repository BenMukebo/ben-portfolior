import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../ui/EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "../../ui/EmblaCarouselDotButton";
import { TechSkillsI } from "../constants";

import "@/css/ambla.css";

type PropType = {
  skills: TechSkillsI[];
  options?: EmblaOptionsType;
};

const CarouselSlideTechStack = ({ skills }: PropType) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel(
  // { align: 'start', slidesToScroll: 'auto', loop: true }, [Autoplay()]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: "auto",
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      className="embla relative w-full max-w-5xl mx-auto"
    >
      <div ref={emblaRef} className="embla__viewport overflow-hidden">
        <div
          className="embla__containe flex"
          style={{ transform: "translate3d(0px, 0px, 0px)," }}
        >
          {" "}
          {/* flex__center flex-wrap gap-4 */}
          {skills.map((skill: TechSkillsI) => (
            <ul
              key={skill.name}
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-3 xm:pl-4 xm:basis-1/2 smm:basis-1/3 md:basis-1/4 xl:basis-1/3"
            >
              <li className="w-[100%] h-[90px] flex__column__center justify-center p-3 card__backg__border rounded-md">
                <div className="w-11 h-11 mb-2 bg-white-fade-5 border__fade__10 rounded-lg">
                  <Image
                    src={skill.iconLogo || "/images/placeholder.webp"}
                    alt={skill.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain  rounded-lg"
                  />
                </div>
                <p className="text-sm font-medium text-white-light">
                  {skill.name}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons grid xm:hidden smm:grid">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots hidden xm:flex">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat( // even:hidden smm:last:flex smm:even:flex
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlideTechStack;
