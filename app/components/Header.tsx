import Image from "next/image";

export default function Header() {
    return (
      <div className="w-full this_header text-[#F8E5D6] bg-[#3B5435]">
        <div className="h-full py-2 px-4">
        <Image 
            src="/logo.png"
            alt=""
            height={500}
            width={500}
            className="h-full w-auto"
        />
        </div>
      </div>
    );
  }
  