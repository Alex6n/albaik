"use client";

import React, { useContext, useState } from "react";
import ImageSlider from "./ImageSlider";
import { Button } from "../ui/button";
import { MenuItemType } from "./MenuItem";
import { useDispatch } from "react-redux";
import { add } from "../Cart/cartSlice";
import { ItemContext, ItemContextType } from "../../lib/context/ItemContext";

interface MenuItemActionsProps {
  className?: string;
  details: MenuItemType;
}

const MenuItemActions = ({ className, details }: MenuItemActionsProps) => {
  const {
    id,
    images,
    title,
    categories,
    description,
    instock,
    price: { sar },
  } = details;

  const [quantity, setQuantity] = useState(1);

  const { spicy } = useContext(ItemContext) as ItemContextType;

  const dispatch = useDispatch();

  return (
    <div
      className={`w-[360px]  flex flex-col justify-between text-red-950 ${className}`}
    >
      <div>
        <ImageSlider
          images={images}
          play={false}
          className="h-[50%] aspect-square"
        />
        <h1 className="text-xl font-bold my-2 mx-1">{title}</h1>
        <p className="w-full leading-5 mx-1">{description}</p>
      </div>

      <div className="flex justify-start items-center text-xs font-bold cursor-default mt-3 mx-2">
        <div className="text-sm text-secondary">SR {sar}</div>
      </div>

      <div className="flex mt-2 justify-between">
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
        <Button
          onClick={() =>
            dispatch(
              add({
                id,
                name: title,
                image: images[0],
                label: categories[0],
                price: sar,
                quantity,
                spicy,
              })
            )
          }
          disabled={instock > 0 ? false : true}
          className="my-0 rounded-[4px] border-none text-sm hover:translate-y-0"
        >
          Add to order
        </Button>
      </div>
    </div>
  );
};

export default MenuItemActions;
