"use client";

import { useState } from "react";

const QUESTIONS = [
  "Your last winning ad: which single element made it win?",
  "If that winner died tomorrow, what would you shoot next, and why that?",
  "What did your last three losing ads change about what you shot next?",
  "Can you describe your best customer in their words, not yours?",
  "What does your buyer believe about your category that stops them buying from anyone, including you?",
  "What's the fear behind their most common objection?",
  "What are your three closest competitors claiming in their live ads right now?",
  "What's the one argument you can make that nobody else in your category can?",
  "Which argument leads for cold traffic, and which for retargeting?",
  "What was your last hook actually designed to trigger?",
];

const VERDICTS = [
  {
    max: 3,
    title: "You're buying creative on faith.",
    body: "Every video you commission is a coin flip you're paying full price for. That's not a talent problem, it's a missing layer. Nothing above the line will improve until this does.",
  },
  {
    max: 6,
    title: "You know your brand. You don't know your buyer.",
    body: "This is where most brands doing real spend land. You have instincts and some history, but the parts that decide performance — what your buyer believes and what your competitors already own — are blank. That's why winners feel random.",
  },
  {
    max: 9,
    title: "You're close, and the gaps are the expensive ones.",
    body: "You've clearly done the thinking. But the blanks left on this list aren't the easy ones — they're the parts that tell you what to shoot next. Without those, you can explain the last winner but not produce the next one.",
  },
  {
    max: 10,
    title: "Then it's written down, right?",
    body: "If you can answer all ten, the question isn't whether you know your buyer. It's whether your creator, your editor and your media buyer are working from the same answers you're holding in your head. Ours arrives as a document they can build from.",
  },
];

export function Diagnostic() {
  const [checked, setChecked] = useState<boolean[]>(QUESTIONS.map(() => false));

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const score = checked.filter(Boolean).length;
  const verdict = VERDICTS.find((v) => score <= v.max) ?? VERDICTS[VERDICTS.length - 1];
  const started = score > 0;

  return (
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Prove it to yourself
          </p>
          <h2 className="heading-2">
            Think you&apos;re not{" "}
            <span className="font-secondary italic">guessing?</span>
          </h2>
          <p className="mt-4 heading-description">
            Ten questions. Most founders get four. Tick the ones you can answer
            right now, out loud, without opening a dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-3">
            {QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`flex items-start gap-4 text-left p-4 rounded-xl border transition-all duration-200 ${
                  checked[i]
                    ? "border-primary-1/30 bg-white shadow-sm"
                    : "border-mercury bg-white/50 hover:bg-white hover:border-mercury/80"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                    checked[i]
                      ? "border-primary-1 bg-primary-1"
                      : "border-mercury"
                  }`}
                >
                  {checked[i] && (
                    <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M1.5 6.8 L4.7 10 L11.5 3"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-gray uppercase tracking-[0.12em] mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-medium font-light leading-relaxed transition-colors ${
                      checked[i] ? "text-primary-1" : "text-tundora"
                    }`}
                  >
                    {q}
                  </span>
                  {checked[i] && (
                    <span className="ml-2 text-[10px] font-semibold text-gray">
                      I can answer this
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:sticky" style={{ top: "8rem" }}>
            <div className="rounded-2xl border border-mercury bg-white p-7 shadow-sm">
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="font-secondary italic text-primary-1 transition-all duration-300"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}
                >
                  {score}
                </span>
                <span className="text-gray text-lg font-light">/ 10</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray mb-6">
                {started ? "answered" : "tick to start"}
              </p>

              {started && (
                <div className="border-t border-mercury pt-5">
                  <p className="text-medium font-semibold text-primary-1 leading-snug mb-2">
                    {verdict.title}
                  </p>
                  <p className="text-sm font-light text-tundora leading-relaxed">
                    {verdict.body}
                  </p>
                </div>
              )}

              {!started && (
                <p className="text-sm font-light text-gray leading-relaxed">
                  Every blank is a decision your next creative is making without you.
                </p>
              )}

              <div className="mt-6 h-1.5 rounded-full bg-mercury overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-1 to-azure-radiance transition-all duration-500"
                  style={{ width: `${(score / 10) * 100}%` }}
                />
              </div>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                className="mt-6 flex items-center justify-center gap-2 w-full bg-primary-1 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-primary-1/90 transition-colors"
              >
                Book a Fit Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <p className="text-center text-xs text-gray font-light mt-2">
                Refundable in full on day five
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
