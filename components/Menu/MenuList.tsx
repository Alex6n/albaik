import { cn } from "@/lib/utils";
import { TimerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MenuListProps {
  items: {
    image: string;
    title: string;
    link: string;
    highlighted: boolean;
    available: boolean;
  }[];
}

const MenuList = ({ items }: MenuListProps) => {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:justify-center gap-2">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className={cn("h-[200px] relative rounded-lg overflow-hidden", {
            "col-span-2": item.highlighted,
          })}
        >
          {item.available || (
            <div className="absolute z-10 text-xs text-red-800 bg-gray-100/80 rounded-xl px-2 py-1 m-2 hover:opacity-100">
              <TimerIcon className="inline w-3 h-3 mr-1" />
              Unavaliable
            </div>
          )}
          <div
            className={`${
              item.available ? "" : "opacity-35"
            } hover:opacity-50 transition-opacity w-full h-full`}
          >
            <div className="bg-gradient-to-b h-[30%] w-full to-black/60 from-transparent absolute bottom-0">
              <h1 className="text-zinc-100 mx-2 mt-7">{item.title}</h1>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover -z-10"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuList;