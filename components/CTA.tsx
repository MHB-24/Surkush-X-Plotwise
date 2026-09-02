"use client";

export function CTA() {
  return (
    <section id="book" className="py-20 md:py-28 bg-zumthor">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="heading-2 leading-[1.1]">
            Ten days from now, you&apos;ll{" "}
            <span className="font-secondary italic">know</span> what to shoot
            next.
          </h2>
          <p className="mt-6 text-lg md:text-xl font-light text-tundora leading-relaxed">
            The full research build on your brand. Five scripts, ten hooks,
            tagged and ready for any creator. Your workspace for 90 days.
          </p>
          <p className="mt-3 text-base md:text-lg font-light text-gray">
            One payment of $1,500, and you see half of it on day five before
            you&apos;re committed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <div className="p-6 md:p-7 rounded-xl border border-mercury bg-white">
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
              The guarantee
            </p>
            <p className="text-base md:text-lg font-light text-primary-1 leading-relaxed">
              Still not sure? You see half the build on day five and can walk
              away with a full refund. No reasons needed.
            </p>
          </div>

          <div className="p-6 md:p-7 rounded-xl border border-mercury bg-white">
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
              Timing
            </p>
            <p className="text-base md:text-lg font-light text-primary-1 leading-relaxed">
              Builds starting this week deliver before Q4 spend ramps. Builds
              starting in October arrive after you&apos;ve already made the
              decisions.
            </p>
          </div>
        </div>

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

          <div className="mt-5 text-[16px] font-normal text-tundora space-y-1">
            <p>20 minutes &middot; No pitch at the end</p>
            <p>If we&apos;re not right for you, we&apos;ll say so on the call</p>
          </div>
        </div>
      </div>
    </section>
  );
}
