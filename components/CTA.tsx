"use client";

export function CTA() {
  return (
    <section id="book" className="py-20 md:py-28 bg-zumthor">
      <div className="container-page">
        {/* Headline + subhead */}
        <div className="text-center mb-14">
          <h2 className="heading-2 leading-[1.1]">
            Ten days from now, you&apos;ll{" "}
            <span className="font-secondary italic">know what to shoot next.</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl font-normal text-primary-1 leading-relaxed max-w-4xl mx-auto">
            The full research build on your brand. Five arguments your buyer
            hasn&apos;t heard yet, scripted, tagged and ready for any creator.
            Your workspace for 90 days. One payment of $2,500, and you see half
            of it on day five before you&apos;re committed.
          </p>

          {/* Odds callback */}
          <p className="mt-6 text-lg md:text-xl font-medium text-tundora">
            We still can&apos;t promise you a winner.{" "}
            <span className="text-primary-1">
              We can promise you&apos;ll stop guessing at the odds.
            </span>
          </p>
        </div>

        {/* Guarantee + Timing panels */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          <div className="p-6 md:p-8 rounded-xl border border-mercury bg-white">
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
              The guarantee
            </p>
            <p className="text-[18px] font-normal text-primary-1 leading-relaxed">
              Still not sure? You see half the build on day five and can walk
              away with a full refund. No reasons needed.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-xl border border-mercury bg-white">
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
              Timing
            </p>
            <p className="text-[18px] font-normal text-primary-1 leading-relaxed">
              Builds starting this week deliver before Q4 spend ramps. Builds
              starting in October arrive after you&apos;ve already made the
              decisions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-booking"))
            }
            className="inline-flex items-center gap-2 bg-primary-1 text-white text-lg md:text-xl font-medium px-8 py-4 rounded-lg hover:bg-primary-1/90 transition-colors shadow-[0_12px_32px_rgba(28,40,84,0.25)]"
          >
            Book a Fit Call
            <svg
              width="20"
              height="20"
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

          <p className="mt-5 text-[17px] font-normal text-tundora">
            20 minutes &middot; No pitch at the end &middot; If we&apos;re not
            right for you, we&apos;ll say so on the call
          </p>
        </div>
      </div>
    </section>
  );
}
