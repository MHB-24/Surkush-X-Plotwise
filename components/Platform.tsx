const features = [
  {
    title: "Brief creators without briefing creators.",
    body: "Generate a link, send it to any creator you work with. They see the script, the angle it came from, the hook variants, and what the video is supposed to do. No PDF attachments, no explaining the strategy over WhatsApp, no version three of a doc nobody can find.",
  },
  {
    title: "Uploads land where they belong.",
    body: "When a creator submits, the file attaches to the angle it was shot for. Six weeks later, when you're looking at what performed, you're not staring at a Drive folder called \"final_v2_USE THIS.\" You're looking at a video with its belief, its hook type and its funnel stage still attached to it.",
  },
  {
    title: "Your research stops being a document.",
    body: "The six sections stay live. When you learn something from a test, it goes back into the angle it came from. The next round of creative starts from what you know now, not from what you knew in September.",
  },
  {
    title: "Everyone works from the same page.",
    body: "Your media buyer, your editor, your creators and you are all looking at the same angles and the same reasoning. Nobody is briefing from memory. This is the part that compounds.",
  },
];

export function Platform() {
  return (
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        {/* Heading — centered */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Day 11 onward
          </p>
          <h2 className="heading-2 text-center">
            The build stops on day ten.{" "}
            <span className="font-secondary italic">The system doesn&apos;t.</span>
          </h2>
          <p className="mt-4 heading-description text-center max-w-2xl">
            Everything we make lands inside your workspace, and you keep it running
            for 90 days. Here&apos;s what your team can actually do with it.
          </p>
        </div>

        {/* 2×2 card grid — centered */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="border border-mercury rounded-xl p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-6 rounded-full bg-primary-1/8 flex items-center justify-center text-xs font-bold text-primary-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-medium font-semibold text-primary-1 leading-snug">
                  {f.title}
                </h3>
              </div>
              <p className="text-[15px] font-light text-primary-1 leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer text — centered */}
        <p className="text-[18px] font-light text-tundora text-center mt-10">
          Ten days builds it. The next 90 is where it starts paying you back.
        </p>
      </div>
    </section>
  );
}
