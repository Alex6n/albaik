"use client";

import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import Button from "./ui/Button";
import CartItem from "./CartItem";

const items = [
  {
    id: "123",
    name: "item",
    label: "chicken",
    images: ["/home_hero.jpg"],
    price: 100,
  },
];

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <div className="text-white duration-700 transition-all hover:text-primary hover:border-primary hover:cursor-pointer rounded-xl p-2 hover:bg-black/20">
          <ShoppingCart className="w-6 h-6" />
        </div>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({items.length})</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea>
                {items.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </ScrollArea>
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Delivery Fee</span>
                  <span>fee</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>cartTotal + fee</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Button
                    href="/cart"
                    className="w-full text-center border-none rounded-md"
                  >
                    Continue to Checkout
                  </Button>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link href="/menu" className="text-zinc-500 hover:underline">
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
