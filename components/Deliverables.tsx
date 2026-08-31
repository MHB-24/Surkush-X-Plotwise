"use client";

import { useEffect, useRef, useState } from "react";

const deliverables = [
  {
    num: "01",
    title: "The Research Document",
    body: "Your buyer, in their words. The belief blocking the sale. The fear underneath it. What your competitors are claiming and where the gaps are. The argument only you can win. This is the part you keep forever, and the part every future creative decision gets made from.",
  },
  {
    num: "02",
    title: "Five Scripts, Ready to Shoot",
    body: "Each one built on a documented angle, tagged with the belief it attacks and the funnel stage it's for. Hand them to any creator you already work with.",
  },
  {
    num: "03",
    title: "Ten Hooks. Two Per Script.",
    body: "Same message, opposite openings. This is how you find out which door your buyer walks through — and it's the difference between testing and guessing.",
  },
  {
    num: "04",
    title: "The Workspace — 90 Days",
    body: "Where all of it lives. Your team works from it, and you can send a link to any creator so their uploads land against the right angle.",
  },
];

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function DelWidget01() {
  const { ref, visible } = useInView();
  const sections = [
    { icon: "💬", label: "Buyer Language", desc: "Real words from reviews and DMs", color: "#008EFF" },
    { icon: "⚠", label: "Belief Blocker", desc: "The fear stopping the sale", color: "#9c6f1e" },
    { icon: "🔍", label: "Competitive Map", desc: "Claims taken vs. open", color: "#1C2854" },
    { icon: "✓", label: "Winning Angle", desc: "The argument only you can win", color: "#1e7a4a" },
  ];
  return (
    <div ref={ref} className="rounded-xl bg-[#f3f6fb] border border-[#e4eaf5] p-5 space-y-2.5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-gradient-to-br from-[#1C2854] to-[#008EFF] flex items-center justify-center">
          <span className="text-[6px] font-extrabold text-white">PW</span>
        </div>
        <span className="text-[10px] font-bold text-[#0e1428] uppercase tracking-wider">Research Document</span>
      </div>
      {sections.map((s, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 bg-white rounded-lg p-3 border border-[#e4eaf5] transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm" style={{ background: `${s.color}10` }}>
            {s.icon}
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-[#0e1428]">{s.label}</p>
            <p className="text-[10px] text-[#5a6880]">{s.desc}</p>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" className="ml-auto shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      ))}
    </div>
  );
}

function DelWidget02() {
  const { ref, visible } = useInView();
  const scripts = [
    { num: "01", angle: "Myth-bust", tag: "TOF", tagBg: "rgba(0,142,255,0.07)", tagColor: "#008EFF" },
    { num: "02", angle: "Routine reset", tag: "MOF", tagBg: "#f5ecdb", tagColor: "#9c6f1e" },
    { num: "03", angle: "Side-by-side", tag: "BOF", tagBg: "#e2f5ea", tagColor: "#1e7a4a" },
    { num: "04", angle: "Risk reversal", tag: "BOF", tagBg: "#e2f5ea", tagColor: "#1e7a4a" },
    { num: "05", angle: "Pattern break", tag: "TOF", tagBg: "rgba(0,142,255,0.07)", tagColor: "#008EFF" },
  ];
  return (
    <div ref={ref} className="rounded-xl bg-[#f3f6fb] border border-[#e4eaf5] p-5 space-y-2">
      <div className="text-[10px] font-bold text-[#008EFF] uppercase tracking-wider mb-3">5 Scripts · Tagged</div>
      {scripts.map((s, i) => (
        <div
          key={s.num}
          className={`flex items-center gap-3 bg-white rounded-lg px-3.5 py-2.5 border border-[#e4eaf5] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
        >
          <span className="text-[9px] font-bold text-[#008EFF] font-mono w-12 shrink-0">SCRIPT {s.num}</span>
          <span className="text-[11px] font-medium text-[#2d3a5a] flex-1">{s.angle}</span>
          <div className="flex-1 max-w-16 h-1 rounded-full bg-[#edf1f9] overflow-hidden">
            <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ background: s.tagColor, width: visible ? "100%" : "0%", transitionDelay: `${300 + i * 150}ms` }} />
          </div>
          <span className="text-[8px] font-bold rounded-full px-1.5 py-0.5 shrink-0" style={{ background: s.tagBg, color: s.tagColor }}>{s.tag}</span>
        </div>
      ))}
    </div>
  );
}

function DelWidget03() {
  const { ref, visible } = useInView();
  const hooks = [
    { script: 'Script 01', hookA: '"I checked the label on every serum."', hookB: '"Your $60 serum has 0.5% of what this has."' },
    { script: 'Script 02', hookA: '"My skin changed when I moved cities."', hookB: '"Your skincare expires when your life changes."' },
    { script: 'Script 03', hookA: '"$12 vs $48. Thirty days."', hookB: '"My dermatologist pointed me to one brand."' },
  ];
  return (
    <div ref={ref} className="rounded-xl bg-[#f3f6fb] border border-[#e4eaf5] p-5 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-[#008EFF] uppercase tracking-wider">10 Hooks</span>
        <span className="text-[9px] text-[#5a6880]">2 per script</span>
      </div>
      {hooks.map((h, i) => (
        <div
          key={i}
          className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
        >
          <p className="text-[9px] font-bold text-[#5a6880] uppercase tracking-wider mb-1.5">{h.script}</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-lg p-2.5 border border-[#e4eaf5]">
              <span className="text-[8px] font-bold text-[#008EFF] block mb-1">HOOK A</span>
              <span className="font-secondary italic text-[10px] text-[#2d3a5a] leading-tight">{h.hookA}</span>
            </div>
            <div className="bg-white rounded-lg p-2.5 border border-[#e4eaf5]">
              <span className="text-[8px] font-bold text-[#008EFF] block mb-1">HOOK B</span>
              <span className="font-secondary italic text-[10px] text-[#2d3a5a] leading-tight">{h.hookB}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DelWidget04() {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className="rounded-xl bg-[#f3f6fb] border border-[#e4eaf5] p-5">
      <div className={`bg-white rounded-lg p-4 border border-[#e4eaf5] mb-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: visible ? "100ms" : "0ms" }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1C2854] to-[#008EFF] flex items-center justify-center">
              <span className="text-[6px] font-extrabold text-white">PW</span>
            </div>
            <div>
              <span className="text-[8px] font-bold text-[#008EFF] uppercase tracking-wider">Workspace</span>
              <p className="text-[11px] font-semibold text-[#0e1428]">Your Brand Campaign</p>
            </div>
          </div>
          <span className="text-[8px] font-bold text-[#1e7a4a] bg-[#e2f5ea] rounded-full px-2 py-0.5">ACTIVE</span>
        </div>
        <div className="flex gap-2">
          {[
            { label: "Research", count: "1" },
            { label: "Scripts", count: "5" },
            { label: "Hooks", count: "10" },
            { label: "Creators", count: "3" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex-1 bg-[#f3f6fb] rounded-lg p-2 flex flex-col items-center border border-[#e4eaf5] transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: visible ? `${300 + i * 120}ms` : "0ms" }}
            >
              <span className="text-[14px] font-semibold text-[#0e1428]">{item.count}</span>
              <span className="text-[8px] text-[#8a97b0]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`bg-white rounded-lg p-3 border border-[#e4eaf5] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: visible ? "600ms" : "0ms" }}>
        <div className="flex items-center justify-between text-[9px] mb-2">
          <span className="font-semibold text-[#5a6880] uppercase tracking-wider">Creator briefs</span>
          <span className="font-bold text-[#008EFF]">Send a link →</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["AJ", "MK", "SL"].map((initials, i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1C2854] to-[#008EFF] border-2 border-white flex items-center justify-center">
                <span className="text-[5px] font-bold text-white">{initials}</span>
              </div>
            ))}
          </div>
          <span className="text-[9px] text-[#5a6880]">Uploads land against the right angle</span>
        </div>
      </div>
      <div className={`mt-3 flex items-center justify-center gap-2 transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: visible ? "900ms" : "0ms" }}>
        <span className="text-[9px] font-bold text-[#008EFF] bg-[rgba(0,142,255,0.07)] rounded-full px-2.5 py-1">90 DAYS ACCESS</span>
      </div>
    </div>
  );
}

const delWidgets = [DelWidget01, DelWidget02, DelWidget03, DelWidget04];

export function Deliverables() {
  return (
    <section id="deliverables" className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="heading-2 mb-4">
              Everything{" "}
              <span className="font-secondary italic">Lands</span> on Day Ten
            </h2>
            <p className="heading-description mb-12 max-w-2xl">
              Here&apos;s everything that hits your inbox on day ten. Built for
              your brand specifically. Nothing templated, nothing recycled from
              another client. And most of it isn&apos;t ads.
            </p>

            <div className="space-y-4">
              {deliverables.map((d, i) => {
                const Widget = delWidgets[i];
                return (
                  <div
                    key={d.num}
                    className="border border-mercury rounded-md p-6 sm:p-8 flex flex-col gap-6"
                  >
                    <div className="flex gap-6">
                      <span className="text-gray text-large font-semibold shrink-0">
                        {d.num}
                      </span>
                      <div>
                        <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1">
                          {d.title}
                        </h3>
                        <p className="mt-2 text-medium font-light leading-relaxed text-tundora">
                          {d.body}
                        </p>
                      </div>
                    </div>
                    <Widget />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-primary-1 text-white rounded-md p-8 md:p-10 lg:sticky lg:top-24">
              <div className="text-6xl font-light tracking-[-2px]">$1,500</div>
              <p className="mt-1 text-medium font-light text-white/50">
                One payment
              </p>

              <p className="mt-6 text-medium font-light leading-relaxed text-white/60">
                A creative strategist costs $6&ndash;8K/month. An agency retainer
                starts at $5K and locks you in for three. This is the research
                layer, done once, done properly, and it&apos;s yours whether you
                ever work with us again.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                {[
                  "Delivered in ten working days",
                  "Full refund on day five — no reasons needed",
                  "Every finding sourced and verifiable",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                    <p className="text-[15px] font-light text-white/60">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                className="mt-8 block w-full text-center bg-white text-primary-1 text-lg font-medium py-3.5 rounded-lg hover:bg-zumthor transition-colors"
              >
                Book a Fit Call
              </button>

              <p className="mt-4 text-center text-sm font-light text-white/30">
                You see half the build before you&apos;re committed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
