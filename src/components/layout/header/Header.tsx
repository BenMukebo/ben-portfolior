'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useTheme } from "next-themes"

import { BurgerMenuIcon, ClosedIcon, MoonIcon, SunIcon } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
// import { MoonIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Themes } from '@/enums/shared.enum';
import { Route } from "@/types/routes";
import { NavMenuI, deskMenuItems, mobileMenuItems, socialItems } from './constants';


export const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme()

  const isDarkMode: boolean = theme === Themes.Dark;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // const handleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // }

  return (
    <header className="w-full sticky top-0 z-3 p-4 md:px-8 backdrop-blur-md">
      <div className={cn("w-full max-w-7xl mx-auto h-72 xl:h-76 p-2 bg-white-fade-5 border__fade__10 rounded-[256px] shadow-border-15 ", {
        // 'bg-white-fade-5': !isOpen,
        'h-auto xl:h-auto bg-secondary rounded-[32px]': isOpen,
      })}>
        <div className="h-full flex__between gap-x-1">
          <div className="flex items-center gap-3 flex-1">
            <Link href={Route.HOME} className="w-14 h-14">
              <Image src="/images/logo.svg" alt="Ben Mukebologo" width={1000} height={1000} className='w-full h-full' />
            </Link>
            <h2 className="hidden md:block text-white-foreground text-32 font-medium">
              Ben <span className="text-white-light">Mukebo</span>
            </h2>
          </div>

          <nav className="h-14 hidden sm:flex justify-between items-center">
            <div className="h-full flex items-center gap-x-2">
              {/* {!isOpen && ( */}
              <ul className={cn("h-full flex items-center text-center p-2 gap-1 bg-white-fade-5 border__fade__10 rounded-[256px] shadow-border-15 xl:flex", {
                'hidden': isOpen,
              })}>
                {deskMenuItems.map((item, index) => (
                  <li key={index} className={cn("w-20 h-10 text-sm rounded-[256px]", {
                    'bg-white-fade-5 border__fade__5': (pathname === '/' && item.link === '/#about') || pathname === item.link,
                  })}>
                    <Link
                      href={item.link}
                      className="w-full h-full flex__center text-white-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* )} */}

              <div className="hidden xl:flex items-center ml-10">
                {isDarkMode ? (
                  <div className="w-10 h-10 flex__center border__fade__10 rounded-full">
                    <SunIcon onClick={() => setTheme(Themes.Light)} className='text-white-light w-6 h-6' />
                  </div>
                ) : (
                  <div className="w-10 h-10 flex__center border__fade__10 rounded-full">
                    <MoonIcon onClick={() => setTheme(Themes.Dark)} className="text-black-foreground w-6 h-6" />
                  </div>
                )}

                <Link
                  href="/files/BenMukeboResume.pdf"
                  target="_blank" // download
                  rel="noopener noreferrer" // No need to download
                  locale={false} // No need to download
                  className="flex__center text-lg text-white-foreground p-4 hover:text-brand-foreground"
                >
                  <span>Download CV</span>
                  <ArrowTopRightIcon className="h-18 w-18" />
                </Link>

                <Link
                  href={Route.CONTACT}
                  className="flex__center text-lg text-white-foreground p-4 hover:text-brand-foreground"
                >
                  <span>Contact Me</span>
                  <ArrowTopRightIcon className="h-18 w-18" />
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Humburger */}

          <div className="xl:hidden">
            <div className="w-14 h-14 flex__center bg-white-fade-5 border__fade__10 rounded-full">
              {isOpen ? (
                <ClosedIcon
                  onClick={handleToggle}
                  className='text-white-foreground'
                />
              ) : (
                <BurgerMenuIcon
                  onClick={handleToggle}
                  className='text-white-foreground'
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}

        <div className={cn("py-6 px-6 xm:px-8 sm:px-16 xl:hidden", {
          'hidden': !isOpen,
        })}>
          <div className="flex justify-between flex-wrap gap-6">
            <ul className="w-[168px] flex__column gap-2">
              <h6 className="text-sm leading-6 font-normal text-white-light mb-1">
                Menu
              </h6>
              {mobileMenuItems.map((item: NavMenuI) => (
                <li key={item.label} className="text-xl leading-6">
                  <Link
                    href={item.link}
                    className={cn("text-white-foreground hover:text-brand-foreground", {
                      'text-brand-foreground': (pathname === '/' && item.link === '/#about') || pathname === item.link,
                    })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="w-[168px] flex__column gap-2">
              <h6 className="text-sm leading-6 font-normal text-white-light mb-1">
                Socials
              </h6>

              {socialItems.map((item: NavMenuI, index) => (
                <li key={index} className="text-lg font-normal">
                  <Link
                    href={item.link}
                    className="text-white-foreground hover:text-brand-foreground"
                    target='_blank'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex__column gap-4">
              <h6 className="text-sm leading-6 font-normal text-white-light mb-1">
                Get in touch
              </h6>
              <li className="text-lg font-normal text-white-foreground break-all">
                <p className="">l.benkasmukebo7@gmail.com</p>
              </li>
              <li className="text-lg font-normal text-white-foreground">
                <p className="">+250 784 165 613</p>
              </li>
              <li className="text-xl leading-6 font-medium">
                <Link
                  href="/files/BenMukeboResume.pdf"
                  target="_blank" download
                  rel="noopener noreferrer"
                  locale={false}
                  className="text-brand-foreground"
                >
                  Download CV
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full h-[1px] px-16 my-4 bg-white-fade-10" />

          <div className="h-14 w-[180px] flex items-center p-2 gap-1 bg-white-fade-5 border__fade__10 rounded-[256px] shadow-border-15">
            <Button
              // variant={isDarkMode ? 'ghost' : 'primary'}
              variant="ghost"
              // onClick={handleDarkMode}
              onClick={() => setTheme(Themes.Dark)}
              className={cn("w-20 h-10 text-sm text-white-foreground rounded-[256px]",
                {
                  'bg-white-fade-5 border__fade__5': isDarkMode,
                  // 'bg-white-light': !isDarkMode,
                })}
            >
              Dark
            </Button>
            <Button
              variant="ghost"
              onClick={() => setTheme(Themes.Light)}
              className={cn("w-20 h-full text-sm text-white-foreground rounded-[256px]",
                {
                  'bg-white-fade-5 border__fade__5': !isDarkMode,
                })}
            >
              Light
            </Button>

          </div>
        </div>
      </div >
    </header >
  );
}
