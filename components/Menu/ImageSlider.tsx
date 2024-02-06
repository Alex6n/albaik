import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const ImageSlider = ({
  images,
  className,
  play,
}: {
  images: string[];
  className?: string;
  play?: boolean;
}) => {
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
            <Image
              src={image}
              alt={image}
              height={650}
              width={1035}
              className={`object-cover h-full lg:rounded-xl cursor-pointer rounded-lg ${className}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSlider;
