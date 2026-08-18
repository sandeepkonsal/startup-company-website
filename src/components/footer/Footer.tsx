import { LeafMark } from "@/components/ui/LeafMark";
import { site, nav } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <LeafMark className="h-7 w-7" />
            <span className="font-display text-[15px] font-semibold text-text">{site.name}</span>
          </div>
          <p className="mt-3 max-w-[32ch] text-[13px] leading-relaxed text-text-soft">{site.altTagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-[13px] sm:grid-cols-3">
          <div>
            <h4 className="font-semibold text-text">Site</h4>
            <ul className="mt-3 space-y-2 text-text-soft">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text">Company</h4>
            <ul className="mt-3 space-y-2 text-text-soft">
              <li><a href="#packages">Packages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text">Contact</h4>
            <ul className="mt-3 space-y-2 text-text-soft">
              <li>{site.email}</li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-line px-6 pt-6 text-[12px] text-text-soft md:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
