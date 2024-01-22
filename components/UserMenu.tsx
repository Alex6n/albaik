import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "lucide-react";

const UserMenu = () => {
  const accout = false;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none border-none ring-0">
        <div className="text-white duration-700 transition-all hover:text-primary hover:border-primary hover:cursor-pointer rounded-xl p-2 hover:bg-black/20">
          <User className="w-6 h-6" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:mt-5 bg-background">
        <DropdownMenuLabel>
          {accout ? "Account Name" : "Guest"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-300" />
        {accout ? (
          <>
            <Link href="/account">
              <DropdownMenuItem className="hover:bg-primary/70 rounded-md hover:cursor-pointer">
                My Account
              </DropdownMenuItem>
            </Link>
            <Link href="/orders">
              <DropdownMenuItem className="hover:bg-primary/70 rounded-md hover:cursor-pointer">
                Orders
              </DropdownMenuItem>
            </Link>
            <Link href="/logout">
              <DropdownMenuItem className="hover:bg-accent/40 rounded-md hover:cursor-pointer">
                Logout
              </DropdownMenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <DropdownMenuItem className="hover:bg-primary/70 rounded-md hover:cursor-pointer">
                Login
              </DropdownMenuItem>
            </Link>
            <Link href="/signup">
              <DropdownMenuItem className="hover:bg-primary/70 rounded-md hover:cursor-pointer">
                Sign Up
              </DropdownMenuItem>
            </Link>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
