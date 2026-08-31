"use client";

export function CTA() {
  return (
    <section id="book" className="py-20 md:py-28 bg-primary-1 text-white">
      <div className="container-content text-center">
        <h2 className="heading-2-light !text-white leading-tight">
          Ten days from now, you&apos;ll{" "}
          <span className="font-secondary italic">know</span> what to shoot
          next.
        </h2>

        <p className="mt-6 heading-description text-white/60 max-w-2xl mx-auto">
          The full research build on your brand. Five scripts, ten hooks, tagged and ready for any creator. Your workspace for 90 days.
        </p>

        <p className="mt-3 text-medium font-light text-white/50">
          One payment of $1,500, and you see half of it on day five before you&apos;re committed.
        </p>

        <div className="mt-8 p-5 rounded-xl border border-white/10 bg-white/5 max-w-xl mx-auto">
          <p className="text-sm font-light text-white/60 leading-relaxed">
            Still not sure? You see half the build on day five and can walk away with a full refund. No reasons needed.
          </p>
        </div>

        <div className="mt-8 p-4 rounded-lg border border-white/10 bg-white/5 max-w-xl mx-auto">
          <p className="text-xs font-light text-white/45 leading-relaxed">
            Builds starting this week deliver before Q4 spend ramps. Builds starting in October arrive after you&apos;ve already made the decisions.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            className="inline-flex items-center gap-2 bg-white text-primary-1 text-xl font-medium px-8 py-4 rounded-lg hover:bg-zumthor transition-colors"
          >
            Book a Fit Call
          </button>
        </div>

        <div className="mt-6 text-sm font-light text-white/35 space-y-1">
          <p>20 minutes &middot; No pitch at the end</p>
          <p>
            If we&apos;re not right for you, we&apos;ll say so on the call
          </p>
        </div>
      </div>
    </section>
  );
}
