"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

interface InfoContainerProps {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: "first" | "last";
}

const InfoContainer = ({
  children,
  image,
  imageAlt,
  imagePosition = "last",
}: InfoContainerProps) => {
  const matches = useMediaQuery("(max-width:1020px)"); // md breakpoint in Material-UI is 960px

  return (
    <section className="md:mx-12 lg:mx-24 xl:mx-28 my-10">
      <div className="overflow-hidden md:rounded-xl grid grid-rows-2 lg:flex lg:flex-cols-2 ">
        {!matches && imagePosition === "first" && (
          <div className="relative w-full">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        )}
        {children}
        {(matches || imagePosition === "last") && (
          <div className="relative w-full">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoContainer;
