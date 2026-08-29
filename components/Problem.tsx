export function Problem() {
  return (
    <section id="why-this" className="py-20 md:py-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 md:gap-16 xl:gap-20 items-start">
          <div className="flex-1 sm:sticky sm:top-24">
            <h2 className="heading-2-light text-center sm:text-left">
              The{" "}
              <span className="font-secondary italic">Real Reason</span> Ads
              Stall
            </h2>
            <p className="mt-4 heading-description text-center sm:text-left max-w-lg">
              Meta analysed $1.3 billion in spend across 550,000 ads: only
              5&ndash;8% ever become real winners. The question isn&apos;t why
              most die. It&apos;s what you learn from the ones that don&apos;t.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {[
              {
                title: "You can’t repeat your winners.",
                body: "A video takes off. You say “more like that.” Next batch flops — because nobody knows which part was the ‘that.’ You bought a win, not the reason behind it.",
              },
              {
                title: "You don’t learn from your losers.",
                body: "The eight that died cost exactly as much as the two that won. Nobody studies them. Same coin, new flip.",
              },
              {
                title: "Your spend compounds. Your knowledge doesn’t.",
                body: "At $5K a month, guessing is a tax you can afford. At $50K, it’s your biggest line item. Q4 raises everyone’s spend. It doesn’t raise answers.",
              },
            ].map((card, i) => (
              <div key={i} className="border border-mercury rounded-md p-6 sm:p-8">
                <h3 className="text-large font-medium text-primary-1 leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-medium font-light leading-relaxed text-tundora">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
