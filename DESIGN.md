---
name: Highland Heritage
source: Stitch project "A Quỳnh Restaurant Website" (13070633838382638920), 8 màn "Web Anh Quỳnh"
colors:
  primary: '#6b0804'
  on-primary: '#ffffff'
  primary-container: '#8c2218'
  on-primary-container: '#ffa193'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a9'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#881f15'
  inverse-primary: '#ffb4a9'
  surface-tint: '#a9372a'
  secondary: '#625e56'
  on-secondary: '#ffffff'
  secondary-container: '#e6dfd5'
  on-secondary-container: '#66625a'
  secondary-fixed: '#e8e2d8'
  secondary-fixed-dim: '#ccc6bc'
  on-secondary-fixed: '#1e1b15'
  on-secondary-fixed-variant: '#4a463f'
  tertiary: '#39322c'
  on-tertiary: '#ffffff'
  tertiary-container: '#504842'
  on-tertiary-container: '#c2b7b0'
  tertiary-fixed: '#ece0d8'
  tertiary-fixed-dim: '#d0c4bd'
  on-tertiary-fixed: '#201a16'
  on-tertiary-fixed-variant: '#4d4540'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  background: '#fff8f6'
  on-background: '#1e1b1a'
  surface: '#fff8f6'
  surface-bright: '#fff8f6'
  surface-dim: '#e0d8d6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2f0'
  surface-container: '#f4ecea'
  surface-container-high: '#eee7e5'
  surface-container-highest: '#e8e1df'
  surface-variant: '#e8e1df'
  on-surface: '#1e1b1a'
  on-surface-variant: '#58413e'
  inverse-surface: '#33302f'
  inverse-on-surface: '#f7efed'
  outline: '#8b716d'
  outline-variant: '#dfbfbb'
  charcoal-slate: '#262421'
typography:
  display-lg: { fontFamily: EB Garamond, fontSize: 48px, fontWeight: '600', lineHeight: 56px, letterSpacing: -0.02em }
  display-lg-mobile: { fontFamily: EB Garamond, fontSize: 36px, fontWeight: '600', lineHeight: 44px, letterSpacing: -0.01em }
  headline-md: { fontFamily: EB Garamond, fontSize: 32px, fontWeight: '500', lineHeight: 40px }
  headline-sm: { fontFamily: EB Garamond, fontSize: 24px, fontWeight: '500', lineHeight: 32px }
  body-lg: { fontFamily: Source Sans 3, fontSize: 18px, fontWeight: '400', lineHeight: 28px }
  body-md: { fontFamily: Source Sans 3, fontSize: 16px, fontWeight: '400', lineHeight: 24px }
  label-md: { fontFamily: Source Sans 3, fontSize: 14px, fontWeight: '600', lineHeight: 20px, letterSpacing: 0.05em }
  label-sm: { fontFamily: Source Sans 3, fontSize: 12px, fontWeight: '600', lineHeight: 16px, letterSpacing: 0.03em }
  label-caps: { fontFamily: Source Sans 3, fontSize: 12px, fontWeight: '600', lineHeight: 16px, letterSpacing: 0.15em }
rounded:
  DEFAULT: 0.25rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
  container-max: 1280px
---

# Highland Heritage — Design system web A Quỳnh

Tài liệu này là nguồn chuẩn cho giao diện web A Quỳnh. Token ở phần đầu được hiện thực trong
`src/app/globals.css` (Tailwind v4 `@theme`), giữ nguyên tên lớp như HTML xuất từ Stitch.

> **Lưu ý:** design system lưu trong project Stitch vẫn mô tả bản nền tối (Be Vietnam Pro, chữ
> Parchment trên nền Charcoal). Cả 8 màn "Web Anh Quỳnh" đã chuyển sang **nền sáng** với
> **Source Sans 3**, nên tài liệu này theo các màn hình thực tế.

## Thương hiệu & phong cách
Ẩm thực H'Mông vùng cao trong không gian private dining cao cấp: **mộc, thủ công, tinh tế**.
"Mộc" ở đây nghĩa là quý và nguyên bản, không phải đơn sơ. Phong cách là **tối giản kết hợp tạp chí
(editorial)**: nhiều khoảng trắng để ảnh món ăn nổi bật, điểm xuyết texture rất nhẹ (than, vải lanh,
đá) với độ mờ 2–3%.

## Màu sắc
- **Đỏ Heritage** (`primary` #6b0804, `primary-container` #8c2218): màu ớt khô, dùng cho CTA và điểm nhấn.
- **Nền giấy ấm** (`background`/`surface` #fff8f6) với các lớp `surface-container-*` để phân tầng.
- **Chữ** chính `on-surface` #1e1b1a, chữ phụ `on-surface-variant` #58413e.
- **Charcoal Slate** (#262421) cho các khối tối tương phản (ví dụ khu vực thực đơn đặc biệt, footer).
- Đường viền mảnh dùng `outline-variant` #dfbfbb.

## Typography
- **EB Garamond** cho tiêu đề (display, headline): cảm giác thực đơn cao cấp, văn chương.
- **Source Sans 3** cho nội dung và nhãn, hỗ trợ đầy đủ dấu tiếng Việt.
- `display-lg` chỉ dùng cho hero; trên mobile dùng `display-lg-mobile`.
- `label-caps` (viết hoa, giãn chữ 0.15em) cho meta nhỏ, eyebrow phía trên tiêu đề.

## Layout & khoảng cách
- Desktop: lưới cố định, nội dung tối đa `container-max` 1280px, lề `margin-desktop` 64px.
- Mobile (390px): một cột, lề `margin-mobile` 20px.
- Khoảng cách giữa các section `section-gap` 120px; khoảng cách lưới `gutter` 24px; đơn vị cơ sở 8px.
- Ưu tiên bố cục bất đối xứng (lưới 12 cột so le, bento grid trên mobile) để gợi địa hình vùng cao.

## Chiều sâu
Tạo chiều sâu bằng **phân lớp màu nền** thay vì đổ bóng đậm. Khi cần bóng, dùng bóng rất nhẹ, ngả
màu đỏ/nâu (ví dụ `0 4px 20px -2px rgba(107, 8, 4, 0.08)`). Thanh điều hướng cố định dùng nền
bán trong suốt và backdrop blur.

## Hình khối
Bo góc nhỏ (`0.25rem` mặc định): không sắc lạnh, không tròn trịa. Đường phân cách mảnh, có thể
dùng gradient mờ hai đầu (`transparent → outline-variant → transparent`).

## Thành phần
- **Nút chính:** nền `primary`/`primary-container`, chữ trắng, `label-md` viết hoa.
- **Nút phụ:** kiểu ghost, viền mảnh, chữ `primary`.
- **Card món ăn:** ảnh tràn, chữ bên dưới, không nền.
- **Chip/tag** (nguồn gốc nguyên liệu, độ cay): `label-caps`, viền mảnh, không nền.
- **Icon:** Material Symbols Outlined, nét mảnh (wght 300 trên desktop, 400 trên mobile).
