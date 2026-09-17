import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { workItems } from "@/data/work";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description: "Businesses we've helped register, build, and launch.",
};

export default function OurWorkPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream pt-32 pb-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal className="max-w-2xl">
            <p data-reveal-item className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-green-deep">
              Our Work
            </p>
            <h1 className="font-display balance mt-4 text-4xl font-semibold text-text md:text-5xl">
              Businesses we&rsquo;ve helped take root.
            </h1>
            <p data-reveal-item className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-text-soft">
              We&rsquo;re a young studio — this page grows as our client list does. Here&rsquo;s what we&rsquo;ve
              built so far, starting with our own site.
            </p>
          </Reveal>

          <Reveal stagger={0.1} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {workItems.map((item) => (
              <div
                key={item.slug}
                data-reveal-item
                className={cn(
                  "flex flex-col rounded-2xl p-8",
                  item.status === "live"
                    ? "border border-line bg-cream-raised"
                    : "border border-dashed border-line bg-transparent"
                )}
              >
                <span
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.12em]",
                    item.status === "live" ? "text-gold" : "text-text-soft"
                  )}
                >
                  {item.category}
                </span>
                <h2
                  className={cn(
                    "font-display mt-3 text-[22px] font-semibold",
                    item.status === "live" ? "text-text" : "text-text-soft"
                  )}
                >
                  {item.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-text-soft">{item.summary}</p>

                {item.highlights.length > 0 && (
                  <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-line pt-4">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[13px] text-text">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {item.status === "live" && item.href && (
                  <a
                    href={item.href}
                    data-cursor="hover"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-[12.5px] font-semibold text-text transition-transform hover:-translate-y-0.5"
                  >
                    {item.linkLabel ?? "View"} <span aria-hidden="true">→</span>
                  </a>
                )}

                {item.status === "placeholder" && (
                  <a
                    href="/#calculator"
                    data-cursor="hover"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-[12.5px] font-semibold text-green-deep underline decoration-line decoration-2 underline-offset-4 hover:decoration-green"
                  >
                    Start your business →
                  </a>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
