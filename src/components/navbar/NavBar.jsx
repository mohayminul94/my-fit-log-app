"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#242529] bg-[#0d0e10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl text-lime-400">⚒</span>
            <span className="text-sm font-bold tracking-wide">FITLOG</span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/workouts"
              className="rounded-full bg-[#1c2910] px-4 py-1.5 text-xs font-medium text-lime-400 transition hover:bg-[#273719]"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="px-4 py-1.5 text-xs font-medium text-gray-400 transition hover:text-white"
            >
              My Plan
            </Link>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/plan"
              className="flex items-center gap-2 text-xs text-gray-300 transition hover:text-white"
            >
              Plan
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                0
              </span>
            </Link>

            <Link
              href="/saved"
              className="flex items-center gap-2 text-xs text-gray-300 transition hover:text-white"
            >
              Saved
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-[9px]">
                0
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2a2b2f] text-gray-300 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#242529] py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="/workouts"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-[#1c2910] px-4 py-3 text-sm font-medium text-lime-400"
              >
                Workouts
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-[#17181b] hover:text-white"
              >
                My Plan
              </Link>

              <Link
                href="/plan"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-[#17181b] hover:text-white"
              >
                <span>Plan</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
                  0
                </span>
              </Link>

              <Link
                href="/saved"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-[#17181b] hover:text-white"
              >
                <span>Saved</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-[10px] text-gray-300">
                  0
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;