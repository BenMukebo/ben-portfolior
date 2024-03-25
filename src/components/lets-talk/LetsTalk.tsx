import React from 'react'
import { Button } from '../ui/button'

export const LetsTalk = () => {
  return (
    <article className="w-full py-10 px-7 md:py-[66px] xl:pt-[91px] xl:pb-[78px] md:px-[58px] bg-[url('/images/lets-talk-gradient.svg')] border__fade__10 rounded-[32px]">
      <div className="w-full max-w-[564px] xl:max-w-[1182px] mx-auto text-center">
        <h3 className="header__h3 -tracking-[0.03em] md:text-52 xl:text-88 mb-8 md:mb-12 xl:mb-16">
          Think I’d be a good fit for your team or project?
        </h3>

        <Button
          variant="secondary"
          // size="xxl"
          className="w-full h-[104px] p-8 text-5xl leading-10 font-medium -tracking-[0.03em] rounded-[256px] xl:text-88 md:h-[136px] xl:h-[216px]"
        >
          Lets Talk
        </Button>
      </div>
    </article>
  )
}
