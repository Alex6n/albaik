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
  const accout = true;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none border-none ring-0">
        <User className="text-white duration-700 transition-all hover:text-primary hover:border-primary hover:cursor-pointer rounded-xl p-1 w-9 h-9 hover:bg-black/20" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:mt-5">
        <DropdownMenuLabel>
          {accout ? "Account Name" : "Guest"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {accout ? (
          <>
            <Link href="/account">
              <DropdownMenuItem className="hover:bg-slate-300 rounded-md hover:cursor-pointer">
                My Account
              </DropdownMenuItem>
            </Link>
            <Link href="/orders">
              <DropdownMenuItem className="hover:bg-slate-300 rounded-md hover:cursor-pointer">
                Orders
              </DropdownMenuItem>
            </Link>
            <Link href="/logout">
              <DropdownMenuItem className="hover:bg-red-500/40 rounded-md hover:cursor-pointer">
                Logout
              </DropdownMenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <DropdownMenuItem className="hover:bg-slate-300 rounded-md hover:cursor-pointer">
                Login
              </DropdownMenuItem>
            </Link>
            <Link href="/signup">
              <DropdownMenuItem className="hover:bg-slate-300 rounded-md hover:cursor-pointer">
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
