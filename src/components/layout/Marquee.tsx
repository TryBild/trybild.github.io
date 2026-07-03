const ITEMS = [
  { text: '✦ TryBild', hi: true },
  { text: 'Mumbai, India', hi: false },
  { text: 'Building tools for business, logistics & local AI', hi: false },
  { text: '✦ TruckHisaab', hi: true },
  { text: '1000+ users on WhatsApp', hi: false },
  { text: 'Play Store soon', hi: false },
  { text: '✦ Attendr', hi: true },
  { text: 'GPS Attendance', hi: false },
  { text: 'Soon on Play Store', hi: false },
  { text: '✦ JellyClaw', hi: true },
  { text: 'The Local AI Office', hi: false },
  { text: 'Open source', hi: false },
  { text: 'Ship fast', hi: false },
]

const ALL = [...ITEMS, ...ITEMS]

export function Marquee() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] h-9 overflow-hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-sm flex items-center">
      <div className="flex gap-0 whitespace-nowrap animate-marquee">
        {ALL.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[0.58rem] tracking-[0.18em] uppercase px-7 ${
              item.hi ? 'text-accent' : 'text-white/20'
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
