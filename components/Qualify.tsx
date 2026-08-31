import Image from "next/image";

const fitSignals = [
  "You're spending on paid social and creative is the thing holding you back, not budget or product.",
  "You've had a winner you couldn't repeat, and it still bothers you.",
  "You have creators, or can get them, and what's missing is what to tell them.",
  "You're about to spend more this quarter than last, and you'd rather not spend it the same way.",
  "You've paid an agency for strategy before and got a deck you never used.",
  "Your old targeting playbook stopped working and you're not sure what replaced it.",
  "You're launching your first store and would rather work out the angles now than find them at $10K in.",
];

const dontBook = [
  {
    title: "You're getting traffic but no sales at all.",
    body: "If you're running ads and getting almost nothing, the problem is usually not your creative. It's the site, the offer, the trust signals or the product. Targeted traffic converts at 1 to 2%, untargeted at a quarter of that, and no amount of better angles fixes a page people don't trust. Fix that first.",
  },
  {
    title: "You need videos, not answers.",
    body: "If your creative is working and you just need more of it, buy production. This won't help you and we'll say so on the call.",
  },
  {
    title: "You don't have a product yet.",
    body: "If you're still choosing between ideas, there's nothing for the research to attach to. Come back when you've picked one.",
  },
  {
    title: "You want a guarantee on performance.",
    body: "Nobody can honestly promise you a ROAS number from research. We can tell you what to say. We can't control the algorithm, the offer, or what your competitors do next week.",
  },
];

export function Qualify() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <h2 className="heading-2">
            Before You <span className="font-secondary italic">Book</span>
          </h2>
          <p className="mt-4 heading-description">
            We&apos;ve talked more brands out of this than into it. Because
            research only works when the problem is actually creative. Half
            the time it isn&apos;t, and we&apos;ll tell you that on the call.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 xl:gap-20 items-start">
          <div className="flex-1 flex justify-center md:sticky md:top-24">
            <Image
              src="/assets/images/qualify-illustration.webp"
              alt="Research and understanding illustration"
              width={500}
              height={400}
              className="w-full max-w-md object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray mb-4">
                This is built for you if
              </p>
              <ul className="space-y-0 divide-y divide-mercury">
                {fitSignals.map((s, i) => (
                  <li
                    key={i}
                    className="py-4 text-medium font-light text-tundora leading-relaxed first:pt-0 last:pb-0"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray mb-4">
                Don&apos;t book if
              </p>
              <div className="flex flex-col gap-4">
                {dontBook.map((item, i) => (
                  <div key={i} className="border border-mercury rounded-md p-5">
                    <h3 className="text-medium font-medium text-primary-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light text-tundora leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
