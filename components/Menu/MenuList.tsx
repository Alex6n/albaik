"use client";
import { TimerIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuItem, { MenuItemType } from "./MenuItem";
import { useMenuItems } from "@/lib/api/useMenuItems";
import { Skeleton } from "../ui/skeleton";

const MenuList = () => {
  const { data: menu, isLoading } = useMenuItems();
  const [items, setItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    setItems(menu || []);
  }, [isLoading, menu]);

  return (
    <div className="md:mx-12 lg:mx-24 xl:mx-28 mb-10 grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 sm:justify-center gap-2">
      {isLoading
        ? Array.from({ length: 18 }, (_, index) => (
            <Skeleton key={index} className="h-[200px] w-full" />
          ))
        : items.map((details) => (
            <MenuItem
              details={details}
              key={details?.title}
              className="h-[200px] relative rounded-lg overflow-hidden hover:cursor-pointer"
            >
              {details?.instock > 0 || (
                <div className="absolute z-10 text-xs text-red-800 bg-white/80 rounded-xl px-2 py-1 m-2 hover:opacity-100">
                  <TimerIcon className="inline w-3 h-3 mr-1" />
                  Unavaliable
                </div>
              )}
              <div
                className={`${
                  details?.instock > 0 ? "" : "opacity-35"
                } hover:opacity-50 transition-opacity w-full h-full`}
              >
                <div className="bg-gradient-to-b h-[30%] w-full to-black/60 from-transparent absolute bottom-0">
                  <h1 className="text-zinc-100 mx-2 mt-7">{details.title}</h1>
                </div>
                <Image
                  src={details.images[0]}
                  alt={details.title}
                  fill
                  className="object-cover -z-10"
                />
              </div>
            </MenuItem>
          ))}
    </div>
  );
};

export default MenuList;
