"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4E3C1] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-black mb-4 font-handwritten">
            404
          </h1>
          <h2 className="text-4xl font-bold text-black mb-6">Page Not Found</h2>
          <p className="text-xl text-black mb-8 max-w-md">
            Oops! The page you're looking for seems to have wandered off into
            the ancient ruins.
          </p>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#3B5435] text-white font-bold rounded-lg hover:bg-[#2a3e26] transition-colors duration-200"
            >
              Return to Login
            </Link>

            <div className="block">
              <Link
                href="/portal"
                className="inline-block px-8 py-3 border-2 border-[#3B5435] text-[#3B5435] font-bold rounded-lg hover:bg-[#3B5435] hover:text-white transition-colors duration-200"
              >
                Go to Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
