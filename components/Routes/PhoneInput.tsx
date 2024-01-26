"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const PhoneInput = () => {
  const [country, setCountry] = useState("sa");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="border-b border-black px-2 text-[13px] flex justify-center items-center cursor-pointer min-h-[36px]">
          <Image
            src={`/countries/${country}.png`}
            alt={country}
            height={15}
            width={25}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
        <DropdownMenuItem
          onClick={() => setCountry("sa")}
          className="hover:bg-primary/70 rounded-md hover:cursor-pointer"
        >
          <Image
            src="/countries/sa.png"
            alt={country}
            height={15}
            width={25}
            className="px-1"
          />
          Saudi Arabia
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setCountry("ba")}
          className="hover:bg-primary/70 rounded-md hover:cursor-pointer"
        >
          <Image
            src="/countries/ba.png"
            alt={country}
            height={15}
            width={25}
            className="px-1"
          />
          Bahrain
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PhoneInput;
