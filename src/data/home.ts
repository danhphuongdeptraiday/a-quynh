import type { CtaLink, ImageAsset } from "./types";

export const homeHero = {
  eyebrow: "Ẩm thực thủ công vùng cao",
  titleBefore: "Nơi hồn cốt ",
  titleEmphasis: "vùng cao",
  titleAfter: " gặp gỡ sự tinh tế.",
  image: { src: "/images/home/01.png", alt: "Phòng ăn riêng sang trọng tại A Quỳnh" },
  primaryCta: { label: "Đặt trải nghiệm", href: "#dat-ban" } satisfies CtaLink,
  secondaryCta: { label: "Khám phá không gian", href: "/concept" } satisfies CtaLink,
};

export const homeIntro = {
  eyebrow: "Di sản của chúng tôi",
  title: "A Quỳnh: Hương khói và đá núi.",
  quote:
    "Chúng tôi không chỉ phục vụ món ăn; chúng tôi chuyển những lời thì thầm xa xưa của vùng cao H'Mông thành một cuộc đối thoại ẩm thực đương đại.",
  body: "Mang tên của sức sống bền bỉ nơi núi rừng, A Quỳnh đưa bếp lửa vùng cao vào một không gian sang trọng hiện đại. Mỗi nguyên liệu được chọn lựa bằng sự trân trọng, mỗi ngọn lửa là lời tri ân dành cho truyền thống.",
  image: { src: "/images/home/02.png", alt: "Món ăn được bày trí thủ công" } satisfies ImageAsset,
  cta: { label: "Đọc câu chuyện của chúng tôi", href: "/gioi-thieu" } satisfies CtaLink,
};

export type Room = {
  name: string;
  details: string;
  image: ImageAsset;
};

export const homeRooms = {
  eyebrow: "Riêng tư tuyệt đối",
  title: "Những không gian riêng",
  cta: { label: "Xem tất cả phòng", href: "/concept" } satisfies CtaLink,
  featured: {
    name: "Bếp Đá Huyền",
    details: "Sức chứa: 12 khách • Sân hiên riêng • Đầu bếp riêng",
    image: { src: "/images/home/03.png", alt: "Phòng VIP Bếp Đá Huyền" },
  } satisfies Room,
  others: [
    {
      name: "Sương Trúc",
      details: "Sức chứa: 4 khách • Chỗ ngồi ấm cúng",
      image: { src: "/images/home/04.png", alt: "Phòng VIP Sương Trúc" },
    },
    {
      name: "Đá & Sắt",
      details: "Sức chứa: 8 khách • Nhìn ra hầm rượu",
      image: { src: "/images/home/05.png", alt: "Phòng VIP Đá & Sắt" },
    },
  ] satisfies Room[],
};

export type EventType = {
  title: string;
  description: string;
  image: ImageAsset;
  cta: CtaLink;
};

export const homeEvents = {
  eyebrow: "Sự kiện",
  title: "Những dịp đáng nhớ",
  items: [
    {
      title: "Tiệc riêng tư",
      description:
        "Thực đơn thiết kế riêng cho những cột mốc ý nghĩa nhất của cuộc đời, từ lễ thành hôn ấm cúng đến buổi sum họp đại gia đình.",
      image: { src: "/images/home/06.png", alt: "Tiệc cưới riêng tư" },
      cta: { label: "Liên hệ ngay", href: "#dat-ban" },
    },
    {
      title: "Tiếp khách doanh nghiệp",
      description:
        "Gây ấn tượng với đối tác trong một không gian thể hiện đẳng cấp qua sự thanh lịch tinh tế và chỉn chu.",
      image: { src: "/images/home/07.png", alt: "Tiệc doanh nghiệp" },
      cta: { label: "Đặt tiệc doanh nghiệp", href: "#dat-ban" },
    },
    {
      title: "Hành trình văn hoá",
      description:
        "Những buổi workshop và thưởng thức được tuyển chọn, đưa bạn chạm sâu vào linh hồn của nghề thủ công vùng cao.",
      image: { src: "/images/home/08.png", alt: "Sự kiện văn hoá vùng cao" },
      cta: { label: "Xem lịch sự kiện", href: "#dat-ban" },
    },
  ] satisfies EventType[],
};

export const homeContact = {
  title: "Liên hệ với gian bếp.",
  body: "Bàn tiệc luôn sẵn sàng chờ bạn. Hãy gọi cho chúng tôi để đặt phòng hoặc lên kế hoạch cho sự kiện riêng.",
  callLabel: "Gọi đặt bàn",
};
