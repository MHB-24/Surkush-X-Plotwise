"use client";

import { useRef, useState, useEffect } from "react";

const MEDIA =
  "https://plotwise-website-media-054037107702.s3.us-east-1.amazonaws.com";

const ads = [
  {
    id: "winner",
    label: "Winner",
    note: "Scaled to $18K",
    src: `${MEDIA}/creators/alina/3.mp4`,
    poster: `${MEDIA}/creators/alina/3.webp`,
    accent: "#1e7a4a",
    accentBg: "rgba(30,122,74,0.10)",
    metrics: [
      { label: "ROAS", value: "4.2x" },
      { label: "CTR", value: "3.1%" },
      { label: "Spend", value: "$18,400" },
    ],
  },
  {
    id: "flop",
    label: "Flopped",
    note: "Killed on day 6",
    src: `${MEDIA}/assets/cases/cs1-new-v1.mp4`,
    poster: `${MEDIA}/assets/cases/cs1-new-v1.jpg`,
    accent: "#868686",
    accentBg: "rgba(134,134,134,0.12)",
    metrics: [
      { label: "ROAS", value: "0.8x" },
      { label: "CTR", value: "0.6%" },
      { label: "Spend", value: "$16,900" },
    ],
  },
];

const cards = [
  {
    num: "01",
    title: "You can't repeat your winners.",
    body: `One video takes off. You tell the creator, "more like that one." The next batch flops — because nobody knows which part was the 'that.' The hook? The face? The angle? You bought a win. You didn't buy the reason.`,
  },
  {
    num: "02",
    title: "You don't learn from your losers.",
    body: "The eight that died cost exactly as much to make as the two that won. Nobody studies them. They get deleted and replaced with fresh guesses. Same coin, new flip.",
  },
  {
    num: "03",
    title: "Your spend compounds. Your knowledge doesn't.",
    body: "So you're playing a numbers game with no memory. New batch, new invoice, same blindfold. At $5K a month, guessing is a tax you can afford. At $50K, it's the biggest line item on your P&L. Q4 raises everyone's spend. It doesn't raise anyone's answers.",
  },
];

export function Problem() {
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRefs.current.forEach((v, i) => {
            if (v) {
              v.play().then(() => setPlaying(i)).catch(() => {});
            }
          });
          setPlaying(0);
        } else {
          videoRefs.current.forEach((v) => {
            if (v) v.pause();
          });
          setPlaying(null);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (i: number) => {
    const target = videoRefs.current[i];
    if (!target) return;
    videoRefs.current.forEach((v, idx) => {
      if (v && idx !== i) {
        v.pause();
      }
    });
    if (target.paused) {
      target.play();
      setPlaying(i);
    } else {
      target.pause();
      setPlaying(null);
    }
  };

  return (
    <section ref={sectionRef} id="why-this" className="py-20 md:py-28">
      <div className="container-page">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray mb-3">
            The real reason ads stall
          </p>
          <h2 className="heading-2-light">
            Nineteen out of twenty ads{" "}
            <span className="font-secondary italic">never work.</span>{" "}
            Yours included.
          </h2>
          <p className="mt-4 heading-description max-w-4xl mx-auto">
            That isn&apos;t your team failing. Meta analysed $1.3 billion in
            spend across 550,000 ads: only 5&ndash;8% ever become real winners.
            The question isn&apos;t why most die. It&apos;s what you learn from
            the ones that don&apos;t.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT — ad performance widget */}
          <div className="rounded-2xl border border-mercury bg-white overflow-hidden shadow-[0_4px_20px_rgba(28,40,84,0.06)]">
            {/* Widget header */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-mercury">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-primary-1 to-azure-radiance grid place-items-center shrink-0">
                <span className="text-[6px] font-extrabold text-white">PW</span>
              </div>
              <span className="text-[13px] font-bold text-primary-1">
                Ad performance
              </span>
              <span className="ml-auto text-[12px] font-light text-gray">
                Last 30 days
              </span>
            </div>

            {/* Two ads — identical structure keeps every row aligned */}
            <div className="grid grid-cols-2 gap-4 p-4">
              {ads.map((ad, i) => (
                <div key={ad.id} className="flex flex-col">
                  {/* Video */}
                  <div
                    onClick={() => togglePlay(i)}
                    className="group relative rounded-xl overflow-hidden bg-[#0a0d1a] cursor-pointer"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      src={ad.src}
                      poster={ad.poster}
                      playsInline
                      loop
                      muted
                      preload="none"
                      onPause={() => setPlaying((p) => (p === i ? null : p))}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45 transition-opacity ${
                        playing === i ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <div
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 grid place-items-center transition-all duration-300 ${
                        playing === i
                          ? "opacity-0 scale-75"
                          : "opacity-100 scale-100 group-hover:scale-110"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-1.5 mt-3">
                    <span
                      className="w-4 h-4 rounded-full grid place-items-center shrink-0"
                      style={{ background: ad.accentBg }}
                    >
                      {ad.id === "winner" ? (
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={ad.accent}
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={ad.accent}
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                    </span>
                    <span
                      className="text-[13px] font-bold tracking-[0.06em] uppercase"
                      style={{ color: ad.accent }}
                    >
                      {ad.label}
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="mt-3 border-t border-mercury divide-y divide-mercury">
                    {ad.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center justify-between py-2"
                      >
                        <span className="text-[12px] font-light text-gray">
                          {m.label}
                        </span>
                        <span className="text-[14px] font-semibold text-primary-1 tabular-nums">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[12px] font-light text-gray mt-2.5">
                    {ad.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Widget footer */}
            <div className="px-5 py-3.5 border-t border-mercury bg-hero-bg">
              <p className="text-[13px] font-light text-tundora leading-relaxed">
                Same brand. Same budget. Same week.{" "}
                <span className="font-semibold text-primary-1">
                  Nobody can say why one worked.
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT — problem cards */}
          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <div
                key={card.num}
                className="border border-mercury rounded-2xl bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary-1/8 grid place-items-center text-xs font-bold text-primary-1 shrink-0">
                    {card.num}
                  </span>
                  <h3 className="text-large font-medium text-primary-1 leading-snug">
                    {card.title}
                  </h3>
                </div>
                <p className="text-medium font-light leading-relaxed text-tundora">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
