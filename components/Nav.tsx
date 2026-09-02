"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#why-this", label: "Why This" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#deliverables", label: "Deliverables" },
  { href: "#reviews", label: "Reviews" },
  { href: "#book", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/surkush/", label: "LinkedIn" },
  { href: "https://www.instagram.com/surkushagency", label: "Instagram" },
  { href: "https://www.facebook.com/share/1BNoisPvzj/", label: "Facebook" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="mt-10 w-full px-[80px]">
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="flex items-center w-4 sm:w-6 aspect-1/2">
          <Image
            className="object-contain max-h-full max-w-full"
            src="/surkush-logo.png"
            alt="Surkush"
            width={24}
            height={48}
            priority
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-primary-1 transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-primary-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-primary-1 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Full-screen modal menu */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-gradient-to-br from-[#D1EDF8] to-[#BDC0E7] z-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col container-page h-full mt-10">
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col xl:flex-row w-full h-full gap-12 p-4 mt-4">
            <div className="xl:flex-[0.6] flex flex-col gap-6">
              <h3 className="hidden sm:block text-medium text-charcoal">Menu</h3>
              <div className="flex-1 flex flex-col gap-4 xl:gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative flex items-center gap-4 w-fit text-4xl md:text-5xl xl:text-6xl font-light"
                    onClick={() => setOpen(false)}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-500 ease-in-out" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="xl:flex-[0.4] flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-medium text-charcoal">Follow Us</h3>
                <div className="flex flex-row xl:flex-col gap-6">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group relative flex items-center gap-5 w-fit text-medium font-light"
                      onClick={() => setOpen(false)}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500 ease-in-out" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="hidden sm:block text-medium text-charcoal">Get in touch</h3>
                <Link
                  href="mailto:partnerships@surkush.com"
                  className="group relative flex items-center gap-5 w-fit text-medium font-light"
                  onClick={() => setOpen(false)}
                >
                  <span className="relative">
                    partnerships@surkush.com
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500 ease-in-out" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
