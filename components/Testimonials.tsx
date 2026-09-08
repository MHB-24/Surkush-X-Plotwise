"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Daniel Harris",
    role: "DTC Founder",
    photo: "/assets/images/testimonials/ayu-lestari.webp",
    quote:
      "We had plenty of creative going out, but most of it was the same argument with a different face on it. They made that obvious pretty quickly.\n\nThe useful part was not the scripts themselves. It was seeing why certain angles were worth testing and why others were just versions of things we had already tried. We ended up with five directions that felt genuinely different, not five new ways to say the same thing.\n\nThe workspace has also made briefing creators much easier. We are no longer sending a script and then explaining what the script is supposed to achieve.",
  },
  {
    name: "Liam O'Connor",
    role: "Ecommerce Brand Founder",
    photo: "/assets/images/testimonials/liam-o-connor.webp",
    quote:
      "We went into this thinking we had a pretty good understanding of our customer. We did, but mostly at the category level.\n\nThe research picked up on a few things customers were saying that we had been treating as minor objections. They were not minor. They were shaping whether people believed the product was worth buying in the first place.\n\nWhat I liked was that every recommendation had something behind it. A review, a comment, a competitor claim, or something from our own account. It was not someone presenting ten creative ideas and asking us to trust their instincts.\n\nThe output gave our team a much clearer starting point for the next round.",
  },
  {
    name: "Nathalie Erfanipour",
    role: "Brand Founder",
    photo: "/assets/images/testimonials/nathalie-erfanipour.webp",
    quote:
      "We had reached the point where we were producing a lot of creative and learning very little from it. Every week there was another batch of hooks, but the thinking underneath them was not changing much.\n\nSurkush helped us separate the argument from the execution. That sounds simple, but it changed how we looked at our ads.\n\nA few ideas we were excited about got rejected because competitors were already making the same claim. That was probably one of the most valuable parts of the process. We did not need another list of ideas. We needed someone to tell us which ideas were not worth making.\n\nThe build gave us a clearer creative direction without adding another monthly retainer to manage.",
  },
  {
    name: "Ola",
    role: "DTC Founder",
    photo: "/assets/images/testimonials/ola.webp",
    quote:
      "The insight alone is definitely worth it. Before spending thousands of dollars on advertising, having concrete evidence about our audience and what actually matters to them gives us a much stronger starting point.\n\nThe research was detailed, the arguments were practical, and the value for the price is excellent. We are now working with the team to get the scripts shot, and I am looking forward to seeing how they perform.\n\nVery satisfied with the process so far.",
  },
  {
    name: "Matthew Baitieri",
    role: "Ecommerce Founder",
    photo: "/assets/images/testimonials/matthew-baitieri.webp",
    quote:
      "The two-hook approach has been surprisingly useful. Testing two different openings against the same creative strategy gives us a much cleaner read on what is getting attention. When one hook works, we can carry it into other angles instead of starting from zero every time.\n\nThe team has also been a great strategic partner. They challenge the obvious ideas without making the process complicated.\n\nAnd the portal is genuinely useful for a small team. We can white-label it, invite creators, communicate, manage creative finances, and keep feedback attached to the right asset. No more chasing files across Google Drive or trying to remember which WhatsApp message had the latest feedback.",
  },
];

const allCards = [...reviews, ...reviews, ...reviews];

function RatingBadge() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function CarouselCard({ review }: { review: (typeof reviews)[number] }) {
  const paragraphs = review.quote.split("\n\n");
  return (
    <div className="h-full rounded-2xl border border-mercury bg-white p-6 flex flex-col shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-mercury shrink-0">
          <Image src={review.photo} alt={review.name} width={40} height={40} className="w-full h-full object-cover" />
        </div>
        <RatingBadge />
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {paragraphs.map((para, pi) => (
          <p key={pi} className="text-[15px] font-light text-primary-1 leading-relaxed">
            {pi === 0 && <>&ldquo;</>}
            {para}
            {pi === paragraphs.length - 1 && <>&rdquo;</>}
          </p>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-mercury">
        <p className="text-[14px] font-semibold text-primary-1">{review.name}</p>
        <p className="text-[12px] font-light text-tundora mt-0.5">{review.role}</p>
      </div>
    </div>
  );
}

function MobileCard({ review }: { review: (typeof reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = review.quote.split("\n\n");
  const previewParas = paragraphs.slice(0, 2);
  const hiddenParas = paragraphs.slice(2);
  const hasMore = hiddenParas.length > 0;

  return (
    <div className="rounded-2xl border border-mercury bg-white p-5 flex flex-col shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-mercury shrink-0">
          <Image src={review.photo} alt={review.name} width={40} height={40} className="w-full h-full object-cover" />
        </div>
        <RatingBadge />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-3 flex-1">
          {previewParas.map((para, pi) => (
            <p key={pi} className="text-[15px] font-light text-primary-1 leading-relaxed">
              {pi === 0 && <>&ldquo;</>}
              {para}
              {!hasMore && pi === previewParas.length - 1 && <>&rdquo;</>}
              {hasMore && !expanded && pi === previewParas.length - 1 && <>&hellip;&rdquo;</>}
            </p>
          ))}

          {hasMore && (
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: expanded ? "600px" : "0px", opacity: expanded ? 1 : 0 }}
            >
              <div className="flex flex-col gap-3">
                {hiddenParas.map((para, pi) => (
                  <p key={pi} className="text-[15px] font-light text-primary-1 leading-relaxed">
                    {para}
                    {pi === hiddenParas.length - 1 && <>&rdquo;</>}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[13px] font-medium text-primary-1 hover:text-primary-1/70 transition-colors text-left flex items-center gap-1 mb-3"
          >
            {expanded ? "Read less" : "Read more"}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </div>

      <div className="pt-4 border-t border-mercury">
        <p className="text-[14px] font-semibold text-primary-1">{review.name}</p>
        <p className="text-[12px] font-light text-tundora mt-0.5">{review.role}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const totalCards = allCards.length;
  const advanceBy = 2;
  const resetAtStep = 5;

  const [currentStep, setCurrentStep] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const isPausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleNext = useCallback(() => {
    timerRef.current = setTimeout(() => {
      if (isPausedRef.current) return;
      setCurrentStep((prev) => prev + 1);
    }, 4000);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  useEffect(() => {
    if (currentStep === resetAtStep) {
      const resetTimeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentStep(0);
      }, 700);
      return () => clearTimeout(resetTimeout);
    }

    if (currentStep === 0 && !transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          scheduleNext();
        });
      });
      return;
    }

    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentStep, transitionEnabled, scheduleNext]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    scheduleNext();
  };

  const offset = currentStep * advanceBy;
  const translatePercent = (offset / totalCards) * 100;

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Client reviews
          </p>
          <h2 className="heading-2">
            What the last{" "}
            <span className="font-secondary italic">five brands</span>{" "}
            had to say.
          </h2>
        </div>
      </div>

      {/* Desktop: card-based carousel, 3 visible, advance by 2 */}
      <div
        className="hidden md:block container-page overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex items-stretch"
          style={{
            width: `${(totalCards / 3) * 100}%`,
            transform: `translateX(-${translatePercent}%)`,
            transition: transitionEnabled ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {allCards.map((review, i) => (
            <div key={i} className="shrink-0 px-2.5" style={{ width: `${100 / totalCards}%` }}>
              <CarouselCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden container-page">
        <div className="flex flex-col gap-4">
          {reviews.map((r) => (
            <MobileCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
