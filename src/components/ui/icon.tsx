// Material Symbols Outlined. Khi thêm icon mới, nhớ bổ sung tên vào ICON_NAMES trong app/layout.tsx.
type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export function Icon({ name, className = "", filled = false }: IconProps) {
  return (
    <span
      aria-hidden
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}
