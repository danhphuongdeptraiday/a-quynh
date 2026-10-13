"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { bookingLink, site } from "@/data/site";

// Desktop: khung "Concierge" mở ra các kênh liên hệ. Mobile: nút nổi dẫn tới phần liên hệ đặt bàn.
export function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link
        href={bookingLink.href}
        aria-label={bookingLink.label}
        className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-on-primary-container shadow-xl transition-transform active:scale-90 md:hidden"
      >
        <Icon name={bookingLink.icon} filled />
      </Link>

      <div className="fixed right-8 bottom-8 z-[70] hidden md:block">
        <div
          className={`absolute right-0 bottom-20 w-80 origin-bottom-right overflow-hidden rounded-xl border border-outline-variant/50 bg-surface shadow-2xl transition-all duration-300 ${
            open ? "scale-100" : "pointer-events-none scale-0"
          }`}
          inert={!open}
        >
          <div className="flex items-center justify-between bg-primary p-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="font-label-caps text-label-caps text-on-primary uppercase">
                Tư vấn trực tuyến
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-on-primary"
              aria-label="Đóng"
            >
              <Icon name="close" className="!text-[18px]" />
            </button>
          </div>
          <div className="space-y-4 p-6">
            <div className="max-w-[85%] rounded-lg rounded-tl-none border border-outline-variant/20 bg-surface-container-low p-3 shadow-sm">
              <p className="font-body-md text-sm text-on-surface">
                Xin chào! Chúng tôi có thể giúp gì cho buổi tiệc của bạn?
              </p>
            </div>
            {/* TODO: thay bằng chat thật (Messenger/Zalo) khi có kênh chính thức */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded border border-outline-variant/40 px-4 py-3 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-low"
              >
                <Icon name="phone_in_talk" className="!text-[20px]" />
                {site.contact.phone}
              </a>
              <Link
                href={bookingLink.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded border border-outline-variant/40 px-4 py-3 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-low"
              >
                <Icon name="event_available" className="!text-[20px]" />
                Xem thông tin liên hệ
              </Link>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-2xl transition-all hover:scale-110 active:scale-95"
          aria-label="Liên hệ concierge"
          aria-expanded={open}
        >
          <Icon name="chat_bubble" className="!text-3xl" />
        </button>
      </div>
    </>
  );
}
