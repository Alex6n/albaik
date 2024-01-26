"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

// TODO: add link to product page

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageSlider({ images }: { images: string[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <Image
              src={image}
              alt={image}
              height={650}
              width={1035}
              className="object-cover w-full h-full lg:rounded-xl lg:max-h-[650px] lg:max-w-[1035px] cursor-pointer"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
