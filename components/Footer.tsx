import Image from "next/image";
import Link from "next/link";

// TODO: Change Language
interface FooterProps {
  navItems: {
    label: string;
    href: string;
  }[];
}

const Footer = ({ navItems }: FooterProps) => {
  return (
    <div className="bg-[#CE3737]/90 w-full py-[1px]">
      <div className="md:flex flex-cols-3 justify-between items-center gap-10 mx-[15%] my-5">
        <div className="flex w-full">
          <Image src="/kookoo_logo.svg" alt="logo" width={73} height={82} />
          <div className="flex items-center min-h-full mx-5">
            <Image
              src="/saudi_made_logo.svg"
              alt="logo"
              width={165}
              height={56}
            />
          </div>
        </div>

        <div className="justify-center font-bold flex flex-col text-lg tracking-widest text-center m-[5%] md:m-0">
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
      </div>
    </div>
  );
};

export default Footer;
