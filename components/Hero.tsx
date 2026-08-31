"use client";

import { useEffect, useState, useCallback } from "react";

const words = ["accident", "guess", "gamble", "prayer"];

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = words[wordIdx];

    if (!isDeleting) {
      const next = current.slice(0, displayed.length + 1);
      setDisplayed(next);
      if (next === current) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
    } else {
      const next = current.slice(0, displayed.length - 1);
      setDisplayed(next);
      if (next === "") {
        setIsDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
        return;
      }
    }
  }, [displayed, isDeleting, wordIdx]);

  useEffect(() => {
    const speed = isDeleting ? 60 : 100;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section className="relative flex flex-col items-center my-5 sm:my-10">
      <div className="absolute inset-0 bg-[#F1F1F1] sm:rounded-t-xl sm:w-[95%] sm:-mt-27 mx-auto -z-10" />

      <div className="flex flex-col gap-10 items-center py-10">
        <div className="flex flex-col gap-4 items-center w-[85%] max-w-3xl">
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-gray">
            For DTC and ecommerce brands
          </p>
          <h1
            className="text-primary-1 tracking-tight text-center leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4.5vw, 4.5rem)" }}
          >
            <span className="block whitespace-nowrap">
              Your next winner shouldn&apos;t
            </span>
            <span className="block whitespace-nowrap">
              be an{" "}
              <span className="font-secondary italic">
                {displayed}
                <span className="typing-cursor">|</span>
              </span>
            </span>
          </h1>
          <p className="heading-description text-center max-w-xl">
            A complete creative system &mdash; research, scripts, and the
            workspace where your creative operation runs &mdash; built in ten
            days.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-base md:text-lg xl:text-xl rounded-lg text-white bg-primary-1 hover:border hover:border-primary-1 hover:text-primary-1 hover:bg-transparent px-7 py-3.5 transition-colors"
          >
            Book a Fit Call
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="text-sm text-gray font-light">
            $1,500 &middot; One payment &middot; Delivered in ten working days
          </span>
        </div>

        <a
          href="#how-it-works"
          className="flex justify-center items-center heading-description border-b-2 border-primary-1"
        >
          <span className="font-semibold text-primary-1">
            Explore how it works
          </span>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block rotate-45"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>

      <video className="w-[80%] rounded-2xl mb-16" autoPlay loop muted playsInline>
        <source
          src="/assets/videos/hero-section-home-page.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
