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
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: text content */}
          <div className="flex flex-col gap-5 items-start">
            <p className="inline-flex items-center gap-2 rounded-full border border-mercury bg-white-1 px-4 py-1.5 text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-gray">
              <span className="size-1.5 rounded-full bg-primary-1" aria-hidden />
              For DTC and ecommerce brands tired of guessing what to shoot next
            </p>

            <h1
              className="text-primary-1 tracking-tight text-left leading-tight"
              style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.8rem)" }}
            >
              Your next winner shouldn&apos;t
              <br />
              be the{" "}
              <span className="font-secondary italic">
                {displayed}
                <span className="typing-cursor">|</span>
              </span>
            </h1>

            <p className="heading-description text-left">
              A complete creative system, built in ten days.
            </p>

            <ul className="flex flex-col items-start gap-2.5">
              {[
                "The research on your buyer",
                "Five ready-to-shoot scripts",
                "A purpose-built workspace where your whole creative operation runs, from brief to creator to finished ad",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-base md:text-lg xl:text-xl text-tundora font-medium"
                >
                  <svg
                    className="shrink-0 mt-0.5"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1C2854"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base md:text-lg xl:text-xl text-gray font-medium text-left">
              Most agencies hand you files. This is where your creative
              operation actually runs, and it stays yours.
            </p>

            <p className="text-medium font-medium text-tundora text-left leading-relaxed">
              We map what your buyer actually believes, what&apos;s stopping
              them from buying, and the one argument your competitors can&apos;t
              make. Then we turn it into scripts you can shoot next week, and
              the workspace where your creators, your editor and your media
              buyer all work from the same angles. No more briefing on instinct.
              No more winners you can&apos;t repeat.
            </p>

            <div className="flex items-center gap-6 mt-2 flex-wrap">
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-booking"))
                }
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

              <a
                href="#how-it-works"
                className="flex items-center gap-1 heading-description border-b-2 border-primary-1"
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
          </div>

          {/* Right: dark navy info card */}
          <div className="bg-primary-1 text-white rounded-2xl p-8 md:p-10 flex flex-col gap-6">
            <div>
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "-2px",
                }}
              >
                $1,500
              </div>
              <p className="mt-2 text-base md:text-lg xl:text-xl font-medium text-white/50">
                One flat payment
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
              {[
                "Delivered in ten working days",
                "Full refund on day five — no reasons needed",
                "90-day workspace access included",
                "Every finding sourced and verifiable",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg xl:text-xl font-medium text-white/70 leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-base md:text-lg xl:text-xl font-medium text-white/60 leading-relaxed">
                Don&apos;t like it? Full refund on day five. You see half the
                build before you&apos;re committed. If it isn&apos;t what you
                wanted, say so and we return every dollar. No reasons needed.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-3">
              {[
                "The full research build",
                "Five scripts, ten hooks",
                "Your creative operation in one place",
                "Yours to keep",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg
                    className="shrink-0 mt-0.5"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-base md:text-lg xl:text-xl font-medium text-white/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Video — full width below the grid */}
        <div className="mt-12 md:mt-16">
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
      </div>
    </section>
  );
}
