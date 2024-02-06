import { createContext, Dispatch, SetStateAction } from "react";

export type CategoryContextType = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);
