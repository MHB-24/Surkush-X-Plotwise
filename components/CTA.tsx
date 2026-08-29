export function CTA() {
  return (
    <section id="book" className="py-20 md:py-28 bg-primary-1 text-white">
      <div className="w-[90%] max-w-4xl mx-auto text-center">
        <h2 className="heading-2-light !text-white leading-tight">
          Ten days from now, you&apos;ll{" "}
          <span className="font-secondary italic">know</span> what to shoot
          next.
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-medium font-light text-white/50">
          <span>Full research build</span>
          <span className="w-px h-4 bg-white/15" />
          <span>5 scripts, 10 hooks</span>
          <span className="w-px h-4 bg-white/15" />
          <span>Workspace for 90 days</span>
        </div>

        <div className="mt-10">
          <a
            href="mailto:partnerships@surkush.com"
            className="inline-flex items-center gap-2 bg-white text-primary-1 text-xl font-medium px-8 py-4 rounded-lg hover:bg-zumthor transition-colors"
          >
            Book a Fit Call
          </a>
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
