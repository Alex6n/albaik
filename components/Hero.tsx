import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex flex-cols-2 justify-center my-20 mx-[300px]">
        <div>
          <h1 className="text-[100px] font-bold mt-10 bg-gradient-to-r  from-accent via-primary to-secondary inline-block text-transparent bg-clip-text tracking-tight">
            Savor the Spice, Embrace the Crisp!
          </h1>
        </div>
        <div className="">
          <Image src="/albaik.png" alt="Albaik" width={600} height={600} />
        </div>
      </div>
      <p className="text-center text-wrap mx-[500px] font-semibold text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, nisi.
        Iusto, accusantium voluptatibus delectus impedit suscipit magnam sit
        qui, velit deleniti, illo quod hic quia necessitatibus deserunt dolorum
        cumque beatae!
      </p>
    </>
  );
};

export default Hero;
