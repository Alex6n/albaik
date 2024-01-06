import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b border-zinc-300/50 flex flex-cols-3 justify-between items-center gap-10 mx-[15%] my-5">
      <div>
        <Link href="/">
          <Image src="/logo_en.png" alt="logo" width={130} height={130} />
        </Link>
      </div>

      <div className="flex gap-12 font-semibold text-md">
        <Link
          href="#"
          className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary inline-block hover:text-transparent bg-clip-text transition-all"
        >
          Our Story
        </Link>
        <Link
          href="#"
          className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary inline-block hover:text-transparent bg-clip-text transition-all"
        >
          Our Purpose
        </Link>
        <Link
          href="#"
          className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary inline-block hover:text-transparent bg-clip-text transition-all"
        >
          Our Menu
        </Link>
      </div>

      <div className="rounded-3xl border-zinc-400 border px-2 pb-1 font-semibold transition-all hover:shadow-md">
        <Link href="#">عربي</Link>
      </div>
    </div>
  );
};

export default Header;
