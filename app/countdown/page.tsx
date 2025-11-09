"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Image from 'next/image'

export default function PortalPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-14T17:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4E3C1] flex flex-col">
        <Header />
      <div className="flex-1 flex flex-col mt-8 items-center md:mt-30 p-10">
        <h1 className="text-black text-4xl font-[Augustus] font-bold mb-8 text-center">
          Welcome to your Parthenon Portal!
        </h1>
        <h3 className="font-[Windsol] p-4"><em>You find a pristine slab in the ruins... perhaps it must be broken to discover what secrets lie inside...</em></h3>
        <Image 
        src="/slab.png"
         alt=""
        width={3000}
        height={1500}
        className="lg:w-1/3 md:w-1/2 sm:w-3/4 m-auto"
        />

        <h2 className="text-2xl font-bold font-[Greek] text-center my-6 text-black">
          Countdown to Parthenon
        </h2>

        <div className="text-center text-xl text-black mb-8 font-[Windsol]">
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
          {timeLeft.seconds} Seconds
        </div>
      </div>
    </div>
  );
}