"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import MenuItem from "./MenuItem";

export function ImageSlider({
  images,
  play,
}: {
  images: string[];
  play?: boolean;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={play === false ? [] : [plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <MenuItem>
              <Image
                src={image}
                alt={image}
                height={650}
                width={1035}
                className="object-cover w-full h-full lg:rounded-xl lg:max-h-[650px] lg:max-w-[1035px] cursor-pointer rounded-lg"
              />
            </MenuItem>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
