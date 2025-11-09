'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export default function PortalLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen w-full bg-portal flex flex-col">
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 bg-[#3B5435] text-black">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="w-1/2">
            <Header />
          </div>
        </div>
      </header>

      {/* Desktop header */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Main content */}
      <div className="min-h-screen bg-[#F4E3C1] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          {children}
          <div className="space-y-4">
            <Link
              href="/login"
              className="inline-block px-8 py-3 bg-[#3B5435] text-white font-bold rounded-lg hover:bg-[#2a3e26] transition-colors duration-200 font-[Greek]"
            >
              Return to Login
            </Link>

            <div className="block">
              <Link
                href="/"
                className="inline-block px-8 py-3 border-2 border-[#3B5435] text-[#3B5435] font-bold rounded-lg hover:bg-[#3B5435] hover:text-white transition-colors duration-200 font-[Greek]"
              >
                Go to Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
