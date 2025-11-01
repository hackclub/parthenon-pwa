import { ReactNode } from "react";
import Image from "next/image";

interface TitleProps {
    user: string,
    text: string,
    subtitle?: string
  }

export default function Title({ user, text, subtitle } : TitleProps) {
    let newText = text.replaceAll("[name]", user); 

    let regular = <div className="flex flex-row justify-center w-full items-center">
    <Image 
    src="/elements/flag.png"
    alt=""
    height={500}
    width={500}
    className="h-[15vh] md:h-[15vh] w-auto"
    />
    <h1 className="font-greek">{newText}</h1>
    <Image 
    src="/elements/flag.png"
    alt=""
    height={500}
    width={500}
    className="h-[15vh] md:h-[15vh] w-auto"
    />
    </div>

    if (subtitle) {
        return <div className="p-4 mx-auto">{regular}<h2 className="font-a">{subtitle}</h2><hr className="line"/></div>;
    } else {
        return <div className="p-4 mx-auto">{regular}<hr className="line"/></div>;
    }
}