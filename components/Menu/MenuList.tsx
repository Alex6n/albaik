import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MenuListProps {
  items: [
    {
      image: string;
      title: string;
      link: string;
      highlighted: boolean;
    }
  ];
}

const MenuList = ({ items }: MenuListProps) => {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:justify-center gap-1">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className={cn(
            "h-[200px] relative rounded-lg overflow-hidden hover:opacity-50 transition-opacity",
            { "col-span-2": item.highlighted }
          )}
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
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
