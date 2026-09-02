"use client";

const fitSignals = [
  "You're spending on paid social and creative is the thing holding you back, not budget or product.",
  "You've had a winner you couldn't repeat, and it still bothers you.",
  "You have creators, or can get them, and what's missing is what to tell them.",
  "You're about to spend more this quarter than last, and you'd rather not spend it the same way.",
  "You've paid an agency for strategy before and got a deck you never used.",
  "Your old targeting playbook stopped working and you're not sure what replaced it.",
  "You're launching your first store and would rather work out the angles now than find them at $10K in.",
];

const dontBook = [
  {
    title: "You're getting traffic but no sales at all.",
    body: "If you're running ads and getting almost nothing, the problem is usually not your creative. It's the site, the offer, the trust signals or the product. Targeted traffic converts at 1 to 2%, untargeted at a quarter of that, and no amount of better angles fixes a page people don't trust. Fix that first.",
  },
  {
    title: "You need videos, not answers.",
    body: "If your creative is working and you just need more of it, buy production. This won't help you and we'll say so on the call.",
  },
  {
    title: "You don't have a product yet.",
    body: "If you're still choosing between ideas, there's nothing for the research to attach to. Come back when you've picked one.",
  },
  {
    title: "You want a guarantee on performance.",
    body: "Nobody can honestly promise you a ROAS number from research. We can tell you what to say. We can't control the algorithm, the offer, or what your competitors do next week.",
  },
];

export function Qualify() {
  const openBooking = () =>
    window.dispatchEvent(new CustomEvent("open-booking"));

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="heading-2">
            Before You <span className="font-secondary italic">Book</span>
          </h2>
          <p className="mt-4 heading-description">
            We&apos;ve talked more brands out of this than into it. Because
            research only works when the problem is actually creative. Half
            the time it isn&apos;t, and we&apos;ll tell you that on the call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Good fit */}
          <div className="rounded-2xl border border-mercury bg-white p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-mercury">
              <span
                className="w-9 h-9 rounded-xl grid place-items-center shrink-0"
                style={{ background: "rgba(0,142,255,0.08)" }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#008EFF"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-1">
                This is built for you if
              </p>
              <button
                onClick={openBooking}
                className="ml-auto shrink-0 inline-flex items-center gap-2 text-base font-semibold text-white bg-primary-1 hover:text-primary-1 hover:bg-transparent border border-primary-1 rounded-lg px-6 py-3 transition-colors shadow-[0_8px_24px_rgba(28,40,84,0.25)]"
              >
                Book a Fit Call
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <ul className="divide-y divide-mercury">
              {fitSignals.map((s, i) => (
                <li key={i} className="flex gap-3 items-start py-4">
                  <svg
                    className="shrink-0 mt-[7px]"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#008EFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-medium font-light text-tundora leading-relaxed">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div className="rounded-2xl border border-mercury bg-white p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-mercury">
              <span className="w-9 h-9 rounded-xl grid place-items-center shrink-0 bg-mercury">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#868686"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-1">
                Don&apos;t book if
              </p>
            </div>

            <ul className="divide-y divide-mercury">
              {dontBook.map((item, i) => (
                <li key={i} className="flex gap-3 items-start py-4">
                  <svg
                    className="shrink-0 mt-[7px]"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#868686"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <div>
                    <h3 className="text-medium font-medium text-primary-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-medium font-light text-tundora leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
