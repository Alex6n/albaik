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
      <div className="text-background bg-hats bg-[#CE3737]/90 p-16 md:mx-28 my-10 rounded-xl">
        <div className="w-full">
          <h2 className="uppercase font-bold text-lg rounded-lg border-y border-background/10 w-fit px-2">
            {label}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3">
          <div className="lg:pr-10 xl:border-r border-background/20">
            <h1 className="text-4xl font-bold my-2">{heading}</h1>
            <p className="text-zinc-300 text-xl font-semibold my-2 max-w-[500px]">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-2 mt-10 xl:mt-0 md:grid-cols-4 col-span-2 gap-14 items-center xl:ml-20">
            {values.map((value) => (
              <div key={value.name} className="text-center block">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-3xl border-dashed border-2 border-background text-foreground bg-black/5">
                    {<value.Icon className="w-2/1 h-2/1" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-xl font-semibold line-clamp-1">
                    {value.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
