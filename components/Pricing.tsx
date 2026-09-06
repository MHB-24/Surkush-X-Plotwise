"use client";

export function Pricing() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        {/* Main pricing card */}
        <div className="rounded-2xl border border-mercury bg-white p-8 md:p-14 shadow-[0_16px_40px_-24px_rgba(28,40,84,0.28)]">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            {/* Left — price block */}
            <div className="md:border-r md:border-mercury md:pr-12">
              <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-4">
                One flat fee. Everything included.
              </p>
              <div className="flex items-baseline gap-3">
                <span
                  className="font-secondary italic text-primary-1"
                  style={{ fontSize: "clamp(2.75rem, 6vw, 4rem)", lineHeight: 1 }}
                >
                  $2,500
                </span>
                <p className="text-[16px] font-normal text-tundora">One payment</p>
              </div>

              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-booking"))
                }
                className="mt-6 flex items-center justify-center gap-2 w-full bg-primary-1 text-white text-base font-medium px-6 py-3.5 rounded-lg hover:bg-primary-1/90 transition-colors"
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

            {/* Right — body copy + tick marks */}
            <div>
              <p className="text-[20px] font-normal text-primary-1 leading-relaxed mb-6">
                You are not signing up for another retainer, another monthly
                invoice, or another person to manage. This is one defined piece
                of work. We research the buyer, the category, and the gaps
                between them. Then we turn that into five scripts, ten hooks,
                and a workspace your team can use for 90 days.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Delivered in ten working days",
                  "Full refund on day five — no reasons needed",
                  "Every finding traceable to a review, a comment or a competitor ad",
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
                    <p className="text-[20px] font-normal text-primary-1 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* For context comparison */}
          <div className="mt-8 px-1">
            <p className="text-[18px] font-light text-tundora leading-relaxed">
              For context, a freelance creative strategist can cost $6,000 to
              $12,000 a month — and you still have to manage them. An agency
              retainer can start around $5,000 and ask you to commit for three
              months. Those can be sensible decisions. They are just much larger
              decisions to make before you know whether the thinking is any good.
            </p>
          </div>

          {/* Capacity line */}
          <div className="mt-8 rounded-xl bg-hero-bg px-6 py-4">
            <p className="text-[18px] font-normal text-primary-1 text-center">
              Exclusive to <span className="font-semibold">5 brands</span> per month.
            </p>
          </div>

          {/* Guarantee */}
          <div className="mt-4 rounded-xl bg-zumthor px-6 py-5 border border-azure-radiance/15">
            <h4 className="text-lg font-semibold text-primary-1 mb-2">
              Day-five guarantee
            </h4>
            <p className="text-[18px] font-normal text-primary-1 leading-relaxed">
              You see half the build before you&apos;re committed. On day five,
              three of the six sections land: your buyer, the belief blocking
              the sale, and the competitor map. If you don&apos;t want to
              continue, say so on that call and we return every dollar. No
              reasons needed.
            </p>
          </div>
        </div>

        {/* CTA subtext */}
        <p className="text-[18px] font-normal text-tundora text-center mt-8 max-w-lg mx-auto leading-relaxed">
          20 minutes &middot; We&apos;ll have looked at your ads before we
          speak &middot; If it isn&apos;t a fit we&apos;ll say so in the
          first five minutes
        </p>
      </div>
    </section>
  );
}
