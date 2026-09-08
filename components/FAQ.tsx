"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Why you and not someone else?",
    a: "Eight years of brand strategy, and brands we've built positioning for have gone past seven figures. That's the part most creative shops skip. They start at production because production is what they sell. We start at what your buyer believes, because that decides whether the production is worth anything.\n\nEvery finding in your build traces back to a real customer quote, a review, or a competitor Ad we can show you. Nothing generated, nothing assumed, nothing recycled from another client. That's why it takes ten days rather than two.",
  },
  {
    q: "How is the research actually done?",
    a: "By reading, mostly. Reviews and support tickets on your side, then the one and two-star reviews of the products your buyer tried before yours, then forum and comment threads where your category gets argued about, then every live and retired Ad from the competitors who matter. Ten days is what that takes when nothing is generated.",
  },
  {
    q: "What if it just tells us what we already knew?",
    a: "Here's the thing about product-market fit: it means one argument landed. Not that you found all of them. Most brands that get past that point are still running variations of the message that worked at the start, and it holds until you push spend, at which point the same argument keeps reaching the same people and costs climb.\n\nSo what you already know is one thing. This is about the other four. And it isn't generic, because none of it comes from your account or from a template. It comes from your buyer's language, your category's claims, and the specific gaps between them.\n\nThat said, you'll see three of the six sections on day five and decide for yourself. If it reads as things you already knew, say so on that call and we return every dollar.",
  },
  {
    q: "We already use creative analytics tools. What's different?",
    a: "Those read what's inside your account. They're good at telling you which of your existing arguments performed and which patterns repeat in your winners. They can't surface an argument you've never made, because it hasn't produced any data. That's the part this is for.",
  },
  {
    q: "We haven't properly researched our customer since the early days. Is that a problem?",
    a: "It's the most common situation we see and it's usually where the biggest gap is. Everything since has been inference from Ad performance, which is a record of your own decisions rather than of your buyer.",
  },
  {
    q: "Does this slow us down?",
    a: "No. One 45-minute call at the start, one at the end, nothing needed from you in between. The output arrives briefable, so it enters your normal cycle rather than replacing anything.",
  },
  {
    q: "Brand-level or product-level?",
    a: "We scope it on the call. If one product carries most of your spend we build around that buyer. If it's a catalogue with no clear message we go brand-level. Either way it's one focus per build, because research spread across five products ends up generic about all five.",
  },
  {
    q: "What if the real problem is our site, not our ads?",
    a: "Then we'll say so on the call and we won't take the work. If you're running traffic and converting close to nothing, the problem is usually further down: the site, the offer, the product. Better arguments send more people to the same place. We'd rather tell you that in twenty minutes than take $2,500 and watch it not work.",
  },
  {
    q: "Can you handle production too?",
    a: "Yes. The scripts are written so any creator you already work with can shoot them. If you'd rather we ran production as well, that's a conversation for after the build, once we can both see what we'd be shooting.",
  },
  {
    q: "Who owns the research?",
    a: "You do, permanently, including after the 90 days end. Yours to keep and hand to any agency or creator you work with.",
  },
  {
    q: "What happens after 90 days?",
    a: "Your research and everything built inside it stays accessible. Continued access to the creator and campaign tools is a separate conversation, only if you want it. Nothing you've made gets taken away.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            The rest of it
          </p>
          <h2 className="heading-2 text-center">
            Everything people ask{" "}
            <span className="font-secondary italic">before they book.</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-mercury">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[20px] md:text-[22px] font-medium leading-snug text-primary-1">
                    {faq.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 text-gray transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "800px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-6 w-4/5">
                    {faq.a.split("\n\n").map((para, pi) => (
                      <p key={pi} className={`text-[18px] font-normal text-black leading-relaxed ${pi > 0 ? "mt-4" : ""}`}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-[18px] font-light text-tundora text-center">
          Anything else, ask on the call. Twenty minutes, and there&apos;s no pitch at the end of it.
        </p>
      </div>
    </section>
  );
}
