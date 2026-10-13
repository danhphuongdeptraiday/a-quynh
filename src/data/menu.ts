import type { ImageAsset } from "./types";

// Giá lưu theo VND; hiển thị dạng "350.000đ" qua formatPrice.
export type Dish = {
  name: string;
  description: string;
  price: number;
  unit?: string;
  image?: ImageAsset;
};

export type Drink = Dish & {
  icon: string;
  tone: "primary" | "secondary" | "tertiary";
  fillLevel: "low" | "mid" | "high";
};

const vnd = new Intl.NumberFormat("vi-VN");

export function formatPrice(price: number, unit?: string) {
  const amount = `${vnd.format(price)}đ`;
  return unit ? `${amount} / ${unit}` : amount;
}

export const menuHero = {
  eyebrow: "Bếp truyền thống Sa Pa",
  title: "A Quỳnh",
  body: "Hành trình vị giác xuyên qua hương vị vùng cao, nơi mỗi món ăn kể câu chuyện về đất, về khói bếp và về những mùa trong năm.",
  image: { src: "/images/menu/01.png", alt: "Ruộng bậc thang Sa Pa lúc bình minh" } satisfies ImageAsset,
};

export const thangCo = {
  id: "thang-co",
  tab: "Thắng Cố (Menu Ngựa)",
  eyebrow: "Món di sản",
  title: "Thắng Cố",
  description:
    "Linh hồn của phiên chợ vùng cao. Nấu cùng 12 loại gia vị truyền thống như thảo quả, hoa hồi, quế, ninh liu riu hàng giờ trong chảo gang lớn.",
  image: { src: "/images/menu/02.png", alt: "Bát thắng cố nghi ngút khói" } satisfies ImageAsset,
  dishes: [
    {
      name: "Thịt Ngựa Nướng Ngói",
      description: "Thịt ngựa nướng xèo xèo trên ngói truyền thống cùng mật ong rừng và hạt mắc khén.",
      price: 350_000,
      image: { src: "/images/menu/03.png", alt: "Thịt ngựa nướng ngói" },
    },
    {
      name: "Gỏi Ngựa Tầm Bóp",
      description: "Thịt hun khói thái mỏng trộn lá tầm bóp và nước sốt chanh cay.",
      price: 280_000,
      image: { src: "/images/menu/04.png", alt: "Gỏi ngựa tầm bóp" },
    },
    {
      name: "Thắng Cố Đặc Biệt",
      description: "Nồi thắng cố đặc trưng của nhà, ăn kèm mèn mén và nước chấm rừng.",
      price: 450_000,
      image: { src: "/images/menu/05.png", alt: "Nồi thắng cố đặc biệt" },
    },
  ] satisfies Dish[],
};

export const localDishes = {
  id: "mon-local",
  tab: "Món Local Khác",
  eyebrow: "Món local khác",
  title: "Tinh hoa vùng cao",
  featured: {
    name: "Lợn Cắp Nách Nướng Ống Tre",
    description: "Lợn bản nướng trong ống tre, thấm đượm hương thơm của núi rừng.",
    price: 520_000,
    unit: "phần",
    image: { src: "/images/menu/06.png", alt: "Mâm lợn cắp nách nướng ống tre" },
  } satisfies Dish,
  highlight: {
    eyebrow: "Món đường phố",
    name: "Cơm Lam & Gà Nướng",
    description: "Cơm lam dẻo thơm trong ống tre cùng gà đồi thả vườn nướng than hoa.",
    price: 180_000,
  },
  dishes: [
    {
      name: "Cá Tầm Sapa Nướng",
      description: "Cá tầm nước lạnh Sa Pa nướng cùng riềng và cơm mẻ.",
      price: 240_000,
      image: { src: "/images/menu/07.png", alt: "Cá tầm Sa Pa nướng" },
    },
    {
      name: "Rau Mầm Đá Xào Tỏi",
      description: "Rau mầm đá quý hiếm hái trên vùng núi cao, xào tỏi.",
      price: 120_000,
      image: { src: "/images/menu/08.png", alt: "Rau mầm đá xào tỏi" },
    },
  ] satisfies Dish[],
};

export const drinks = {
  id: "do-uong",
  tab: "Rượu Ngô & Đồ Uống",
  eyebrow: "Men say vùng cao",
  title: "Rượu & trà vùng cao",
  description:
    "Người bạn đồng hành hoàn hảo của Thắng Cố. Rượu ngô nhà nấu được chưng cất hai lần cùng 30 loại thảo mộc truyền thống.",
  items: [
    {
      name: "Rượu Ngô Bản Phố",
      description: "",
      price: 45_000,
      unit: "chén",
      icon: "liquor",
      tone: "secondary",
      fillLevel: "mid",
    },
    {
      name: "Rượu Táo Mèo",
      description: "",
      price: 55_000,
      unit: "chén",
      icon: "wine_bar",
      tone: "primary",
      fillLevel: "low",
    },
    {
      name: "Trà San Tuyết",
      description: "",
      price: 35_000,
      unit: "ấm",
      icon: "eco",
      tone: "tertiary",
      fillLevel: "high",
    },
  ] satisfies Drink[],
};

export const menuTabs = [thangCo, localDishes, drinks].map(({ id, tab }) => ({ id, label: tab }));
