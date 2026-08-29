"use client";

const items = [
  "We Research",
  "Your Campaign Grows",
  "Conversions Convert",
];

function StarBurst() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary-1 shrink-0 mx-8"
    >
      <path d="M12 0l2.09 7.26L21.6 4.4l-4.44 6.96L24 12l-6.84 0.64 4.44 6.96-7.51-2.86L12 24l-2.09-7.26L2.4 19.6l4.44-6.96L0 12l6.84-0.64L2.4 4.4l7.51 2.86L12 0z" />
    </svg>
  );
}

export function Marquee() {
  const renderItems = () =>
    items.map((text, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span className="text-4xl md:text-5xl xl:text-6xl font-light text-sail whitespace-nowrap">
          {text.split(" ").map((word, wi) => {
            const isAccent = ["Research", "Grows", "Convert"].includes(word);
            return (
              <span key={wi}>
                {wi > 0 && " "}
                {isAccent ? (
                  <span className="font-secondary italic">{word}</span>
                ) : (
                  word
                )}
              </span>
            );
          })}
        </span>
        <StarBurst />
      </span>
    ));

  return (
    <div className="overflow-hidden py-8 md:py-10">
      <div className="marquee-track flex items-center">
        <div className="flex items-center shrink-0 marquee-content">
          {renderItems()}
        </div>
        <div className="flex items-center shrink-0 marquee-content" aria-hidden>
          {renderItems()}
        </div>
      </div>
    </div>
  );
}
