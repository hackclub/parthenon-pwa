"use client";

import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[#F4E3C1] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col mt-8 items-center">
        <h1 className="text-black text-4xl font-bold">
          Welcome to the Parthenon Portal!
        </h1>
      </div>
      <Footer />
    </div>
  );
}
