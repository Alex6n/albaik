interface InfoProps {
  heading: string;
  label: string;
  description: string;
}

const Info = ({ heading, label, description }: InfoProps) => {
  return (
    <div className="py-44 px-10 w-full bg-[#CE3737]/90 bg-hats text-background">
      <h2 className="uppercase font-bold text-lg rounded-lg border-y border-background/10 w-fit px-2">
        {label}
      </h2>
      <h1 className="text-4xl font-bold my-2">{heading}</h1>
      <p className="text-zinc-200 text-xl font-semibold my-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Info;
