import type { CtaLink, ImageAsset } from "./types";

export const conceptHero = {
  title: "A Quỳnh",
  titleEmphasis: "Ba tầng",
  body: "Chốn thanh lịch vùng cao trải dài trên ba tầng không gian riêng tư, được tái hiện cho người sành ăn hiện đại.",
  image: { src: "/images/concept/01.png", alt: "Không gian phòng ăn tại A Quỳnh" } satisfies ImageAsset,
};

export const floor1 = {
  id: "tang-1",
  tab: "Tầng 1 / T1",
  level: "Tầng một",
  title: "T1: Bếp Lửa Tổ Tiên",
  description:
    "Tầng một là lời tri ân dành cho \"trái tim gian bếp\" trong ngôi nhà người H'Mông. Với chất liệu đá than thô ráp và gỗ ám khói, căn phòng mang đến bầu không khí mộc mạc, ấm cúng cho những buổi sum họp tối đa sáu khách.",
  theme: { label: "Chủ đề thiết kế", value: "Đá thô & than củi" },
  specs: [
    { label: "Sức chứa", value: "2–6 khách" },
    { label: "Cảm hứng", value: "Mộc mạc & ấm cúng" },
  ],
  cta: { label: "Đặt tầng 1", href: "/#dat-ban" } satisfies CtaLink,
  image: { src: "/images/concept/02.png", alt: "Bàn ăn tầng 1 — Bếp Lửa Tổ Tiên" } satisfies ImageAsset,
};

export const floor2 = {
  id: "tang-2",
  tab: "Tầng 2 / T2",
  level: "Tầng hai",
  title: "T2: Khung Cửi Chàm",
  description:
    "Cao ráo và thoáng đãng, tầng hai lấy cảm hứng từ nghề dệt vải truyền thống. Những hoa văn chàm và họa tiết lanh hình học được dệt vào các tấm ốp tường, tạo nên phông nền tinh tế cho những bữa tiệc mừng.",
  features: [
    { icon: "texture", label: "Nghệ thuật dệt" },
    { icon: "visibility", label: "Hướng nhìn ra rừng" },
  ],
  quote: "Sự giao hòa giữa ánh sáng và chất liệu nơi đây phản chiếu những tầng lớp của đời sống vùng cao.",
  image: { src: "/images/concept/03.png", alt: "Không gian tầng 2 — Khung Cửi Chàm" } satisfies ImageAsset,
};

export const floor3 = {
  id: "tang-3",
  tab: "Tầng 3 / T3",
  level: "Đỉnh cao",
  title: "T3: Chốn Mây Ngàn",
  suiteName: "Phòng Thượng Hạng",
  description:
    "Phòng cao cấp nhất của chúng tôi, T3 mang đến sự biệt lập hoàn toàn với sân hiên riêng và khu lounge bên bếp lửa. Đây là biểu hiện trọn vẹn nhất cho concept private dining của A Quỳnh: độc nhất, tĩnh lặng và tinh tế sâu sắc.",
  featuresTitle: "Đặc quyền riêng",
  features: ["Lối vào riêng", "Chuyên gia rượu riêng", "Lounge sân hiên ngoài trời", "Bàn ăn cạnh đầu bếp"],
  cta: { label: "Liên hệ đặt phòng", href: "/#dat-ban" } satisfies CtaLink,
  image: { src: "/images/concept/04.png", alt: "Phòng Thượng Hạng tầng 3" } satisfies ImageAsset,
  detailImage: { src: "/images/concept/05.png", alt: "Chi tiết thủ công trong phòng" } satisfies ImageAsset,
};

export const conceptBanner = {
  title: "Mỗi tầng một",
  titleLine2: "câu chuyện riêng",
  body: "Hành trình đi lên tại A Quỳnh là sự chuyển mình của các giác quan, từ hơi ấm bếp lửa đến sự trong trẻo của đỉnh núi.",
  image: { src: "/images/concept/06.png", alt: "Khói bếp lan toả" } satisfies ImageAsset,
};

export const floorTabs = [floor1, floor2, floor3].map(({ id, tab }) => ({ id, label: tab }));
