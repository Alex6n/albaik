import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="md:border-b border-zinc-300/50 md:flex md:flex-cols-3 justify-between items-center gap-10 mx-[15%] my-5">
      <div className="flex w-full justify-center md:block">
        <Link href="/">
          <Image src="/logo_en.png" alt="logo" width={130} height={130} />
        </Link>
      </div>

      <div className="justify-center font-bold flex gap-12 text-md text-center my-[10%] mx-[15%] md:mx-0 md:my-0">
        <Link
          href="#"
          className="bg-zinc-900 hover:bg-gradient-to-r hover:from-primary hover:to-secondary inline-block text-transparent bg-clip-text transition-colors duration-300 ease-in-out"
        >
          Story
        </Link>
        <Link
          href="#"
          className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary inline-block hover:text-transparent bg-clip-text transition-all"
        >
          Purpose
        </Link>
        <Link
          href="#"
          className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary inline-block hover:text-transparent bg-clip-text transition-all"
        >
          Menu
        </Link>
      </div>

      <div className="rounded-3xl border-zinc-400 border px-2 pb-1 font-semibold transition-all hover:shadow-md text-center">
        <Link href="#">عربي</Link>
      </div>
    </div>
  );
};

export default Header;
