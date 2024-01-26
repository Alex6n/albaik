"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Catogeries = ({ catogeries }: { catogeries: string[] }) => {
  const [selected, setSelected] = useState("all");
  return (
    <div className="my-6 flex flex-wrap justify-center">
      {catogeries.map((catogery) => (
        <Button
          onClick={() => setSelected(catogery)}
          key={catogery}
          variant="ghost"
          className={selected === catogery ? "bg-red-500/20 text-rose-500" : ""}
        >
          {catogery}
        </Button>
      ))}
    </div>
  );
};

export default Catogeries;
