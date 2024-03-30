import { Button } from "@/components/ui/button";
import { NavMenuI, socialItems } from "../header/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full mt-auto py-16 px-4 md:py-24 md:px-8">
      <section className="w-full h-full max-w-7xl mx-auto">
        <div className="w-full flex__column items-start gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="text-32 font-medium text-white-foreground">
            <p className="leading-8 text-white-light -tracking-[0.03em] mb-6 md:text-40">
              Connect with me
            </p>
            <p className="leading-8 -tracking-[0.03em] mb-4 break-all md:text-52 xl:text-60">
              l.benkasmukebo7@gmail.com
            </p>
            <p className="leading-8 -tracking-[0.03em] md:text-52 xl:text-60">
              +250 784 165 613
            </p>
          </div>
          <Link
            href="/files/BenMukeboResume.pdf"
            target="_blank" download
            rel="noopener noreferrer"
            locale={false}
            className="text-3xl leading-8 font-medium my-4  md:text-40 text-brand-foreground"
          >
            Download CV
          </Link>
        </div>

        <div className="w-full h-[1px] my-8 md:my-10 xl:my-16 bg-white-fade-10" />

        <div className="w-full flex__column items-center gap-4 xl:flex-row xl:justify-between">
          <ul className="flex__center gap-4 flex-wrap">
            {socialItems.map((item: NavMenuI, index) => (
              <li key={index} className="text-xl leading-6 font-normal">
                <Link
                  href={item.link}
                  className="text-white-foreground hover:text-brand-foreground"
                  target="_blank"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-14 leading-6 text-white-light">
            ©2024 All Rights Reserved. Designed with 🤍 by vikers
          </p>
        </div>
      </section>
    </footer>
  );
};
