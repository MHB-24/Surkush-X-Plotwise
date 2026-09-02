const steps = [
  {
    num: "01",
    title: "We find out what your buyer already believes.",
    body: "If you have reviews, DMs and support tickets, we start there — because your buyer has already told you what they think in their own words. If you're launching, or you're early, we go where they talk instead: competitor reviews, forums, comment sections, the one-star reviews of the product they tried before yours. Either way, we come back with their language, not yours.",
  },
  {
    num: "02",
    title: "We find the reason they don't buy.",
    body: `Every category has one belief that blocks the sale. "They all do the same thing." "It won't work on me." "It's not worth the money." We find yours, and the fear sitting under it. That's the wall your ads keep bouncing off.`,
  },
  {
    num: "03",
    title: "We map the competitors who matter.",
    body: "Not fifty. The handful you're actually losing customers to, plus whoever's spending hardest in your category. We pull their live and retired ads and write down what each one is claiming, so you can see the whole conversation on one page and spot the claims nobody has taken.",
  },
  {
    num: "04",
    title: "We pick the argument only you can win.",
    body: "There's always one. The thing your product can say that your competitors can't, that also breaks the wall from step two. This is the whole job. Everything before it was finding it. Everything after is saying it well. Five angles beats fifty variations — we cap it at five and make each one count.",
  },
  {
    num: "05",
    title: "We write two hooks for every ad.",
    body: "Same message, two completely different openings. Because when you test one hook you learn nothing. When you test two, you find out which door your buyer walks through.",
  },
  {
    num: "06",
    title: "You get five scripts, tagged and ready to shoot.",
    body: "Each one carries the angle it came from, the belief it's attacking and the funnel stage it's built for, so you and your media buyer can decide what to run and when. Hand them to any creator.",
  },
  {
    num: "07",
    title: "It all lives in your workspace, not a folder.",
    body: "The research, the angles and the scripts land inside the platform, where your team works from them. Generate a link, send it to any creator you use, and their uploads come back against the right angle. Three months included.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        <div className="flex flex-col gap-2 items-center mb-10">
          <h2 className="heading text-center leading-tight">
            What We <span className="font-secondary italic">Actually</span> Do
          </h2>
          <p className="heading-description text-center">
            We find the one thing your buyer needs to hear. Then we hand you the
            system that says it.
          </p>
          <p className="text-sm text-gray mt-2">
            Seven steps. Ten days. Here&apos;s exactly what happens.
          </p>
        </div>

        <div className="mb-16 p-6 md:p-8 rounded-xl border border-mercury bg-white">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Your creative is your targeting now
          </p>
          <p className="text-medium font-light text-tundora leading-relaxed">
            Meta stopped letting you choose your audience in any meaningful way.
            Broad targeting won, interest stacking died, and the algorithm now
            reads your ad to decide who sees it. Open with the wrong belief and
            you get shown to the wrong people, no matter how you set up the
            campaign. Which means the angle isn&apos;t the thing that comes
            before the targeting. It is the targeting. That&apos;s what the
            seven steps below are actually building.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Continuous spine */}
          <div
            aria-hidden
            className="absolute top-11 bottom-0 w-[2px] left-5 md:left-1/2 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, rgba(28,40,84,0.30) 0%, rgba(0,142,255,0.45) 62%, rgba(0,142,255,0) 100%)",
            }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const onRight = i % 2 === 1;
              return (
                <div
                  key={step.num}
                  className="relative md:grid md:grid-cols-2 md:gap-x-20"
                >
                  {/* Node on the spine */}
                  <div
                    aria-hidden
                    className="absolute z-10 top-6 left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-1 text-white grid place-items-center font-secondary italic text-sm"
                    style={{ boxShadow: "0 0 0 5px #f1f1f1" }}
                  >
                    {step.num}
                  </div>

                  {/* Stub joining node to card */}
                  <div
                    aria-hidden
                    className={`hidden md:block absolute top-[43px] h-[2px] w-10 ${
                      onRight ? "left-1/2" : "right-1/2"
                    }`}
                    style={{ background: "rgba(28,40,84,0.18)" }}
                  />

                  <div
                    className={`pl-14 md:pl-0 ${
                      onRight ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  >
                    <div className="rounded-xl border border-mercury bg-white p-6 md:p-7 shadow-[0_1px_2px_rgba(28,40,84,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_-20px_rgba(28,40,84,0.28)]">
                      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-azure-radiance">
                        Step {step.num}
                      </span>
                      <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1 leading-snug mt-2">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-medium text-tundora font-light leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-sm text-gray font-light mt-16">
          Ten days from now, you stop briefing creators on vibes.
        </p>
      </div>
    </section>
  );
}
