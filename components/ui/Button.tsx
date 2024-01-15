import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  size?: "lg" | "md" | "sm";
  className?: string;
  href?: string;
}

const Button = ({ children, primary, size, className, href }: ButtonProps) => {
  return (
    <Link
      href={href || "#"}
      className={cn(
        "h-fit border border-gray-900/40 px-4 py-2 text-lg rounded-2xl bg-primary text-red-950 cursor-pointer font-semibold m-1 hover:translate-y-[-2px] transition-all hover:shadow-md duration-500",
        primary === false &&
          "bg-secondary border-none hover:bg-transparent hover:shadow-none text-zinc-200 hover:text-background",
        size === "lg" && "text-xl px-5 py-3 m-2",
        size === "sm" && "text-md px-3",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
