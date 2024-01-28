import { BeanIcon, Egg, Info, Milk, Wheat } from "lucide-react";

// TODO: add tooltips

const MenuItemDetails = ({ className }: { className?: string }) => {
  return (
    <div className={`w-[340px] text-red-950 ${className}`}>
      <div className="flex justify-between items-center m-4">
        <p className="text-xs font-bold cursor-default">
          Allergens
          <Info className="w-[14px] h-[14px] inline ml-1 mb-[3px] text-secondary cursor-pointer" />
        </p>
        <div className="flex items-center justify-between gap-1 rounded-3xl bg-zinc-200/60 px-3 py-[5px]">
          <Egg className="w-3 h-3 inline cursor-pointer" />
          <BeanIcon className="w-3 h-3 inline cursor-pointer" />
          <Milk className="w-3 h-3 inline cursor-pointer" />
          <Wheat className="w-3 h-3 inline cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
