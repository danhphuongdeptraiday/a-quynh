import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { SectionTabs } from "@/components/ui/section-tabs";
import { conceptBanner, conceptHero, floor1, floor2, floor3, floorTabs } from "@/data/concept";

export const metadata: Metadata = {
  title: "Concept 3 tầng",
  description: "Ba tầng phòng ăn riêng tại A Quỳnh: Bếp Lửa Tổ Tiên, Khung Cửi Chàm và Chốn Mây Ngàn.",
};

const sectionX = "px-margin-mobile md:px-margin-desktop";
const levelLabel = "mb-4 block font-label-caps text-label-caps tracking-[0.3em] text-outline uppercase";

export default function ConceptPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className={`mb-20 md:mb-section-gap ${sectionX}`}>
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 flex flex-col gap-gutter md:flex-row md:items-end">
            <h1 className="max-w-2xl font-display-lg-mobile text-display-lg-mobile leading-none tracking-tighter text-on-surface uppercase md:font-display-lg md:text-[84px]">
              {conceptHero.title} <br />
              <span className="font-medium text-primary italic">{conceptHero.titleEmphasis}</span>
            </h1>
            <p className="max-w-sm font-body-lg text-body-lg text-on-surface-variant md:pb-4">{conceptHero.body}</p>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-lg shadow-xl shadow-primary/5 md:h-[614px]">
            <Image
              src={conceptHero.image.src}
              alt={conceptHero.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tab các tầng */}
      <SectionTabs
        tabs={floorTabs}
        className={`sticky top-16 z-40 mb-12 flex justify-center bg-surface/80 py-4 backdrop-blur-sm md:top-20 ${sectionX}`}
        listClassName="gap-6 border-b border-outline-variant md:gap-12"
        tabClassName="-mb-px font-label-caps text-label-caps uppercase"
      />

      {/* Tầng 1 */}
      <section id={floor1.id} className={`mb-20 md:mb-section-gap ${sectionX}`}>
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="group relative mb-8 md:col-span-7 md:mb-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={floor1.image.src}
                alt={floor1.image.alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -right-10 -bottom-10 hidden rounded-lg border border-outline-variant/50 bg-surface-container-high p-8 shadow-xl md:block">
              <span className="mb-2 block font-label-caps text-label-caps text-primary uppercase">
                {floor1.theme.label}
              </span>
              <p className="font-headline-sm text-headline-sm text-on-surface uppercase">{floor1.theme.value}</p>
            </div>
          </div>
          <div className="md:col-span-5 md:pl-12">
            <span className={levelLabel}>{floor1.level}</span>
            <h2 className="mb-6 font-headline-md text-headline-md text-primary uppercase italic">{floor1.title}</h2>
            <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">{floor1.description}</p>
            <div className="space-y-4">
              {[floor1.theme, ...floor1.specs].map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center gap-4 border-b border-outline-variant pb-4 ${i === 0 ? "md:hidden" : ""}`}
                >
                  <span className="font-label-caps text-label-caps text-secondary uppercase">{spec.label}</span>
                  <span className="ml-auto text-right font-body-md text-body-md text-on-surface">{spec.value}</span>
                </div>
              ))}
            </div>
            <Link
              href={floor1.cta.href}
              className="mt-12 inline-block rounded-full bg-primary px-8 py-4 font-label-caps text-label-caps tracking-widest text-on-primary uppercase shadow-md transition-all hover:bg-primary-container"
            >
              {floor1.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Tầng 2 */}
      <section id={floor2.id} className={`mb-20 bg-surface-container-low py-16 md:mb-section-gap md:py-24 ${sectionX}`}>
        <div className="mx-auto flex max-w-container-max flex-col items-center gap-12 md:flex-row-reverse md:gap-16">
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[700px] md:w-3/5">
            <Image
              src={floor2.image.src}
              alt={floor2.image.alt}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/5 md:pr-12">
            <span className={levelLabel}>{floor2.level}</span>
            <h2 className="mb-6 font-headline-md text-headline-md text-secondary uppercase">{floor2.title}</h2>
            <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">{floor2.description}</p>
            <div className="mb-8 grid grid-cols-2 gap-4">
              {floor2.features.map((f) => (
                <div
                  key={f.label}
                  className="flex aspect-square flex-col items-center justify-center rounded-xl border border-outline-variant/30 bg-surface-container-highest p-6 text-center"
                >
                  <Icon name={f.icon} className="mb-2 !text-3xl text-primary" />
                  <span className="font-label-caps text-label-caps text-on-surface uppercase">{f.label}</span>
                </div>
              ))}
            </div>
            <p className="border-l-2 border-primary pl-4 font-body-md text-body-md text-secondary italic">
              &ldquo;{floor2.quote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Tầng 3 */}
      <section id={floor3.id} className={`mb-20 md:mb-section-gap ${sectionX}`}>
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 text-center md:mb-16">
            <span className={levelLabel}>{floor3.level}</span>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary uppercase md:font-display-lg md:text-display-lg">
              {floor3.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative mb-6 h-[320px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[500px]">
                <Image
                  src={floor3.image.src}
                  alt={floor3.image.alt}
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">{floor3.suiteName}</h3>
              <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">{floor3.description}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  src={floor3.detailImage.src}
                  alt={floor3.detailImage.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-r-xl border-l-4 border-primary bg-surface-container-low p-8 shadow-sm">
                <h4 className="mb-4 font-label-caps text-label-caps text-secondary uppercase">{floor3.featuresTitle}</h4>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                  {floor3.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={floor3.cta.href}
                  className="mt-8 block w-full rounded-lg border border-outline py-4 text-center font-label-caps text-label-caps text-on-surface uppercase transition-all hover:border-primary hover:bg-primary hover:text-on-primary"
                >
                  {floor3.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className={`mb-20 md:mb-section-gap ${sectionX}`}>
        <div className="relative mx-auto flex h-[450px] max-w-container-max items-center justify-center overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src={conceptBanner.image.src}
              alt={conceptBanner.image.alt}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          </div>
          <div className="relative z-10 px-6 text-center text-on-primary">
            <h2 className="mb-6 font-display-lg-mobile text-display-lg-mobile uppercase md:font-display-lg md:text-display-lg">
              {conceptBanner.title} <br />
              {conceptBanner.titleLine2}
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body-lg text-body-lg opacity-90">{conceptBanner.body}</p>
            <div className="mx-auto h-1 w-24 rounded-full bg-on-primary" />
          </div>
        </div>
      </section>
    </div>
  );
}
