import type { CtaLink, ImageAsset } from "./types";

export const aboutHero = {
  eyebrow: "Nguồn Cội & Nghệ Thuật",
  title: "Câu chuyện A Quỳnh",
  quote:
    "Giữa đại ngàn mây phủ, chúng tôi tìm thấy bản sắc của mình trong từng thớ thịt, nhành rau và hơi ấm của bếp củi đêm đông.",
  image: { src: "/images/about/01.png", alt: "Gian bếp người H'Mông lúc bình minh" } satisfies ImageAsset,
};

export const aboutOrigin = {
  title: "Hành Trình Ngược Gió",
  lead: "A Quỳnh không chỉ là một cái tên, đó là hiện thân của tinh thần phóng khoáng nơi rẻo cao phía Bắc. Bắt đầu từ những buổi chiều hun khói trong căn bếp nhỏ của người Hmong, nơi mỗi gia vị đều mang hơi thở của núi rừng, chúng tôi đã khao khát mang sự nguyên bản đó đến với thực khách tinh tế.",
  body: "Mỗi món ăn tại A Quỳnh là một chương trong cuốn nhật ký về những chuyến đi tìm kiếm nguyên liệu quý giá: từ gừng đá treo vách núi đến hạt dổi rừng thơm nồng nàn. Chúng tôi tin rằng, nấu ăn là cách kể chuyện trung thực nhất về cội nguồn.",
  image: {
    src: "/images/about/02.png",
    alt: "Vải thổ cẩm H'Mông bên cối đá đựng gia vị",
  } satisfies ImageAsset,
};

export type Pillar = { icon: string; title: string; description: string };

export const aboutPhilosophy = {
  eyebrow: "Triết Lý A Quỳnh",
  title: "Quý giá & Nguyên bản",
  pillars: [
    {
      icon: "local_fire_department",
      title: "Lửa Hồn Nhiên",
      description:
        "Giữ lửa bằng củi rừng tự nhiên để hương khói len lỏi vào từng thớ thịt, tạo nên vị umami nguyên thủy nhất của đại ngàn.",
    },
    {
      icon: "eco",
      title: "Tôn Trọng Mùa Vụ",
      description:
        "Chúng tôi chỉ phục vụ những gì đất mẹ ban tặng theo mùa. Mỗi thực đơn là một sự tri ân đến vòng tuần hoàn của thiên nhiên.",
    },
    {
      icon: "brush",
      title: "Bàn Tay Nghệ Nhân",
      description:
        "Mọi công đoạn từ giã gia vị đến bài trí đĩa ăn đều được thực hiện thủ công, tỉ mỉ như cách người phụ nữ Hmong dệt vải lanh.",
    },
  ] satisfies Pillar[],
};

export const aboutQuote = {
  text: "Ẩm thực không chỉ là để no lòng, mà là để đánh thức những ký ức ngủ quên về một vùng đất mà ta chưa từng đặt chân tới, nhưng luôn cảm thấy thân thuộc.",
  author: "— A Quỳnh, Nhà sáng lập",
  image: { src: "/images/about/03.png", alt: "Đầu bếp bày trí món ăn" } satisfies ImageAsset,
};

export const aboutGallery = {
  caption: "Sự kết hợp giữa di sản và hiện đại.",
  large: { src: "/images/about/04.png", alt: "Ruộng bậc thang vùng cao trong sương" } satisfies ImageAsset,
  small: { src: "/images/about/05.png", alt: "Than hồng trong bếp lửa truyền thống" } satisfies ImageAsset,
};

export const aboutCta = {
  title: "Trải Nghiệm Sự Riêng Tư Tuyệt Đối",
  body: "Hãy để chúng tôi chuẩn bị một bàn tiệc dành riêng cho bạn và những người thân yêu.",
  primary: { label: "Đặt Bàn Ngay", href: "/#dat-ban" } satisfies CtaLink,
  secondary: { label: "Khám Phá Thực Đơn", href: "/thuc-don" } satisfies CtaLink,
};
