"use client";

const reviews = [
  {
    descriptor: "The founder who was testing the same idea",
    quote:
      "We had plenty of creative going out, but most of it was the same argument with a different face on it. They made that obvious pretty quickly.\n\nThe useful part was not the scripts themselves. It was seeing why certain angles were worth testing and why others were just versions of things we had already tried. We ended up with five directions that felt genuinely different, not five new ways to say the same thing.\n\nThe workspace has also made briefing creators much easier. We are no longer sending a script and then explaining what the script is supposed to achieve.",
  },
  {
    descriptor: "The founder who thought they already knew the buyer",
    quote:
      "We went into this thinking we had a pretty good understanding of our customer. We did, but mostly at the category level.\n\nThe research picked up on a few things customers were saying that we had been treating as minor objections. They were not minor. They were shaping whether people believed the product was worth buying in the first place.\n\nWhat I liked was that every recommendation had something behind it. A review, a comment, a competitor claim, or something from our own account. It was not someone presenting ten creative ideas and asking us to trust their instincts.\n\nThe output gave our team a much clearer starting point for the next round.",
  },
  {
    descriptor: "The founder who was tired of paying for more activity",
    quote:
      "We had reached the point where we were producing a lot of creative and learning very little from it. Every week there was another batch of hooks, but the thinking underneath them was not changing much.\n\nSurkush helped us separate the argument from the execution. That sounds simple, but it changed how we looked at our ads.\n\nA few ideas we were excited about got rejected because competitors were already making the same claim. That was probably one of the most valuable parts of the process. We did not need another list of ideas. We needed someone to tell us which ideas were not worth making.\n\nThe build gave us a clearer creative direction without adding another monthly retainer to manage.",
  },
  {
    descriptor: null,
    quote:
      "The insight alone is definitely worth it. Before spending thousands of dollars on advertising, having concrete evidence about our audience and what actually matters to them gives us a much stronger starting point.\n\nThe research was detailed, the arguments were practical, and the value for the price is excellent. We are now working with the team to get the scripts shot, and I am looking forward to seeing how they perform.\n\nVery satisfied with the process so far.",
  },
  {
    descriptor: null,
    quote:
      "The two-hook approach has been surprisingly useful. Testing two different openings against the same creative strategy gives us a much cleaner read on what is getting attention. When one hook works, we can carry it into other angles instead of starting from zero every time.\n\nThe team has also been a great strategic partner. They challenge the obvious ideas without making the process complicated.\n\nAnd the portal is genuinely useful for a small team. We can white-label it, invite creators, communicate, manage creative finances, and keep feedback attached to the right asset. No more chasing files across Google Drive or trying to remember which WhatsApp message had the latest feedback.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-4xl mx-auto">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Client reviews
          </p>
          <h2 className="heading-2">
            What the last{" "}
            <span className="font-secondary italic">
              five brands
            </span>{" "}
            had to say.
          </h2>
        </div>

        {/* Card grid — 3 top, 2 centered bottom */}
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]">
              <div className="rounded-2xl border border-mercury bg-white p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4 h-full">
                {/* Opening quote mark */}
                <span
                  className="font-secondary italic text-azure-radiance/30 leading-none select-none"
                  style={{ fontSize: "3.5rem", lineHeight: 1 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                {/* Quote paragraphs */}
                <div className="flex flex-col gap-3 -mt-4">
                  {r.quote.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className="text-[17px] font-light leading-relaxed text-primary-1"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Descriptor */}
                {r.descriptor && (
                  <p className="text-[13px] font-semibold tracking-[0.12em] uppercase text-tundora border-t border-mercury pt-4 mt-1">
                    {r.descriptor}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
