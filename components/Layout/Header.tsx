import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";
import Cart from "../Cart/Cart";

interface HeaderProps {
  navItems: {
    label: string;
    href: string;
  }[];
}

const Header = ({ navItems }: HeaderProps) => {
  return (
    <div className="bg-[#CE3737]/90 w-full py-[1px]">
      <div className="md:flex md:flex-cols-3 justify-between items-center gap-10 lg:mx-[15%] md:mx-[5%] my-5">
        <div className="flex flex-shrink-0 justify-center lg:w-fit md:block">
          <Link href="/">
            <Image
              src="/logo_en.png"
              alt="logo"
              width={130}
              height={130}
              className="my-3"
            />
          </Link>
        </div>

        <div className="justify-center font-bold flex gap-12 text-lg tracking-widest text-center m-[5%] md:m-0 mb-8 lg:pl-20">
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

        <div className="flex flex-row gap-7 justify-center w-full md:w-fit">
          <Link
            className="text-white duration-700 transition-all hover:text-primary hover:border-primary hover:cursor-pointer rounded-xl px-4 py-1 hover:bg-black/20"
            href="#"
          >
            عربي
          </Link>

          <Cart />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
