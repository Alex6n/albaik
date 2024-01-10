import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[90vh] top-0 absolute bg-gray-900/40 justify-center">
        <div className="w-full flex justify-center">
          <h1 className="text-background albaik text-center my-36 leading-snug text-5xl md:text-[100px] font-bold tracking-tight max-w-5xl">
            Savor the Spice, Embrace the Crisp!
          </h1>
        </div>
        {/* TODO: Call to action button */}
        {/* TODO: Values */}
      </div>
      <Image
        src="/home_hero.jpg"
        alt="home_hero"
        width={1000}
        height={1000}
        className="object-cover w-full h-[90vh]"
      />
    </div>
  );
};

export default Hero;
