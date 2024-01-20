import React from "react";

const DataCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary/85 md:px-20 font-bold data-card p-16 md:rounded-xl md:mx-12 lg:mx-24 xl:mx-28 my-10 bg-hats">
      {children}
    </div>
  );
};

export default DataCard;
