import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { homeContact, homeEvents, homeHero, homeIntro, homeRooms } from "@/data/home";
import { site } from "@/data/site";

const FACEBOOK_PATH =
  "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z";
const INSTAGRAM_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

const sectionX = "px-margin-mobile md:px-margin-desktop";
const phoneHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative flex h-[707px] w-full items-end justify-center overflow-hidden pb-12 md:h-screen md:items-center md:pb-0">
        <div className="absolute inset-0">
          <Image
            src={homeHero.image.src}
            alt={homeHero.image.alt}
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:bg-gradient-to-b md:from-white/20 md:via-white/20 md:to-background/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl px-margin-mobile md:px-4 md:text-center">
          <p className="mb-4 font-label-caps text-label-caps tracking-[0.3em] text-primary uppercase opacity-90">
            {homeHero.eyebrow}
          </p>
          <h1 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-on-surface italic md:font-display-lg md:text-display-lg md:not-italic">
            {homeHero.titleBefore}
            <span className="text-primary italic">{homeHero.titleEmphasis}</span>
            {homeHero.titleAfter}
          </h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-6">
            <Link
              href={homeHero.primaryCta.href}
              className="rounded bg-primary px-10 py-4 text-center font-label-caps text-label-caps tracking-widest text-on-primary uppercase shadow-lg transition-all duration-300 hover:brightness-110"
            >
              {homeHero.primaryCta.label}
            </Link>
            <Link
              href={homeHero.secondaryCta.href}
              className="rounded border-2 border-primary px-10 py-4 text-center font-label-caps text-label-caps tracking-widest text-primary uppercase backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-on-primary"
            >
              {homeHero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce text-primary opacity-60 md:block">
          <Icon name="keyboard_double_arrow_down" className="!text-3xl" />
        </div>
      </header>

      {/* Giới thiệu */}
      <section
        className={`mx-auto grid max-w-container-max items-center gap-12 py-20 md:grid-cols-2 md:gap-gutter md:py-section-gap ${sectionX}`}
      >
        <div className="relative order-2 aspect-[4/5] w-full border border-outline-variant shadow-xl md:order-1">
          <Image
            src={homeIntro.image.src}
            alt={homeIntro.image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 space-y-8 md:order-2">
          <span className="font-label-caps text-label-caps tracking-[0.2em] text-secondary uppercase">
            {homeIntro.eyebrow}
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">{homeIntro.title}</h2>
          <p className="border-l-4 border-primary pl-6 font-body-lg text-body-lg text-on-surface-variant italic">
            &ldquo;{homeIntro.quote}&rdquo;
          </p>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            {homeIntro.body}
          </p>
          <Link
            href={homeIntro.cta.href}
            className="inline-block border-b-2 border-primary pb-2 font-label-caps text-label-caps tracking-widest text-primary uppercase transition-opacity hover:opacity-70"
          >
            {homeIntro.cta.label}
          </Link>
        </div>
      </section>

      {/* Phòng riêng */}
      <section className="bg-surface-container-low py-20 md:py-section-gap">
        <div className={`mx-auto mb-12 max-w-container-max md:mb-16 ${sectionX}`}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
                {homeRooms.eyebrow}
              </span>
              <h2 className="mt-2 font-headline-md text-headline-md text-on-surface">
                {homeRooms.title}
              </h2>
            </div>
            <Link
              href={homeRooms.cta.href}
              className="self-start border border-outline px-8 py-3 font-label-caps text-label-caps tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-on-primary md:self-auto"
            >
              {homeRooms.cta.label}
            </Link>
          </div>
        </div>
        <div className={`mx-auto grid max-w-container-max grid-cols-1 gap-gutter md:grid-cols-12 ${sectionX}`}>
          {[homeRooms.featured, ...homeRooms.others].map((room, i) => (
            <div
              key={room.name}
              className={`group overflow-hidden rounded-xl bg-surface shadow-sm md:col-span-4`}
            >
              <div
                className={`relative w-full overflow-hidden aspect-[4/5]`}
              >
                <Image
                  src={room.image.src}
                  alt={room.image.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="mb-2 font-headline-sm text-headline-sm text-on-surface">{room.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{room.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sự kiện */}
      <section className={`relative bg-surface py-20 md:py-section-gap ${sectionX}`}>
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #8c2218 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative mx-auto max-w-container-max">
          <div className="mb-16 text-center">
            <span className="font-label-caps text-label-caps tracking-[0.3em] text-primary uppercase">
              {homeEvents.eyebrow}
            </span>
            <h2 className="mt-4 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
              {homeEvents.title}
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {homeEvents.items.map((event, i) => (
              <div key={event.title} className={`space-y-6 ${i === 1 ? "md:mt-24" : ""}`}>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={event.image.src}
                    alt={event.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-all duration-700 hover:scale-110"
                  />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{event.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{event.description}</p>
                <Link
                  href={event.cta.href}
                  className="flex items-center gap-2 font-label-caps text-label-caps text-primary uppercase transition-all hover:gap-4"
                >
                  {event.cta.label} <Icon name="arrow_forward" className="!text-[16px]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
