import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { CartItemProps } from "./cartSlice";

// TODO: add spicy indicator

const CartItem = ({ item }: { item: CartItemProps }) => {
  const { id, name, image, label, price, quantity, spicy } = item;

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {typeof image === "string" ? (
              <Image
                src={image}
                alt={name}
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary/20">
                <ImageIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {name}
              {quantity > 1 && (
                <span className="text-[12px] text-zinc-500"> ×{quantity}</span>
              )}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {label}
            </span>

            <div className="mt-4 text-xs text-muted-foreground">
              <button className="flex items-center gap-0.5">
                <X className="w-3 h-4" />
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {price * quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
