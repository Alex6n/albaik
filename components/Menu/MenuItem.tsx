import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import MenuItemDetails from "./MenuItemDetails";
import MenuItemActions from "./MenuItemActions";

export interface MenuItemType {
  title: string;
  description: string;
  images: string[];
  allergens: string[];
  totalCalories: number;
  itemParts: {
    name: string;
    calories: number;
  }[];
  highlighted: boolean;
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
            className="md:block hidden border-r border-black/5"
          />
          <MenuItemActions details={details} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItem;
