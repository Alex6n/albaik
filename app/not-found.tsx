import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="my-14 grid justify-center text-center">
      <div className="px-5 border-[2px] border-dashed border-accent/20 rounded-3xl">
        <Image src="/albaik3.png" alt="404" height={350} width={350} />
        <h2 className="text-[60px] font-bold text-accent/70 stroke mt-2 pt-5 border-t border-zinc-300">
          <span className="block leading-6">404</span>
          Not Found
        </h2>
        <p className="text-[20px] text-secondary">
          Could not find requested resource
        </p>
        <Button
          variant="secondary"
          className="w-40 mx-auto my-5 hover:text-accent"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
