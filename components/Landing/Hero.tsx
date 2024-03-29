import Image from "next/image";

interface HeroProps {
  title: React.ReactNode;
  description?: string;
  bgImage: string;
  children?: React.ReactNode;
}

const Hero = ({ title, description, bgImage, children }: HeroProps) => {
  return (
    <div className="relative h-[67vh] sm:h-[55vh] md:h-[83vh] border-t-[3px] border-zinc-200 hero">
      <div className="w-full h-full top-0 absolute bg-gray-900/50 justify-center flex-shrink">
        <div className="w-full flex justify-center">
          <h1 className="text-background text-center mt-28 md:mt-36 leading-snug text-5xl md:text-[95px] lg:text-[100px] font-extrabold tracking-tight max-w-5xl">
            {title}
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-zinc-200 text-center max-w-2xl italic font-semibold text-lg">
            {description}
          </p>
        </div>
        <div className="w-full flex flex-cols-2 justify-center my-2 albaik">
          {children}
        </div>
      </div>
      <Image
        src={bgImage}
        alt={bgImage}
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Hero;
