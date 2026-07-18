// TryBild mark. The artwork is white, so it only reads on a dark backdrop —
// on the cream navbar it sits on a dark chip (see LogoMorph); the footer is
// already dark. Decorative: every call site pairs it with the wordmark text.
export function PixelLogo({ size = 26 }: { size?: number }) {
  return (
    <img
      src="/trybild-logo.png"
      alt=""
      aria-hidden="true"
      style={{ height: size, width: 'auto' }}
    />
  )
}
