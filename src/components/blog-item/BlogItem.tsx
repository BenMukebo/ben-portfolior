"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ArticleI } from "./constants";

type BlogProps = {
  article: ArticleI;
};

export const BlogItem = ({ article }: BlogProps) => {
  const route = useRouter();

  return (
    <li className="w-full p-6 md:p-8 card__backg__border rounded-3xl md:rounded-[32px]">
      <div className="flex__column gap-4 md:flex-row">
        <div className="w-full sm:h-[40vw] shrink-0 md:w-[186px] md:h-[186px] xl:w-[302px] xl:h-[292px]"> {/*w-[292px]*/}
          <Image
            src={article.image || '/images/placeholder.webp'}
            alt={article.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover border__fade__10 rounded-2xl"
          />
        </div>

        <div className="flex__column gap-4 xl:py-2"> {/*xl:py-6*/}
          <p className="text-14 leading-6 text-brand-foreground">
            {article.publishDate}
          </p>
          <h3 className="header__h3 text-white-foreground">
            {article.title}
          </h3>
          <p className="text-lg text-white-light">
            {article.description}
          </p>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => route.push(`${article.link}`)}
          >
            Have a read
            <ArrowTopRightIcon className="h-18 w-18" />
          </Button>
        </div>
      </div>
    </li>
  );
};
