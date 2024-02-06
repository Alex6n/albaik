import { useState } from "react";
import { CategoryContext } from "../Menu/CategoryContext";

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState("All");

  return (
    <CategoryContext.Provider value={{ selected, setSelected }}>
      {children}
    </CategoryContext.Provider>
  );
};
