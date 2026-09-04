"use client";

export function Hero() {
  return (
    <section className="relative my-5 sm:my-10">
      <div className="absolute inset-0 bg-[#F1F1F1] sm:rounded-t-xl sm:w-[95%] sm:-mt-27 mx-auto -z-10" />

      <div className="container-page pt-6 pb-12 md:pt-10 md:pb-20">
        <div className="flex flex-col gap-5 items-center text-center">
          {/* Text content */}
          <div className="flex flex-col gap-5 items-center w-full">
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora">
              For DTC and ecommerce founders spending real money on creative
            </p>

            <h1
              className="text-primary-1 tracking-tight text-center leading-[1.1]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 72px)" }}
            >
              Your ad budget is a bet.
              <br />
              <span className="font-secondary italic">
                Somebody should be able
                <br />
                to tell you the odds.
              </span>
            </h1>

            <p className="heading-description text-center max-w-3xl">
              In ten days we tell you what your buyer actually believes, which
              argument your competitors have left open, and the five things most
              worth shooting next. Then we hand you the workspace your team runs
              it all from.
            </p>

            <p className="text-base md:text-lg text-black font-medium text-center max-w-2xl">
              We can&apos;t promise you a winner. Nobody honestly can. What we
              can do is stop you betting blind.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Buyer research, not account inference",
                "Competitor whitespace mapped",
                "Five briefable arguments",
                "Yours to keep",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-mercury bg-white text-sm md:text-base font-medium text-tundora"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="mt-8 md:mt-12">
            <video
              className="w-full rounded-2xl shadow-[0_24px_64px_rgba(28,40,84,0.18)]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/assets/videos/hero-section-home-page.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Guarantee block + CTA */}
          <div className="flex flex-col gap-5 items-center text-center mt-8 max-w-2xl">
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold text-primary-1 mb-2">
                Don&apos;t like it? Full refund on day five.
              </p>
              <p className="text-medium font-light text-tundora leading-relaxed">
                You see half the build before you&apos;re committed. If it
                isn&apos;t what you wanted, say so on that call and we return
                every dollar. No reasons needed.
              </p>
            </div>

            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking"))
              }
              className="inline-flex items-center justify-center gap-2 text-base md:text-lg xl:text-xl rounded-lg border border-primary-1 text-white bg-primary-1 hover:text-primary-1 hover:bg-transparent px-7 py-3.5 transition-colors shadow-[0_8px_24px_rgba(28,40,84,0.25)]"
            >
              Book a Fit Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <p className="text-[17px] font-medium text-primary-1 text-center tracking-wide mt-1">
              $2,500 &middot; One payment &middot; Delivered in ten working days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
