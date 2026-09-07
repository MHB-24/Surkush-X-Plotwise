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
              An AI-model can give you six buyer beliefs and ten angles before your
              coffee gets cold. And, to be fair, some of them will be good. But
              your competitor can ask the same question and get almost the same
              list. That is not the expensive part anymore. The expensive part
              is knowing which belief is actually true, which argument your
              product can support, and which idea is worth putting money behind.
            </p>
            <p className="text-[20px] font-light leading-relaxed text-primary-1 mt-5">
              AI-model has never watched a promising angle quietly eat a month
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

          {/* Right — prompt vs research widget */}
          <div className="rounded-xl border border-mercury bg-white shadow-sm overflow-hidden">
            {/* Prompt output */}
            <div className="px-5 pt-5 pb-4 border-b border-mercury">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-hero-bg flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
                      <path d="M18 14a6 6 0 00-12 0v4h12v-4z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-gray">
                    Prompt output
                  </span>
                </div>
                <span className="text-[10px] font-medium text-gray bg-hero-bg rounded-full px-2 py-0.5">
                  Leggings brand
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  "“Our leggings outlast the competition.”",
                  "“Stop wasting money on leggings that fall apart.”",
                  "“Real women, real results — see the difference.”",
                ].map((hook, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[11px] font-semibold text-gray/40 mt-px shrink-0">{i + 1}.</span>
                    <p className="text-[13px] font-light text-gray leading-snug">{hook}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-light text-gray/40 mt-2 italic">
                Sounds right. Could be any brand.
              </p>
            </div>

            {/* Arrow divider */}
            <div className="flex items-center gap-2 px-5 py-1.5 bg-hero-bg/50">
              <div className="flex-1 h-px bg-mercury" />
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-primary-1 flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                After research
              </span>
              <div className="flex-1 h-px bg-mercury" />
            </div>

            {/* Research-rewritten versions */}
            <div className="flex flex-col">
              {[
                {
                  before: "“Our leggings outlast the competition.”",
                  after: "“The leggings you bought last month are already pilling. These won’t.”",
                  reason: "142 one-star reviews mention pilling within 3 washes. Lead with the specific frustration, not a generic claim.",
                },
                {
                  before: "“Stop wasting money on leggings that fall apart.”",
                  after: "“You’ve tried the $20 pair. You know how that ends.”",
                  reason: "Buyers don’t think in “wasting money.” They remember the specific disappointment of the cheap pair.",
                },
                {
                  before: "“Real women, real results.”",
                  after: "“The squat test. That’s all you need to know.”",
                  reason: "“Real women” is used by 4 competitors. The #1 purchase trigger in reviews is gym performance — specifically squats.",
                },
              ].map((item, i) => (
                <div key={i} className={`px-5 py-3.5 ${i < 2 ? "border-b border-mercury/60" : ""}`}>
                  <div className="flex items-start gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold text-primary-1/40 mt-px shrink-0">{i + 1}.</span>
                    <p className="text-[13px] font-semibold text-primary-1 leading-snug">{item.after}</p>
                  </div>
                  <p className="text-[11px] font-light text-primary-1/60 leading-snug pl-5">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-primary-1/[0.04] border-t border-mercury">
              <p className="text-[12px] font-semibold text-primary-1">
                Same three angles. Different level of specificity.
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
            <span>
              That is the only part we charge for.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
