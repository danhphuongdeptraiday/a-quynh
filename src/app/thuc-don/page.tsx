import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { SectionTabs } from "@/components/ui/section-tabs";
import { drinks, formatPrice, localDishes, menuHero, menuTabs, thangCo, type Drink } from "@/data/menu";

export const metadata: Metadata = {
  title: "Thực đơn",
  description: "Thắng cố, món local và rượu ngô vùng cao tại A Quỳnh.",
};

const sectionX = "px-margin-mobile md:px-margin-desktop";
const glassPanel = "border border-outline/15 bg-surface/70 backdrop-blur-md";

const toneClasses: Record<Drink["tone"], { icon: string; fill: string }> = {
  primary: { icon: "text-primary", fill: "bg-primary/10" },
  secondary: { icon: "text-secondary", fill: "bg-secondary/10" },
  tertiary: { icon: "text-tertiary", fill: "bg-tertiary/10" },
};
const fillHeights: Record<Drink["fillLevel"], string> = { low: "h-24", mid: "h-32", high: "h-40" };

export default function MenuPage() {
  return (
    <div className="pt-16 md:pt-0">
      {/* Hero */}
      <section className="relative flex h-[480px] w-full items-end overflow-hidden pb-12 md:h-[716px] md:pb-24">
        <div className="absolute inset-0">
          <Image
            src={menuHero.image.src}
            alt={menuHero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
        </div>
        <div className={`relative z-10 mx-auto w-full max-w-container-max ${sectionX}`}>
          <span className="mb-4 block font-label-md text-label-md tracking-widest text-secondary uppercase">
            {menuHero.eyebrow}
          </span>
          <h1 className="mb-2 font-display-lg-mobile text-display-lg-mobile text-on-surface uppercase md:font-display-lg md:text-display-lg">
            {menuHero.title}
          </h1>
          <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">{menuHero.body}</p>
        </div>
      </section>

      {/* Tab danh mục */}
      <SectionTabs
        tabs={menuTabs}
        className="sticky top-16 z-40 border-b border-outline-variant/20 bg-surface/95 py-4 backdrop-blur-sm md:top-20 md:py-6"
        listClassName={`mx-auto max-w-container-max gap-8 md:gap-12 ${sectionX}`}
        tabClassName="font-label-md text-label-md uppercase"
      />

      {/* Thắng cố */}
      <section id={thangCo.id} className={`mx-auto max-w-container-max py-20 md:py-section-gap ${sectionX}`}>
        <div className="mb-16 grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-5">
            <span className="font-label-md text-label-md tracking-widest text-secondary uppercase">
              {thangCo.eyebrow}
            </span>
            <h2 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
              {thangCo.title}
            </h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant italic">{thangCo.description}</p>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg shadow-sm md:order-2 md:col-span-7">
            <Image
              src={thangCo.image.src}
              alt={thangCo.image.alt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {thangCo.dishes.map((dish) => (
            <article key={dish.name} className="group">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={dish.image.src}
                  alt={dish.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface transition-colors group-hover:text-primary">
                  {dish.name}
                </h3>
                <span className="pt-1 font-label-md text-label-md whitespace-nowrap text-secondary">
                  {formatPrice(dish.price)}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">{dish.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Món local */}
      <section id={localDishes.id} className="relative overflow-hidden bg-surface-container-low py-20 md:py-section-gap">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "url(/textures/az-subtle.png)" }}
        />
        <div className={`relative z-10 mx-auto max-w-container-max ${sectionX}`}>
          <div className="mb-16">
            <span className="font-label-md text-label-md tracking-widest text-secondary uppercase">
              {localDishes.eyebrow}
            </span>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
              {localDishes.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
            {/* Món nổi bật */}
            <article className="group relative flex aspect-square items-end overflow-hidden rounded-xl p-6 shadow-lg md:col-span-8 md:aspect-[16/9] md:p-8">
              <Image
                src={localDishes.featured.image.src}
                alt={localDishes.featured.image.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative">
                <h3 className="mb-2 font-headline-md text-headline-md text-white">{localDishes.featured.name}</h3>
                <p className="mb-4 max-w-lg font-body-md text-body-md text-white/90">
                  {localDishes.featured.description}
                </p>
                <span className="inline-block rounded-full bg-primary px-4 py-2 font-label-md text-label-md text-on-primary">
                  {formatPrice(localDishes.featured.price, localDishes.featured.unit)}
                </span>
              </div>
            </article>

            {/* Món đường phố */}
            <article className={`flex flex-col justify-between rounded-xl p-8 shadow-sm md:col-span-4 ${glassPanel}`}>
              <div>
                <span className="mb-4 block font-label-md text-label-md tracking-widest text-secondary uppercase">
                  {localDishes.highlight.eyebrow}
                </span>
                <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">{localDishes.highlight.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {localDishes.highlight.description}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-outline-variant/30 pt-6">
                <span className="font-body-lg text-body-lg font-bold text-on-surface">
                  {formatPrice(localDishes.highlight.price)}
                </span>
                {/* TODO: nút thêm món — chưa có giỏ hàng/đặt món */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-md">
                  <Icon name="add" />
                </span>
              </div>
            </article>

            {/* Món ngang */}
            {localDishes.dishes.map((dish, i) => (
              <article
                key={dish.name}
                className={`flex flex-col overflow-hidden rounded-xl shadow-sm md:col-span-6 md:flex-row ${glassPanel}`}
              >
                <div className={`relative aspect-video overflow-hidden md:aspect-auto md:w-1/2 ${i === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={dish.image.src}
                    alt={dish.image.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover grayscale-[0.3] transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <div className={`p-8 md:w-1/2 ${i === 1 ? "md:order-1" : ""}`}>
                  <h3 className="mb-2 font-headline-sm text-headline-sm text-on-surface">{dish.name}</h3>
                  <p className="mb-4 font-body-md text-body-md text-on-surface-variant">{dish.description}</p>
                  <span className="font-label-md text-label-md font-bold text-primary">{formatPrice(dish.price)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Đồ uống */}
      <section
        id={drinks.id}
        className={`mx-auto max-w-container-max py-20 text-center md:py-section-gap ${sectionX}`}
      >
        <div className="mx-auto mb-16 max-w-2xl">
          <span className="font-label-md text-label-md tracking-widest text-secondary uppercase">
            {drinks.eyebrow}
          </span>
          <h2 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            {drinks.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{drinks.description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {drinks.items.map((drink) => (
            <div key={drink.name} className="flex flex-col items-center">
              <div className="relative mb-6 flex h-48 w-24 items-center justify-center rounded border border-outline-variant bg-surface-container-low shadow-sm">
                <div
                  className={`absolute inset-x-2 bottom-2 ${fillHeights[drink.fillLevel]} ${toneClasses[drink.tone].fill}`}
                />
                <Icon name={drink.icon} className={`relative !text-4xl ${toneClasses[drink.tone].icon}`} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{drink.name}</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">
                {formatPrice(drink.price, drink.unit)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
