"use client";
import React, { useState } from "react";
import { ImageSlider } from "./ImageSlider";
import { Button } from "../ui/button";

interface MenuItemProps {
  images: string[];
  title: string;
  description: string;
}

const MenuItem = ({ images, title, description }: MenuItemProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ImageSlider images={images} play={false} />
      <h1 className="text-xl font-bold my-2 mx-1">{title}</h1>
      <p className="w-full leading-5 mx-1">{description}</p>
      <div className="flex my-4 justify-between">
        <div className="flex items-center gap-3 rounded-md font-bold text-md">
          <Button
            onClick={() =>
              setQuantity(quantity !== 1 ? quantity - 1 : quantity)
            }
            size="sm"
            className="w-9 rounded-[4px] border-none hover:translate-y-0 bg-zinc-200 hover:shadow-none transition-none"
          >
            -
          </Button>
          {quantity}
          <Button
            onClick={() => setQuantity(quantity + 1)}
            size="sm"
            className="w-9 rounded-[4px] border-none hover:translate-y-0 hover:shadow-none transition-none"
          >
            +
          </Button>
        </div>
        <Button className="rounded-[4px] border-none text-sm hover:translate-y-0">
          Add to order
        </Button>
      </div>
    </>
  );
};

export default MenuItem;
