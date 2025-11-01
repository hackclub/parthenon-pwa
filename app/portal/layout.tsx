'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavButton from '@/app/components/launch/NavButton'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  // Close the menu on route changes or window resize to md+
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const NavItems = ({ onClick }: { onClick?: () => any }) => (
    <div className="flex flex-col gap-4 h-full py-5">
      <NavButton name="Welcome" href="/portal" onClick={onClick} />
      <NavButton name="Profile" href="/portal/profile" onClick={onClick} />
      <NavButton name="Leaderboard" href="/portal/leaderboard" onClick={onClick} />
      <NavButton name="Schedule" href="/portal/schedule" onClick={onClick} />
      <div className="spacer hidden md:inline" />
      <NavButton name="Sign out" href="/api/auth/slack/end"/>
    </div>
  )

  return (
    <div className="min-h-screen w-full bg-portal">
      {/* Mobile top bar (md:hidden) */}
      <header className="md:hidden sticky top-0 z-40 bg-[#3B5435] text-white">
        <div className="flex items-center justify-between">
          <div className='w-1/2 bg-red-100'>
              <Header />
          </div>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="m-3 inline-flex items-center rounded-md px-3 py-2 ring-1 ring-white/20 hover:bg-white/10"
          >
            {/* Hamburger / X */}
            <svg
              className={`h-5 w-5 transition-transform ${open ? 'rotate-90' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown panel */}
        {open && (
          <div className="px-4 pb-3">
            <NavItems onClick={() => setOpen(false)} />
          </div>
        )}
      </header>

      {/* Overlay when menu open */}
      {open && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
        />
      )}

      {/* Desktop layout */}
      <div className="w-full h-screen">
        <div className='hidden md:inline'>
        <Header />
        </div>
        <div className="md:flex md:flex-row">
          {/* Sidebar (desktop) */}
          <div className="hidden md:bt-5 md:flex md:w-1/4 md:fixed md:h-screen md:bg-nav md:justify-center bg-nav nav-fixed">
            <div className="w-4/5">
              <NavItems />
            </div>
          </div>

          {/* Content */}
          <main className="md:w-[75%] bg-portal flex-col justify-center fixed-scrollable">
            <div className='px-4 pb-24 pt-4 flex justify-center min-h-[92vh]'>
            {children}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}