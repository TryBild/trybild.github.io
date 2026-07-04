// Pixel-block spiral logo from the retro design system (SVG, scales cleanly).
export function PixelLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" aria-hidden="true">
      <g fill="#fe3c00">
        <rect x="4" y="2" width="18" height="4" />
        <rect x="2" y="6" width="4" height="16" />
        <rect x="20" y="6" width="4" height="10" />
        <rect x="8" y="18" width="14" height="4" />
        <rect x="8" y="10" width="10" height="4" />
        <rect x="14" y="14" width="4" height="4" />
      </g>
    </svg>
  )
}
