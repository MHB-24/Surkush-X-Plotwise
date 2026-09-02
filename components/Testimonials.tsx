"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Platform = "linkedin" | "google" | "facebook" | "instagram" | null;

type TextItem = {
  kind: "text";
  name: string;
  avatar: string;
  platform: Platform;
  quote: string;
};

type VideoItem = {
  kind: "video";
  name: string;
  avatar: string;
  src: string;
  poster: string;
  square?: boolean;
  quote?: string;
};

type Item = TextItem | VideoItem;

const IMG = "/assets/images/testimonials";
const VID = "/assets/videos/testimonials";

const items: Item[] = [
  {
    kind: "text",
    name: "Blake Thompson",
    avatar: `${IMG}/blake-thompson.webp`,
    platform: "linkedin",
    quote:
      "Working with Surkush just felt easy. They instantly got what we were going for and turned it into designs that looked great and actually worked for our users.",
  },
  {
    kind: "video",
    name: "Nathalie Erfanipour",
    avatar: `${IMG}/nathalie-erfanipour.webp`,
    src: `${VID}/nathalie-erfanipour.mp4`,
    poster: `${IMG}/nathalie-erfanipour-thumbnail.webp`,
  },
  {
    kind: "text",
    name: "Sarah Collins",
    avatar: `${IMG}/sarah-collins.webp`,
    platform: "google",
    quote:
      "Honestly, Surkush changed how we see design. It wasn't just about making things pretty, they gave us a system we use every day. Best money we've spent on our brand.",
  },
  {
    kind: "text",
    name: "Daniel Harris",
    avatar: `${IMG}/daniel-harris.webp`,
    platform: "facebook",
    quote:
      "Our brand used to feel all over the place. Surkush helped us clean it up, made things look professional but still friendly. People noticed the difference right away.",
  },
  {
    kind: "text",
    name: "Chloe Anderson",
    avatar: `${IMG}/chloe-anderson.webp`,
    platform: "instagram",
    quote:
      "We had ideas everywhere but no clear direction. Surkush pulled it all together, gave us an identity that feels like us, and created campaigns that actually work. Customers love it.",
  },
  {
    kind: "video",
    name: "Ola",
    avatar: `${IMG}/ola.webp`,
    src: `${VID}/ola.mp4`,
    poster: `${IMG}/ola-thumbnail.webp`,
  },
  {
    kind: "text",
    name: "Laura Bennett",
    avatar: `${IMG}/laura-bennett.webp`,
    platform: "google",
    quote:
      "We had such a tight deadline, but Surkush never rushed it. They stayed on top of everything and still delivered something amazing.",
  },
  {
    kind: "text",
    name: "Ethan Lewis",
    avatar: `${IMG}/ethan-lewis.webp`,
    platform: "google",
    quote:
      "The best part was their process. They didn't just chase trends, they built something timeless and easy for our team to manage. Looks great and works great.",
  },
  {
    kind: "text",
    name: "Emily Carter",
    avatar: `${IMG}/emily-carter.webp`,
    platform: "linkedin",
    quote:
      "Our app used to be so clunky. It took users almost 5 minutes to do one thing. After Surkush fixed it, it takes under 30 seconds. Engagement went up and daily users grew by 40%. Total game-changer.",
  },
  {
    kind: "text",
    name: "Dewa Santika",
    avatar: `${IMG}/dewa-santika.webp`,
    platform: "instagram",
    quote:
      "We were losing people at checkout. Surkush redesigned the flow, and within 2 months our cart drop-offs went down by 25%. They really solved the problem, not just designed stuff.",
  },
  {
    kind: "video",
    name: "Matthew Baitieri",
    avatar: `${IMG}/matthew-baitieri.webp`,
    src: `${VID}/matthew-baitieri.mp4`,
    poster: `${IMG}/matthew-baitieri-thumbnail.webp`,
    square: true,
    quote: "Surkush really knows their game. They're experts in what they do!",
  },
  {
    kind: "text",
    name: "Sophie Mitchell",
    avatar: `${IMG}/sophie-mitchell.webp`,
    platform: "linkedin",
    quote:
      "As a founder, I was lost on how to present our brand. Surkush nailed the look and the UX. We launched on time and even closed our seed round, investors loved how polished everything looked.",
  },
  {
    kind: "text",
    name: "Liam O'Connor",
    avatar: `${IMG}/liam-o-connor.webp`,
    platform: "linkedin",
    quote:
      "Our app was outdated and onboarding was a mess. After Surkush stepped in, onboarding time dropped by 60% and support tickets went way down. Huge relief for the team.",
  },
  {
    kind: "text",
    name: "Ayu Lestari",
    avatar: `${IMG}/ayu-lestari.webp`,
    platform: "google",
    quote:
      "What I liked most was how Surkush mixed creativity with structure. They really listened, mapped things out, and explained their choices. After launch, conversions went up and feedback's been super positive.",
  },
];

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === "linkedin")
    return (
      <svg viewBox="0 0 448 512" height="30" width="30" fill="currentColor" className="text-[#0A66C2] shrink-0">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    );
  if (platform === "facebook")
    return (
      <svg viewBox="0 0 512 512" height="30" width="30" fill="currentColor" className="text-[#0866FF] shrink-0">
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
      </svg>
    );
  if (platform === "instagram")
    return (
      <svg viewBox="0 0 448 512" height="30" width="30" fill="currentColor" className="text-[#E4405F] shrink-0">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    );
  if (platform === "google")
    return (
      <svg viewBox="0 0 48 48" height="30" width="30" className="shrink-0">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
      </svg>
    );
  return null;
}

function VideoTile({ item }: { item: VideoItem }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={`relative w-full ${
        item.square ? "aspect-square" : "aspect-[3/4] rounded-xl"
      } overflow-hidden bg-gray-900`}
    >
      <video
        ref={ref}
        className="w-full h-full object-cover"
        poster={item.poster}
        preload="none"
        playsInline
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src={item.src} type="video/mp4" />
        Your browser does not support video playback.
      </video>

      <div
        onClick={toggle}
        className={`absolute inset-0 flex items-center justify-center transition-colors cursor-pointer group ${
          playing ? "bg-transparent" : "bg-black/20 hover:bg-black/30"
        }`}
      >
        {!playing && (
          <div className="rounded-full group-hover:scale-110 transform duration-200">
            <Image
              src="/assets/icons/play-button.png"
              alt="Play button"
              width={50}
              height={50}
            />
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={item.avatar}
              alt={`${item.name} avatar`}
              width={40}
              height={40}
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <h4 className="font-semibold text-white text-sm">{item.name}</h4>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="flex flex-col gap-10 items-center w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 items-center max-w-3xl">
          <h2 className="heading text-center leading-tight">
            How We Became the{" "}
            <span className="font-secondary italic">Talk of Town</span>
          </h2>
          <p className="heading-description text-center max-w-xl">
            Read what people have to say about us.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div
            className="relative overflow-hidden transition-all duration-700 ease-in-out p-4"
            style={{ height: expanded ? "auto" : 800 }}
          >
            <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
              {items.map((item, i) => (
                <div key={i} className="break-inside-avoid mb-6">
                  <div
                    className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      item.kind === "text" ? "p-5" : "overflow-hidden"
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      {item.kind === "video" ? (
                        <>
                          <VideoTile item={item} />
                          {item.quote && (
                            <div className="p-5">
                              <p className="font-secondary italic text-primary-1 text-center leading-snug">
                                &ldquo;{item.quote}&rdquo;
                              </p>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-2">
                              <div className="relative">
                                <Image
                                  src={item.avatar}
                                  alt={`${item.name} avatar`}
                                  width={48}
                                  height={48}
                                  className="rounded-full object-cover border-2 border-gray-50"
                                />
                              </div>
                              <div className="flex flex-col">
                                <h4 className="font-semibold text-primary-1 text-sm">
                                  {item.name}
                                </h4>
                              </div>
                            </div>
                            <PlatformIcon platform={item.platform} />
                          </div>
                          <p className="text-primary-1 font-light leading-relaxed">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all h-12 px-6 py-6 text-base md:text-lg xl:text-xl rounded-lg border border-primary-1 text-primary-1 hover:text-white hover:bg-primary-1"
            >
              {expanded ? "Show Less" : "Load More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
