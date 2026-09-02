"use client";

export function PricingBanner() {
  return (
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        <div className="max-w-[440px] mx-auto">
          <div className="rounded-2xl border border-mercury bg-white p-7 shadow-sm">
            {/* Eyebrow */}
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-5">
              One flat fee. Everything included.
            </p>

            {/* Price */}
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
              A creative strategist costs $6–8K/month. An agency retainer starts
              at $5K and locks you in for three. This is the research layer, done
              once, done properly, and it&apos;s yours whether you ever work with
              us again.
            </p>

            <div className="border-t border-mercury mb-6" />

            {/* Checklist */}
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Delivered in ten working days",
                "Full refund on day five — no reasons needed",
                "90-day workspace access included",
                "Every finding sourced and verifiable",
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
                  <p className="text-sm font-light text-tundora leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking"))
              }
              className="flex items-center justify-center gap-2 w-full bg-primary-1 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-primary-1/90 transition-colors"
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
            <p className="text-center text-xs text-gray font-light mt-2">
              You see half the build before you&apos;re committed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
