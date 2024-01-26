interface InfoProps {
  label: string;
  children?: React.ReactNode;
}

const Info = ({ label, children }: InfoProps) => {
  return (
    <div className="py-10 md:py-20 lg:py-24 xl:py-36 px-10 w-full bg-[#CE3737]/90 bg-hats text-background">
      <h2 className="uppercase tracking-wider font-bold text-lg rounded-lg border-y border-background/10 w-fit px-2">
        {label}
      </h2>
      {children}
    </div>
  );
};

export default Info;
