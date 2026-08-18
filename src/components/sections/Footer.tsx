import { Mark } from "@/components/ui/Mark";

export function Footer() {
  return (
    <footer id="faq" className="border-t border-line py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Mark className="h-7 w-7" />
            <span className="font-display text-[15px] font-semibold text-ink">
              The Startup Company
            </span>
          </div>
          <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-text-soft">
            CIPC registration and SARS tax compliance for South African small
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-[13px] sm:grid-cols-3">
          <div>
            <h4 className="font-semibold text-ink">Services</h4>
            <ul className="mt-3 space-y-2 text-text-soft">
              <li>CIPC Registration</li>
              <li>SARS Tax Compliance</li>
              <li>Bookkeeping</li>
              <li>BEE &amp; Compliance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Company</h4>
            <ul className="mt-3 space-y-2 text-text-soft">
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Contact</h4>
            <ul className="mt-3 space-y-2 text-text-soft">
              <li>hello@thestartupcompany.co.za</li>
              <li>+27 (0)10 000 0000</li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-line px-6 pt-6 text-[12px] text-text-soft md:px-8">
        © {new Date().getFullYear()} The Startup Company. All rights reserved.
      </div>
    </footer>
  );
}
