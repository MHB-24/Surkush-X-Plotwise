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
    title: "You can test the same idea forever.",
    body: "A new hook is not a new argument. Neither is a new creator, a new format, or a different first three seconds. You can make ten versions of the same claim and learn which version of that claim performs best. Useful. But you are still learning about the same claim. The next useful thing to learn might be something else entirely.",
  },
  {
    num: "02",
    title: "You can run out of the same buyers.",
    body: "When the same argument keeps reaching the same kind of buyer, you can end up paying more to get the same people to listen again. Then the usual conversation starts. More creative. More testing. More ways to say the thing that already worked. Sometimes that is the right answer. Sometimes you have simply run out of the people who wanted to hear that particular argument. The distinction matters.",
  },
  {
    num: "03",
    title: "Your own account is a useful place to start.",
    body: "Your winning ad tells you what worked. It does not tell you everything that could work. If every new concept starts with the last winner, the next concept is usually its cousin. Same family. Slightly different hair. A second idea needs a different starting point. That means looking at the buyer, the category, and the things your competitors are not saying. Not just asking what made the last ad work.",
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
            Open your ads manager. Look at the last five ads.
          </p>
          <h2 className="heading-2-light">
            Your winning ad did its job.
            <br />
            <span className="font-secondary italic">Now you&apos;re making it the starting point for everything else.</span>
          </h2>
          <p className="mt-4 heading-description">
            You found a message that worked. You built a business around it.
            Now every new ad starts there. Different creator. Different opening.
            Different edit. Same argument underneath. That is not a creative
            problem. It is what happens when the last thing that worked becomes
            the only thing you have to work from. And eventually, you stop
            asking <em>what else could we say?</em> and start
            asking <em>how many more ways can we say the same thing?</em>
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
