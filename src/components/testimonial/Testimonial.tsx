import Link from "next/link";
import { QuoteIcon } from "lucide-react";
import { TestimonialI } from "./constants";
import { truncateString } from "@/lib/utils";

type TestimonialProps = {
  tertimonial: TestimonialI;
}

export const Testimonial = ({ tertimonial }: TestimonialProps) => {
  return (
    <li className="w-full max-w-[680px] mx-auto p-6 md:p-8 min-h-[320px] md:h-[380px] flex__column text-white-foreground card__backg__border rounded-3xl">
      {/* <div className="h-full flex__column text-white-foreground"> */}
      <div>
        <QuoteIcon className="w-6 h-6 text-brand inline mr-2 float-left " />
        <p className="text-lg text-justify mb-6 mt-1">
          {truncateString(tertimonial.text, 314)}
        </p>
      </div>

      <h4 className="text-xl leading-6 font-medium mt-auto">
        <Link href={tertimonial.linkedIn} className="text-white-foreground">
          {tertimonial.name}
        </Link>
      </h4>
      <div className="flex items-center flex-wrap gap-x-2 text-sm leading-6 mt-[2px]">
        <p className="">{tertimonial.position}</p>
        <div className="w-[5px] h-[5px] bg-brand rounded-full" />
        <p>{tertimonial.location}</p>

        {/* </div> */}
      </div>
    </li>
  )
}
