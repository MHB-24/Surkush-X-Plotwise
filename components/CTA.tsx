"use client";

export function CTA() {
  return (
    <section id="book" className="py-20 md:py-28 bg-zumthor">
      <div className="container-page">
        {/* Headline + subhead */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h2 className="heading-2 leading-[1.1]">
            Ten days from now, you&apos;ll
            <br />
            <span className="font-secondary italic">know what to shoot next.</span>
          </h2>
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
