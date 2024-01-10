import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[90vh] top-0 absolute bg-background/70 justify-center">
        <div className="w-full flex justify-center">
          <h1 className="bg-gradient-to-r from-accent via-primary to-secondary inline-block text-transparent bg-clip-text mt-20 leading-snug text-5xl md:text-[100px] text-center font-bold tracking-tight max-w-5xl">
            Savor the Spice, Embrace the Crisp!
          </h1>
        </div>
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
