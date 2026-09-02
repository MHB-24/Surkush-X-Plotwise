"use client";

export function PricingBanner() {
  return (
    <section className="py-6 md:py-8 px-4">
      <div className="container-page">
        <div
          className="relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-[520px] flex items-center"
          style={{
            background:
              "linear-gradient(135deg, #080c18 0%, #0e1428 30%, #1C2854 60%, #0d4a8a 82%, #008EFF 100%)",
          }}
        >
          {/* Left: pricing & details */}
          <div className="relative z-10 flex flex-col gap-6 px-8 md:px-14 py-12 w-full lg:max-w-[50%]">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40">
              One flat fee. Everything included.
            </p>

            <div>
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "64px",
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "-3px",
                }}
              >
                $1,500
              </div>
              <p className="mt-2 text-[15px] text-white/45 font-light">One payment</p>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                "Delivered in ten working days",
                "Full refund on day five — no reasons needed",
                "90-day workspace access included",
                "Every finding sourced and verifiable",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[15px] font-light text-white/65 leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
              className="mt-2 inline-flex items-center gap-2 self-start bg-white text-primary-1 font-semibold text-base px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors"
            >
              Book a Fit Call
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right: portal card — rounded, positioned to overflow bottom-right (ClickUp style) */}
          <div
            className="absolute hidden lg:block pointer-events-none"
            style={{ right: "-1%", bottom: "-6%", width: "54%" }}
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/12"
              style={{
                background: "rgba(243,246,251,0.98)",
                boxShadow:
                  "0 24px 80px rgba(0,0,0,0.55), -8px 0 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              {/* Portal header */}
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#e4eaf5] bg-white/90">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#1C2854] to-[#008EFF] flex items-center justify-center shrink-0">
                  <span className="text-[6px] font-extrabold text-white">PW</span>
                </div>
                <span className="text-[11px] font-bold text-[#0e1428]">Workspace</span>
                <span className="ml-auto text-[8px] font-bold text-[#1e7a4a] bg-[#e2f5ea] rounded-full px-2 py-0.5">
                  ACTIVE
                </span>
              </div>

              {/* Portal body */}
              <div className="p-4 space-y-3">
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Research", val: "1" },
                    { label: "Scripts", val: "5" },
                    { label: "Hooks", val: "10" },
                    { label: "Creators", val: "3" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white rounded-lg p-2.5 border border-[#e4eaf5] flex flex-col items-center"
                    >
                      <span className="text-[18px] font-semibold text-[#0e1428] leading-none">
                        {s.val}
                      </span>
                      <span className="text-[8px] text-[#8a97b0] mt-0.5">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Scripts list */}
                <div className="bg-white rounded-lg border border-[#e4eaf5] divide-y divide-[#f0f4fb]">
                  <div className="px-3 py-2 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#5a6880] uppercase tracking-wider">
                      Scripts
                    </span>
                    <span className="text-[8px] text-[#008EFF] font-semibold">5 ready</span>
                  </div>
                  {[
                    { num: "01", angle: "Myth-bust", tag: "TOF", w: "90%" },
                    { num: "02", angle: "Routine reset", tag: "MOF", w: "75%" },
                    { num: "03", angle: "Side-by-side", tag: "BOF", w: "60%" },
                  ].map((s) => (
                    <div key={s.num} className="px-3 py-2 flex items-center gap-2.5">
                      <span className="text-[8px] font-bold text-[#008EFF] font-mono w-7 shrink-0">
                        S{s.num}
                      </span>
                      <span className="text-[10px] font-medium text-[#2d3a5a] flex-1">
                        {s.angle}
                      </span>
                      <div className="w-14 h-1 rounded-full bg-[#edf1f9] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#008EFF]"
                          style={{ width: s.w }}
                        />
                      </div>
                      <span className="text-[7px] font-bold text-[#008EFF] bg-[rgba(0,142,255,0.08)] rounded-full px-1.5 py-0.5">
                        {s.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Creator access */}
                <div className="bg-white rounded-lg border border-[#e4eaf5] px-3 py-2.5 flex items-center gap-3">
                  <div className="flex -space-x-1.5">
                    {["AJ", "MK", "SL"].map((init, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1C2854] to-[#008EFF] border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-[5px] font-bold text-white">{init}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold text-[#0e1428]">Creator briefs live</p>
                    <p className="text-[9px] text-[#8a97b0] truncate">
                      Uploads land against the right angle
                    </p>
                  </div>
                  <span className="text-[8px] font-bold text-[#008EFF] bg-[rgba(0,142,255,0.08)] rounded-full px-2 py-0.5 shrink-0">
                    90 DAYS
                  </span>
                </div>

                {/* Research doc */}
                <div className="bg-white rounded-lg border border-[#e4eaf5] p-3 space-y-1.5">
                  <span className="text-[9px] font-bold text-[#5a6880] uppercase tracking-wider">
                    Research Document
                  </span>
                  {[
                    { icon: "💬", label: "Buyer Language", color: "#008EFF" },
                    { icon: "⚠", label: "Belief Blocker", color: "#9c6f1e" },
                    { icon: "🔍", label: "Competitive Map", color: "#1C2854" },
                    { icon: "✓", label: "Winning Angle", color: "#1e7a4a" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-2">
                      <span className="text-[10px]">{r.icon}</span>
                      <span className="text-[10px] font-medium text-[#2d3a5a]">{r.label}</span>
                      <svg
                        className="ml-auto shrink-0"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={r.color}
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
