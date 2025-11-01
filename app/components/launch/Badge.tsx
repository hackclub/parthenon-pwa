import { ReactNode } from "react";
import Image from "next/image";

interface BadgeProps {
    object: any,
    earned: string
  }

export default function Badge({ object, earned } : BadgeProps) {

    var classes = "rounded-lg p-4 badge-hover"
    var image_classes = ""

    if (!earned) {
        classes += " disabled"
        image_classes = "disabled"
    } else {
        classes += " bg-leaderboard"
    }

    var inner = <div className="w-full flex justify-center h-full">
        <div className="w-4/5 margin-auto flex justify-center flex align-center h-full">
        <div className="grid w-1/2 h-full content-center">
        <h2 className="font-roman">{object.name}</h2>
        <p className="font-roman">{object.desc}</p>
        <p className="font-a">{String(object.points)} points</p>
        </div>
        <div className="grid w-1/2 content-center">
            <Image 
            src={object.src}
            alt=""
            height={500}
            width={500}
            className={image_classes}
            />
        </div>
        </div>
    </div>

    if (object.points==5) {
        classes += " col"
    } else if (object.points==10) {
        classes += " col-span-2"
    } else if (object.points==15) {
        classes += " col-span-3"
    }

    return <div className={classes}>{inner}</div>;
}