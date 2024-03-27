"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Autoplay from "embla-carousel-autoplay";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Route } from "@/types/routes";
import { Themes } from '@/enums/shared.enum';

import { BlogItem, LetsTalk, Testimonial } from "@/components";
import { ArticleI, blockArticlesData } from "@/components/blog-item/constants";
import { TestimonialI, testimonialsData } from "@/components/testimonial/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Home() {
  const { theme, setTheme } = useTheme()
  const isDarkMode: boolean = theme === Themes.Dark;

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="flex__column gap-16 md:gap-24 pt-12 pb-8 px-4 md:px-8 max-w-screen-xxxl mx-auto ">
      <section className="w-full max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="header__h1 pb-6 text-white-foreground">
            Hello <span className="scale-y-110">👋</span> ! I am Ben Mukebo, a
            full stack developer.
          </h1>
          <p className="text-white-light text-lg xl:text-xl">
            I am here to help bring your digital ideas to life with a passion
            for turning concepts into impactful digital experiences. Whether
            it&apos;s building product features or creating dynamic websites,
            I&apos;m here to make it happen.
          </p>
        </div>

        <div className="relative w-full bg-white-fade-5 border__fade__10 rounded-[32px]">
          <div className="w-full max-w-[880px] h-[625px] mx-auto">
            {isDarkMode ? (
              <Image
                src="/images/ben-mukebo.svg"
                alt="Picture of the author"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-top rounded-bl-[32px] rounded-br-[32px]"
              />
            ) : (
              <Image
                src="/images/ben-mukebo-black.svg"
                alt="Picture of the author Black"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-top rounded-bl-[32px] rounded-br-[32px]"
              />)}
          </div>
          <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] absolute top-6 right-2 md:w-[213px] md:h-[213px] md:top-9 md:right-9 xl:top-12 xl:right-14">
            <Image
              src="/images/floating-image.svg"
              alt="Floating icon image"
              width={1000}
              height={1000}
              className="rounded-full bg-white-light text-white-light"
            />
          </div>
        </div>

        {/* <Button>Click me</Button> */}
      </section>

      <section className="w-full max-w-7xl mx-auto">
        <div className="flex__between flex-wrap gap-1 mb-16">
          <h2 className="header__h2 text-white-foreground">Testimonial</h2>

          <Link
            href="https://www.linkedin.com/in/kasongo-mukebo-ben/details/recommendations/?detailScreenTabIndex=0"
            className="flex__center text-lg text-white-foreground p-4"
            target='_blank'
          >
            <span>View Recommendations</span>
            <ArrowTopRightIcon className="h-18 w-18" />
          </Link>
        </div>

        <Carousel
          className="w-full max-w-7xl"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          {/* <ul className="w-full flex flex-wrap gap-4"> */}
          <CarouselContent className="">
            {testimonialsData.map((testimonial: TestimonialI, index) => (
              <CarouselItem key={index} className="md:basis-1/1 xl:basis-1/2">
                <Testimonial tertimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* </ul> */}
          {/* <CarouselPrevious className="top-full right-1/3" />
          <CarouselNext className="top-full right-1/3" /> */}
        </Carousel>
      </section>

      <section className="w-full max-w-7xl mx-auto">
        <div className="flex__between flex-wrap gap-1 mb-16">
          <h2 className="header__h2 text-white-foreground">
            Personal Insights
          </h2>

          <Link
            href={Route.BLOG}
            className="flex__center text-lg text-white-foreground p-4"
          >
            <span>Visit My Blog</span>
            <ArrowTopRightIcon className="h-18 w-18" />
          </Link>
        </div>

        <ul className="w-full flex__column gap-8">
          {blockArticlesData.slice(0, 2).map((article: ArticleI) => (
            <BlogItem key={article.id} article={article} />
          ))}
        </ul>
      </section>

      <LetsTalk />

    </div>
  );
}

export default Home;
