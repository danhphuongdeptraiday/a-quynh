import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-highest md:border-outline-variant/30 md:bg-surface">
      {/* Mobile */}
      <div className="flex flex-col items-center gap-2 px-margin-mobile py-8 text-center md:hidden">
        <div className="font-headline-sm text-headline-sm tracking-widest text-primary uppercase">
          {site.name}
        </div>
        <div className="mb-2 flex gap-6">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-label-sm text-label-sm text-secondary transition-colors hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant">{site.copyright}</p>
      </div>

      {/* Desktop */}
      <div className="hidden px-margin-desktop py-12 md:block">
        <div className="mx-auto flex max-w-container-max items-start justify-between gap-gutter">
          <div className="space-y-3">
            <div className="font-headline-sm text-headline-sm tracking-widest text-primary uppercase">
              {site.name}
            </div>
            <p className="max-w-sm text-sm text-on-surface-variant">
              {site.tagline}
            </p>
            <p className="text-sm text-on-surface-variant">
              {site.contact.address} · <span className="font-semibold text-primary">{site.contact.phone}</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            {site.footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <h5 className="mb-1 font-label-caps text-label-caps text-secondary uppercase">
                  {group.title}
                </h5>
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-container-max border-t border-outline-variant/20 pt-6 text-xs text-on-surface-variant/60">
          {site.copyright}
        </div>
      </div>
    </footer>
  );
}
