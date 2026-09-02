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
  sellsOther: string;
  country: string;
  dialCode: string;
  phone: string;
  revenue: string;
  problem: string;
  problemOther: string;
};

const BLANK: F = {
  firstName: "",
  workEmail: "",
  businessName: "",
  storeUrl: "",
  sells: "",
  sellsOther: "",
  country: "",
  dialCode: "+1",
  phone: "",
  revenue: "",
  problem: "",
  problemOther: "",
};

type Step = {
  key: keyof F;
  question: string;
  type: "text" | "email" | "select" | "country" | "phone" | "submit";
  placeholder?: string;
  options?: string[];
  otherKey?: keyof F;
  autoComplete?: string;
};

const STEPS: Step[] = [
  {
    key: "firstName",
    question: "What's your name?",
    type: "text",
    placeholder: "Enter your name",
    autoComplete: "given-name",
  },
  {
    key: "workEmail",
    question: "{name}, What's the best email address to reach you?",
    type: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
  },
  {
    key: "businessName",
    question: "What's the name of your brand?",
    type: "text",
    placeholder: "Enter your brand name",
    autoComplete: "organization",
  },
  {
    key: "storeUrl",
    question: "What's your store URL?",
    type: "text",
    placeholder: "yourbrand.com",
    autoComplete: "url",
  },
  {
    key: "sells",
    question: "What do you sell?",
    type: "select",
    options: SELL_OPTIONS,
    otherKey: "sellsOther",
  },
  {
    key: "country",
    question: "Where are you located?",
    type: "country",
  },
  {
    key: "phone",
    question: "What's the best number to reach you?",
    type: "phone",
    placeholder: "000 000 0000",
    autoComplete: "tel-national",
  },
  {
    key: "revenue",
    question: "Roughly what are you doing in monthly revenue?",
    type: "select",
    options: REVENUE_OPTIONS,
  },
  {
    key: "problem",
    question: "What's not working right now?",
    type: "select",
    options: PROBLEM_OPTIONS,
    otherKey: "problemOther",
  },
];

const TOTAL_STEPS = STEPS.length;

export function BookingDrawer() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState<F>(BLANK);
  const [step, setStep] = useState(-1);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const scrollY = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handler = () => {
      setMounted(true);
      setSubmitted(false);
      setForm(BLANK);
      setStep(-1);
      setError("");
      setDirection("forward");
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    };
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

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
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY.current);
      html.style.scrollBehavior = prev;
    };
  }, [mounted]);

  useEffect(() => {
    if (step >= 0 && !submitted) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [step, submitted]);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setMounted(false), 400);
  }, []);

  const setField = <K extends keyof F>(k: K, v: F[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError("");
  };

  const currentStep = step >= 0 && step < TOTAL_STEPS ? STEPS[step] : null;

  const setCountryAndDial = (code: string) => {
    setField("country", code);
    const c = COUNTRIES.find((x) => x.code === code);
    if (c) setField("dialCode", c.dial);
  };

  const validateStep = (): boolean => {
    if (!currentStep) return true;
    const val = form[currentStep.key];

    if (currentStep.type === "text" || currentStep.type === "email") {
      if (!val.trim()) {
        setError("This field is required");
        return false;
      }
      if (
        currentStep.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)
      ) {
        setError("Please enter a valid email address");
        return false;
      }
    }

    if (currentStep.type === "select" && !val) {
      setError("Please select an option");
      return false;
    }

    if (
      currentStep.type === "select" &&
      val === "Something else" &&
      currentStep.otherKey
    ) {
      if (!form[currentStep.otherKey].trim()) {
        setError("Please tell us more");
        return false;
      }
    }

    if (currentStep.type === "country" && !val) {
      setError("Please select your country");
      return false;
    }

    return true;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setError("");
    setDirection("forward");
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
  };

  const goBack = () => {
    setError("");
    setDirection("back");
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const startFlow = () => {
    setDirection("forward");
    setStep(0);
  };

  const resolveQuestion = (q: string) =>
    q.replace("{name}", form.firstName.trim().split(" ")[0] || "");

  if (!mounted) return null;

  return (
    <>
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

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile ? "16px 20px" : "20px 40px",
            flexShrink: 0,
          }}
        >
          {/* Logo */}
          <img
            src="/surkush-logo.png"
            alt="Surkush"
            style={{ height: 64 }}
          />

          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid #dfe1e6",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9a9fad",
            }}
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
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Stepper */}
        {step >= 0 && !submitted && (
          <div
            style={{
              padding: isMobile ? "0 20px 16px" : "0 40px 20px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 3,
                    borderRadius: 2,
                    background:
                      i < step
                        ? "#1c2854"
                        : i === step
                        ? "#008eff"
                        : "#d1d5db",
                    transition: "background 0.3s ease",
                  }}
                />
              ))}
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: 13,
                fontWeight: 500,
                color: "#9a9fad",
                marginTop: 10,
              }}
            >
              {step + 1} of {TOTAL_STEPS}
            </p>
          </div>
        )}

        {/* Content area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "0 24px 24px" : "0 40px 40px",
            overflow: "hidden",
          }}
        >
          <div
            key={submitted ? "done" : step}
            style={{
              width: "100%",
              maxWidth: 560,
              animation: `${direction === "forward" ? "slideInRight" : "slideInLeft"} 0.35s ease forwards`,
            }}
          >
            {submitted ? (
              /* Confirmation */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 20,
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
                      fontSize: 22,
                      margin: "0 0 8px",
                      fontFamily: "inherit",
                    }}
                  >
                    Thank you for taking the time!
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 300,
                      color: "#6b7280",
                      maxWidth: 400,
                      margin: "0 auto",
                      lineHeight: 1.65,
                    }}
                  >
                    We&apos;ll reach out to{" "}
                    <strong style={{ fontWeight: 500, color: "#1c2854" }}>
                      {form.workEmail}
                    </strong>{" "}
                    within 24 hours to confirm your slot.
                  </p>
                </div>
                <button
                  onClick={close}
                  style={{
                    marginTop: 8,
                    padding: "12px 32px",
                    borderRadius: 10,
                    border: "none",
                    background: "#1c2854",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "inherit",
                  }}
                >
                  Continue
                </button>
              </div>
            ) : step < 0 ? (
              /* Welcome screen */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? 24 : 30,
                    fontWeight: 400,
                    color: "#1c2854",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  We&apos;ve been in your shoes and we know what you&apos;re
                  going through.
                </p>
                <p
                  style={{
                    fontSize: isMobile ? 24 : 30,
                    fontWeight: 600,
                    color: "#1c2854",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  Now, let&apos;s kick-start your brand journey!
                </p>
                <div style={{ marginTop: 12 }}>
                  <button
                    onClick={startFlow}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 32px",
                      borderRadius: 10,
                      border: "none",
                      background: "#1c2854",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    Continue
                    <svg
                      width="16"
                      height="16"
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
            ) : currentStep ? (
              /* Step content */
              <div>
                <p
                  style={{
                    fontSize: isMobile ? 24 : 30,
                    fontWeight: 400,
                    color: "#1c2854",
                    lineHeight: 1.3,
                    margin: "0 0 24px",
                  }}
                >
                  {resolveQuestion(currentStep.question)}
                </p>

                {/* Text / Email input */}
                {(currentStep.type === "text" ||
                  currentStep.type === "email") && (
                  <div>
                    <input
                      ref={inputRef}
                      type={currentStep.type}
                      placeholder={currentStep.placeholder}
                      value={form[currentStep.key]}
                      autoComplete={currentStep.autoComplete}
                      onChange={(e) =>
                        setField(currentStep.key, e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") goNext();
                      }}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        border: "none",
                        borderBottom: `2px solid ${error ? "#ef4444" : "#1c2854"}`,
                        borderRadius: 0,
                        padding: "12px 0",
                        fontSize: isMobile ? 20 : 24,
                        fontWeight: 300,
                        color: "#1c2854",
                        background: "transparent",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                )}

                {/* Select options */}
                {currentStep.type === "select" && currentStep.options && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {currentStep.options.map((opt) => {
                      const isOther = opt === "Something else";
                      const isSelected = form[currentStep.key] === opt;
                      return (
                        <div key={opt}>
                          <button
                            type="button"
                            onClick={() => {
                              setField(currentStep.key, opt);
                              if (!isOther) {
                                if (currentStep.otherKey)
                                  setField(currentStep.otherKey, "");
                              }
                            }}
                            style={{
                              width: "100%",
                              maxWidth: 560,
                              textAlign: "left",
                              padding: "14px 18px",
                              borderRadius: 10,
                              border: `1.5px solid ${isSelected ? "#1c2854" : "#dfe1e6"}`,
                              background: isSelected ? "#1c2854" : "#fff",
                              color: isSelected ? "#fff" : "#1c2854",
                              fontSize: 16,
                              fontWeight: isSelected ? 500 : 400,
                              cursor: "pointer",
                              fontFamily: "inherit",
                              transition: "all 0.15s ease",
                            }}
                          >
                            {opt}
                          </button>
                          {isOther &&
                            isSelected &&
                            currentStep.otherKey && (
                              <input
                                ref={inputRef}
                                type="text"
                                placeholder="Please tell us more..."
                                value={form[currentStep.otherKey]}
                                onChange={(e) =>
                                  setField(
                                    currentStep.otherKey!,
                                    e.target.value
                                  )
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") goNext();
                                }}
                                style={{
                                  width: "100%",
                                  maxWidth: 560,
                                  boxSizing: "border-box",
                                  border: "none",
                                  borderBottom: `2px solid ${error && !form[currentStep.otherKey!].trim() ? "#ef4444" : "#1c2854"}`,
                                  borderRadius: 0,
                                  padding: "12px 0",
                                  marginTop: 12,
                                  fontSize: 18,
                                  fontWeight: 300,
                                  color: "#1c2854",
                                  background: "transparent",
                                  outline: "none",
                                  fontFamily: "inherit",
                                }}
                              />
                            )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Country picker */}
                {currentStep.type === "country" && (
                  <CountryPicker
                    value={form.country}
                    onChange={(v) => setCountryAndDial(v)}
                    hasError={!!error}
                  />
                )}

                {/* Phone input */}
                {currentStep.type === "phone" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: `2px solid ${error ? "#ef4444" : "#1c2854"}`,
                      maxWidth: 560,
                    }}
                  >
                    <input
                      type="text"
                      value={form.dialCode}
                      onChange={(e) => setField("dialCode", e.target.value)}
                      style={{
                        width: `${Math.max(3, form.dialCode.length + 1)}ch`,
                        flexShrink: 0,
                        border: "none",
                        borderRadius: 0,
                        padding: "12px 0",
                        paddingRight: 8,
                        fontSize: isMobile ? 20 : 24,
                        fontWeight: 300,
                        color: "#9a9fad",
                        background: "transparent",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    <input
                      ref={inputRef}
                      type="tel"
                      placeholder={currentStep.placeholder}
                      value={form.phone}
                      autoComplete={currentStep.autoComplete}
                      onChange={(e) => setField("phone", e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") goNext();
                      }}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        border: "none",
                        borderRadius: 0,
                        padding: "12px 0",
                        fontSize: isMobile ? 20 : 24,
                        fontWeight: 300,
                        color: "#1c2854",
                        background: "transparent",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <p
                    style={{
                      fontSize: 13,
                      color: "#ef4444",
                      marginTop: 10,
                    }}
                  >
                    {error}
                  </p>
                )}

                {/* Navigation buttons */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 28,
                  }}
                >
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "12px 20px",
                        borderRadius: 10,
                        border: "1px solid #dfe1e6",
                        background: "#fff",
                        color: "#1c2854",
                        fontSize: 15,
                        fontWeight: 500,
                        cursor: "pointer",
                        fontFamily: "inherit",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={goNext}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 28px",
                      borderRadius: 10,
                      border: "none",
                      background: "#1c2854",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    {step === TOTAL_STEPS - 1 ? "Submit" : "Next"}
                    <svg
                      width="16"
                      height="16"
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
            ) : null}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

function CountryPicker({
  value,
  onChange,
  hasError,
}: {
  value: string;
  onChange: (v: string) => void;
  hasError: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const needle = q.trim().toLowerCase();
  const list = needle
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(needle))
    : COUNTRIES;

  const selected = COUNTRIES.find((c) => c.code === value);

  useEffect(() => {
    if (open) {
      setTimeout(() => searchRef.current?.focus(), 50);
      const handler = (e: MouseEvent) => {
        if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
    setQ("");
  }, [open]);

  return (
    <div ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          border: "none",
          borderBottom: `2px solid ${hasError ? "#ef4444" : open ? "#1c2854" : "#1c2854"}`,
          borderRadius: 0,
          padding: "12px 0",
          fontSize: 20,
          fontWeight: 300,
          color: selected ? "#1c2854" : "#9a9fad",
          background: "transparent",
          textAlign: "left",
          cursor: "pointer",
          outline: "none",
          fontFamily: "inherit",
        }}
      >
        <span>{selected ? selected.name : "Select your country"}</span>
        <svg
          width="14"
          height="14"
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

      {open && (
        <div
          style={{
            marginTop: 8,
            background: "#fff",
            border: "1px solid #dfe1e6",
            borderRadius: 12,
            boxShadow: "0 12px 40px rgba(28,40,84,0.15)",
            overflow: "hidden",
            maxHeight: 320,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: 8,
              borderBottom: "1px solid #f1f1f1",
              flexShrink: 0,
            }}
          >
            <input
              ref={searchRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid #e4e4e4",
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 15,
                fontWeight: 300,
                color: "#1c2854",
                background: "#f7f8fa",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </div>
          <div style={{ overflowY: "auto", padding: 4 }}>
            {list.map((c) => {
              const sel = c.code === value;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    onChange(c.code);
                    setOpen(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    textAlign: "left",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px 12px",
                    fontSize: 15,
                    fontWeight: sel ? 500 : 300,
                    color: sel ? "#008eff" : "#1c2854",
                    background: "transparent",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <span>{c.name}</span>
                  {sel && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#008eff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  padding: "16px 12px",
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
        </div>
      )}
    </div>
  );
}
