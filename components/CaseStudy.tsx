"use client";

import { useRef, useState, useEffect } from "react";

const sections = [
  {
    num: "01",
    label: "The buyer, in her own words",
    body: "Every brand in this category sells performance. The research found that what she actually wants is to stop thinking about her leggings: no adjusting mid-session, no checking the mirror before she bends, no wondering which pair in the drawer is one of the good ones.",
    body2:
      "Nobody in the category was selling the absence of that. They were all selling the presence of features.",
    caption:
      "One of three personas. Each runs to a full page: her language, her beliefs, what she's already tried, where she spends attention, and what it means for the creative.",
  },
  {
    num: "02",
    label: "The belief in the way",
    body: 'What she currently believes, what she\'d need to believe instead, and what has to change between the two. Her belief here: anything under $100 goes sheer within four months, and the good stuff starts at $120. That\'s not an objection she\'d state on a call. It\'s a rule she applies before she\'s heard of you.',
    body2: null,
    caption:
      "One belief of six. Each carries the current belief, the desired belief, and the creative implication.",
  },
  {
    num: "03",
    label: "What the category is already saying",
    body: "Every claim from the competitors who matter, on one page. This is where the build found something worth the whole engagement.",
    body2:
      "The expensive brands never talk about the product. They talk about who you are when you wear it. The cheap brand is the one explaining what the fabric does, and it’s also the one running sales every other week. So the moment an $88 legging starts explaining its fabric, it’s having the cheap brand’s conversation at a premium price. Which is exactly what Northform’s ads were doing.",
    caption:
      "One finding from the full competitor map. Two of the most obvious ideas in this category got written and thrown out at this step, because four brands were already running them.",
  },
];

function CardShell({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-mercury bg-white p-5 md:p-6 shadow-[0_8px_32px_rgba(28,40,84,0.08)] w-full">
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-mercury">
        <div className="w-7 h-7 rounded-lg bg-primary-1 text-white grid place-items-center">
          <span className="font-secondary italic text-xs">{num}</span>
        </div>
        <span className="text-xs font-semibold text-primary-1 uppercase tracking-[0.1em]">
          Section {num}
        </span>
        <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-600">
          Published
        </span>
      </div>
      {children}
      <div className="mt-5 pt-3 border-t border-mercury flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-azure-radiance/30" />
        <span className="text-[11px] font-light text-gray">
          Extract from real client build
        </span>
      </div>
    </div>
  );
}

function PersonaCard() {
  return (
    <CardShell num="01">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-full bg-zumthor flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1c2854" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-primary-1 leading-tight">The Burned Buyer</p>
          <p className="text-[10px] font-semibold text-azure-radiance uppercase tracking-wider">Primary</p>
        </div>
      </div>

      <p className="text-[12px] font-normal text-tundora leading-relaxed mb-4">
        Has already bought into this price promise once and been let down, so she now filters every claim through a rule that mid-price activewear fails.
      </p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="rounded-lg bg-hero-bg p-3">
          <p className="text-[9px] font-bold uppercase tracking-widest text-tundora mb-1.5">Age</p>
          <p className="text-[12px] font-semibold text-primary-1">27–38</p>
        </div>
        <div className="rounded-lg bg-hero-bg p-3">
          <p className="text-[9px] font-bold uppercase tracking-widest text-tundora mb-1.5">Income</p>
          <p className="text-[12px] font-semibold text-primary-1">$55k – $85k</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[9px] font-bold uppercase tracking-widest text-tundora mb-2">She believes</p>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <p className="text-[11px] text-primary-1 leading-snug">&ldquo;Anything under $100 will fail within four months&rdquo;</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <p className="text-[11px] text-primary-1 leading-snug">&ldquo;The good stuff is $120 and up, and she resents that&rdquo;</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-tundora mb-2">Her words vs. the category</p>
        <div className="rounded-lg border border-mercury overflow-hidden">
          <div className="grid grid-cols-2 text-[9px] font-bold uppercase tracking-widest text-tundora bg-hero-bg">
            <div className="px-3 py-1.5 border-r border-mercury">She says</div>
            <div className="px-3 py-1.5">Category says</div>
          </div>
          <div className="grid grid-cols-2 text-[11px] text-primary-1">
            <div className="px-3 py-2 border-r border-mercury border-b">&ldquo;went see-through&rdquo;</div>
            <div className="px-3 py-2 text-gray border-b">opacity</div>
          </div>
          <div className="grid grid-cols-2 text-[11px] text-primary-1">
            <div className="px-3 py-2 border-r border-mercury">&ldquo;waistband rolls&rdquo;</div>
            <div className="px-3 py-2 text-gray">contoured waistband</div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-zumthor p-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-azure-radiance mb-1.5">Creative implication</p>
        <p className="text-[11px] text-primary-1 leading-snug">
          Anti-hype only. Lead with the failure she recognises, then explain its cause. Proof must be demonstrative, shot in unflattering conditions.
        </p>
      </div>
    </CardShell>
  );
}

function BeliefCard() {
  return (
    <CardShell num="02">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-sky-600">TOF</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-hero-bg text-tundora">Efficacy</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-zumthor text-azure-radiance">&rarr; The Squat Test</span>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-4">
        <div className="rounded-lg p-3.5" style={{ background: "rgba(244,63,94,0.06)", border: "1px solid rgba(244,63,94,0.12)" }}>
          <p className="text-[9px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "rgb(244,63,94)" }}>Current belief</p>
          <p className="text-[12px] font-semibold text-primary-1 leading-snug">
            &ldquo;Anything under $100 will go see-through when I bend over. That&apos;s just the price of entry.&rdquo;
          </p>
        </div>
        <div className="flex justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
        <div className="rounded-lg p-3.5" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.12)" }}>
          <p className="text-[9px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "rgb(34,197,94)" }}>Desired belief</p>
          <p className="text-[12px] font-semibold text-primary-1 leading-snug">
            &ldquo;Sheerness is a fabric density problem with a specific threshold. It is testable, and brands that have solved it will show you.&rdquo;
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-hero-bg p-3.5 mb-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-tundora mb-1.5">Creative implication</p>
        <p className="text-[11px] text-primary-1 leading-snug">
          Demonstration under adverse conditions. Bright overhead lighting, full flexion, unbroken take. A cut during the demonstration destroys the proof.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-[9px] font-bold uppercase tracking-widest text-tundora">All beliefs mapped</p>
        {[
          { theme: "Value", stage: "TOF", text: "You’re paying for the logo" },
          { theme: "Trust", stage: "MOF", text: "Can’t tell what will fit from a website" },
          { theme: "Efficacy", stage: "TOF", text: "Under $100 always goes see-through" },
        ].map((b, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white border border-mercury px-3 py-2">
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${b.stage === "TOF" ? "bg-sky-50 text-sky-600" : "bg-amber-50 text-amber-600"}`}>{b.stage}</span>
            <span className="text-[10px] font-medium text-gray">{b.theme}</span>
            <span className="text-[11px] text-primary-1 truncate">{b.text}</span>
          </div>
        ))}
        <p className="text-[10px] text-gray italic text-center">+ 3 more persona-specific beliefs</p>
      </div>
    </CardShell>
  );
}

function CompetitorCard() {
  const competitors = [
    { name: "Lululemon", handle: "@lululemon", tof: 80, mof: 15, bof: 5, channels: { Meta: "Heavy", TikTok: "Light" } },
    { name: "Alo Yoga", handle: "@aloyoga", tof: 85, mof: 12, bof: 3, channels: { Meta: "Heavy", TikTok: "Heavy" } },
    { name: "Gymshark", handle: "@gymshark", tof: 70, mof: 20, bof: 10, channels: { Meta: "Heavy", TikTok: "Heavy" } },
  ];

  return (
    <CardShell num="03">
      <div className="rounded-lg bg-zumthor p-3.5 mb-4">
        <p className="text-[9px] font-bold uppercase tracking-widest text-azure-radiance mb-1.5">Strategic finding</p>
        <p className="text-[12px] font-semibold text-primary-1 leading-snug">
          The expensive brands never talk about the product. The cheap brand explains the fabric and runs sales every other week. Those two facts are related.
        </p>
      </div>

      <div className="space-y-3 mb-4">
        {competitors.map((c) => (
          <div key={c.name} className="rounded-lg border border-mercury p-3">
            <div className="flex items-center justify-between mb-2.5">
              <div>
                <p className="text-[12px] font-semibold text-primary-1">{c.name}</p>
                <p className="text-[10px] text-gray">{c.handle}</p>
              </div>
              <div className="flex gap-1">
                {Object.entries(c.channels).map(([ch, state]) => (
                  <span key={ch} className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${state === "Heavy" ? "bg-primary-1/8 text-primary-1" : "bg-hero-bg text-gray"}`}>
                    {ch}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-0.5 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-400 rounded-l-full" style={{ width: `${c.tof}%` }} />
              <div className="bg-amber-400" style={{ width: `${c.mof}%` }} />
              <div className="bg-green-500 rounded-r-full" style={{ width: `${c.bof}%` }} />
            </div>
            <div className="flex gap-3 mt-1.5">
              <span className="text-[9px] text-sky-600 font-semibold">TOF {c.tof}%</span>
              <span className="text-[9px] text-amber-600 font-semibold">MOF {c.mof}%</span>
              <span className="text-[9px] text-green-600 font-semibold">BOF {c.bof}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-hero-bg p-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-tundora mb-1.5">Key gap identified</p>
        <p className="text-[11px] text-primary-1 leading-snug">
          Durability territory is structurally unavailable to a brand running 40%-off events every other month. That gap is defensible.
        </p>
      </div>
    </CardShell>
  );
}

const SECTION_CARDS: Record<string, () => React.JSX.Element> = {
  "01": PersonaCard,
  "02": BeliefCard,
  "03": CompetitorCard,
};

function PlaceholderCard({ section }: { section: (typeof sections)[number] }) {
  const Card = SECTION_CARDS[section.num];
  return Card ? <Card /> : null;
}

export function CaseStudy() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            This is what lands on day five
          </p>
          <h2 className="heading-2">
            Everyone says their research is deep.
            <br />
            <span className="font-secondary italic">
              Here&apos;s ours, on a page.
            </span>
          </h2>
          <p className="mt-4 heading-description">
            Six sections make a full build. Three land on day five, and
            they&apos;re the three you decide on. Below is an extract from each,
            taken from a real build for an activewear brand selling an $88
            legging into a category with $35 players underneath and $120 players
            above. The full versions run to several pages each. This is enough
            to judge the level.
          </p>
        </div>

        {/* Scroll-driven layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — scrolling text */}
          <div className="flex flex-col gap-0">
            {sections.map((s, i) => (
              <div
                key={s.num}
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                className={`py-48 ${i < sections.length - 1 ? "border-b border-mercury" : ""}`}
              >
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-primary-1">
                  Section {s.num}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-1 leading-snug mt-2 mb-4">
                  {s.label}
                </h3>
                <p className="text-[20px] font-normal leading-relaxed text-primary-1/80">
                  {s.body}
                </p>
                {s.body2 && (
                  <p className="text-[20px] font-normal leading-relaxed text-primary-1/80 mt-4">
                    {s.body2}
                  </p>
                )}
                <p className="text-[16px] font-normal text-tundora italic mt-5">
                  {s.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Right — sticky card that swaps */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative">
                {sections.map((s, i) => (
                  <div
                    key={s.num}
                    className="transition-all duration-500"
                    style={{
                      opacity: activeIdx === i ? 1 : 0,
                      position: i === 0 ? "relative" : "absolute",
                      top: i === 0 ? undefined : 0,
                      left: i === 0 ? undefined : 0,
                      right: i === 0 ? undefined : 0,
                      pointerEvents: activeIdx === i ? "auto" : "none",
                    }}
                  >
                    <PlaceholderCard section={s} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: cards inline after each text block (shown only on small screens) */}
        </div>

        {/* The other three — styled block */}
        <div className="mt-24 rounded-2xl bg-zumthor border border-azure-radiance/15 px-8 md:px-16 py-14 md:py-20">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-primary-1 mb-3">
              Days 6–10
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary-1">
              The other three
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { num: "04", label: "Value architecture", desc: "What each part of the product is actually worth to the buyer, and how to price the argument." },
              { num: "05", label: "Hook library", desc: "Two hooks per script, each testing a different door into the same message." },
              { num: "06", label: "Full angle set", desc: "Five briefable angles with the belief, the claim, and the funnel stage attached." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white p-6 md:p-7 border border-mercury shadow-[0_2px_8px_rgba(28,40,84,0.04)]">
                <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-primary-1 mb-3">
                  Section {item.num}
                </span>
                <h4 className="text-lg font-semibold text-primary-1 mb-3">{item.label}</h4>
                <p className="text-[15px] font-normal text-tundora leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[18px] font-normal text-primary-1 text-center">
            They&apos;re built on top of the first three, which is why you see
            those first and decide before we write them.
          </p>

          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking"))
              }
              className="inline-flex items-center justify-center gap-2 text-base md:text-lg rounded-lg border border-primary-1 text-white bg-primary-1 hover:text-primary-1 hover:bg-transparent px-7 py-3.5 transition-colors shadow-[0_8px_24px_rgba(28,40,84,0.25)]"
            >
              Book a Fit Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Closing line */}
        <p className="mt-8 text-xl md:text-2xl font-medium text-primary-1 text-center">
          If the first three don&apos;t convince you, you keep them and we
          return your money. That&apos;s the entire risk.
        </p>
      </div>
    </section>
  );
}
