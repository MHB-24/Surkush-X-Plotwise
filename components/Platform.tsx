const features = [
  {
    num: "01",
    title: "Brief a creator without writing a brief.",
    body: "Generate a link, send it to whoever's shooting for you. They see the script, the argument behind it, both hook options and what the video is meant to do. No PDF attachments, no explaining the strategy over WhatsApp, no version three of a doc nobody can find.",
  },
  {
    num: "02",
    title: "Uploads land where they belong.",
    body: "When a creator submits, the file attaches to the argument it was shot for. Six weeks later, when you're working out what performed, you're not staring at a Drive folder called final_v2_USE THIS. You're looking at a video with its reasoning still attached to it.",
  },
  {
    num: "03",
    title: "Your research stops being a document.",
    body: "The six sections stay live. When a test teaches you something, it goes back into the argument it came from. The next round starts from what you know now, not from a PDF you read once in September and haven't opened since.",
  },
  {
    num: "04",
    title: "Everyone works from the same page.",
    body: "You, your media buyer, your editor, your creators. Same arguments, same reasoning, nobody briefing from memory or from a screenshot someone sent them in March. This is the part that compounds.",
  },
];

export function Platform() {
  return (
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Day 11 onward
          </p>
          <h2 className="heading-2 text-center">
            The build stops on day ten.{" "}
            <span className="font-secondary italic">The system doesn&apos;t.</span>
          </h2>
          <p className="mt-4 heading-description text-center">
            Everything we make lands inside your workspace and stays live for 90 days.
            Not as a document you open once. Here&apos;s what your team actually does with it.
          </p>
        </div>

        {/* 2×2 card grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.num} className="border border-mercury rounded-xl p-6 md:p-8 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-primary-1/8 flex items-center justify-center text-xs font-bold text-primary-1 shrink-0">
                  {f.num}
                </span>
                <h3 className="text-lg font-semibold text-primary-1 leading-snug">
                  {f.title}
                </h3>
              </div>
              <p className="text-[17px] font-normal text-tundora leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-[18px] font-normal text-primary-1 text-center mt-12">
          The build ends on day ten. What you learn after it has somewhere to go.
        </p>
      </div>
    </section>
  );
}
