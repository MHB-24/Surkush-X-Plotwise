export function Problem() {
  return (
    <section id="why-this" className="py-20 md:py-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 md:gap-16 xl:gap-20 items-start">
          <div className="flex-1 sm:sticky sm:top-24">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray mb-3">
              The real reason ads stall
            </p>
            <h2 className="heading-2-light text-center sm:text-left">
              Nineteen out of twenty ads{" "}
              <span className="font-secondary italic">never work.</span>{" "}
              Yours included.
            </h2>
            <p className="mt-4 heading-description text-center sm:text-left max-w-lg">
              That isn&apos;t your team failing. Meta analysed $1.3 billion in
              spend across 550,000 ads: only 5&ndash;8% ever become real winners.
              The question isn&apos;t why most die. It&apos;s what you learn from
              the ones that don&apos;t.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {[
              {
                title: "You can't repeat your winners.",
                body: `One video takes off. You tell the creator, "more like that one." The next batch flops — because nobody knows which part was the 'that.' The hook? The face? The angle? You bought a win. You didn't buy the reason.`,
              },
              {
                title: "You don't learn from your losers.",
                body: "The eight that died cost exactly as much to make as the two that won. Nobody studies them. They get deleted and replaced with fresh guesses. Same coin, new flip.",
              },
              {
                title: "Your spend compounds. Your knowledge doesn't.",
                body: "At $5K a month, guessing is a tax you can afford. At $50K, it's the biggest line item on your P&L. Q4 raises everyone's spend. It doesn't raise anyone's answers.",
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
