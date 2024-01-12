import { LucideIcon } from "lucide-react";

interface FeaturesProps {
  heading: string;
  label: string;
  description: string;
  values: {
    name: string;
    Icon: LucideIcon;
  }[];
}

const Values = ({ values, heading, label, description }: FeaturesProps) => {
  return (
    <section>
      <div className="bg-hats bg-[#CE3737] p-16 md:mx-28 my-10 rounded-xl">
        <div className="w-full">
          <h2 className="albaik text-background text-3xl rounded-lg border border-background/10 w-fit px-7">
            {label}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-0">
          <div className="col-span-2">
            <h1 className="text-background text-4xl font-bold my-2">
              {heading}
            </h1>
            <p className="text-zinc-300 text-xl font-semibold my-2 max-w-[500px]">
              {description}
            </p>
          </div>
          {values.map((value) => (
            <div
              key={value.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/50 text-foreground">
                  {<value.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-lg font-medium">{value.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
