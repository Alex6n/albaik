"use client";
import React, { useState } from "react";
import { ImageSlider } from "./ImageSlider";
import { Button } from "../ui/button";
import { MenuItemType } from "./MenuItem";

interface MenuItemActionsProps {
  className?: string;
  details: MenuItemType;
}

// TODO : Add price

const MenuItemActions = ({ className, details }: MenuItemActionsProps) => {
  const { images, title, description } = details;

  const [quantity, setQuantity] = useState(1);

  return (
    <div className={`w-[360px] text-red-950 ${className}`}>
      <ImageSlider images={images} play={false} />
      <h1 className="text-xl font-bold my-2 mx-1">{title}</h1>
      <p className="w-full leading-5 mx-1">{description}</p>
      <div className="flex mt-4 justify-between">
        <div className="flex items-center gap-3 rounded-md font-bold text-md">
          <Button
            onClick={() =>
              setQuantity(quantity !== 1 ? quantity - 1 : quantity)
            }
            size="sm"
            className="my-0 w-9 rounded-[4px] border-none hover:translate-y-0 bg-zinc-200 hover:shadow-none transition-none"
          >
            –
          </Button>
          {quantity}
          <Button
            onClick={() => setQuantity(quantity + 1)}
            size="sm"
            className="my-0 w-9 rounded-[4px] border-none hover:translate-y-0 hover:shadow-none transition-none bg-primary/80"
          >
            +
          </Button>
        </div>
        <Button className="my-0 rounded-[4px] border-none text-sm hover:translate-y-0">
          Add to order
        </Button>
      </div>
    </div>
  );
};

export default MenuItemActions;
