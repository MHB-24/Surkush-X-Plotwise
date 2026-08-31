import Image from "next/image";

const fitSignals = [
  "You're spending on paid social and creative is what's holding you back, not budget or product.",
  "You've had a winner you couldn't repeat, and it still bothers you.",
  "You have creators, or can get them, and what's missing is what to tell them.",
  "You're about to spend more this quarter than last, and you'd rather not spend it the same way.",
  "You've paid an agency for strategy before and got a deck you never used.",
  "Your old targeting playbook stopped working and you're not sure what replaced it.",
  "You're launching your first store and would rather work out the angles now than find them at $10K in.",
];

export function Qualify() {
  return (
    <section className="py-20 md:py-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="heading-2">
            Before You <span className="font-secondary italic">Book</span>
          </h2>
          <p className="mt-4 heading-description">
            We&apos;ve talked more brands out of this than into it. Because
            research only works when the problem is actually creative. Half
            the time it isn&apos;t, and we&apos;ll tell you that on the call.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 xl:gap-20 items-center">
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/qualify-illustration.webp"
              alt="Research and understanding illustration"
              width={500}
              height={400}
              className="w-full max-w-md object-contain"
            />
          </div>

          <div className="flex-1">
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
        </div>
      </div>
    </section>
  );
}
