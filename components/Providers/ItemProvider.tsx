import { useState } from "react";
import { ItemContext } from "../../lib/context/ItemContext";

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [spicy, setSpicy] = useState(false);

  return (
    <ItemContext.Provider value={{ spicy, setSpicy }}>
      {children}
    </ItemContext.Provider>
  );
};
