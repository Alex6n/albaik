import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  size?: "lg" | "md" | "sm";
  className?: string;
}

const Button = ({ children, primary, size, className }: ButtonProps) => {
  return (
    <div
      className={cn(
        "px-4 py-1 text-lg rounded-2xl bg-primary hover:bg-secondary text-zinc-800 cursor-pointer font-semibold m-1 hover:translate-y-[-2px] transition-all hover:shadow-md duration-500",
        primary === false && "bg-secondary",
        size === "lg" && "text-xl px-5 py-2 m-2",
        size === "sm" && "text-md px-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
