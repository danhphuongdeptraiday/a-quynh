import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import {
  aboutCta,
  aboutGallery,
  aboutHero,
  aboutOrigin,
  aboutPhilosophy,
  aboutQuote,
} from "@/data/about";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Câu chuyện A Quỳnh — hành trình mang hương vị nguyên bản của vùng cao phía Bắc.",
};

const sectionX = "px-margin-mobile md:px-margin-desktop";

export default function AboutPage() {
  return (
    <div className="overflow-hidden pt-16 md:pt-20">
      {/* Hero */}
      <header className="relative flex h-[707px] items-center justify-center overflow-hidden bg-surface-dim md:h-[819px]">
        <div className="absolute inset-0">
          <Image
            src={aboutHero.image.src}
            alt={aboutHero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface" />
        </div>
        <div className={`relative z-10 max-w-4xl text-center ${sectionX}`}>
          <span className="mb-4 block font-label-caps text-label-caps text-secondary uppercase">
            {aboutHero.eyebrow}
          </span>
          <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            {aboutHero.title}
          </h1>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant italic">
            &ldquo;{aboutHero.quote}&rdquo;
          </p>
        </div>
      </header>

      {/* Nguồn gốc */}
      <section className={`bg-surface py-20 md:py-section-gap ${sectionX}`}>
        <div className="mx-auto grid max-w-container-max grid-cols-12 gap-gutter">
          <div className="order-2 col-span-12 flex flex-col justify-center md:order-1 md:col-span-5">
            <h2 className="mb-8 border-l-4 border-primary-container pl-6 font-headline-md text-headline-md text-primary">
              {aboutOrigin.title}
            </h2>
            <div className="space-y-6 text-on-surface-variant">
              <p className="font-body-lg text-body-lg leading-relaxed">{aboutOrigin.lead}</p>
              <p className="font-body-md text-body-md">{aboutOrigin.body}</p>
            </div>
          </div>
          <div className="order-1 col-span-12 mb-8 md:order-2 md:col-span-7 md:mb-0">
            <div className="group relative">
              <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 border border-outline-variant/50 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                <Image
                  src={aboutOrigin.image.src}
                  alt={aboutOrigin.image.alt}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-all duration-700 group-hover:brightness-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triết lý */}
      <section className="bg-surface-container-low py-20 md:py-section-gap">
        <div className={`mx-auto mb-12 max-w-container-max text-center md:mb-20 ${sectionX}`}>
          <span className="mb-2 block font-label-caps text-label-caps text-secondary uppercase">
            {aboutPhilosophy.eyebrow}
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            {aboutPhilosophy.title}
          </h2>
        </div>
        <div className={`mx-auto grid max-w-container-max grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 ${sectionX}`}>
          {aboutPhilosophy.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col items-center rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-8 text-center transition-colors hover:bg-surface-container"
            >
              <Icon
                name={pillar.icon}
                className="mb-6 !text-5xl text-primary transition-transform group-hover:scale-110"
              />
              <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">{pillar.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trích dẫn */}
      <section className="relative flex items-center justify-center py-20 md:py-section-gap">
        <div className="absolute inset-0">
          <Image
            src={aboutQuote.image.src}
            alt={aboutQuote.image.alt}
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-surface/70" />
        </div>
        <div className="relative z-10 max-w-3xl px-6 text-center">
          <blockquote className="font-headline-sm text-headline-sm leading-snug text-primary italic md:font-headline-md md:text-headline-md">
            &ldquo;{aboutQuote.text}&rdquo;
          </blockquote>
          <cite className="mt-8 block font-label-caps text-label-caps tracking-widest text-secondary not-italic uppercase">
            {aboutQuote.author}
          </cite>
        </div>
      </section>

      {/* Bộ ảnh */}
      <section className={`bg-surface py-20 md:py-section-gap ${sectionX}`}>
        <div className="mx-auto grid max-w-container-max grid-cols-12 gap-6">
          <div className="relative col-span-12 h-[320px] overflow-hidden rounded-lg shadow-sm md:col-span-8 md:h-[500px]">
            <Image
              src={aboutGallery.large.src}
              alt={aboutGallery.large.alt}
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-6 md:col-span-4 md:flex md:flex-col">
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-surface-container p-6 md:h-1/2 md:p-12">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "url(/textures/black-linen.png)" }}
              />
              <p className="relative z-10 text-center font-body-lg text-body-lg text-on-surface italic">
                {aboutGallery.caption}
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-sm md:aspect-auto md:h-1/2">
              <Image
                src={aboutGallery.small.src}
                alt={aboutGallery.small.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`pb-20 md:pb-section-gap ${sectionX}`}>
        <div className="mx-auto max-w-4xl border-t border-outline-variant/30 pt-20 text-center">
          <h2 className="mb-8 font-headline-md text-headline-md text-on-surface">{aboutCta.title}</h2>
          <p className="mb-10 font-body-lg text-body-lg text-on-surface-variant">{aboutCta.body}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href={aboutCta.primary.href}
              className="rounded-sm bg-primary px-10 py-4 font-label-caps text-label-caps tracking-widest text-on-primary uppercase transition-all hover:bg-primary-container active:scale-95"
            >
              {aboutCta.primary.label}
            </Link>
            <Link
              href={aboutCta.secondary.href}
              className="rounded-sm border-2 border-primary px-10 py-4 font-label-caps text-label-caps tracking-widest text-primary uppercase transition-all hover:bg-primary/5 active:scale-95"
            >
              {aboutCta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
