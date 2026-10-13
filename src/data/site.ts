// Thông tin chung của website. Sau này sẽ lấy từ document "siteSettings" trên Sanity.

export type NavItem = {
  href: string;
  label: string;
  icon: string;
};

export const site = {
  name: "A Quỳnh",
  drawerTitle: "Ẩm thực vùng cao",
  tagline:
    "Bắt rễ từ di sản, tinh tế cho người sành ăn hiện đại. Chốn dừng chân đích thực giữa vùng cao.",
  copyright: "© 2026 A Quỳnh. Bảo lưu mọi quyền.",
  // TODO: thay bằng thông tin thật của nhà hàng.
  contact: {
    phone: "+84 90 234 5678",
    email: "reservations@aquynh.vn",
    address: "15 Fansipan, thị xã Sa Pa, Lào Cai",
  },
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TripAdvisor", href: "#" },
  ],
  footerLinks: [
    {
      title: "Khám phá",
      links: [
        { label: "Fanpage", href: "#" },
        { label: "Liên hệ", href: "/#dat-ban" },
        { label: "Tuyển dụng", href: "#" },
      ],
    },
    {
      title: "Pháp lý",
      links: [
        { label: "Chính sách bảo mật", href: "#" },
        { label: "Điều khoản sử dụng", href: "#" },
      ],
    },
  ],
} as const;

export const mainNav: NavItem[] = [
  { href: "/", label: "Trang chủ", icon: "home" },
  { href: "/gioi-thieu", label: "Giới thiệu", icon: "history_edu" },
  { href: "/concept", label: "Concept 3 tầng", icon: "photo_library" },
  { href: "/thuc-don", label: "Thực đơn", icon: "restaurant_menu" },
];

export const bookingLink: NavItem = {
  href: "/#dat-ban",
  label: "Đặt bàn",
  icon: "event_available",
};
