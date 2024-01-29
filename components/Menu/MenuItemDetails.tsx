"use client";
import { BeanIcon, Egg, Info, LucideIcon, Milk, Wheat } from "lucide-react";
import { Tooltip } from "@mui/material";
import { ScrollArea } from "../ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface MenuItemDetailsProps {
  className?: string;
  details: {
    allergens: string[];
    totalCalories: number;
    itemParts: {
      name: string;
      calories: number;
    }[];
  };
}

const allergenItems: {
  [key: string]: LucideIcon;
} = {
  Egg: Egg,
  Soybeans: BeanIcon,
  Milk: Milk,
  Gluten: Wheat,
};

const MenuItemDetails = ({ className, details }: MenuItemDetailsProps) => {
  const { allergens, totalCalories, itemParts } = details;

  const [spicy, setSpicy] = useState(false);

  return (
    <div className={`w-[340px] h-[390px] text-red-950 ${className}`}>
      {allergens && (
        <div className="flex justify-between items-center m-4">
          <p className="text-sm font-bold cursor-default">
            Allergens
            <Tooltip title="This Product contains allergens, please review the list before consuming.">
              <Info className="group w-4 h-4 inline ml-1 mb-[3px] text-secondary cursor-pointer" />
            </Tooltip>
          </p>

          <div className="flex items-center justify-between gap-1 rounded-3xl bg-zinc-200/60 px-3 py-[5px] opacity-75">
            {allergens.map((allergen) => {
              const AllergenIcon = allergenItems[allergen];
              return (
                <Tooltip title={allergen} key={allergen}>
                  {AllergenIcon && (
                    <AllergenIcon className="w-4 h-4 inline cursor-pointer" />
                  )}
                </Tooltip>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center m-4 mb-1 text-sm font-bold cursor-default">
        <p>Nutritional Information</p>

        <div className="flex items-center justify-between gap-1 rounded-3xl bg-zinc-200/60 px-2 py-[2px]">
          <p className="text-[10.7px]">{totalCalories} kcal</p>
        </div>
      </div>

      {itemParts.length > 0 && (
        <ScrollArea className="h-[35%]">
          {itemParts.map((part) => (
            <div
              key={part.name}
              className="flex justify-between items-center m-4 text-xs font-bold cursor-default border-b "
            >
              <p>{part.name}</p>
              <p className="text-[10.7px] mx-1">{part.calories} kcal</p>
            </div>
          ))}
        </ScrollArea>
      )}

      <div className="m-4 text-xs cursor-default bg-background/40 rounded-md p-2 px-2">
        <span className="font-bold">Children</span> aged 4 to 13 need an average
        of <span className="font-bold"> 1200-1500 calories</span> per day, and
        those over <span className="font-bold">13 years old </span>
        need an average of <span className="font-bold">2000 calories</span>
        per day, and individual calorie needs vary from person to person.
      </div>

      <div className="flex justify-center items-center text-xs font-bold cursor-default my-6">
        <div
          onClick={() => setSpicy(!spicy)}
          className={`p-2 rounded-full hover:cursor-pointer bg-zinc-400/10 transition-colors ${
            spicy ? "bg-zinc-400/50" : ""
          }`}
        >
          <FontAwesomeIcon className="w-4 h-4" icon={faPepperHot} />
        </div>
        <span className="mx-2">Spicy</span>
      </div>
    </div>
  );
};

export default MenuItemDetails;
