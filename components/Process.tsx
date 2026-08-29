const steps = [
  {
    num: "01",
    title: "Find what your buyer believes",
    body: "Reviews, DMs, support tickets — your buyer has already told you in their own words.",
  },
  {
    num: "02",
    title: "Find the reason they don't buy",
    body: "Every category has one belief blocking the sale. We find yours, and the fear underneath.",
  },
  {
    num: "03",
    title: "Map the competitors who matter",
    body: "The handful you're actually losing to. We pull their ads and spot the claims nobody has taken.",
  },
  {
    num: "04",
    title: "Pick the argument only you can win",
    body: "The thing your product can say that competitors can't, that also breaks the wall from step two.",
  },
  {
    num: "05",
    title: "Write five scripts on five angles",
    body: "Each attacks a different belief at a different funnel stage. Five angles beats fifty variations.",
  },
  {
    num: "06",
    title: "Build the workspace",
    body: "Scripts, research, hooks — one place. Your media buyer, editor, and creators all work from the same angles.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-hero-bg">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 items-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-center leading-tight">
            What We <span className="font-secondary italic">Actually</span> Do
          </h2>
          <p className="heading-description text-center max-w-xl">
            Six steps. Ten days. Your creative is your targeting now &mdash; the
            angle isn&apos;t what comes before targeting, it{" "}
            <em>is</em> the targeting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-mercury rounded-md p-6 sm:p-8 flex flex-col gap-4"
            >
              <span className="text-gray text-large font-semibold">
                {step.num}
              </span>
              <div>
                <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1">
                  {step.title}
                </h3>
                <p className="mt-3 text-medium text-tundora font-light leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
