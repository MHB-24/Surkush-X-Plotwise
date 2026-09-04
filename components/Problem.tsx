"use client";

import { useRef, useEffect } from "react";

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
    accent: "#e03535",
    accentBg: "rgba(224,53,53,0.10)",
    metrics: [
      { label: "ROAS", value: "0.8x" },
      { label: "CTR", value: "0.6%" },
      { label: "Spend", value: "$1,200" },
    ],
  },
];

const cards = [
  {
    num: "01",
    title: "You're not testing. You're confirming.",
    body: "A test tells you something you didn't know. Ten versions of the same claim tell you which version of a claim you already believe in performs slightly better. That's optimisation, and it has a ceiling you hit fast.",
  },
  {
    num: "02",
    title: "Which is why the same people keep seeing your ads.",
    body: "Meta reads the argument in your creative to decide who it goes to. One argument reaches one pocket of demand, no matter how many executions you put behind it. That pocket empties. Costs climb. It feels like the market got harder when what actually happened is you ran out of a specific group of buyers.",
  },
  {
    num: "03",
    title: "And you can't build a second idea out of the first one.",
    body: "Studying your winner produces relatives of your winner. That's the loop. Every new concept starts from the last thing that worked, so everything converges, and the only way out is an argument that didn't come from your own account.",
  },
];

export function Problem() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRefs.current.forEach((v) => {
            if (v) v.play().catch(() => {});
          });
        } else {
          videoRefs.current.forEach((v) => {
            if (v) v.pause();
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="why-this" className="py-20 md:py-28">
      <div className="container-page">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Open your ads manager and check
          </p>
          <h2 className="heading-2-light">
            Every ad you&apos;ve made since your winner
            <br />
            <span className="font-secondary italic">is a copy of your winner.</span>
          </h2>
          <p className="mt-4 heading-description">
            Different creator. Different opening. Different edit. Same argument
            underneath, because that argument worked once and nothing since has
            given you a reason to make a different one. Most brands past
            product-market fit are running one idea in a dozen outfits and
            counting it as testing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT — ad performance widget */}
          <div className="rounded-2xl border border-mercury bg-white overflow-hidden shadow-[0_4px_20px_rgba(28,40,84,0.06)] flex flex-col">
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
            <div className="grid grid-cols-2 gap-4 p-4 flex-1 min-h-0">
              {ads.map((ad, i) => (
                <div key={ad.id} className="flex flex-col min-h-0">
                  {/* Video */}
                  <div className="relative rounded-xl overflow-hidden bg-[#0a0d1a] flex-1 min-h-0">
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
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
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

        <p className="mt-12 text-xl md:text-2xl font-medium text-primary-1 text-center">
          Think of your last five ads. How many arguments were they, really?
        </p>
      </div>
    </section>
  );
}
