"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MenuItemType } from "./MenuItem";
import { useMenuItems } from "@/lib/api/useMenuItems";
import { Skeleton } from "@/components/ui/skeleton";
import { CategoryContext, CategoryContextType } from "./CategoryContext";

const Categories = () => {
  const { data: menu, isLoading } = useMenuItems();

  const { selected, setSelected } = useContext(
    CategoryContext
  ) as CategoryContextType;

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = new Set<string>(
      menu?.flatMap((dataItem: MenuItemType) => dataItem.categories) || []
    );

    setCategories(["All", ...uniqueCategories]);
  }, [isLoading, menu]);

  return (
    <div className="my-2 mt-4 flex flex-wrap justify-center gap-1">
      {isLoading
        ? Array.from({ length: 8 }, (_, index) => (
            <Skeleton key={index} className="h-10 w-24" />
          ))
        : categories.map((catogery) => (
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

export default Categories;
