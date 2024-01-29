"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Catogeries = ({ catogeries }: { catogeries: string[] }) => {
  const [selected, setSelected] = useState("all");
  return (
    <div className="my-2 mt-4 flex flex-wrap justify-center gap-1">
      {catogeries.map((catogery) => (
        <Button
          onClick={() => setSelected(catogery)}
          key={catogery}
          variant="ghost"
          className={`${
            selected === catogery
              ? "bg-red-500/20 text-rose-500 duration-500"
              : ""
          } m-0 rounded-md`}
        >
          {catogery}
        </Button>
      ))}
    </div>
  );
};

export default Catogeries;
