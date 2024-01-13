"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

interface InfoContainerProps {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
}

const InfoContainer = ({
  children,
  image,
  imageAlt,
  imageFirst,
}: InfoContainerProps) => {
  const matches = useMediaQuery("(max-width:1020px)"); // md breakpoint in Material-UI is 960px

  useEffect(() => {
    (matches || imageFirst) &&
      console.log(`matches: ${matches}\nimageFirst: ${imageFirst}`);
  }, [matches, imageFirst]);

  return (
    <section className="md:mx-28 my-10">
      <div className="rounded-xl lg:flex lg:flex-cols-2 justify-between overflow-hidden">
        {(matches || imageFirst) && (
          <div className="relative w-full">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        )}
        {children}
        {!matches && !imageFirst && (
          <div className="relative w-full">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoContainer;
