import Image from "next/image";

const Header = () => {
  return (
    <div className="border-b border-zinc-300 flex flex-cols-3 justify-between align-middle gap-10 mx-[15%] my-2 bg-black/5">
      <div>
        <Image src="/logo_en.png" alt="logo" width={100} height={100} />
      </div>
      <div>b</div>
      <div>c</div>
    </div>
  );
};

export default Header;
