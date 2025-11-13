import { ReactNode } from "react";
import Image from "next/image";

interface BadgeProps {
    object: any,
    earned: string
  }

export default function Badge({ object, earned } : BadgeProps) {

    var classes = "rounded-lg p-4 badge-hover"
    var image_classes = ""

    const customStyles = {
        backgroundColor: `${object.color}`
      };

    if (earned!="true") {
        classes += " disabled";
        image_classes += " disabled"
    }

    console.log(object.name)
    console.log("color =", object.color)
    console.log(object.desc)
    console.log(object.id)
    console.log(object.points)
    console.log(object.src)

    var inner = <div className="w-full flex justify-center h-full">
        <div className="w-4/5 margin-auto flex flex-col lg:flex-row lg:justify-center align-center h-full">
        <div className="lg:grid lg:w-1/2 h-full content-center">
            <h2 className="font-[Augustus] resize_font_bg">{object.name}</h2>
            <p className="font-[Romanica] resize_font_sm">{object.desc}</p>
            <p className="font-[Augustus]">{String(object.points)} points</p>
        </div>
        <div className="lg:grid lg:w-1/2 content-center">
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

    if (earned=="true") return <div className={classes} style={customStyles}>{inner}</div>
    return <div className={classes}>{inner}</div>;
}