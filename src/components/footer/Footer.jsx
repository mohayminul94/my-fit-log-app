import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101315] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16A34A]">
                <span className="text-xl font-bold">F</span>
              </div>

              <h2 className="text-2xl font-bold">
                Fit<span className="text-[#B8F23A]">Log</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-gray-400">
              Track your workouts, monitor your progress, and build healthier
              habits with FitLog.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-300 hover:bg-[#16A34A] hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-300 hover:bg-[#16A34A] hover:text-white"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-300 hover:bg-[#16A34A] hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-300 hover:bg-[#16A34A] hover:text-white"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#B8F23A]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Workouts
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Progress
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#B8F23A]">
              Features
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Workout Tracking
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Daily Plans
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Progress Tracking
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Fitness Goals
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#B8F23A]">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Get fitness tips and updates directly in your inbox.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button className="bg-[#16A34A] px-4 text-sm font-semibold text-white transition hover:bg-[#15803D]">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026{" "}
            <span className="font-medium text-gray-300">FitLog</span>. All
            rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;