import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import MenuItemDetails from "./MenuItemDetails";
import MenuItemActions from "./MenuItemActions";

const images = ["/landing/home_hero.jpg", "/landing/home_hero.jpg"];

interface MenuItemProps {
  children: React.ReactNode;
  className?: string;
}

const MenuItem = ({ children, className }: MenuItemProps) => {
  return (
    <Dialog>
      <DialogTrigger className={`${className}`}>{children}</DialogTrigger>
      <DialogContent>
        <div className="flex justify-between gap-3">
          <MenuItemDetails className="md:block hidden border-r border-black/5" />
          <MenuItemActions
            images={images}
            title="BAIKEEZ-Chicken Breasts"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit
        voluptas, necessitatibus ex perferendis."
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItem;
