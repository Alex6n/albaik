import Image from "next/image";
import Button from "./ui/Button";
import { Drumstick } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[90vh] top-0 absolute bg-gray-900/50 justify-center">
        <div className="w-full flex justify-center">
          <h1 className="text-background text-center mt-36 leading-snug text-5xl md:text-[115px] font-bold tracking-tight max-w-5xl albaik">
            Savor the Spice, Embrace the Crisp!
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-zinc-200 text-center max-w-2xl italic font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            beatae suscipit voluptatibus consequuntur dolore. Inventore nostrum
            tenetur asperiores consectetur nemo.
          </p>
        </div>
        <div className="hidden w-full flex flex-cols-2 justify-center my-2 albaik">
          <Button size="lg">Explore the Menu</Button>
          <Button size="lg" primary={false}>
            Our Core Values
          </Button>
        </div>
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
