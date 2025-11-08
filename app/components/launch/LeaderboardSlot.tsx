import { ReactNode } from "react";
import Image from "next/image";
import Goddess from "@/app/components/launch/GoddessInfo";
import { AnchorHTMLAttributes } from "react";

interface SlotProps {
    object: Goddess,
    points: string,
    isGlowing: string
  }

export default function LeaderboardSlot({ object, points, isGlowing } : SlotProps) {
    const customStyles = {
        border: `6px solid ${object.color}`,
      };

    var classes = "border bg-leaderboard rounded-lg flex justify-between p-4 text-black"

    if (isGlowing=="true") {
        classes += " glowing-pulse-box"
    }

    return <div className={classes} style={customStyles}>
        <h2 className="font-[Augustus] text-black">{object.name}</h2>
        <h2 className="font-[Greek text-black]">{points}</h2>
    </div>
}