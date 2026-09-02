"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SELL_OPTIONS = [
  "Beauty and skincare",
  "Supplements and wellness",
  "Apparel and accessories",
  "Home and lifestyle",
  "Food and beverage",
  "Electronics and gadgets",
  "Pet",
  "Something else",
];

const REVENUE_OPTIONS = [
  "Pre-launch",
  "Under $10K",
  "$10K to $50K",
  "$50K to $150K",
  "$150K to $500K",
  "$500K+",
];

const PROBLEM_OPTIONS = [
  "Creative isn't converting",
  "We can't produce content fast enough",
  "We don't know which angles to test",
  "We're launching and starting from zero",
  "Something else",
];

const COUNTRIES = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "SE", name: "Sweden", dial: "+46" },
  { code: "NO", name: "Norway", dial: "+47" },
  { code: "DK", name: "Denmark", dial: "+45" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "PT", name: "Portugal", dial: "+351" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "PL", name: "Poland", dial: "+48" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "IL", name: "Israel", dial: "+972" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "PH", name: "Philippines", dial: "+63" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "KR", name: "South Korea", dial: "+82" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "MX", name: "Mexico", dial: "+52" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "KE", name: "Kenya", dial: "+254" },
];

type F = {
  firstName: string;
  workEmail: string;
  businessName: string;
  storeUrl: string;
  sells: string;
  country: string;
  phone: string;
  revenue: string;
  problem: string;
};

const BLANK: F = {
  firstName: "",
  workEmail: "",
  businessName: "",
  storeUrl: "",
  sells: "",
  country: "US",
  phone: "",
  revenue: "",
  problem: "",
};

export function BookingDrawer() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState<F>(BLANK);
  const [errors, setErrors] = useState<Partial<Record<keyof F, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sbw, setSbw] = useState(0);
  const scrollY = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* The body scrolls, so its scrollbar sits inside the right padding and the
     fields stop short of it. Measure it once and subtract, so the visual gap
     on both sides is the same 124px. */
  useEffect(() => {
    const d = document.createElement("div");
    d.style.cssText =
      "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px";
    document.body.appendChild(d);
    setSbw(d.offsetWidth - d.clientWidth);
    document.body.removeChild(d);
  }, []);

  useEffect(() => {
    const handler = () => {
      setMounted(true);
      setSubmitted(false);
      setForm(BLANK);
      setErrors({});
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    };
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

  /* body scroll lock — same fixed-position pattern as HookLibrary */
  useEffect(() => {
    const b = document.body.style;
    if (mounted) {
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
  }, [mounted]);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setMounted(false), 400);
  }, []);

  const setField = <K extends keyof F>(k: K, v: F[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const dial = COUNTRIES.find((c) => c.code === form.country)?.dial ?? "+1";

  const validate = () => {
    const e: Partial<Record<keyof F, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.workEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.workEmail))
      e.workEmail = "Valid work email required";
    if (!form.businessName.trim()) e.businessName = "Required";
    if (!form.storeUrl.trim()) e.storeUrl = "Required";
    if (!form.sells) e.sells = "Select a category";
    if (!form.revenue) e.revenue = "Select a range";
    if (!form.problem) e.problem = "Select an option";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  if (!mounted) return null;

  const two = !isMobile;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(28,40,84,0.55)",
          backdropFilter: "blur(4px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          top: isMobile ? 0 : "auto",
          zIndex: 50,
          background: "#fff",
          borderRadius: isMobile ? 0 : "20px 20px 0 0",
          boxShadow: "0 -24px 80px rgba(28,40,84,0.22)",
          height: isMobile ? "100dvh" : "90vh",
          display: "flex",
          flexDirection: "column",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        {/* Close — absolutely positioned so it never affects content alignment */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 2,
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: "1px solid #e4e4e4",
            background: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9a9fad",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Handle bar (desktop only) */}
        {!isMobile && (
          <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 0" }}>
            <div style={{ width: 40, height: 4, borderRadius: 9999, background: "#e4e4e4" }} />
          </div>
        )}

        {/* Header — same horizontal padding as body so heading left-aligns with fields */}
        <div
          style={{
            borderBottom: "1px solid #e4e4e4",
            flexShrink: 0,
            padding: isMobile ? "24px 20px 20px" : "20px 124px 20px",
          }}
        >
          {/* heading row: title + 200 hooks pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <h3
              style={{
                fontSize: isMobile ? 28 : 36,
                fontWeight: 700,
                color: "#1c2854",
                margin: 0,
                fontFamily: "inherit",
                lineHeight: 1.15,
              }}
            >
              {submitted ? "You’re booked." : "Let’s get started"}
            </h3>
            {!submitted && (
              <button
                onClick={() => {
                  close();
                  setTimeout(() => window.dispatchEvent(new CustomEvent("open-hooks")), 420);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: "1px solid #e4e4e4",
                  background: "#fff",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1c2854",
                  fontFamily: "inherit",
                  flexShrink: 0,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#008eff", display: "inline-block", flexShrink: 0 }} />
                200 hooks
              </button>
            )}
          </div>
          {!submitted && (
            <p style={{ fontSize: 15, fontWeight: 300, color: "#6b7280", margin: "8px 0 0", lineHeight: 1.5 }}>
              Fill in the blanks and we&apos;ll respond in one business day.
            </p>
          )}
        </div>

        {/* Body */}
        <div
          style={{
            overflowY: "scroll",
            flex: 1,
            padding: isMobile
              ? "20px 20px 36px"
              : `24px ${124 - sbw}px 36px 124px`,
          }}
        >
          {submitted ? (
            /* Confirmation */
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "72px 0",
                textAlign: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: "rgba(0,142,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#008eff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    color: "#1c2854",
                    fontSize: 18,
                    margin: "0 0 6px",
                  }}
                >
                  Request received
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#6b7280",
                    maxWidth: 380,
                    margin: "0 auto",
                    lineHeight: 1.65,
                  }}
                >
                  We&apos;ll reach out to{" "}
                  <strong style={{ fontWeight: 500, color: "#1c2854" }}>
                    {form.workEmail}
                  </strong>{" "}
                  within 24 hours to confirm your slot. It&apos;s 20 minutes —
                  no pitch.
                </p>
              </div>
              <button
                onClick={close}
                style={{
                  marginTop: 8,
                  padding: "10px 28px",
                  borderRadius: 10,
                  border: "1px solid #e4e4e4",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#1c2854",
                  fontFamily: "inherit",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            /* Form */
            <div
              style={{
                display: "grid",
                gridTemplateColumns: two ? "1fr 1fr" : "1fr",
                gap: "36px 64px",
                width: "100%",
              }}
            >
              {/* 1. First name */}
              <Field label="First name" error={errors.firstName}>
                <input
                  type="text"
                  placeholder="Jane"
                  value={form.firstName}
                  autoComplete="given-name"
                  onChange={(e) => setField("firstName", e.target.value)}
                  style={inputSt(!!errors.firstName)}
                />
              </Field>

              {/* 2. Work email */}
              <Field label="Work email" error={errors.workEmail}>
                <input
                  type="email"
                  placeholder="jane@yourbrand.com"
                  value={form.workEmail}
                  autoComplete="email"
                  onChange={(e) => setField("workEmail", e.target.value)}
                  style={inputSt(!!errors.workEmail)}
                />
              </Field>

              {/* 3. Business name */}
              <Field label="Business name" error={errors.businessName}>
                <input
                  type="text"
                  placeholder="Your brand name"
                  value={form.businessName}
                  autoComplete="organization"
                  onChange={(e) => setField("businessName", e.target.value)}
                  style={inputSt(!!errors.businessName)}
                />
              </Field>

              {/* 4. Store URL */}
              <Field label="Store URL" error={errors.storeUrl}>
                <input
                  type="text"
                  placeholder="yourbrand.com"
                  value={form.storeUrl}
                  autoComplete="url"
                  onChange={(e) => setField("storeUrl", e.target.value)}
                  style={inputSt(!!errors.storeUrl)}
                />
              </Field>

              {/* 5. What do you sell */}
              <Field label="What do you sell?" error={errors.sells}>
                <Picker
                  value={form.sells}
                  onChange={(v) => setField("sells", v)}
                  options={SELL_OPTIONS.map((o) => ({ value: o, label: o }))}
                  placeholder="Select a category"
                  hasError={!!errors.sells}
                />
              </Field>

              {/* 6. Country — searchable */}
              <Field label="Country" error={errors.country}>
                <Picker
                  value={form.country}
                  onChange={(v) => setField("country", v)}
                  options={COUNTRIES.map((c) => ({ value: c.code, label: c.name }))}
                  placeholder="Select a country"
                  searchable
                />
              </Field>

              {/* 7. Phone — dial auto-set from country */}
              <Field label="Phone number" error={errors.phone}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: `1.5px solid ${errors.phone ? "#ef4444" : "#b8c2d8"}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 300,
                      color: "#9a9fad",
                      flexShrink: 0,
                      paddingRight: 8,
                      paddingBottom: 10,
                      paddingTop: 10,
                      userSelect: "none",
                    }}
                  >
                    {dial}
                  </span>
                  <input
                    type="tel"
                    placeholder="000 000 0000"
                    value={form.phone}
                    autoComplete="tel-national"
                    onChange={(e) => setField("phone", e.target.value)}
                    style={{
                      ...inputSt(false),
                      borderBottom: "none",
                      flex: 1,
                      minWidth: 0,
                    }}
                  />
                </div>
              </Field>

              {/* 8. Monthly revenue */}
              <Field
                label="Roughly what are you doing in monthly revenue?"
                error={errors.revenue}
              >
                <Picker
                  value={form.revenue}
                  onChange={(v) => setField("revenue", v)}
                  options={REVENUE_OPTIONS.map((o) => ({ value: o, label: o }))}
                  placeholder="Select a range"
                  hasError={!!errors.revenue}
                />
              </Field>

              {/* 9. Problem — full width */}
              <div style={{ gridColumn: "1 / -1" }}>
                <Field
                  label="What’s not working right now?"
                  error={errors.problem}
                >
                  <Picker
                    value={form.problem}
                    onChange={(v) => setField("problem", v)}
                    options={PROBLEM_OPTIONS.map((o) => ({ value: o, label: o }))}
                    placeholder="Select an option"
                    hasError={!!errors.problem}
                  />
                </Field>
              </div>

              {/* Submit */}
              <div style={{ gridColumn: "1 / -1" }}>
                <button
                  onClick={() => { if (validate()) setSubmitted(true); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: 12,
                    border: "none",
                    background: "#1c2854",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    marginTop: 4,
                  }}
                >
                  Book my call
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
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 18,
          fontWeight: 500,
          color: "#1c2854",
          marginBottom: 10,
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: 12, color: "#ef4444", marginTop: 6 }}>{error}</p>
      )}
    </div>
  );
}

function inputSt(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    boxSizing: "border-box",
    border: "none",
    borderBottom: `1.5px solid ${hasError ? "#ef4444" : "#b8c2d8"}`,
    borderRadius: 0,
    padding: "10px 0",
    fontSize: 18,
    fontWeight: 300,
    color: "#1c2854",
    background: "transparent",
    outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
  };
}

type Opt = { value: string; label: string };

/**
 * Themed dropdown. The panel is portalled to <body> because the drawer carries a
 * `transform`, which would otherwise make it the containing block for a fixed
 * child and also clip it inside the scrolling form body.
 */
function Picker({
  value,
  onChange,
  options,
  placeholder,
  hasError,
  searchable,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Opt[];
  placeholder: string;
  hasError?: boolean;
  searchable?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState<{
    top: number;
    left: number;
    width: number;
    maxH: number;
    up: boolean;
  } | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const needle = q.trim().toLowerCase();
  const list = needle
    ? options.filter((o) => o.label.toLowerCase().includes(needle))
    : options;
  const selected = options.find((o) => o.value === value);

  const place = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const gap = 8;
    const edge = 16;
    // Scrolled out of the drawer's viewport — nothing sensible to anchor to.
    if (r.bottom < 0 || r.top > vh) {
      setOpen(false);
      return;
    }
    const below = vh - r.bottom - gap - edge;
    const above = r.top - gap - edge;
    // a little shorter than the drawer, which is 90vh
    const cap = Math.round(vh * 0.9) - 72;
    const up = below < 240 && above > below;
    const maxH = Math.max(180, Math.min(cap, Math.max(0, up ? above : below)));
    setPos({
      top: up ? r.top - gap : r.bottom + gap,
      left: r.left,
      width: r.width,
      maxH,
      up,
    });
  }, []);

  useEffect(() => {
    if (!open) {
      setQ("");
      setActive(0);
      return;
    }
    place();
    const onScroll = () => place();
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (wrapRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", place);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", place);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [open, place]);

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
  }, [open, searchable]);

  const commit = (o: Opt) => {
    onChange(o.value);
    setOpen(false);
  };

  const onNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => {
        const n = list.length;
        if (!n) return 0;
        const next = e.key === "ArrowDown" ? i + 1 : i - 1;
        const wrapped = (next + n) % n;
        listRef.current
          ?.querySelectorAll("[data-opt]")
          [wrapped]?.scrollIntoView({ block: "nearest" });
        return wrapped;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (list[active]) commit(list[active]);
    }
  };

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={!searchable ? onNav : undefined}
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          border: "none",
          borderBottom: `1.5px solid ${
            hasError ? "#ef4444" : open ? "#1c2854" : "#b8c2d8"
          }`,
          borderRadius: 0,
          padding: "10px 0",
          fontSize: 18,
          fontWeight: 300,
          color: selected ? "#1c2854" : "#9a9fad",
          background: "transparent",
          textAlign: "left",
          cursor: "pointer",
          outline: "none",
          fontFamily: "inherit",
          transition: "border-color 0.15s",
        }}
      >
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {selected ? selected.label : placeholder}
        </span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1c2854"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.18s ease",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open &&
        pos &&
        createPortal(
          <div
            ref={panelRef}
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              width: pos.width,
              transform: pos.up ? "translateY(-100%)" : undefined,
              maxHeight: pos.maxH,
              zIndex: 70,
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              border: "1px solid #e4e4e4",
              borderRadius: 16,
              boxShadow: "0 20px 56px rgba(28,40,84,0.20)",
              overflow: "hidden",
            }}
          >
            {searchable && (
              <div
                style={{
                  flexShrink: 0,
                  padding: 10,
                  borderBottom: "1px solid #f1f1f1",
                }}
              >
                <input
                  ref={searchRef}
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value);
                    setActive(0);
                  }}
                  onKeyDown={onNav}
                  placeholder="Search"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: "1px solid #e4e4e4",
                    borderRadius: 10,
                    padding: "10px 13px",
                    fontSize: 15,
                    fontWeight: 300,
                    color: "#1c2854",
                    background: "#f1f1f1",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            )}

            <div
              ref={listRef}
              style={{
                minHeight: 0,
                overflowY: "auto",
                overscrollBehavior: "contain",
                padding: 6,
              }}
            >
              {list.map((o, i) => {
                const sel = o.value === value;
                return (
                  <button
                    key={o.value}
                    data-opt
                    type="button"
                    onClick={() => commit(o)}
                    onMouseEnter={() => setActive(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                      width: "100%",
                      textAlign: "left",
                      border: "none",
                      borderRadius: 10,
                      padding: "11px 13px",
                      fontSize: 16,
                      fontWeight: sel ? 500 : 300,
                      color: sel ? "#008eff" : "#1c2854",
                      background: active === i ? "#f1f1f1" : "transparent",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    <span>{o.label}</span>
                    {sel && (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#008eff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ flexShrink: 0 }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                );
              })}

              {list.length === 0 && (
                <p
                  style={{
                    margin: 0,
                    padding: "20px 13px",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#9a9fad",
                  }}
                >
                  No matches
                </p>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
