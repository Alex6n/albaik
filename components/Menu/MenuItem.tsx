import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import MenuItemDetails from "./MenuItemDetails";
import MenuItemActions from "./MenuItemActions";
import { ItemProvider } from "../Providers/ItemProvider";

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
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={`${className}`}>{children}</DialogTrigger>
      <DialogContent>
        <ItemProvider>
          <div className="flex justify-between gap-3">
            <MenuItemDetails
              details={details}
              className="md:flex hidden border-r border-black/5"
            />
            <MenuItemActions details={details} onClose={handleClose} />
          </div>
        </ItemProvider>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItem;
