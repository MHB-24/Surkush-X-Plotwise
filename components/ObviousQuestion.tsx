export function ObviousQuestion() {
  return (
    <section className="py-20 md:py-28 bg-zumthor">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-4xl mx-auto">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            The obvious question
          </p>
          <h2 className="heading-2">
            You could generate this yourself.
            <br />
            <span className="font-secondary italic">
              So could your competitors.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-start max-w-6xl mx-auto">
          {/* Left — Body copy */}
          <div className="flex flex-col gap-0">
            <p className="text-[20px] font-light leading-relaxed text-primary-1">
              A model can give you six buyer beliefs and ten angles before your
              coffee gets cold. And, to be fair, some of them will be good. But
              your competitor can ask the same question and get almost the same
              list. That is not the expensive part anymore. The expensive part
              is knowing which belief is actually true, which argument your
              product can support, and which idea is worth putting money behind.
            </p>
            <p className="text-[20px] font-light leading-relaxed text-primary-1 mt-5">
              A model has never watched a promising angle quietly eat a month
              of budget. It has no reason to tell you, &ldquo;Don&apos;t shoot
              that. Four brands are already saying it.&rdquo; It can generate
              the options. It cannot take responsibility for the decision. That
              is the gap we work on: turning research into a small number of
              arguments your team can defend, test, and build from.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex flex-col items-center self-stretch">
            <div className="w-px flex-1 bg-mercury" />
          </div>

          {/* Right — compact comparison widget */}
          <div className="rounded-xl border border-mercury bg-white shadow-sm overflow-hidden">
            {/* Prompt half */}
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-hero-bg flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
                    <path d="M18 14a6 6 0 00-12 0v4h12v-4z" />
                    <line x1="9" y1="22" x2="15" y2="22" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-gray">
                  What a prompt gives you
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {[
                  "Target the 'tired of cheap dupes' belief",
                  "Lead with durability over style",
                  "Attack 'all leggings are the same'",
                  "Reframe $88 as cost-per-wear",
                  "Use creator social proof at gym",
                  "Position against fast-fashion waste",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#868686" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[13px] font-light text-gray leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-light text-gray/50 mt-2 italic">
                All plausible. All equal. No way to choose.
              </p>
            </div>

            {/* Divider with arrow */}
            <div className="flex items-center gap-2 px-5">
              <div className="flex-1 h-px bg-mercury" />
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-primary-1 flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                After research
              </span>
              <div className="flex-1 h-px bg-mercury" />
            </div>

            {/* Research half */}
            <div className="px-5 pt-3 pb-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-primary-1/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1c2854" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-primary-1">
                  What research gives you
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {[
                  { text: "Target the 'tired of cheap dupes' belief", status: "cut", reason: "3 competitors running it" },
                  { text: "Lead with durability over style", status: "cut", reason: "Cheap-brand conversation" },
                  { text: "Attack 'all leggings are the same'", status: "keep", reason: "Uncontested — 142 reviews" },
                  { text: "Reframe $88 as cost-per-wear", status: "cut", reason: "Math nobody does" },
                  { text: "Use creator social proof at gym", status: "keep", reason: "Matches real purchase trigger" },
                  { text: "Position against fast-fashion waste", status: "cut", reason: "Audience not eco-motivated" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {item.status === "keep" ? (
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#1c2854" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#e03535" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <div className="flex items-baseline gap-1.5 flex-1 min-w-0">
                      <span className={`text-[13px] leading-snug ${item.status === "keep" ? "font-medium text-primary-1" : "font-light text-gray line-through decoration-gray/30"}`}>
                        {item.text}
                      </span>
                      <span className={`text-[10px] leading-snug whitespace-nowrap ${item.status === "keep" ? "font-medium text-primary-1" : "font-light text-[#e03535]/60"}`}>
                        {item.reason}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-semibold text-primary-1 mt-2">
                2 of 6 survive. Each one has a reason.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-14 md:mt-20">
          <p className="text-xl md:text-2xl font-medium text-primary-1 max-w-2xl mx-auto leading-snug">
            Generating options is free now.{" "}
            <span className="font-secondary italic">
              Knowing which one to bet on is the part that isn&apos;t.
            </span>{" "}
            <span className="text-lg font-light text-tundora italic">
              That is the only part we charge for.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
