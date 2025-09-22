"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Navbar />
      <div className="flex-1 flex flex-col mt-8 items-center">
        <h1 className="text-black text-4xl font-sans font-bold mb-8">
          Welcome to your Parthenon Portal!
        </h1>

        <img
          src="/slab.png"
          alt="Slab"
          className="mb-8 max-w-2xl w-full h-auto"
        />

        <h2 className="text-2xl font-bold font-sans text-center mb-6 text-black">
          Countdown to Parthenon
        </h2>

        <div className="text-center text-xl text-black mb-8">
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
          {timeLeft.seconds} Seconds
        </div>
      </div>
      <Footer />
    </div>
  );
}
