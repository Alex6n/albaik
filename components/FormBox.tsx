import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

interface FormBoxProps {
  children: React.ReactNode;
  heading: string;
  buttonTitle: string;
  linkTitle: string;
  linkHref: string;
}

const FormBox = ({
  children,
  heading,
  buttonTitle,
  linkTitle,
  linkHref,
}: FormBoxProps) => {
  return (
    <div className="my-16 mx-auto flex flex-col items-center border border-zinc-300 shadow-lg w-fit p-5 px-10 rounded-md bg-zinc-100/20">
      <Image src="/albaik.png" alt="logo" width={130} height={130} />
      <h1 className="text-2xl text-secondary font-semibold tracking-tight">
        {heading}
      </h1>
      <form className="p-5 max-w-[370px]">
        <div className="grid gap-2">
          {children}
          <Button className="rounded-lg border-none mt-1 text-center w-full">
            {buttonTitle}
          </Button>
        </div>
      </form>
      <Link className="inline hover:underline" href={linkHref}>
        {linkTitle}
      </Link>
    </div>
  );
};

export default FormBox;
