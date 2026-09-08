"use client";

import { useState } from "react";

const features = [
  {
    num: "01",
    title: "Brief a creator without writing a brief.",
    body: "Generate a link, send it to whoever's shooting for you. They see the script, the argument behind it, both hook options and what the video is meant to do. No PDF attachments, no explaining the strategy over WhatsApp, no version three of a doc nobody can find.",
    icon: "link",
  },
  {
    num: "02",
    title: "Uploads land where they belong.",
    body: "When a creator submits, the file attaches to the argument it was shot for. Six weeks later, when you're working out what performed, you're not staring at a Drive folder called final_v2_USE THIS. You're looking at a video with its reasoning still attached to it.",
    icon: "upload",
  },
  {
    num: "03",
    title: "Your research stops being a document.",
    body: "The six sections stay live. When a test teaches you something, it goes back into the argument it came from. The next round starts from what you know now, not from a PDF you read once in September and haven't opened since.",
    icon: "refresh",
  },
  {
    num: "04",
    title: "Everyone works from the same page.",
    body: "You, your media buyer, your editor, your creators. Same arguments, same reasoning, nobody briefing from memory or from a screenshot someone sent them in March. This is the part that compounds.",
    icon: "users",
  },
];

const iconPaths: Record<string, string> = {
  link: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71 M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
  upload: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
  refresh: "M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0114.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0020.49 15",
  users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
};

const tabs = ["Research", "Arguments", "Scripts"] as const;

export function Platform() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className="py-20 md:py-28 bg-hero-bg">
      <div className="container-page">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14 max-w-4xl mx-auto">
          <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-tundora mb-3">
            Day 11 onward
          </p>
          <h2 className="heading-2 text-center">
            The build stops on day ten.
            <br />
            <span className="font-secondary italic">The system doesn&apos;t.</span>
          </h2>
          <p className="mt-4 heading-description text-center">
            Everything we make lands inside your workspace and stays with you forever.
            Not as a document you open once. Here&apos;s what your team actually does with it.
          </p>
        </div>

        {/* Two-column: features + widget */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-stretch">

          {/* Left — stacked features */}
          <div className="flex flex-col gap-0">
            {features.map((f, i) => (
              <div key={f.num} className={`py-6 ${i < features.length - 1 ? "border-b border-mercury" : ""}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-1/8 flex items-center justify-center text-primary-1 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={iconPaths[f.icon]} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-1 leading-snug">
                    {f.title}
                  </h3>
                </div>
                <p className="text-[16px] font-light text-tundora leading-relaxed pl-11">
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right — banner + workspace widget */}
          <div className="flex flex-col gap-4">
            {/* Banner */}
            <div className="rounded-xl bg-zumthor border border-azure-radiance/15 px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-azure-radiance/10 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <p className="text-[14px] font-medium text-primary-1 leading-snug">
                All your research, arguments, and scripts stay live in one workspace for 90 days.
              </p>
            </div>

            {/* Widget */}
            <div className="rounded-2xl border border-mercury bg-white shadow-sm overflow-hidden flex-1 flex flex-col">
            {/* Widget header */}
            <div className="px-5 py-3.5 border-b border-mercury flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-azure-radiance" />
                <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-primary-1">
                  Workspace
                </p>
              </div>
              <span className="text-[10px] font-medium text-gray bg-hero-bg rounded-full px-2.5 py-0.5">
                90-day access
              </span>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-mercury">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-2.5 text-[12px] font-semibold text-center transition-colors cursor-pointer ${
                    i === activeTab
                      ? "text-primary-1 border-b-2 border-primary-1"
                      : "text-gray hover:text-tundora"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-4 flex-1">

              {/* Research tab */}
              {activeTab === 0 && (
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl border border-mercury p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white bg-primary-1 rounded px-2 py-0.5">
                        Section 01
                      </span>
                      <span className="text-[10px] font-medium text-gray">
                        Buyer language
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold text-primary-1 leading-snug mb-1">
                      What your buyer actually says before they buy.
                    </p>
                    <p className="text-[11px] font-light text-tundora leading-snug mb-3">
                      Pulled from 1,200+ reviews, comments, and forums across the category.
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        { label: "Top complaint", value: "See-through fabric after first wash" },
                        { label: "Purchase trigger", value: "Squat-proof mentioned in review" },
                        { label: "Hesitation", value: "Sizing inconsistency across colours" },
                      ].map((item) => (
                        <div key={item.label} className="rounded-lg bg-hero-bg px-3 py-2.5 flex items-center justify-between">
                          <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gray">{item.label}</span>
                          <span className="text-[12px] font-medium text-primary-1">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-mercury p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white bg-primary-1 rounded px-2 py-0.5">
                        Section 02
                      </span>
                      <span className="text-[10px] font-medium text-gray">
                        Competitor Ad audit
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold text-primary-1 leading-snug mb-1">
                      What your competitors are claiming right now.
                    </p>
                    <p className="text-[11px] font-light text-tundora leading-snug">
                      17 live ads tracked &middot; 4 overlapping claims &middot; 3 gaps nobody owns.
                    </p>
                  </div>
                </div>
              )}

              {/* Arguments tab */}
              {activeTab === 1 && (
                <div className="flex flex-col gap-3">
                  {[
                    {
                      num: "01",
                      status: "Live",
                      statusColor: "green",
                      title: "See-through is the #1 complaint nobody is answering.",
                      source: "142 one-star reviews. Zero competitor ads addressing it.",
                    },
                    {
                      num: "02",
                      status: "Live",
                      statusColor: "green",
                      title: "Sizing inconsistency is costing you repeat buyers.",
                      source: "38 mentions across category. Only one brand acknowledges it.",
                    },
                    {
                      num: "03",
                      status: "Draft",
                      statusColor: "amber",
                      title: "Your return policy is a selling point nobody is using.",
                      source: "Competitor returns average 14 days. Yours is 30 with free shipping.",
                    },
                  ].map((arg) => (
                    <div key={arg.num} className="rounded-xl border border-mercury p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white bg-primary-1 rounded px-2 py-0.5">
                            Argument {arg.num}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${arg.statusColor === "green" ? "bg-green-400" : "bg-amber-400"}`} />
                          <span className={`text-[10px] font-medium ${arg.statusColor === "green" ? "text-green-600" : "text-amber-600"}`}>{arg.status}</span>
                        </div>
                      </div>
                      <p className="text-[13px] font-semibold text-primary-1 leading-snug mb-1">{arg.title}</p>
                      <p className="text-[11px] font-light text-tundora leading-snug">{arg.source}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Scripts tab */}
              {activeTab === 2 && (
                <>
                  <div className="rounded-xl border border-mercury p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white bg-primary-1 rounded px-2 py-0.5">
                          Script 01
                        </span>
                        <span className="text-[10px] font-medium text-gray">
                          Cold &middot; Top of funnel
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-[10px] font-medium text-green-600">Live</span>
                      </div>
                    </div>

                    <p className="text-[13px] font-semibold text-primary-1 leading-snug mb-1">
                      Argument: See-through is the #1 complaint nobody is answering.
                    </p>
                    <p className="text-[11px] font-light text-tundora leading-snug mb-3">
                      142 one-star reviews. Zero competitor ads addressing it.
                    </p>

                    <div className="flex flex-col gap-2 mb-3">
                      <div className="rounded-lg bg-hero-bg px-3 py-2.5">
                        <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-gray mb-1">
                          Hook A
                        </p>
                        <p className="text-[12px] font-medium text-primary-1 leading-snug">
                          &ldquo;The squat test. That&apos;s all you need to know.&rdquo;
                        </p>
                      </div>
                      <div className="rounded-lg bg-hero-bg px-3 py-2.5">
                        <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-gray mb-1">
                          Hook B
                        </p>
                        <p className="text-[12px] font-medium text-primary-1 leading-snug">
                          &ldquo;I wore them three days straight. Here&apos;s what happened.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg border border-dashed border-azure-radiance/30 bg-zumthor/50 px-3 py-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                      </svg>
                      <span className="text-[11px] font-medium text-azure-radiance">
                        Share with creator &rarr;
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-mercury p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-semibold text-primary-1">creator_take_03.mp4</p>
                      <p className="text-[10px] font-light text-gray">
                        Uploaded by @sarah &middot; attached to Script 01
                      </p>
                    </div>
                    <span className="text-[10px] font-medium text-gray bg-hero-bg rounded-full px-2 py-0.5 shrink-0">
                      2 min ago
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-mercury bg-primary-1/[0.03]">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium text-primary-1">
                  5 scripts &middot; 10 hooks &middot; 3 uploads this week
                </p>
                <div className="flex -space-x-1.5">
                  {["#1c2854", "#008EFF", "#868686"].map((c, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-[18px] font-normal text-primary-1 text-center mt-12">
          The build ends on day ten. What you learn after it has somewhere to go.
        </p>
      </div>
    </section>
  );
}
