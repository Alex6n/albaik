import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

interface FooterProps {
  navItems: {
    label: string;
    href: string;
  }[];
  policyLinks: {
    label: string;
    href: string;
  }[];
}

const Footer = ({ navItems, policyLinks }: FooterProps) => {
  return (
    <div className="bg-[#CE3737]/90 w-full flex flex-col py-4 relative bottom-0">
      <div className="lg:flex justify-between items-center gap-10 mx-[15%] my-5">
        <div className="flex justify-center my-4">
          <Image src="/kookoo_logo.svg" alt="logo" width={73} height={82} />
          <div className="flex items-center min-h-full mx-5 flex-shrink-0 ">
            <Image
              src="/saudi_made_logo.svg"
              alt="logo"
              width={165}
              height={56}
            />
          </div>
        </div>

        <div className="flex flex-col items-center my-4 text-background bg-zinc-950/20 p-7 border border-background/30 rounded-xl lg:ml-12">
          <h1 className="font-bold tracking-wider text-lg">Contact Us</h1>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="underline px-10 text-center"
          >
            <Link href="tel:800 244 2245">
              <Phone className="w-5 h-5 inline mr-2" />
              <span className="inline lg:hidden xl:inline text-nowrap">
                800 244 2245
              </span>
            </Link>
          </Button>
        </div>

        <div className="flex gap-20">
          <div className="font-bold flex flex-col text-lg text-white">
            <h1 className="mb-2 tracking-wider">Website Map</h1>
            {navItems.map((navItem) => (
              <Link
                key={navItem.label}
                href={navItem.href}
                className="text-zinc-200 text-[16px] font-semibold duration-700 hover:bg-gradient-to-r from-primary to-secondary inline-block hover:text-transparent bg-clip-text transition-all tracking-wider mt-1"
              >
                {navItem.label}
              </Link>
            ))}
          </div>

          <div className="font-bold flex flex-col text-lg text-white">
            <h1 className="mb-2 tracking-wider">Policy</h1>
            {policyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-zinc-200 text-[16px] font-semibold duration-700 hover:bg-gradient-to-r from-primary to-secondary inline-block hover:text-transparent bg-clip-text transition-all tracking-wider mt-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-background font-medium my-1">
        © 2023 Copyright ALBAIK Food Systems Company.
        <p>
          ® All rights reserved ALBAIK and Logo are registered trademarks of the
          ELBAIK Food Systems Company S.A.
        </p>
      </div>
    </div>
  );
};

export default Footer;
