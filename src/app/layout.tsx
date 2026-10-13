import type { Metadata } from "next";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import { FloatingActions } from "@/components/layout/floating-actions";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "vietnamese"],
});

// Chỉ tải các icon Material Symbols đang dùng (Google Fonts yêu cầu sắp xếp theo alphabet).
const ICON_NAMES = [
  "add",
  "arrow_forward",
  "brush",
  "chat_bubble",
  "close",
  "eco",
  "event_available",
  "face_nod",
  "history_edu",
  "home",
  "keyboard_double_arrow_down",
  "liquor",
  "local_fire_department",
  "location_on",
  "mail",
  "menu",
  "phone_in_talk",
  "photo_library",
  "restaurant_menu",
  "texture",
  "translate",
  "visibility",
  "wine_bar",
].sort();

const iconFontUrl = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${ICON_NAMES.join(",")}&display=block`;

export const metadata: Metadata = {
  title: {
    default: "A Quỳnh | Ẩm thực vùng cao Sa Pa",
    template: "%s | A Quỳnh",
  },
  description: "Ẩm thực vùng cao trong không gian phòng ăn riêng ba tầng tại Sa Pa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${ebGaramond.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Font icon không có trong next/font nên tải trực tiếp từ Google Fonts */}
        <link rel="stylesheet" href={iconFontUrl} />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden font-body-md text-body-md selection:bg-primary-container selection:text-white">
        <SiteHeader />
        <main className="relative flex-1">{children}</main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
