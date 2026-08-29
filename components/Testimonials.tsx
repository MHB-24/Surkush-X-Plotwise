const testimonials = [
  {
    quote:
      "The competitive map stung. Two of our three main claims were already being made, louder, by people outspending us.",
    name: "Dana Mercer",
    role: "Founder, Kestrel Supply",
  },
  {
    quote:
      "Two of the five scripts are still running. The one we thought was weakest is our best performer on cold traffic.",
    name: "Jonas Okonkwo",
    role: "Co-founder, Halden Goods",
  },
  {
    quote:
      "The belief blocking our sale wasn't price. It was that nobody thought our product could work at home.",
    name: "Marta Feliciano",
    role: "Founder, Ambleside Home",
  },
  {
    quote:
      "She stopped asking for references and just performed the argument. The two hooks per script is the bit I'd pay for on its own.",
    name: "Tobias Krenn",
    role: "Founder, Solvent Skincare",
  },
  {
    quote:
      "It doesn't feel like buying ads. It feels like being handed the argument.",
    name: "Sam Levitt",
    role: "Founder, Rivet Athletic",
  },
  {
    quote:
      "Our buyer's own words were harsher and better than anything in our brand guidelines.",
    name: "Amara Nwosu",
    role: "Founder, Bellwether Pet",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-hero-bg">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 items-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-center leading-tight">
            How We Became the{" "}
            <span className="font-secondary italic">Talk of Town</span>
          </h2>
          <p className="heading-description text-center text-gray max-w-md">
            Read what brands say after they&apos;ve read it.
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
      </div>
    </section>
  );
}
