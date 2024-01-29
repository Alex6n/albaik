import { BeanIcon, Egg, Info, Milk, Wheat } from "lucide-react";

// TODO: add tooltips.

const MenuItemDetails = ({ className }: { className?: string }) => {
  return (
    <div className={`w-[340px] text-red-950 ${className}`}>
      <div className="flex justify-between items-center m-4">
        <p className="text-sm font-bold cursor-default">
          Allergens
          <Info className="group w-4 h-4 inline ml-1 mb-[3px] text-secondary cursor-pointer" />
        </p>
        <div className="flex items-center justify-between gap-1 rounded-3xl bg-zinc-200/60 px-3 py-[5px] opacity-75">
          <Egg className="w-4 h-4 inline cursor-pointer" />
          <BeanIcon className="w-4 h-4 inline cursor-pointer" />
          <Milk className="w-4 h-4 inline cursor-pointer" />
          <Wheat className="w-4 h-4 inline cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
