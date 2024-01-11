import Image from "next/image";
import Link from "next/link";

// TODO: Change Language
interface HeaderProps {
  navItems: {
    label: string;
    href: string;
  }[];
}

const Header = ({ navItems }: HeaderProps) => {
  return (
    <div className="bg-[#CE3737] w-full py-[1px] border-b-[4px] border-zinc-200">
      <div className="md:flex md:flex-cols-3 justify-between items-center gap-10 mx-[15%] my-5">
        <div className="flex w-full justify-center md:block">
          <Link href="/">
            <Image src="/logo_en.png" alt="logo" width={130} height={130} />
          </Link>
        </div>

        <div className="justify-center font-bold flex gap-12 text-lg tracking-widest text-center m-[5%] md:m-0">
          {navItems.map((navItem) => (
            <Link
              key={navItem.label}
              href={navItem.href}
              className="text-white duration-700 hover:bg-gradient-to-r from-primary to-secondary inline-block hover:text-transparent bg-clip-text transition-all tracking-wider"
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-center w-full md:w-fit">
          <Link
            className="rounded-3xl border-zinc-300 border pb-1 font-semibold transition-all duration-700 hover:shadow-lg text-center text-white max-w-fit px-10"
            href="#"
          >
            عربي
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
