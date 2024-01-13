import Image from "next/image";
import React from "react";

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
  return (
    <section className="md:mx-28 my-10">
      <div className="rounded-xl lg:flex lg:flex-cols-2 justify-between overflow-hidden">
        <div className="relative w-full">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
        {children}
      </div>
    </section>
  );
};

export default InfoContainer;
