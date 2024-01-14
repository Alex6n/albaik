interface InfoProps {
  heading: string;
  heading2?: string;
  heading3?: string;
  label: string;
  description: string;
  description2?: string;
  description3?: string;
}

const Info = ({
  heading,
  heading2,
  heading3,
  label,
  description,
  description2,
  description3,
}: InfoProps) => {
  return (
    <div className="py-10 md:py-20 lg:py-24 xl:py-36 px-10 w-full bg-[#CE3737]/90 bg-hats text-background">
      <h2 className="uppercase font-bold text-lg rounded-lg border-y border-background/10 w-fit px-2">
        {label}
      </h2>
      <h1 className="text-4xl font-bold my-2">{heading}</h1>
      <p className="text-zinc-200 text-xl font-semibold my-2 leading-relaxed">
        {description}
      </p>
      {heading2 && description2 && (
        <>
          <h1 className="text-4xl font-bold my-2 mt-5">{heading2}</h1>
          <p className="text-zinc-200 text-xl font-semibold my-2 leading-relaxed">
            {description2}
          </p>
        </>
      )}
      {heading3 && description3 && (
        <>
          <h1 className="text-4xl font-bold my-2 mt-5">{heading3}</h1>
          <p className="text-zinc-200 text-xl font-semibold my-2 leading-relaxed">
            {description3}
          </p>
        </>
      )}
    </div>
  );
};

export default Info;
