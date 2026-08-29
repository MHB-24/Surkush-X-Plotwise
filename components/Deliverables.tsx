import Image from "next/image";

const deliverables = [
  {
    num: "01",
    title: "The Research Document",
    body: "Your buyer in their words. The belief blocking the sale. What competitors claim and where the gaps are. The argument only you can win.",
    image: "/assets/images/deliverable-01.webp",
  },
  {
    num: "02",
    title: "Five Scripts, Ready to Shoot",
    body: "Each built on a documented angle, tagged with the belief it attacks and the funnel stage it's for.",
    image: "/assets/images/deliverable-02.webp",
  },
  {
    num: "03",
    title: "Ten Hooks",
    body: "Two per script. Same message, opposite openings. The difference between testing and guessing.",
    image: "/assets/images/deliverable-03.webp",
  },
  {
    num: "04",
    title: "The Workspace — 90 Days",
    body: "Brief creators with a link. Uploads land against the right angle. Your research stays alive and compounds.",
    image: "/assets/images/deliverable-04.webp",
  },
];

export function Deliverables() {
  return (
    <section id="deliverables" className="py-20 md:py-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="heading-2 mb-12">
              Everything{" "}
              <span className="font-secondary italic">Lands</span> on Day Ten
            </h2>

            <div className="space-y-4">
              {deliverables.map((d) => (
                <div
                  key={d.num}
                  className="border border-mercury rounded-md p-6 sm:p-8 flex flex-col gap-6"
                >
                  <div className="flex gap-6">
                    <span className="text-gray text-large font-semibold shrink-0">
                      {d.num}
                    </span>
                    <div>
                      <h3 className="font-secondary text-xl md:text-2xl italic text-primary-1">
                        {d.title}
                      </h3>
                      <p className="mt-2 text-medium font-light leading-relaxed text-tundora">
                        {d.body}
                      </p>
                    </div>
                  </div>
                  <Image
                    src={d.image}
                    alt={d.title}
                    width={800}
                    height={400}
                    className="w-full object-contain rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-primary-1 text-white rounded-md p-8 md:p-10 lg:sticky lg:top-24">
              <div className="text-6xl font-light tracking-[-2px]">$1,500</div>
              <p className="mt-1 text-medium font-light text-white/50">
                One payment
              </p>

              <p className="mt-6 text-medium font-light leading-relaxed text-white/60">
                A creative strategist costs $6&ndash;8K/month. An agency retainer
                starts at $5K and locks you in for three. This is the research
                layer, done once, done properly.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                {[
                  "Delivered in ten working days",
                  "Full refund on day five — no reasons needed",
                  "Every finding sourced and verifiable",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                    <p className="text-[15px] font-light text-white/60">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="mt-8 block w-full text-center bg-white text-primary-1 text-lg font-medium py-3.5 rounded-lg hover:bg-zumthor transition-colors"
              >
                Book a Fit Call
              </a>

              <p className="mt-4 text-center text-sm font-light text-white/30">
                You see half the build before you&apos;re committed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
