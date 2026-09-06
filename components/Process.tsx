"use client";

const steps = [
  {
    num: "01",
    title: "We find out what your buyer is actually saying.",
    body: "Your reviews, DMs, support tickets. That is where we start. Not because we need to understand your brand. You already do. We need to understand what your buyer is trying to solve, what they have already tried, and what they are still not getting. If you are early, we go where they talk instead. Competitor reviews. Forums. Comment sections. The one-star reviews of the product they tried before yours. We come back with their language. Not yours.",
  },
  {
    num: "02",
    title: "We find the reason they don’t buy.",
    body: "There is usually something standing between the buyer and the purchase. “They all do the same thing.” “It won’t work on me.” “It’s not worth the money.” Sometimes it is a belief. Sometimes it is a bad experience. Sometimes it is something they have not been given a reason to believe yet. We find it. Then we find what is sitting underneath it. Because that is what your next ad needs to deal with.",
  },
  {
    num: "03",
    title: "We map the conversation your category is already having.",
    body: "Not fifty competitors. The handful you are actually losing customers to, plus whoever is spending hardest in your category. We pull their live and retired ads and write down what each one is claiming. You get to see the whole conversation on one page. More importantly, you get to see what is missing from it.",
  },
  {
    num: "04",
    title: "We find the arguments worth making.",
    body: "This is where the research becomes useful. We take the beliefs actually blocking the sale, cross them against the claims nobody in your category has taken, and keep the ones your product can genuinely back. Most ideas die here. The five that survive are the ones with a real reason to work. And you will be able to read that reason.",
  },
  {
    num: "05",
    title: "We write two hooks for every script.",
    body: "Same argument. Two different ways in. Not because one hook is guaranteed to win. Because you want to know which opening gets your buyer to pay attention to the argument — plus it also increases the odds.",
  },
  {
    num: "06",
    title: "You get five scripts, tagged and ready to shoot.",
    body: "Each one carries the argument it came from, the belief it is attacking, and the funnel stage it is built for. So you and your media buyer can decide what to run and when. Hand them to any creator. They know what they are making and why.",
  },
  {
    num: "07",
    title: "Your team gets a workspace, not a folder.",
    body: "The research, the arguments, and the scripts all live in one place. Your team can work from them for 90 days. Generate a link, send it to any creator you use, and their uploads come back against the right argument. No more Drive folder called final_v2_USE THIS.",
  },
];

export function Process() {
  return (
    <>
    {/* Section 4 — Where a new angle comes from */}
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-5xl mx-auto">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            The part nobody explains
          </p>
          <h2 className="heading-2">
            Your next winning ad might start with{" "}
            <span className="font-secondary italic">someone else&apos;s one-star review.</span>
          </h2>
          <p className="mt-4 heading-description">
            The best place to find a new argument is not always the place you
            have been looking. Your buyer has already tried something before
            you. They had a reason to buy it. They had a reason to be
            disappointed. And they probably explained that disappointment in a
            review. That is useful information. Because the thing they wanted
            and did not get is often the thing your next ad should talk about.
          </p>
        </div>

        {/* Two-column: text blocks + sticky video & widget */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          {/* Left — text blocks */}
          <div className="flex flex-col gap-0">
            {[
              {
                num: "01",
                title: "Start with the disappointment.",
                body: "Your buyer did not wake up wanting to buy your product. They wanted something the product was supposed to do. Maybe it was a better night’s sleep. Maybe it was a cleaner kitchen. Maybe it was a product that finally did what the last one promised. The review tells you what happened between the promise and the experience. That is where the useful part starts.",
              },
              {
                num: "02",
                title: "Your competitors’ one-star reviews are not just complaints.",
                body: "They are a record of what people expected to get, what they actually got, and what they wish had been different. That is a lot more useful than another afternoon looking at someone else’s headline. And it is not limited to what your competitors are doing badly. Sometimes the complaint is about something nobody in the category has bothered to address. That is the interesting part.",
              },
              {
                num: "03",
                title: "The argument is already there. You just have to find it.",
                body: "A buyer says, “I bought this because I wanted X. It did Y. I wish it had done Z.” You now have a reason to make an ad about Z. Not because you think it is a good idea. Because someone has already told you it matters. That is the difference between making another ad and finding a new argument.",
              },
            ].map((block, i) => (
              <div
                key={block.num}
                className={`py-10 ${i < 2 ? "border-b border-mercury" : ""}`}
              >
                <span
                  className="font-secondary italic text-primary-1/15 leading-none block mb-4"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                >
                  {block.num}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-1 leading-snug mb-3">
                  {block.title}
                </h3>
                <p className="text-[18px] font-light leading-relaxed text-primary-1">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right — competitor review audit widget (stretches to match left) */}
          <div className="hidden lg:flex flex-col rounded-2xl border border-mercury bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-mercury bg-white">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-primary-1">
                  Competitor review audit
                </p>
                <span className="text-[10px] font-medium text-gray bg-hero-bg rounded-full px-2.5 py-0.5">
                  Activewear &middot; $88 legging
                </span>
              </div>
              <p className="text-[11px] font-light text-gray mt-1">
                What buyers are saying about the products they tried before yours.
              </p>
            </div>

            {/* Reviews with red complaint highlights */}
            <div className="flex-1 flex flex-col">
              {[
                {
                  stars: 1,
                  text: "Went see-through the first time I did squats. For $95 I expected way more than this.",
                  complaint: "See-through",
                  count: "142 mentions",
                  source: "Competitor A",
                },
                {
                  stars: 2,
                  text: "Waistband rolls down every single workout. I spend half the class pulling them up.",
                  complaint: "Waistband rolls",
                  count: "89 mentions",
                  source: "Competitor B",
                },
                {
                  stars: 1,
                  text: "Pilling after three washes. Three. I have $30 leggings that lasted longer than these.",
                  complaint: "Pilling",
                  count: "67 mentions",
                  source: "Competitor A",
                },
                {
                  stars: 2,
                  text: "Sizing is completely off. Ordered my usual medium and they were skin-tight in the worst way.",
                  complaint: "Sizing issues",
                  count: "54 mentions",
                  source: "Competitor C",
                },
              ].map((review, i) => (
                <div key={i} className={`px-6 py-4 ${i < 3 ? "border-b border-mercury/60" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <svg key={si} width="11" height="11" viewBox="0 0 24 24" fill={si < review.stars ? "#ef4444" : "none"} stroke={si < review.stars ? "#ef4444" : "#d1d5db"} strokeWidth="1.5">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      <span className="text-[10px] text-gray ml-1">{review.source}</span>
                    </div>
                    <span className="text-[9px] font-semibold tracking-[0.05em] uppercase bg-red-50 text-red-500 rounded px-2 py-0.5">
                      {review.complaint}
                    </span>
                  </div>
                  <p className="text-[13px] font-light text-primary-1 leading-snug italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-[10px] font-medium text-red-400 mt-1.5">
                    {review.count} across category
                  </p>
                </div>
              ))}
            </div>

            {/* Divider — what this means */}
            <div className="px-6 py-3 bg-red-50/50 border-t border-b border-mercury">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-[12px] font-semibold text-red-600">
                  352 complaints. Zero brands addressing them in ads.
                </p>
              </div>
            </div>

            {/* The gap becomes the argument */}
            <div className="px-6 py-5 bg-primary-1/[0.03]">
              <p className="text-[10px] font-semibold tracking-[0.08em] uppercase text-primary-1/50 mb-2">
                The gap becomes the argument
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-1 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-primary-1 leading-snug">
                      &ldquo;The squat test. That&apos;s all you need to know.&rdquo;
                    </p>
                    <p className="text-[11px] font-light text-primary-1/60 mt-0.5">
                      142 reviews say see-through. No one is proving otherwise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-1 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-primary-1 leading-snug">
                      &ldquo;Put them on. Forget about them. That&apos;s the review we&apos;re after.&rdquo;
                    </p>
                    <p className="text-[11px] font-light text-primary-1/60 mt-0.5">
                      89 complaints about waistband. The absence of that is the selling point.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-mercury">
              <p className="text-[11px] font-medium text-primary-1">
                Two arguments. Both backed by evidence your competitor handed you for free.
              </p>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="mt-14 text-xl md:text-2xl font-medium text-primary-1 text-center">
          Every argument you&apos;ve never made is a group of buyers you&apos;ve never reached.{" "}
          <span className="font-secondary italic font-normal text-lg md:text-xl text-tundora">
            That is how we think about creative. And this is just one place we look.
          </span>
        </p>
      </div>
    </section>

    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center mb-10 max-w-5xl mx-auto">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-1">
            What happens after you stop guessing
          </p>
          <h2 className="heading-2 text-center leading-tight">
            We find out what your next ad should{" "}
            <span className="font-secondary italic">argue.</span>{" "}
            Not just how it should look.
          </h2>
          <p className="heading-description text-center">
            We research the buyer, the category, and the gaps between them.
            Then we turn what we find into five arguments your team can
            actually use.
          </p>
          <p className="text-sm text-gray mt-2">
            Ten working days. Six sections of research. Five scripts. One workspace.
          </p>
        </div>

        <div>
          <div>

            {/* Single-column timeline */}
            <div className="relative">
              {/* Spine */}
              <div
                aria-hidden
                className="absolute top-5 bottom-0 left-5 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(28,40,84,0.30) 0%, rgba(0,142,255,0.45) 62%, rgba(0,142,255,0) 100%)",
                }}
              />

              <div className="flex flex-col gap-6">
                {steps.map((step) => {
                  const isLast = step.num === "07";
                  return (
                  <div key={step.num} className="relative flex gap-8">
                    {/* Node */}
                    <div
                      aria-hidden
                      className="shrink-0 z-10 w-10 h-10 rounded-full bg-primary-1 text-white grid place-items-center"
                      style={{ boxShadow: "0 0 0 5px #ffffff" }}
                    >
                      {isLast ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className="font-secondary italic text-sm">{step.num}</span>
                      )}
                    </div>

                    <div className={`rounded-xl border p-6 md:p-7 shadow-[0_1px_2px_rgba(28,40,84,0.04)] hover:shadow-[0_16px_40px_-20px_rgba(28,40,84,0.28)] transition-shadow duration-300 flex-1 mb-0 ${isLast ? "border-azure-radiance/20 bg-zumthor" : "border-mercury bg-white"}`}>
                      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-primary-1">
                        {isLast ? "Outcome" : `Step ${step.num}`}
                      </span>
                      <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1 leading-snug mt-2">
                        {step.title}
                      </h3>
                      <div className="mt-3 flex flex-col gap-3">
                        {step.body.split("\n\n").map((para, pi) => (
                          <p key={pi} className={`text-medium font-light leading-relaxed ${isLast ? "text-primary-1" : "text-tundora"}`}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[18px] text-tundora font-light mt-10 pl-[4.5rem]">
              Ten days from now, you stop briefing creators on vibes.
            </p>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}
