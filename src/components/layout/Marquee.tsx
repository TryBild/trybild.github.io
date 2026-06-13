const ITEMS = [
  { text: '✦ Trybild', hi: true },
  { text: 'Mumbai, India', hi: false },
  { text: 'WhatsApp-Native', hi: false },
  { text: 'Hindi AI', hi: false },
  { text: '✦ MaalSaathi', hi: true },
  { text: 'Truck Fleet Management', hi: false },
  { text: '71+ Paying Customers', hi: false },
  { text: '✦ Attendr', hi: true },
  { text: 'GPS Attendance', hi: false },
  { text: 'Launching Soon', hi: false },
  { text: 'Ship Fast', hi: false },
  { text: 'AI-Powered', hi: false },
  { text: 'Real Problems', hi: false },
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
