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

      <div className="flex flex-col gap-10 items-center py-10 text-center">
        <div className="flex flex-col gap-4 items-center w-[90%] max-w-5xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-mercury bg-white-1 px-4 py-1.5 text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-gray text-center">
            <span className="size-1.5 rounded-full bg-primary-1" aria-hidden />
            For DTC and ecommerce brands tired of guessing what to shoot next
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
          <p className="heading-description text-center max-w-2xl">
            A complete creative system, built in ten days.
          </p>
          <ul className="flex flex-col items-center gap-2.5 mt-2 w-full max-w-2xl">
            {[
              "The research on your buyer",
              "Five ready-to-shoot scripts",
              "A purpose-built workspace where your whole creative operation runs, from brief to creator to finished ad",
            ].map((item, i) => (
              <li key={i} className="flex items-start justify-center gap-2.5 text-sm text-tundora font-light text-center">
                <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C2854" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray font-light text-center max-w-xl mt-2">
            Most agencies hand you files. This is where your creative operation actually runs, and it stays yours.
          </p>
          <p className="text-medium font-light text-tundora text-center max-w-3xl leading-relaxed mt-1">
            We map what your buyer actually believes, what&apos;s stopping them from buying, and the one argument your competitors can&apos;t make. Then we turn it into scripts you can shoot next week, and the workspace where your creators, your editor and your media buyer all work from the same angles. No more briefing on instinct. No more winners you can&apos;t repeat.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            className="inline-flex items-center justify-center gap-2 text-base md:text-lg xl:text-xl rounded-lg border border-primary-1 text-white bg-primary-1 hover:text-primary-1 hover:bg-transparent px-7 py-3.5 transition-colors shadow-[0_8px_24px_rgba(28,40,84,0.25)]"
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
          </button>
          <span className="text-sm text-gray font-light">
            $1,500 &middot; One payment &middot; Delivered in ten working days
          </span>
          <p className="text-xs text-gray font-light text-center max-w-lg mt-1 leading-relaxed">
            Don&apos;t like it? Full refund on day five. You see half the build before you&apos;re committed. If it isn&apos;t what you wanted, say so on that call and we return every dollar. No reasons needed.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
            {["The full research build", "Five scripts, ten hooks", "Your creative operation in one place", "Yours to keep"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-gray font-light">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1C2854" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </span>
            ))}
          </div>
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

      <video
        className="w-[90%] max-w-6xl mx-auto rounded-2xl mb-16 shadow-[0_24px_64px_rgba(28,40,84,0.18)]"
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
    </section>
  );
}
