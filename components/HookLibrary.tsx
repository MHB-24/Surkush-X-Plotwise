"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Which <section> on the page opens which popup.
 * Counts real <section> elements inside <main> — the Marquee is a <div>, so it
 * is not counted. 3 = Diagnostic, 5 = Process.
 */
const TRIGGERS = [
  { section: 3, modal: "capture" as const },
  { section: 5, modal: "library" as const },
];

const STAGES = ["All", "TOF", "MOF", "BOF"];

type RawHook = {
  id: string;
  platform: "meta" | "tiktok";
  number: number;
  text: string;
  funnelStage: string[];
  hookType: string;
  categories: string[];
};

type Hook = {
  id: string;
  n: number;
  text: string;
  stages: string[];
  stageLabel: string;
  type: string;
  cats: string[];
  catAll: boolean;
  catLabel: string;
  q: string;
};

type Bank = {
  meta: Hook[];
  tiktok: Hook[];
  types: string[];
  cats: string[];
  key: { token: string; desc: string }[];
};

const EMPTY: Bank = { meta: [], tiktok: [], types: [], cats: [], key: [] };

function shape(raw: RawHook): Hook {
  const cats = raw.categories || [];
  const catAll = cats.includes("All");
  return {
    id: raw.id,
    n: raw.number,
    text: raw.text,
    stages: raw.funnelStage || [],
    stageLabel: (raw.funnelStage || []).join(" · "),
    type: raw.hookType,
    cats,
    catAll,
    catLabel: catAll ? "Any category" : cats.join(", "),
    q: `${raw.text} ${raw.hookType} ${cats.join(" ")}`.toLowerCase(),
  };
}

type View = "capture" | "library" | "nudge";

export function HookLibrary() {
  const [bank, setBank] = useState<Bank | null>(null);
  const [view, setView] = useState<View | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const open = view !== null;
  const [sent, setSent] = useState(false);
  const [sentTo, setSentTo] = useState("");

  const [tab, setTab] = useState<"meta" | "tiktok">("meta");
  const [stage, setStage] = useState("All");
  const [type, setType] = useState("All");
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [keyOpen, setKeyOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");

  const scrollY = useRef(0);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loading = useRef(false);
  // Held in a ref, not the effect body, so a trigger stays fired even if the
  // effect re-runs. Each popup opens once per page load.
  const fired = useRef<Set<number>>(new Set());
  // The trigger observers are built once, so their closure would capture the
  // first `unlocked`. Mirror it so they read the live value.
  const unlockedRef = useRef(false);
  useEffect(() => {
    unlockedRef.current = unlocked;
  }, [unlocked]);

  /** Closing resets the nested key sheet and, if the user never submitted,
   *  clears the form so the next open always starts fresh. */
  const close = useCallback(() => {
    setView(null);
    setKeyOpen(false);
    if (!unlocked) {
      setName("");
      setEmail("");
      setErr("");
    }
  }, [unlocked]);

  /* ---------- data (fetched on first trigger, not on mount) ---------- */
  // Deliberately depends on nothing: `loading` guards against a second fetch,
  // and a stable identity keeps the trigger effect below from re-running (which
  // would reset its fired-set and reopen a popup the visitor already closed).
  const loadBank = useCallback(async () => {
    if (loading.current) return;
    loading.current = true;
    try {
      const res = await fetch("/data/hook-bank.json");
      const json = await res.json();
      const hooks: RawHook[] = json.hooks || [];
      const shaped = hooks.map(shape);
      const cats = new Set<string>();
      shaped.forEach((h) => h.cats.forEach((c) => c !== "All" && cats.add(c)));
      setBank({
        meta: shaped.filter((h) => h.id.startsWith("meta")),
        tiktok: shaped.filter((h) => h.id.startsWith("tiktok")),
        types: json.filters?.hookType || [],
        cats: [...cats],
        key: (json.placeholderKey || []).map(
          (k: { placeholder: string; meaning: string }) => ({
            token: k.placeholder,
            desc: k.meaning,
          })
        ),
      });
    } catch {
      loading.current = false; // allow a retry on the next open
    }
  }, []);

  /* ---------- restore unlock state ---------- */
  useEffect(() => {
    try {
      if (sessionStorage.getItem("pw_hooks_unlocked") === "1") {
        setUnlocked(true);
        setName(sessionStorage.getItem("pw_hooks_name") || "");
        setSentTo(sessionStorage.getItem("pw_hooks_email") || "");
      }
    } catch {}
  }, []);

  /* ---------- scroll triggers ---------- */
  useEffect(() => {
    const sections = document.querySelectorAll("main > section");
    if (!sections.length) return;

    const observers: IntersectionObserver[] = [];

    TRIGGERS.forEach(({ section, modal }) => {
      const el = sections[section - 1];
      if (!el) return;
      if (fired.current.has(section)) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || fired.current.has(section)) return;
          fired.current.add(section);
          io.disconnect();
          loadBank();
          // Once they have submitted, the scroll popups never ask again and
          // never re-open the library — they nudge toward the call instead.
          setView((cur) =>
            cur ? cur : unlockedRef.current ? "nudge" : "capture"
          );
          if (modal === "library") setKeyOpen(false);
        },
        // A ratio threshold is unusable here: these sections are taller than
        // the viewport, so their intersection ratio caps below 0.25 and would
        // never fire. Instead, shrink the root to a band across the middle of
        // the screen and fire when the section reaches it — height-independent.
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [loadBank]);

  /* ---------- open on demand, same pattern as the booking drawer ---------- */
  useEffect(() => {
    // An explicit request to see the hooks, so it opens the library outright.
    const onOpen = () => {
      loadBank();
      setView(unlockedRef.current ? "library" : "capture");
    };
    window.addEventListener("open-hooks", onOpen);
    return () => window.removeEventListener("open-hooks", onOpen);
  }, [loadBank]);

  /* ---------- esc to close ---------- */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (keyOpen) setKeyOpen(false);
      else close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, keyOpen, close]);

  /* ---------- lock body scroll while open ---------- */
  useEffect(() => {
    const b = document.body.style;
    if (open) {
      scrollY.current = window.scrollY;
      b.position = "fixed";
      b.top = `-${scrollY.current}px`;
      b.left = "0";
      b.right = "0";
      b.width = "100%";
      b.overflow = "hidden";
    }
    return () => {
      if (b.position !== "fixed") return;
      b.position = "";
      b.top = "";
      b.left = "";
      b.right = "";
      b.width = "";
      b.overflow = "";
      // Unfixing drops the page to 0, so this puts it back. `html {
      // scroll-behavior: smooth }` would animate that restore — reading as the
      // page scrolling itself from the top — so force the jump.
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY.current);
      html.style.scrollBehavior = prev;
    };
  }, [open]);

  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    []
  );

  const b = bank || EMPTY;

  const matches = useCallback(
    (h: Hook, skip?: string) => {
      const needle = q.trim().toLowerCase();
      return (
        (skip === "stage" || stage === "All" || h.stages.includes(stage)) &&
        (skip === "type" || type === "All" || h.type === type) &&
        (skip === "cat" || cat === "All" || h.catAll || h.cats.includes(cat)) &&
        (!needle || h.q.includes(needle))
      );
    },
    [q, stage, type, cat]
  );

  const all = b[tab];
  const rows = useMemo(() => all.filter((h) => matches(h)), [all, matches]);
  const anyFilter =
    stage !== "All" || type !== "All" || cat !== "All" || q.trim() !== "";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim();
    if (n.length < 2) {
      setErr("First name, so we know who to address it to.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) {
      setErr("That address doesn't look right. Check it and try again.");
      return;
    }
    try {
      sessionStorage.setItem("pw_hooks_unlocked", "1");
      sessionStorage.setItem("pw_hooks_name", n);
      sessionStorage.setItem("pw_hooks_email", em);
    } catch {}
    setUnlocked(true);
    setSent(true);
    setSentTo(em);
    setErr("");
    setView("library");
    loadBank();
  };

  const copy = (h: Hook) => {
    const key = tab + h.id;
    const done = () => {
      setCopied(key);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(null), 1600);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(h.text).then(done, done);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = h.text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch {}
    document.body.removeChild(ta);
    done();
  };

  const book = () => {
    close();
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  const clearAll = () => {
    setStage("All");
    setType("All");
    setCat("All");
    setQ("");
  };

  const showCapture = view === "capture";
  const showLibrary = view === "library";
  const showNudge = view === "nudge";

  return (
    <>
      {/* ---------- nudge: they already have the hooks ---------- */}
      {showNudge && (
        <div
          onClick={(e) => e.target === e.currentTarget && close()}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-[3px]"
          style={{ background: "rgba(28,40,84,0.62)" }}
        >
          <div className="relative w-full max-w-[460px] rounded-2xl border border-mercury bg-white p-7 shadow-[0_30px_80px_rgba(28,40,84,0.4)]">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 grid size-9 place-items-center rounded-lg text-gray transition-colors hover:bg-hero-bg hover:text-primary-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray">
              Already sent
            </p>
            <h2 className="pr-8 text-3xl leading-tight tracking-tight text-primary-1">
              Your 200 hooks are{" "}
              <span className="font-secondary italic">in your inbox.</span>
            </h2>

            <p className="mt-3 text-base font-light leading-relaxed text-tundora">
              {sentTo ? (
                <>
                  Sent to{" "}
                  <span className="font-semibold text-primary-1">{sentTo}</span>
                  , yours to keep.
                </>
              ) : (
                <>Sent to your inbox, yours to keep.</>
              )}{" "}
              Tagged by funnel stage, hook type, and category, for Meta and
              TikTok.
            </p>

            <div className="mt-5 rounded-xl border border-mercury bg-hero-bg p-4">
              <p className="text-base font-light leading-relaxed text-tundora">
                A hook is only the first line. It can&apos;t tell you which
                angle your buyer actually believes, or why the one that worked,
                worked. That&apos;s the ten-day build:{" "}
                <span className="font-semibold text-primary-1">
                  the research on your buyer, five ready-to-shoot scripts, and
                  ten hooks written for your product.
                </span>
              </p>
            </div>

            <button
              onClick={book}
              className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg border border-primary-1 bg-primary-1 text-base font-semibold text-white transition-colors hover:bg-transparent hover:text-primary-1"
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

            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  loadBank();
                  setView("library");
                }}
                className="border-b border-primary-1 text-sm font-semibold text-primary-1"
              >
                Open the library
              </button>
              <p className="text-xs font-light text-gray">
                20 minutes &middot; No pitch at the end
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------- capture ---------- */}
      {showCapture && (
        <div
          onClick={(e) => e.target === e.currentTarget && close()}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-[3px]"
          style={{ background: "rgba(28,40,84,0.62)" }}
        >
          <div className="relative w-full max-w-[430px] rounded-2xl border border-mercury bg-white p-7 shadow-[0_30px_80px_rgba(28,40,84,0.4)]">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 grid size-9 place-items-center rounded-lg text-gray transition-colors hover:bg-hero-bg hover:text-primary-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray">
              Free resource
            </p>
            <h2 className="pr-8 text-3xl leading-tight tracking-tight text-primary-1">
              200 hooks,{" "}
              <span className="font-secondary italic">ready to use.</span>
            </h2>
            <p className="mt-3 text-base font-light leading-relaxed text-tundora">
              Tagged by funnel stage, hook type, and product category. Meta and
              TikTok. Yours in one click.
            </p>

            <form onSubmit={submit} className="mt-6 flex flex-col gap-2.5">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErr("");
                }}
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                className="h-[52px] w-full rounded-lg border border-mercury bg-hero-bg px-4 text-base text-primary-1 outline-none transition-colors placeholder:text-gray focus:border-azure-radiance"
              />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErr("");
                }}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@brand.com"
                className="h-[52px] w-full rounded-lg border border-mercury bg-hero-bg px-4 text-base text-primary-1 outline-none transition-colors placeholder:text-gray focus:border-azure-radiance"
              />
              <button
                type="submit"
                className="mt-1 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg border border-primary-1 bg-primary-1 text-base font-semibold text-white transition-colors hover:bg-transparent hover:text-primary-1"
              >
                Get the hooks
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
            </form>

            {err && <p className="mt-2.5 text-sm text-[#8c2f2f]">{err}</p>}

            <p className="mt-3 text-xs font-light leading-relaxed text-gray">
              Opens here, on this page. We send the link to your inbox as well
              so you can come back to it.
            </p>
          </div>
        </div>
      )}

      {/* ---------- library ---------- */}
      {showLibrary && (
        <div
          onClick={(e) => e.target === e.currentTarget && close()}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-[3px] sm:p-7"
          style={{ background: "rgba(28,40,84,0.62)" }}
        >
          <div className="relative flex h-full max-h-[940px] w-full max-w-[760px] flex-col overflow-hidden rounded-2xl border border-mercury bg-white shadow-[0_30px_90px_rgba(28,40,84,0.45)]">
            {/* header */}
            <div className="flex flex-none items-start justify-between gap-3 border-b border-mercury bg-hero-bg px-5 py-4">
              <div className="min-w-0 pt-0.5">
                <p className="text-lg font-semibold tracking-tight text-primary-1">
                  Surkush&apos;s hook library
                </p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-gray">
                  {b.meta.length + b.tiktok.length} hooks · yours to keep
                </p>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="grid size-10 flex-none place-items-center rounded-lg text-gray transition-colors hover:bg-white hover:text-primary-1"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* sent banner */}
            {sent && sentTo && (
              <div
                className="flex flex-none items-start gap-3 border-b border-mercury px-5 py-3"
                style={{ background: "rgba(0,142,255,0.08)" }}
              >
                <p className="flex-1 text-sm font-light leading-relaxed text-tundora">
                  Sent to{" "}
                  <span className="font-semibold text-primary-1">{sentTo}</span>{" "}
                  as well. That email holds the link, so you can reopen this
                  library any time without filling anything in again.
                </p>
                <button
                  onClick={() => setSent(false)}
                  aria-label="Dismiss"
                  className="grid size-7 flex-none place-items-center rounded-md text-gray transition-colors hover:text-primary-1"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            {/* filters */}
            <div className="flex flex-none flex-col gap-2.5 border-b border-mercury bg-hero-bg px-4 pb-3 pt-3">
              {/* platform tabs */}
              <div className="flex gap-2">
                {(["meta", "tiktok"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTab(t);
                      setCopied(null);
                    }}
                    className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border text-sm font-semibold transition-colors ${
                      tab === t
                        ? "border-primary-1 bg-primary-1 text-white"
                        : "border-mercury bg-white text-gray hover:text-primary-1"
                    }`}
                  >
                    {t === "meta" ? "Meta" : "TikTok"}
                    <span className="text-xs opacity-60 tabular-nums">
                      {b[t].length}
                    </span>
                  </button>
                ))}
              </div>

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                type="search"
                placeholder="Search hooks"
                className="h-11 w-full rounded-lg border border-mercury bg-white px-4 text-base text-primary-1 outline-none transition-colors placeholder:text-gray focus:border-azure-radiance"
              />

              <div className="flex flex-wrap gap-2">
                {/* stage */}
                <div className="flex min-w-0 flex-[1_1_190px] gap-1.5">
                  {STAGES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStage(s)}
                      className={`h-10 min-w-0 flex-1 rounded-lg border text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                        stage === s
                          ? "border-azure-radiance bg-azure-radiance text-white"
                          : "border-mercury bg-white text-gray hover:text-primary-1"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={`h-10 min-w-0 flex-[1_1_140px] rounded-lg border px-3 text-sm outline-none transition-colors ${
                    type === "All"
                      ? "border-mercury bg-white text-gray"
                      : "border-azure-radiance bg-azure-radiance text-white"
                  }`}
                >
                  <option value="All">Hook type</option>
                  {b.types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className={`h-10 min-w-0 flex-[1_1_140px] rounded-lg border px-3 text-sm outline-none transition-colors ${
                    cat === "All"
                      ? "border-mercury bg-white text-gray"
                      : "border-azure-radiance bg-azure-radiance text-white"
                  }`}
                >
                  <option value="All">Category</option>
                  {b.cats.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between gap-3 pt-0.5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-gray tabular-nums">
                    {anyFilter
                      ? `${rows.length} of ${all.length} hooks`
                      : `${all.length} hooks`}
                  </span>
                  {anyFilter && (
                    <button
                      onClick={clearAll}
                      className="border-b border-primary-1 text-xs font-semibold text-primary-1"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setKeyOpen(true)}
                  className="h-8 flex-none rounded-lg border border-mercury bg-white px-3 text-xs font-semibold uppercase tracking-[0.08em] text-gray transition-colors hover:text-primary-1"
                >
                  [ ] key
                </button>
              </div>
            </div>

            {/* rows */}
            <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain p-4">
              {rows.map((h) => {
                const isCopied = copied === tab + h.id;
                return (
                  <div
                    key={h.id}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-xl border border-mercury bg-white p-3.5"
                  >
                    <span className="pt-1 text-xs text-gray tabular-nums">
                      {h.n}
                    </span>
                    <div className="flex min-w-0 flex-col gap-2.5">
                      <p className="text-[15px] leading-relaxed text-primary-1">
                        {h.text}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span
                          className="rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white"
                          style={{ background: "#008eff" }}
                        >
                          {h.stageLabel}
                        </span>
                        <span
                          className="rounded-md px-2 py-1 text-[11px] font-medium text-primary-1"
                          style={{ background: "rgba(0,142,255,0.12)" }}
                        >
                          {h.type}
                        </span>
                        <span className="rounded-md border border-mercury px-2 py-1 text-[11px] font-light text-gray">
                          {h.catLabel}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copy(h)}
                      className={`h-10 flex-none rounded-lg border px-3 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors ${
                        isCopied
                          ? "border-azure-radiance bg-azure-radiance text-white"
                          : "border-mercury bg-white text-gray hover:text-primary-1"
                      }`}
                    >
                      {isCopied ? "Copied" : "Copy"}
                    </button>
                  </div>
                );
              })}

              {bank && rows.length === 0 && (
                <div className="px-4 py-8 text-center">
                  <p className="mb-2 text-base font-semibold text-primary-1">
                    Nothing matches those filters.
                  </p>
                  <p className="mb-5 text-sm font-light text-gray">
                    Widen the category or clear the search.
                  </p>
                  <button
                    onClick={clearAll}
                    className="h-11 rounded-lg border border-mercury bg-white px-5 text-sm font-semibold text-primary-1 transition-colors hover:bg-hero-bg"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {!bank && (
                <p className="py-10 text-center text-sm font-light text-gray">
                  Loading hooks…
                </p>
              )}
            </div>

            {/* footer */}
            <div className="flex flex-none flex-wrap items-center gap-x-4 gap-y-3 border-t border-mercury bg-hero-bg px-4 py-3.5">
              <p className="min-w-0 flex-[1_1_210px] text-[15px] font-medium leading-snug text-primary-1">
                Get five of these built for your product.
              </p>
              <button
                onClick={book}
                className="inline-flex h-12 flex-[1_1_auto] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-primary-1 bg-primary-1 px-5 text-[15px] font-semibold text-white transition-colors hover:bg-transparent hover:text-primary-1"
              >
                Book a Fit Call
                <svg
                  width="17"
                  height="17"
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

            {/* placeholder key sheet */}
            {keyOpen && (
              <div className="absolute inset-0 z-[4] flex flex-col justify-end">
                <div
                  onClick={() => setKeyOpen(false)}
                  className="absolute inset-0"
                  style={{ background: "rgba(28,40,84,0.34)" }}
                />
                <div className="relative flex max-h-[78%] flex-col rounded-t-2xl border-t border-mercury bg-white shadow-[0_-14px_40px_rgba(28,40,84,0.2)]">
                  <div className="flex flex-none items-center justify-between gap-3 border-b border-mercury px-5 py-4">
                    <div>
                      <p className="text-base font-semibold text-primary-1">
                        Placeholder key
                      </p>
                      <p className="mt-0.5 text-xs font-light text-gray">
                        Swap every bracket before you brief a creative.
                      </p>
                    </div>
                    <button
                      onClick={() => setKeyOpen(false)}
                      aria-label="Close"
                      className="grid size-10 flex-none place-items-center rounded-lg text-gray transition-colors hover:bg-hero-bg hover:text-primary-1"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                  <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-1">
                    {b.key.map((k) => (
                      <div
                        key={k.token}
                        className="grid grid-cols-[minmax(120px,160px)_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-b border-mercury py-3.5"
                      >
                        <span
                          className="justify-self-start rounded-md px-2 py-1 text-xs font-medium text-primary-1"
                          style={{ background: "rgba(0,142,255,0.12)" }}
                        >
                          {k.token}
                        </span>
                        <span className="text-sm font-light leading-relaxed text-tundora">
                          {k.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
