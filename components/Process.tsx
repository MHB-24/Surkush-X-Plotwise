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
    title: "We find the arguments with the best odds.",
    body: "Nobody can tell you which ad will win. Anyone who says otherwise is selling you something.\n\nWhat you can do is shorten the odds. Take the beliefs actually blocking the sale, cross them against the claims nobody in your category has taken, and keep the ones your product can genuinely back. Most ideas die here. The five that survive are the ones with a real reason to work, and you'll be able to read that reason.\n\nThis is the whole job. Everything before it was gathering evidence. Everything after is saying it well.",
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
    {/* Section 4 — Where a new angle comes from */}
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            The part nobody explains
          </p>
          <h2 className="heading-2">
            Nobody has ever told you
            <br />
            <span className="font-secondary italic">where a new angle comes from.</span>
          </h2>
          <p className="mt-4 heading-description">
            There&apos;s an enormous amount of advice available about how to
            make ads. Almost none about how to decide what they should argue.
            So most people do the only thing available: look at what&apos;s
            already working, theirs or a competitor&apos;s, and make something
            adjacent to it.
          </p>
        </div>

        {/* 3 blocks — 01 & 02 in a row, 03 full width below */}
        <div>
          {/* Top row: 01 + 02 */}
          <div className="grid md:grid-cols-2 gap-0 border-b border-mercury">
            {[
              {
                num: "01",
                title: "It isn’t in your account.",
                body: "Your performance data is a record of the decisions you’ve already made. Mining it tells you which of your existing arguments did best. It cannot tell you about an argument you’ve never run, because that one has produced no data at all.",
              },
              {
                num: "02",
                title: "It isn’t in your competitors’ ads either.",
                body: "Ad libraries only contain what exists. You finish a session with a clear map of what’s being said and no map of what nobody has taken. And the claims nobody has taken are exactly where a new angle lives.",
              },
            ].map((block, i) => (
              <div
                key={block.num}
                className={`py-10 px-6 ${i === 0 ? "md:border-r border-mercury" : ""}`}
              >
                <span
                  className="font-secondary italic text-primary-1/15 leading-none block mb-4"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                >
                  {block.num}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-1 leading-snug mb-3">
                  {block.title}
                </h3>
                <p className="text-[20px] font-light leading-relaxed text-tundora">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row: 03 full width */}
          <div className="py-10 px-6">
            <span
              className="font-secondary italic text-primary-1/15 leading-none block mb-4"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              03
            </span>
            <h3 className="text-xl md:text-2xl font-semibold text-primary-1 leading-snug mb-3">
              It&apos;s in the reviews of the product they bought before yours.
            </h3>
            <p className="text-[20px] font-light leading-relaxed text-tundora">
              Not your reviews. The one-star reviews of whatever your buyer tried before they found you. That&apos;s where someone explains, in detail and at length, exactly what they wanted and didn&apos;t get. Your own reviews are written by people you already converted. The ones worth reading are written by people your competitor lost, because that&apos;s the argument nobody has made to them yet.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <p className="mt-14 text-xl md:text-2xl font-medium text-primary-1 text-center">
          Every argument you&apos;ve never made is a group of buyers you&apos;ve never reached.
        </p>
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
            We find the things your buyer needs to hear. Then we hand you the
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

                    <div className={`rounded-xl border p-6 md:p-7 shadow-[0_1px_2px_rgba(28,40,84,0.04)] hover:shadow-[0_16px_40px_-20px_rgba(28,40,84,0.28)] transition-shadow duration-300 flex-1 mb-0 ${isLast ? "border-azure-radiance/20 bg-zumthor" : "border-mercury bg-white"}`}>
                      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-primary-1">
                        {isLast ? "Outcome" : `Step ${step.num}`}
                      </span>
                      <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1 leading-snug mt-2">
                        {step.title}
                      </h3>
                      <div className="mt-3 flex flex-col gap-3">
                        {step.body.split("\n\n").map((para, pi) => (
                          <p key={pi} className={`text-medium font-light leading-relaxed ${isLast ? "text-primary-1" : "text-tundora"}`}>
                            {para}
                          </p>
                        ))}
                      </div>
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
