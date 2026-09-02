"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Why you and not someone else?",
    a: "Eight years of brand strategy, and brands we've built positioning for have scaled past seven figures. That's the part most creative shops skip — they start at production because that's what they sell. We start at what your buyer believes, because that's what decides whether the production is worth anything. Every finding in your build traces back to a real customer quote, a review, or a competitor ad we can show you. Nothing is generated, nothing is assumed, nothing is recycled from another client. That's why it takes ten days rather than two.",
  },
  {
    q: "We don't have many reviews or customer data yet. Does this still work?",
    a: "Yes, and it's often where research pays off most. If your own data is thin, we go where your buyer already talks: competitor reviews, forums, comment sections, and the one-star reviews of whatever they tried before you. The output is the same. Only the inputs change.",
  },
  {
    q: "What if we don't like the direction?",
    a: "Day five exists for exactly that. Three of the six sections land, we walk them on a call, and you either continue or stop. If you stop, you're refunded in full — no reasons needed.",
  },
  {
    q: "Can you shoot the videos too?",
    a: "Yes, separately. This build is the research layer and five scripts, written so any creator can shoot them. If you'd rather we handled production, including sourcing creators who fit your buyer, that's a conversation for after the build — once you can see what we'd be shooting.",
  },
  {
    q: "Brand-level or product-level research?",
    a: "We scope that on the call. If one product carries most of your spend, we go product-level and build everything around that buyer. If you've got a catalogue and no clear message, we go brand-level. Either way the build covers one focus, because research that tries to cover five products at once ends up generic about all five. Same price, same ten days.",
  },
  {
    q: "What do you need from us?",
    a: "One 45-minute call, access to your ad account, and whatever customer feedback exists. Roughly two hours of your time across the whole ten days.",
  },
  {
    q: "Who owns the research?",
    a: "You do. It's yours to keep, use, and give to any agency or creator you work with, including after the 90 days of platform access end. Nothing gets held back.",
  },
  {
    q: "What happens after 90 days?",
    a: "Your research and everything you've built stay accessible. Continued access to creator onboarding and campaign tools is a separate conversation, and only if you want it. Nothing you've made gets taken away.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            The rest of it
          </p>
          <h2 className="heading-2">
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
                  <span className={`text-[20px] md:text-[22px] font-medium leading-snug transition-colors ${isOpen ? "text-primary-1" : "text-primary-1"}`}>
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
                  style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-6 text-[18px] font-normal text-black leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-[18px] font-light text-tundora text-center">
          Anything else, ask on the call. It&apos;s twenty minutes and there&apos;s no pitch at the end of it.
        </p>
      </div>
    </section>
  );
}
