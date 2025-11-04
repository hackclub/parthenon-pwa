"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  name: string;
  href: string;
  onClick?: any;
}

export default function NavButton({ name, href, onClick }: NavButtonProps) {
  const pathname = usePathname();

  var classes = "w-full bg-nav-btn";
  var newClasses = "";

  if (pathname == href) {
    newClasses = classes.replaceAll("bg-nav-btn", "bg-nav-btn-actv");
    newClasses += " box-shadow";
  } else {
    newClasses = classes;
  }

  return (
    <div className={newClasses}>
      <Link
        href={href}
        onClick={onClick}
        className="flex w-full items-center justify-center text-center py-3 px-3"
      >
        <span className="font-a nav-color">
          <h2 className="nav-text m-0 leading-none">{name}</h2>
        </span>
      </Link>
    </div>
  );
    return <div className={newClasses}>
    <Link
    href={href}
    onClick={onClick}
    ><span className='text-center font-[Augustus] nav-color'><h2 className='nav-text'>{name}</h2></span></Link>
    </div>;
}


