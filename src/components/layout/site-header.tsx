"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { bookingLink, mainNav, site } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b border-outline-variant backdrop-blur-md transition-shadow md:border-outline-variant/30 ${
          scrolled ? "bg-surface/95 shadow-md" : "bg-surface/90"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-margin-mobile md:h-20 md:px-margin-desktop">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="text-primary transition-transform active:scale-95 md:hidden"
            aria-label="Mở menu"
            aria-expanded={drawerOpen}
            aria-controls="nav-drawer"
          >
            <Icon name="menu" />
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 font-headline-md text-headline-md tracking-widest text-primary uppercase"
          >
            {site.name}
            <span className="hidden h-1.5 w-1.5 rounded-full bg-primary md:block" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Điều hướng chính">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body-md text-body-md transition-colors duration-300 ${
                  isActive(pathname, item.href)
                    ? "border-b-2 border-primary pb-1 font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* TODO: nối với i18n khi có bản tiếng Anh */}
          <button
            type="button"
            className="flex items-center gap-2 font-label-sm text-label-sm tracking-widest text-primary uppercase transition-colors hover:text-primary md:font-label-caps md:text-label-caps md:text-on-surface-variant"
          >
            VN / EN
            {/* Bọc ngoài vì CSS của Google Fonts đặt display cho icon, ghi đè `hidden` */}
            <span className="hidden md:inline-flex">
              <Icon name="translate" className="!text-[18px]" />
            </span>
          </button>
        </div>
      </header>

      {/* Drawer điều hướng trên mobile */}
      <div
        className={`fixed inset-0 z-[60] bg-on-surface/40 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
        aria-hidden
      />
      <aside
        id="nav-drawer"
        className={`fixed inset-y-0 left-0 z-[70] flex w-80 max-w-[85vw] flex-col bg-surface px-6 py-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
        inert={!drawerOpen}
      >
        <div className="mb-10 flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-primary-fixed-variant">
            {site.drawerTitle}
          </span>
          <button
            type="button"
            onClick={closeDrawer}
            className="text-on-surface-variant"
            aria-label="Đóng menu"
          >
            <Icon name="close" />
          </button>
        </div>
        <nav className="flex flex-col gap-6" aria-label="Điều hướng mobile">
          {[...mainNav, bookingLink].map((item) => {
            const active = item.href !== bookingLink.href && isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                className={`flex items-center gap-4 py-2 font-body-lg text-body-lg transition-colors ${
                  active
                    ? "border-l-4 border-primary pl-4 font-bold text-on-primary-fixed-variant"
                    : "pl-5 text-on-surface-variant hover:bg-surface-variant/50"
                }`}
              >
                <Icon name={item.icon} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-outline-variant pt-6">
          <a
            href={site.socials[0].href}
            className="flex items-center gap-3 py-2 text-secondary transition-colors hover:text-primary"
          >
            <Icon name="face_nod" />
            <span className="font-label-md text-label-md">Theo dõi Fanpage</span>
          </a>
        </div>
      </aside>
    </>
  );
}
