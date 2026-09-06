"use client";

import { useState } from "react";

const withoutItems = [
  {
    icon: "dice",
    label: "Brief on vibes",
    detail: "You tell the creator what feels right. They interpret it. You hope the audience agrees.",
  },
  {
    icon: "loop",
    label: "Test one idea at a time",
    detail: "Each test is a guess. If it fails, you make another guess. Every iteration costs money and calendar.",
  },
  {
    icon: "copy",
    label: "Copy what's working",
    detail: "You watch competitors and remake what they're running. By the time you launch it, they've moved on and the audience has seen it twice.",
  },
];

const withItems = [
  {
    icon: "target",
    label: "Brief on evidence",
    detail: "Every script carries the buyer belief it attacks, the competitor gap it fills, and the language it came from.",
  },
  {
    icon: "layers",
    label: "Test five angles at once",
    detail: "Five arguments your buyer hasn't heard, each with two hooks. Ten openings, and you'll know which door they walk through.",
  },
  {
    icon: "gap",
    label: "Say what nobody else is saying",
    detail: "The research maps every claim in your category. Your angles come from the gaps — the things no competitor has taken.",
  },
];

function DiceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <circle cx="8.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LoopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function GapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h6M16 12h6" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v6M12 16v6" />
    </svg>
  );
}

const iconMap: Record<string, () => React.JSX.Element> = {
  dice: DiceIcon,
  loop: LoopIcon,
  copy: CopyIcon,
  target: TargetIcon,
  layers: LayersIcon,
  gap: GapIcon,
};

export function ObviousQuestion() {
  const [activeTab, setActiveTab] = useState<"without" | "with">("without");

  return (
    <section className="py-20 md:py-28 bg-zumthor">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            The obvious question
          </p>
          <h2
            className="text-primary-1 tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            If nobody can promise a winner,{" "}
            <span className="font-secondary italic text-azure-radiance">
              why pay for this?
            </span>
          </h2>
          <p className="mt-5 text-lg md:text-xl font-light text-tundora max-w-3xl mx-auto leading-relaxed">
            You&apos;re right that nobody can promise a winner. The question is
            what changes when you stop guessing at the odds.
          </p>
        </div>

        {/* Toggle widget */}
        <div className="max-w-6xl mx-auto">
          {/* Tab switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full p-1 bg-white border border-mercury shadow-sm">
              <button
                onClick={() => setActiveTab("without")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === "without"
                    ? "bg-primary-1 text-white shadow-lg"
                    : "text-tundora hover:text-primary-1"
                }`}
              >
                Without research
              </button>
              <button
                onClick={() => setActiveTab("with")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === "with"
                    ? "bg-azure-radiance text-white shadow-lg shadow-azure-radiance/25"
                    : "text-tundora hover:text-primary-1"
                }`}
              >
                With research
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="relative min-h-[380px]">
            {/* Without */}
            <div
              className={`transition-all duration-500 ${
                activeTab === "without"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="grid sm:grid-cols-3 gap-5">
                {withoutItems.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl bg-white border border-mercury p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-11 h-11 rounded-lg bg-hero-bg flex items-center justify-center text-tundora mb-5">
                        <Icon />
                      </div>
                      <h4 className="text-lg font-semibold text-primary-1 mb-2">
                        {item.label}
                      </h4>
                      <p className="text-[18px] font-light text-primary-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-gray font-light text-[15px] mt-8 italic">
                Every test is a coin flip. Each flip costs you budget and time.
              </p>
            </div>

            {/* With */}
            <div
              className={`transition-all duration-500 ${
                activeTab === "with"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="grid sm:grid-cols-3 gap-5">
                {withItems.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl bg-white border border-azure-radiance/25 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-11 h-11 rounded-lg bg-azure-radiance/10 flex items-center justify-center text-azure-radiance mb-5">
                        <Icon />
                      </div>
                      <h4 className="text-lg font-semibold text-primary-1 mb-2">
                        {item.label}
                      </h4>
                      <p className="text-[18px] font-light text-primary-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-azure-radiance font-light text-[15px] mt-8 italic">
                You still can&apos;t guarantee a winner. But you&apos;ve shortened the odds on all five.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-14 md:mt-20">
          <p className="text-xl md:text-2xl font-medium text-primary-1 max-w-2xl mx-auto leading-snug">
            The question isn&apos;t whether research guarantees a winner.
            <br />
            <span className="font-secondary italic text-azure-radiance">
              It&apos;s whether you&apos;d rather test five informed bets or five guesses.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
