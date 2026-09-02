"use client";

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
              {deliverables.map((d) => (
                <div
                  key={d.num}
                  className="border border-mercury rounded-md p-6 sm:p-8 flex gap-6"
                >
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
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-mercury bg-white p-7 shadow-sm lg:sticky lg:top-24">
              <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-5">
                One flat fee. Everything included.
              </p>

              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="font-secondary italic text-primary-1"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}
                >
                  $1,500
                </span>
              </div>
              <p className="text-sm font-light text-gray mb-6">One payment</p>

              <p className="text-sm font-light text-tundora leading-relaxed mb-6">
                A creative strategist costs $6&ndash;8K/month. An agency retainer
                starts at $5K and locks you in for three. This is the research
                layer, done once, done properly, and it&apos;s yours whether you
                ever work with us again.
              </p>

              <div className="border-t border-mercury mb-6" />

              <div className="flex flex-col gap-3 mb-6">
                {[
                  "Delivered in ten working days",
                  "Full refund on day five — no reasons needed",
                  "Every finding sourced and verifiable",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-1/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1C2854" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-sm font-light text-tundora leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                className="flex items-center justify-center gap-2 w-full bg-primary-1 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-primary-1/90 transition-colors"
              >
                Book a Fit Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-center text-xs text-gray font-light mt-2">
                You see half the build before you&apos;re committed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
