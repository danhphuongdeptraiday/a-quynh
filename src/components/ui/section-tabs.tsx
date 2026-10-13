"use client";

import { useEffect, useState } from "react";

type Tab = { id: string; label: string };

type SectionTabsProps = {
  tabs: Tab[];
  className?: string;
  listClassName?: string;
  tabClassName?: string;
};

// Thanh tab dính (sticky) cuộn tới từng section và tự đánh dấu section đang xem.
export function SectionTabs({
  tabs,
  className = "",
  listClassName = "",
  tabClassName = "",
}: SectionTabsProps) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tabs]);

  return (
    <div className={className}>
      <div className={`scrollbar-none flex overflow-x-auto whitespace-nowrap ${listClassName}`}>
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={`border-b-2 pb-2 transition-colors ${tabClassName} ${
              active === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-on-surface-variant hover:text-primary"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
