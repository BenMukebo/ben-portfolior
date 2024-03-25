import Link from "next/link";
import { TestimonialI } from "./constants";
import { truncateString } from "@/lib/utils";

type TestimonialProps = {
  tertimonial: TestimonialI;
}

export const Testimonial = ({ tertimonial }: TestimonialProps) => {
  return (
    <li className="w-full max-w-[680px] mx-auto p-6 md:p-8 min-h-[320px] md:h-[380px] flex__column text-white-foreground border__fade__10 rounded-3xl">
      {/* <div className="h-full flex__column text-white-foreground"> */}
      <p className="text-18 leading-7 mb-6">
        {truncateString(tertimonial.text, 314)}
      </p>

      <h4 className="text-24 font-medium mt-auto">
        <Link href={tertimonial.linkedIn} className="text-white-foreground">
          {tertimonial.name}
        </Link>
      </h4>
      <div className="flex items-center flex-wrap gap-x-2 text-sm leading-6">
        <p className="">{tertimonial.position}</p>
        <p className="w-1 h-1 bg-brand rounded-full"></p>
        <p>{tertimonial.location}</p>

        {/* </div> */}
      </div>
    </li>
  )
}
