"use client";
import { BeanIcon, Egg, Info, Milk, Wheat } from "lucide-react";
import { Tooltip } from "@mui/material";
import { ScrollArea } from "../ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// TODO: add tooltips.

const MenuItemDetails = ({ className }: { className?: string }) => {
  const [spicy, setSpicy] = useState(false);

  return (
    <div className={`w-[340px] h-[390px] text-red-950 ${className}`}>
      <div className="flex justify-between items-center m-4">
        <p className="text-sm font-bold cursor-default">
          Allergens
          <Tooltip title="This Product contains allergens, please review the list before consuming.">
            <Info className="group w-4 h-4 inline ml-1 mb-[3px] text-secondary cursor-pointer" />
          </Tooltip>
        </p>

        <div className="flex items-center justify-between gap-1 rounded-3xl bg-zinc-200/60 px-3 py-[5px] opacity-75">
          <Tooltip title="Egg">
            <Egg className="w-4 h-4 inline cursor-pointer" />
          </Tooltip>
          <Tooltip title="Soybeans">
            <BeanIcon className="w-4 h-4 inline cursor-pointer" />
          </Tooltip>
          <Tooltip title="Milk">
            <Milk className="w-4 h-4 inline cursor-pointer" />
          </Tooltip>
          <Tooltip title="Gluten">
            <Wheat className="w-4 h-4 inline cursor-pointer" />
          </Tooltip>
        </div>
      </div>

      <div className="flex justify-between items-center m-4 mb-1 text-sm font-bold cursor-default">
        <p>Nutritional Information</p>

        <div className="flex items-center justify-between gap-1 rounded-3xl bg-zinc-200/60 px-2 py-[2px]">
          <p className="text-[10.7px]">1012 kcal</p>
        </div>
      </div>

      <ScrollArea className="h-[35%]">
        <div className="flex justify-between items-center m-4 text-xs font-bold cursor-default border-b ">
          <p>item part</p>

          <p className="text-[10.7px] mx-1">400 kcal</p>
        </div>
        <div className="flex justify-between items-center m-4 text-xs font-bold cursor-default border-b ">
          <p>item part</p>

          <p className="text-[10.7px] mx-1">400 kcal</p>
        </div>
        <div className="flex justify-between items-center m-4 text-xs font-bold cursor-default border-b ">
          <p>item part</p>

          <p className="text-[10.7px] mx-1">400 kcal</p>
        </div>
        <div className="flex justify-between items-center m-4 text-xs font-bold cursor-default border-b ">
          <p>item part</p>

          <p className="text-[10.7px] mx-1">400 kcal</p>
        </div>
        <div className="flex justify-between items-center m-4 text-xs font-bold cursor-default border-b ">
          <p>item part</p>

          <p className="text-[10.7px] mx-1">400 kcal</p>
        </div>
      </ScrollArea>

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
          className={`p-2 rounded-full hover:cursor-pointer bg-zinc-400/10 ${
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
