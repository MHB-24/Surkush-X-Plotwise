"use client";

import { useEffect, useState, useCallback } from "react";

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function buildCalendar(year: number, month: number) {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  return { first, days };
}

export function BookingDrawer() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", brand: "", problem: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      setMounted(true);
      setSubmitted(false);
      setForm({ name: "", email: "", brand: "", problem: "" });
      setErrors({});
      setSelectedDate(null);
      setSelectedTime(null);
      // tiny delay so the element is in DOM before we trigger the transition
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    };
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

  useEffect(() => {
    if (mounted) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mounted]);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setMounted(false), 400);
  }, []);

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
    setSelectedDate(null);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.brand.trim()) e.brand = "Required";
    if (!form.problem.trim()) e.problem = "Required";
    if (!selectedDate) e.date = "Pick a date";
    if (!selectedTime) e.time = "Pick a time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  const { first, days } = buildCalendar(viewYear, viewMonth);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          bottom: 0, left: 0, right: 0,
          top: isMobile ? 0 : "auto",
          zIndex: 50,
          background: "#fff",
          borderRadius: isMobile ? 0 : "20px 20px 0 0",
          boxShadow: "0 -20px 80px rgba(0,0,0,0.18)",
          maxHeight: isMobile ? "100vh" : "92vh",
          display: "flex",
          flexDirection: "column",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Handle bar */}
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 6px" }}>
          <div style={{ width: 40, height: 4, borderRadius: 9999, background: "#e4e4e4" }} />
        </div>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "8px 28px 16px", borderBottom: "1px solid #f0f0f0",
          flexShrink: 0,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9a9fad", margin: 0 }}>
              Book a Fit Call — 20 minutes
            </p>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1C2854", margin: "2px 0 0" }}>
              {submitted ? "You're booked." : "Tell us about your brand"}
            </h3>
          </div>
          <button
            onClick={close}
            style={{
              width: 32, height: 32, borderRadius: "50%",
              border: "1px solid #e8e8e8",
              background: "transparent", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#9a9fad",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", flex: 1, padding: "24px 28px 28px" }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 0", textAlign: "center", gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#e2f5ea", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e7a4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: "#1C2854", fontSize: 18, margin: "0 0 6px" }}>
                  {MONTHS[viewMonth]} {selectedDate}, {viewYear} · {selectedTime}
                </p>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#6b7280", maxWidth: 360, margin: "0 auto", lineHeight: 1.6 }}>
                  A calendar invite is on its way to <strong style={{ fontWeight: 500, color: "#1C2854" }}>{form.email}</strong>. It&apos;s 20 minutes. No pitch — if we&apos;re not right for you, we&apos;ll say so.
                </p>
              </div>
              <button
                onClick={close}
                style={{
                  marginTop: 8, padding: "10px 28px",
                  borderRadius: 10, border: "1px solid #e0e0e0",
                  background: "transparent", cursor: "pointer",
                  fontSize: 14, fontWeight: 500, color: "#1C2854",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 32, maxWidth: 900, margin: "0 auto" }}>

              {/* LEFT: Form fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                  <FieldBox label="Your name" error={errors.name}>
                    <input
                      type="text" placeholder="Jane Smith" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle(!!errors.name)}
                    />
                  </FieldBox>
                  <FieldBox label="Email" error={errors.email}>
                    <input
                      type="email" placeholder="jane@brand.com" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle(!!errors.email)}
                    />
                  </FieldBox>
                </div>
                <FieldBox label="Brand name" error={errors.brand}>
                  <input
                    type="text" placeholder="Your brand or store name" value={form.brand}
                    onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
                    style={inputStyle(!!errors.brand)}
                  />
                </FieldBox>
                <FieldBox label="What problem are you facing?" error={errors.problem}>
                  <textarea
                    rows={5} value={form.problem}
                    placeholder="Tell us about your creative challenges — what's working, what isn't, what you've tried..."
                    onChange={e => setForm(f => ({ ...f, problem: e.target.value }))}
                    style={{ ...inputStyle(!!errors.problem), resize: "none" }}
                  />
                </FieldBox>

                {/* Submit — desktop */}
                <button onClick={handleSubmit} style={submitBtnStyle}>
                  Confirm booking
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                {(errors.date || errors.time) && (
                  <p style={{ fontSize: 12, color: "#ef4444", marginTop: -8 }}>
                    {errors.date ? "Please pick a date and time on the right." : "Please pick a time slot."}
                  </p>
                )}
              </div>

              {/* RIGHT: Calendar + time slots */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Calendar */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <button onClick={prevMonth} style={navBtnStyle}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1C2854" }}>{MONTHS[viewMonth]} {viewYear}</span>
                    <button onClick={nextMonth} style={navBtnStyle}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 4 }}>
                    {DAYS.map(d => (
                      <div key={d} style={{ textAlign: "center", fontSize: 9, fontWeight: 700, color: "#b0b8c9", textTransform: "uppercase", letterSpacing: "0.05em", padding: "4px 0" }}>{d}</div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
                    {Array.from({ length: first }).map((_, i) => <div key={`e${i}`} />)}
                    {Array.from({ length: days }).map((_, i) => {
                      const day = i + 1;
                      const past = isPast(day);
                      const sel = selectedDate === day;
                      return (
                        <button
                          key={day}
                          disabled={past}
                          onClick={() => { setSelectedDate(day); setSelectedTime(null); setErrors(e => ({ ...e, date: "" })); }}
                          style={{
                            aspectRatio: "1", borderRadius: 8,
                            border: sel ? "none" : "none",
                            background: sel ? "#1C2854" : "transparent",
                            color: sel ? "#fff" : past ? "#d0d5e0" : "#374151",
                            fontSize: 12, fontWeight: sel ? 600 : 400,
                            cursor: past ? "not-allowed" : "pointer",
                            transition: "background 0.15s, color 0.15s",
                          }}
                          onMouseEnter={e => { if (!past && !sel) (e.target as HTMLElement).style.background = "#f3f6fb"; }}
                          onMouseLeave={e => { if (!past && !sel) (e.target as HTMLElement).style.background = "transparent"; }}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  {errors.date && <p style={{ fontSize: 11, color: "#ef4444", marginTop: 6 }}>{errors.date}</p>}
                </div>

                {/* Time slots */}
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9a9fad", marginBottom: 10 }}>
                    {selectedDate ? `Available times · ${MONTHS[viewMonth]} ${selectedDate}` : "Available times"}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {TIME_SLOTS.map(slot => {
                      const sel = selectedTime === slot;
                      const disabled = !selectedDate;
                      return (
                        <button
                          key={slot}
                          disabled={disabled}
                          onClick={() => { setSelectedTime(slot); setErrors(e => ({ ...e, time: "" })); }}
                          style={{
                            padding: "9px 0", borderRadius: 10,
                            border: `1px solid ${sel ? "#1C2854" : "#e8ecf4"}`,
                            background: sel ? "#1C2854" : "#fff",
                            color: sel ? "#fff" : disabled ? "#d0d5e0" : "#374151",
                            fontSize: 12, fontWeight: sel ? 600 : 400,
                            cursor: disabled ? "not-allowed" : "pointer",
                            transition: "all 0.15s",
                          }}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  {errors.time && <p style={{ fontSize: 11, color: "#ef4444", marginTop: 6 }}>{errors.time}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function FieldBox({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1C2854", marginBottom: 6 }}>
        {label}
      </label>
      {children}
      {error && <p style={{ fontSize: 11, color: "#ef4444", marginTop: 4 }}>{error}</p>}
    </div>
  );
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%", boxSizing: "border-box",
    border: `1px solid ${hasError ? "#fca5a5" : "#e4e8f2"}`,
    borderRadius: 10, padding: "10px 14px",
    fontSize: 13, fontWeight: 300, color: "#1a1f36",
    background: hasError ? "#fff5f5" : "#fff",
    outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
  };
}

const navBtnStyle: React.CSSProperties = {
  width: 28, height: 28, borderRadius: "50%",
  border: "1px solid #e8ecf4", background: "transparent",
  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  color: "#9a9fad",
};

const submitBtnStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
  width: "100%", padding: "13px 0",
  borderRadius: 12, border: "none",
  background: "#1C2854", color: "#fff",
  fontSize: 14, fontWeight: 500,
  cursor: "pointer",
  marginTop: 4,
  transition: "opacity 0.15s",
};
