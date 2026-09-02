"use client";

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

export function Process() {
  return (
    <>
    {/* Creative = Targeting Section */}
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
          <div className="grid md:grid-cols-[1fr_420px] gap-12 md:gap-20 items-center">
            {/* Left: text */}
            <div>
              <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
                Why angles beat audiences
              </p>
              <h2 className="heading-2 mb-5">
                Your creative is your{" "}
                <span className="font-secondary italic">targeting</span> now.
              </h2>
              <p className="text-[17px] font-light text-black leading-relaxed">
                Meta stopped letting you choose your audience in any meaningful
                way. Broad targeting won, interest stacking died, and the
                algorithm now reads your ad to decide who sees it. Open with the
                wrong belief and you get shown to the wrong people, no matter
                how you set up the campaign. Which means the angle isn&apos;t
                the thing that comes before the targeting.{" "}
                <span className="text-primary-1 font-normal">
                  It is the targeting.
                </span>{" "}
                That&apos;s what the seven steps below are actually building.
              </p>
            </div>

            {/* Right: signal-flow widget */}
            <div className="flex flex-col gap-3">
              {/* Step 1: Ad */}
              <div className="rounded-xl bg-white border border-mercury px-5 py-4 flex items-center gap-4 shadow-[0_1px_4px_rgba(28,40,84,0.06)]">
                <div className="w-10 h-10 rounded-lg bg-azure-radiance/10 border border-azure-radiance/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="14" rx="2"/>
                    <path d="M3 9h18M9 21h6M12 17v4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-primary-1">Your ad creative</p>
                  <p className="text-[13px] font-light text-tundora mt-0.5">The angle you open with</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 px-5">
                <div className="flex-1 h-[1px] bg-mercury" />
                <div className="flex flex-col items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#424242" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                  <p className="text-[12px] font-light text-tundora whitespace-nowrap">Meta reads angle</p>
                </div>
                <div className="flex-1 h-[1px] bg-mercury" />
              </div>

              {/* Step 2: Algorithm */}
              <div className="rounded-xl bg-white border border-mercury px-5 py-4 flex items-center gap-4 shadow-[0_1px_4px_rgba(28,40,84,0.06)]">
                <div className="w-10 h-10 rounded-lg bg-primary-1/8 border border-primary-1/15 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c2854" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-primary-1">Algorithm matches</p>
                  <p className="text-[13px] font-light text-tundora mt-0.5">Belief → audience signal</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 px-5">
                <div className="flex-1 h-[1px] bg-mercury" />
                <div className="flex flex-col items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#424242" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                  <p className="text-[12px] font-light text-tundora whitespace-nowrap">Right people see it</p>
                </div>
                <div className="flex-1 h-[1px] bg-mercury" />
              </div>

              {/* Step 3: Audience */}
              <div className="rounded-xl bg-azure-radiance/10 border border-azure-radiance/25 px-5 py-4 flex items-center gap-4 shadow-[0_1px_4px_rgba(0,142,255,0.08)]">
                <div className="w-10 h-10 rounded-lg bg-azure-radiance/20 border border-azure-radiance/40 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-azure-radiance">Matched audience</p>
                  <p className="text-[13px] font-light text-tundora mt-0.5">Your buyers, not everyone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        {/* Heading */}
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

        <div>
          <div>

            {/* Single-column timeline */}
            <div className="relative">
              {/* Spine */}
              <div
                aria-hidden
                className="absolute top-5 bottom-0 left-5 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(28,40,84,0.30) 0%, rgba(0,142,255,0.45) 62%, rgba(0,142,255,0) 100%)",
                }}
              />

              <div className="flex flex-col gap-6">
                {steps.map((step) => {
                  const isLast = step.num === "07";
                  return (
                  <div key={step.num} className="relative flex gap-8">
                    {/* Node */}
                    <div
                      aria-hidden
                      className="shrink-0 z-10 w-10 h-10 rounded-full bg-primary-1 text-white grid place-items-center"
                      style={{ boxShadow: "0 0 0 5px #ffffff" }}
                    >
                      {isLast ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className="font-secondary italic text-sm">{step.num}</span>
                      )}
                    </div>

                    <div className="rounded-xl border border-mercury bg-white p-6 md:p-7 shadow-[0_1px_2px_rgba(28,40,84,0.04)] hover:shadow-[0_16px_40px_-20px_rgba(28,40,84,0.28)] transition-shadow duration-300 flex-1 mb-0">
                      <span className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${isLast ? "text-primary-1" : "text-azure-radiance"}`}>
                        {isLast ? "Outcome" : `Step ${step.num}`}
                      </span>
                      <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1 leading-snug mt-2">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-medium text-tundora font-light leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[18px] text-tundora font-light mt-10 pl-[4.5rem]">
              Ten days from now, you stop briefing creators on vibes.
            </p>
          </div>

        </div>

        {/* $1,500 band */}
        <div className="mt-16 rounded-2xl border border-mercury bg-white p-8 md:p-10 shadow-[0_16px_40px_-24px_rgba(28,40,84,0.28)]">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            <div className="md:border-r md:border-mercury md:pr-12">
              <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-4">
                One flat fee. Everything included.
              </p>
              <div className="flex items-baseline gap-3">
                <span
                  className="font-secondary italic text-primary-1"
                  style={{ fontSize: "clamp(2.75rem, 6vw, 4rem)", lineHeight: 1 }}
                >
                  $1,500
                </span>
                <p className="text-sm font-light text-gray">One payment</p>
              </div>

              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-booking"))
                }
                className="mt-6 flex items-center justify-center gap-2 w-full bg-primary-1 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-primary-1/90 transition-colors"
              >
                Book a Fit Call
                <svg
                  width="16"
                  height="16"
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
            </div>

            <div>
              <p className="text-medium font-light text-tundora leading-relaxed mb-6">
                A creative strategist costs $6&ndash;8K/month. An agency
                retainer starts at $5K and locks you in for three. This is the
                research layer, done once, done properly, and it&apos;s yours
                whether you ever work with us again.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Delivered in ten working days",
                  "Full refund on day five — no reasons needed",
                  "Every finding sourced and verifiable",
                  "90-day workspace access included",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-1/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1C2854"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-[18px] font-light text-tundora leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[15px] font-normal text-tundora mt-4">
                You see half the build before you&apos;re committed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
