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
    <section className="relative my-5 sm:my-10">
      <div className="absolute inset-0 bg-[#F1F1F1] sm:rounded-t-xl sm:w-[95%] sm:-mt-27 mx-auto -z-10" />

      <div className="container-page pt-6 pb-12 md:pt-10 md:pb-20">
        <div className="flex flex-col gap-5 items-center text-center">
          {/* Text content — centered, full width */}
          <div className="flex flex-col gap-5 items-center w-full">
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora">
              For DTC and ecommerce brands tired of guessing what to shoot next
            </p>

            <h1
              className="text-primary-1 tracking-tight text-center leading-[1.1]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 72px)" }}
            >
              Your next winner shouldn&apos;t
              <br />
              be the{" "}
              <span className="font-secondary italic">
                {displayed}
                <span className="typing-cursor">|</span>
              </span>
            </h1>

            <p className="heading-description text-center">
              A complete creative system, built in ten days.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "The research on your buyer",
                "Five ready-to-shoot scripts",
                "A purpose-built workspace",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-mercury bg-white text-sm md:text-base font-medium text-tundora"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        {/* Video — right after pills */}
        <div className="mt-8 md:mt-12">
          <video
            className="w-full rounded-2xl shadow-[0_24px_64px_rgba(28,40,84,0.18)]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/assets/videos/hero-section-home-page.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Paragraphs + CTAs — same width as video */}
        <div className="flex flex-col gap-5 items-center text-center mt-8">
            <p className="text-base md:text-lg xl:text-xl text-black font-medium text-center w-full">
              Most agencies hand you files. This is where your creative
              operation actually runs, and it stays yours.
            </p>

            <p className="text-medium font-medium text-tundora text-center leading-relaxed w-full">
              We map what your buyer actually believes, what&apos;s stopping
              them from buying, and the one argument your competitors can&apos;t
              make. Then we turn it into scripts you can shoot next week, and
              the workspace where your creators, your editor and your media
              buyer all work from the same angles. No more briefing on instinct.
              No more winners you can&apos;t repeat.
            </p>

            <div className="flex items-center justify-center gap-6 mt-2 flex-wrap">
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-booking"))
                }
                className="inline-flex items-center justify-center gap-2 text-base md:text-lg xl:text-xl rounded-lg border border-primary-1 text-white bg-primary-1 hover:text-primary-1 hover:bg-transparent px-7 py-3.5 transition-colors shadow-[0_8px_24px_rgba(28,40,84,0.25)]"
              >
                Book a Fit Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

            </div>

            <p className="text-[17px] font-medium text-primary-1 text-center tracking-wide mt-1">
              $1,500 &middot; One payment &middot; Delivered in ten working days
            </p>
        </div>

        </div>
      </div>
    </section>
  );
}
