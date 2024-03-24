"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Route } from "@/types/routes";

function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="px-4 flex__column gap-y-16 md:gap-y-24 bg-background md:px-8 max-w-[1182px] mx-auto">
      <section className="w-full h-full pt-12">
        <div className="mb-16">
          <h1 className="header__h1 pb-6 text-white-foreground">
            Hello <span className="scale-y-110">👋</span> ! I am Ben Mukebo, a
            full stack developer.
          </h1>
          <p className="text-white-light text-lg xl:text-2xl xl:leading-9">
            I am here to help bring your digital ideas to life with a passion
            for turning concepts into impactful digital experiences. Whether
            it&apos;s building product features or creating dynamic websites,
            I&apos;m here to make it happen.
          </p>
        </div>

        <div className="relative w-full bg-white-fade-5 border__fade__10 rounded-[32px]">
          <div className="w-full max-w-[880px] h-[625px] mx-auto">
            <Image
              src="/images/ben-mukebo.svg"
              alt="Picture of the author"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top rounded-bl-[32px] rounded-br-[32px]"
            />
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
    </div>
  );
}

export default Home;
