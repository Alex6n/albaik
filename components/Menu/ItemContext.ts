import { createContext, Dispatch, SetStateAction } from "react";

export type ItemContextType = {
  spicy: boolean;
  setSpicy: Dispatch<SetStateAction<boolean>>;
};

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined
);
