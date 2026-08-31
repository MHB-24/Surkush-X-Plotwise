"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "We find out what your buyer already believes.",
    body: "If you have reviews, DMs and support tickets, we start there — because your buyer has already told you what they think in their own words. If you're launching, or you're early, we go where they talk instead: competitor reviews, forums, comment sections, the one-star reviews of the product they tried before yours. Either way, we come back with their language, not yours.",
  },
  {
    num: "02",
    title: "We find the reason they don't buy.",
    body: `Every category has one belief that blocks the sale. "They all do the same thing." "It won't work on me." "It's not worth the money." We find yours, and the fear sitting under it. That's the wall your ads keep bouncing off.`,
  },
  {
    num: "03",
    title: "We map the competitors who matter.",
    body: "Not fifty. The handful you're actually losing customers to, plus whoever's spending hardest in your category. We pull their live and retired ads and write down what each one is claiming, so you can see the whole conversation on one page and spot the claims nobody has taken.",
  },
  {
    num: "04",
    title: "We pick the argument only you can win.",
    body: "There's always one. The thing your product can say that your competitors can't, that also breaks the wall from step two. This is the whole job. Everything before it was finding it. Everything after is saying it well. Five angles beats fifty variations — we cap it at five and make each one count.",
  },
  {
    num: "05",
    title: "We write two hooks for every ad.",
    body: "Same message, two completely different openings. Because when you test one hook you learn nothing. When you test two, you find out which door your buyer walks through.",
  },
  {
    num: "06",
    title: "You get five scripts, tagged and ready to shoot.",
    body: "Each one carries the angle it came from, the belief it's attacking and the funnel stage it's built for, so you and your media buyer can decide what to run and when. Hand them to any creator.",
  },
  {
    num: "07",
    title: "It all lives in your workspace, not a folder.",
    body: "The research, the angles and the scripts land inside the platform, where your team works from them. Generate a link, send it to any creator you use, and their uploads come back against the right angle. Three months included.",
  },
];

function Widget01({ active }: { active: boolean }) {
  const reviews = [
    { stars: 5, text: `"Changed how I think about my skin…"`, src: "Amazon" },
    { stars: 4, text: `"Works but took 3 weeks to see it"`, src: "TikTok DM" },
    { stars: 5, text: `"Finally a brand that gets it"`, src: "Support" },
  ];
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-[rgba(0,142,255,0.07)] flex items-center justify-center">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#008EFF]">Buyer Language</span>
      </div>
      {reviews.map((r, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 bg-white rounded-lg p-3.5 border border-[#e4eaf5] shadow-sm transition-all duration-500 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          style={{ transitionDelay: active ? `${200 + i * 150}ms` : "0ms" }}
        >
          <div className="w-7 h-7 rounded-lg bg-[rgba(0,142,255,0.07)] flex items-center justify-center shrink-0 mt-0.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              {Array.from({ length: r.stars }).map((_, j) => (
                <svg key={j} width="10" height="10" viewBox="0 0 24 24" fill="#008EFF" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
              <span className="text-[10px] font-semibold text-[#8a97b0] ml-1">{r.src}</span>
            </div>
            <p className="text-[12px] text-[#2d3a5a] font-medium italic leading-snug">{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Widget02({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-[#f5ecdb] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9c6f1e" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9c6f1e]">Belief Blocker</span>
      </div>
      <div className={`bg-white rounded-lg p-4 border border-[#e4eaf5] shadow-sm transition-all duration-500 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: active ? "200ms" : "0ms" }}>
        <p className="text-[13px] text-[#2d3a5a] font-semibold leading-snug">&ldquo;I&apos;ve tried everything &mdash; nothing works for my skin type.&rdquo;</p>
        <div className="flex gap-2 mt-3">
          <span className="text-[9px] font-bold text-[#9c6f1e] bg-[#f5ecdb] rounded-full px-2 py-0.5">FEAR</span>
          <span className="text-[9px] font-bold text-[#5a6880] bg-[#edf1f9] rounded-full px-2 py-0.5">IDENTITY</span>
        </div>
      </div>
      <div className={`bg-white rounded-lg p-4 border border-[#e4eaf5] shadow-sm transition-all duration-500 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: active ? "500ms" : "0ms" }}>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1e7a4a]" />
          <span className="text-[10px] font-semibold text-[#1e7a4a]">Unlock</span>
        </div>
        <p className="text-[12px] text-[#5a6880] leading-snug">Show ingredient proof before transformation story</p>
      </div>
    </div>
  );
}

function Widget03({ active }: { active: boolean }) {
  const competitors = [
    { name: "Brand A", claim: "Clinical proof", taken: true },
    { name: "Brand B", claim: "Before / After", taken: true },
    { name: "Brand C", claim: "Ingredient %", taken: false },
  ];
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-[rgba(0,142,255,0.07)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#008EFF]">Competitor Map</span>
      </div>
      {competitors.map((c, i) => (
        <div
          key={i}
          className={`flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-[#e4eaf5] shadow-sm transition-all duration-500 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          style={{ transitionDelay: active ? `${200 + i * 160}ms` : "0ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#1C2854] to-[#008EFF] flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">{c.name.split(" ")[1]}</span>
            </div>
            <span className="text-[12px] font-semibold text-[#0e1428]">{c.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#5a6880]">{c.claim}</span>
            {c.taken ? (
              <span className="text-[8px] font-bold text-[#5a6880] bg-[#edf1f9] rounded-full px-2 py-0.5">TAKEN</span>
            ) : (
              <span className="text-[8px] font-bold text-[#1e7a4a] bg-[#e2f5ea] rounded-full px-2 py-0.5">OPEN</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Widget04({ active }: { active: boolean }) {
  const angles = [
    { angle: "Transparency proof", selected: false },
    { angle: "Ingredient concentration", selected: true },
    { angle: "Community trust", selected: false },
  ];
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-[#e2f5ea] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1e7a4a" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1e7a4a]">Winning Angle</span>
      </div>
      {angles.map((a, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 rounded-lg px-4 py-3 border shadow-sm transition-all duration-500 ${
            a.selected
              ? "bg-white border-[#008EFF] shadow-[0_0_0_1px_rgba(0,142,255,0.15)]"
              : "bg-white border-[#e4eaf5]"
          } ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: active ? `${200 + i * 150}ms` : "0ms" }}
        >
          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
            a.selected ? "border-[#008EFF] bg-[#008EFF]" : "border-[#d8e0ed]"
          }`}>
            {a.selected && (
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            )}
          </div>
          <span className={`text-[12px] font-semibold ${a.selected ? "text-[#008EFF]" : "text-[#2d3a5a]"}`}>
            {a.angle}
          </span>
          {a.selected && (
            <span className="text-[8px] font-bold text-[#008EFF] bg-[rgba(0,142,255,0.07)] rounded-full px-2 py-0.5 ml-auto">YOURS</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Widget05({ active }: { active: boolean }) {
  const hooks = [
    { label: "Hook A · Curiosity", text: `"You're applying it wrong."` },
    { label: "Hook B · Pattern break", text: `"Stop. Don't buy another serum."` },
    { label: "Hook A · Story", text: `"My derm told me to stop."` },
    { label: "Hook B · Proof", text: `"30 days. No filter. Watch."` },
  ];
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-[rgba(0,142,255,0.07)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#008EFF]">Two Hooks Per Script</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {hooks.map((h, i) => (
          <div
            key={i}
            className={`bg-white rounded-lg p-3 border border-[#e4eaf5] shadow-sm transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: active ? `${300 + i * 120}ms` : "0ms" }}
          >
            <span className="block text-[9px] tracking-[0.1em] uppercase text-[#008EFF] font-semibold mb-1.5">{h.label}</span>
            <span className="font-secondary italic text-[12px] leading-tight text-[#2d3a5a]">{h.text}</span>
          </div>
        ))}
      </div>
      <p className={`text-[11px] text-[#8a97b0] text-center transition-all duration-500 ${active ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: active ? "900ms" : "0ms" }}>
        Same message &middot; opposite openings &middot; real data
      </p>
    </div>
  );
}

function Widget06({ active }: { active: boolean }) {
  const scripts = [
    { num: "01", tag: "TOF", tagBg: "rgba(0,142,255,0.07)", tagColor: "#008EFF", width: "85%" },
    { num: "02", tag: "MOF", tagBg: "#f5ecdb", tagColor: "#9c6f1e", width: "70%" },
    { num: "03", tag: "BOF", tagBg: "#e2f5ea", tagColor: "#1e7a4a", width: "60%" },
  ];
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-[rgba(0,142,255,0.07)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#008EFF]">Scripts</span>
      </div>
      {scripts.map((s, i) => (
        <div
          key={s.num}
          className={`bg-white rounded-lg p-3.5 border border-[#e4eaf5] shadow-sm flex items-center gap-3 transition-all duration-500 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          style={{ transitionDelay: active ? `${200 + i * 160}ms` : "0ms" }}
        >
          <span className="text-[10px] font-bold text-[#008EFF] font-mono shrink-0">SCRIPT {s.num}</span>
          <div className="flex-1 h-1.5 rounded-full bg-[#edf1f9] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#008EFF] transition-all duration-1000 ease-out"
              style={{ width: active ? s.width : "0%", transitionDelay: active ? `${400 + i * 200}ms` : "0ms" }}
            />
          </div>
          <span className="text-[8px] font-bold rounded-full px-2 py-0.5 shrink-0" style={{ background: s.tagBg, color: s.tagColor }}>{s.tag}</span>
        </div>
      ))}
      <div className={`flex items-center gap-2 px-1 transition-all duration-500 ${active ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: active ? "800ms" : "0ms" }}>
        <div className="flex gap-1">
          {["04", "05"].map((n) => (
            <div key={n} className="w-7 h-7 rounded-md bg-white border border-[#e4eaf5] flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#5a6880]">{n}</span>
            </div>
          ))}
        </div>
        <span className="text-[10px] text-[#8a97b0]">+ 2 more scripts</span>
      </div>
    </div>
  );
}

function Widget07({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1C2854] to-[#008EFF] flex items-center justify-center">
          <span className="text-[7px] font-extrabold text-white">PW</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1C2854]">Workspace</span>
      </div>
      <div className={`bg-white rounded-lg p-4 border border-[#e4eaf5] shadow-sm transition-all duration-500 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: active ? "200ms" : "0ms" }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[9px] font-bold text-[#008EFF] uppercase tracking-wider">Active workspace</span>
            <p className="text-[12px] font-semibold text-[#0e1428]">Eco Packaging Launch</p>
          </div>
          <span className="text-[8px] font-bold text-[#1e7a4a] bg-[#e2f5ea] rounded-full px-2 py-0.5">ACTIVE</span>
        </div>
        <div className="flex gap-2">
          {[
            { label: "Research", count: "1", done: true },
            { label: "Scripts", count: "5", done: true },
            { label: "Hooks", count: "10", done: false },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex-1 bg-[#f3f6fb] rounded-lg p-2.5 flex flex-col items-center justify-center border border-[#e4eaf5] transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: active ? `${400 + i * 150}ms` : "0ms" }}
            >
              <span className="text-[16px] font-semibold text-[#0e1428]">{item.count}</span>
              <span className="text-[9px] text-[#8a97b0]">{item.label}</span>
              {item.done && <div className="w-1.5 h-1.5 rounded-full bg-[#1e7a4a] mt-1" />}
            </div>
          ))}
        </div>
      </div>
      <div className={`bg-white rounded-lg p-3 border border-[#e4eaf5] shadow-sm transition-all duration-500 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: active ? "700ms" : "0ms" }}>
        <div className="text-[9px] font-semibold text-[#5a6880] uppercase tracking-wider mb-2">Creator access</div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["AJ", "MK", "SL"].map((initials, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1C2854] to-[#008EFF] border-2 border-white flex items-center justify-center">
                <span className="text-[6px] font-bold text-white">{initials}</span>
              </div>
            ))}
          </div>
          <span className="text-[10px] text-[#5a6880]">3 creators linked</span>
          <span className="text-[8px] font-bold text-[#008EFF] bg-[rgba(0,142,255,0.07)] rounded-full px-2 py-0.5 ml-auto">90 DAYS</span>
        </div>
      </div>
    </div>
  );
}

const Widgets = [Widget01, Widget02, Widget03, Widget04, Widget05, Widget06, Widget07];

export function Process() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const target = window.innerHeight * 0.45;
      let bestIdx = 0;
      let bestDist = Infinity;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - target);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const ratio = (active + 1) / steps.length;

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        <div className="flex flex-col gap-2 items-center mb-10">
          <h2 className="heading text-center leading-tight">
            What We <span className="font-secondary italic">Actually</span> Do
          </h2>
          <p className="heading-description text-center">
            We find the one thing your buyer needs to hear. Then we hand you the
            system that says it.
          </p>
          <p className="text-sm text-gray mt-2">
            Seven steps. Ten days. Here&apos;s exactly what happens.
          </p>
        </div>
        <div className="mb-14 p-6 md:p-8 rounded-xl border border-mercury bg-white">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray mb-3">Your creative is your targeting now</p>
          <p className="text-medium font-light text-tundora leading-relaxed">
            Meta stopped letting you choose your audience in any meaningful way. Broad targeting won, interest stacking died, and the algorithm now reads your ad to decide who sees it. Open with the wrong belief and you get shown to the wrong people, no matter how you set up the campaign. Which means the angle isn&apos;t the thing that comes before the targeting. It is the targeting. That&apos;s what the seven steps below are actually building.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-start">
          {/* Left: scrolling steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const Widget = Widgets[i];
              return (
                <div
                  key={step.num}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className={`flex flex-col justify-center py-6 lg:py-10 lg:min-h-[55vh] ${i > 0 ? "border-t border-dashed border-mercury" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-8 h-8 rounded-full grid place-items-center font-secondary italic text-sm transition-all duration-500 ${
                        active === i
                          ? "bg-primary-1 text-white ring-4 ring-primary-1/20"
                          : "bg-white border border-mercury text-gray"
                      }`}
                    >
                      {step.num}
                    </span>
                    <span className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-300 ${active === i ? "text-primary-1" : "text-gray"}`}>
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-medium text-tundora font-light leading-relaxed">
                    {step.body}
                  </p>
                  {/* Mobile widget (inline below text) */}
                  <div className="lg:hidden mt-5 rounded-xl bg-[#f3f6fb] border border-[#e4eaf5] p-5">
                    <Widget active={true} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: sticky widget canvas */}
          <div className="hidden lg:block sticky self-start" style={{ top: "8rem" }}>
            <div
              className="relative w-full rounded-2xl border border-mercury overflow-hidden shadow-[0_16px_40px_-24px_rgba(28,40,84,0.12)]"
              style={{
                height: "420px",
                background: "radial-gradient(420px 220px at 100% 100%, rgba(0,142,255,0.04), transparent 65%), radial-gradient(360px 200px at 0% 0%, rgba(28,40,84,0.06), transparent 60%), linear-gradient(135deg, #FAFBFE 0%, #F3F6FB 100%)",
              }}
            >
              {Widgets.map((Widget, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 p-7 transition-all duration-500 ${
                    active === i
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <Widget active={active === i} />
                </div>
              ))}
              {/* Progress bar */}
              <div className="absolute left-5 right-5 bottom-5 h-[3px] rounded-full overflow-hidden bg-mercury/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-1 to-azure-radiance transition-all duration-500"
                  style={{ width: `${ratio * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray font-light mt-14">
          Ten days from now, you stop briefing creators on vibes.
        </p>
      </div>
    </section>
  );
}
