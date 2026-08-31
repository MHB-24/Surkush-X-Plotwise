const testimonials = [
  {
    quote:
      "The competitive map was the part that stung. Two of our three main claims were already being made, louder, by people outspending us. We stopped saying them the week we read it.",
    name: "Dana Mercer",
    role: "Founder, Kestrel Supply",
  },
  {
    quote:
      "First brief I've sent a creator without apologising for it.",
    name: "Priya Raghunathan",
    role: "Head of Growth, Norlee",
  },
  {
    quote:
      "We had eleven months of ad data and no explanation for any of it. What came back read like someone had gone through our account and written down the reasons out loud. Two of the five scripts are still running. The one we thought was weakest is our best performer on cold traffic, which tells you how good our instincts were.",
    name: "Jonas Okonkwo",
    role: "Co-founder, Halden Goods",
  },
  {
    quote:
      "The belief blocking our sale wasn't price. It was that nobody thought a product like ours could work at home. We'd spent a year arguing about price.",
    name: "Marta Feliciano",
    role: "Founder, Ambleside Home",
  },
  {
    quote:
      "I'd tell another founder the honest thing: it doesn't feel like buying ads. It feels like being handed the argument, then finding out how little of it you'd written down. Our editor works off the same document our buyer does now.",
    name: "Sam Levitt",
    role: "Founder, Rivet Athletic",
  },
  {
    quote:
      "Ten days, and the day-five call was the one that mattered. We could see where it was going before we were committed.",
    name: "Ellis Byrne",
    role: "Ecommerce Director, Two Fields",
  },
  {
    quote:
      "We shot all five with the same creator in one afternoon. Because each script said what it was attacking, she stopped asking us for references and just performed the argument. The two hooks per script is the bit I'd pay for on its own.",
    name: "Tobias Krenn",
    role: "Founder, Solvent Skincare",
  },
  {
    quote:
      "Our buyer's own words were harsher and better than anything in our brand guidelines. We use three of their sentences verbatim.",
    name: "Amara Nwosu",
    role: "Founder, Bellwether Pet",
  },
  {
    quote:
      "We've kept the document open in every creative meeting since. It has outlived two agencies and one media buyer, and it's still the reason we can explain why a winner won.",
    name: "Nadia Farrow",
    role: "Founder, Longmere Coffee",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        <div className="flex flex-col gap-2 items-center max-w-4xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray mb-2">
            From the first builds
          </p>
          <h2 className="heading text-center leading-tight">
            What brands say after{" "}
            <span className="font-secondary italic">they&apos;ve read it.</span>
          </h2>
          <p className="heading-description text-center text-gray max-w-2xl">
            We asked everyone the same three questions: what the research showed them about their buyer, what they did with the scripts, and what they&apos;d tell another founder. Their answers, unedited.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-white border border-mercury rounded-md p-6 sm:p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-solitude flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-1/60">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="text-medium font-medium text-primary-1">
                    {t.name}
                  </div>
                  <div className="text-sm font-light text-gray">{t.role}</div>
                </div>
              </div>
              <p className="text-medium font-light leading-relaxed text-tundora flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-light text-gray mt-12">
          Every one of these took the same ten days yours will.
        </p>
      </div>
    </section>
  );
}
