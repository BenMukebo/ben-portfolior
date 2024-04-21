"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

type ExtendedSliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { isSliderThumb?: boolean };

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ExtendedSliderProps
>(({ className, isSliderThumb, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-white-foreground">
      <SliderPrimitive.Range className="absolute h-full bg-brand-foreground" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSliderThumb && "hidden",
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
