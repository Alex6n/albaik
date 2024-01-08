import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="md:mx-[300px]">
        <div className="mx-[30%]">
          <Image src="/albaik.png" alt="Albaik" width={600} height={600} />
        </div>
        <div>
          <h1 className="mx-[5%] leading-snug text-5xl md:text-[70px] text-center font-bold bg-gradient-to-r from-accent via-primary to-secondary inline-block text-transparent bg-clip-text tracking-tight">
            Savor the Spice, Embrace the Crisp!
          </h1>
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
