import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import MenuItemDetails from "./MenuItemDetails";
import MenuItemActions from "./MenuItemActions";

export interface MenuItemType {
  id: string;
  title: string;
  description: string;
  images: string[];
  categories: string[];
  instock: number;
  allergens: string[];
  totalCalories: number;
  price: {
    sar: number;
    bah: number;
  };
  itemParts: {
    name: string;
    calories: number;
  }[];
  available: boolean;
}

interface MenuItemProps {
  details: MenuItemType;
  children: React.ReactNode;
  className?: string;
}

const MenuItem = ({ children, className, details }: MenuItemProps) => {
  return (
    <Dialog>
      <DialogTrigger className={`${className}`}>{children}</DialogTrigger>
      <DialogContent>
        <div className="flex justify-between gap-3">
          <MenuItemDetails
            details={details}
            className="md:flex hidden border-r border-black/5"
          />
          <MenuItemActions details={details} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItem;
