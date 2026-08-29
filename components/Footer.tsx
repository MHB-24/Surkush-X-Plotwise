import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zumthor overflow-hidden">
      <div className="w-[95%] mx-auto my-10">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-8 pb-20">
          <div className="flex-1 flex flex-col gap-10 justify-center sm:justify-between items-center sm:items-start">
            <h3 className="text-large text-center sm:text-left">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-4xl md:text-5xl xl:text-6xl font-light max-w-xl text-center sm:text-left">
              Now is always the right time to{" "}
              <span className="font-secondary italic">start!</span>
            </p>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-18">
            <div className="flex-1 flex flex-col gap-10">
              <h3 className="text-large text-center sm:text-left">Address</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-charcoal max-w-3xs text-center sm:text-left hover:text-primary-1"
                >
                  2546, 447 Broadway, 2nd Floor, New York, US, 10013
                </Link>
                <Link
                  href="mailto:partnerships@surkush.com"
                  className="text-charcoal max-w-3xs text-center sm:text-left hover:text-primary-1"
                >
                  partnerships@surkush.com
                </Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-10">
              <h3 className="text-large text-center sm:text-left">Follow Us</h3>
              <div className="flex flex-row sm:flex-col lg:flex-row gap-4">
                <Link
                  href="https://www.linkedin.com/company/surkush/"
                  className="text-charcoal hover:text-primary-1"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://www.instagram.com/surkushagency"
                  className="text-charcoal hover:text-primary-1"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/share/1BNoisPvzj/"
                  className="text-charcoal hover:text-primary-1"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-10 pt-6 border-t border-sail">
          <p className="text-charcoal text-small text-center sm:text-left">
            &copy; 2026 Surkush - Service Based Entrepreneurial Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="#"
              className="text-charcoal hover:text-primary-1"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="text-charcoal hover:text-primary-1"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
