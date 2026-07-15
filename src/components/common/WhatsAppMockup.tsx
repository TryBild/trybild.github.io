import { Truck, Video, Phone, MoreVertical, Mic, CheckCheck } from 'lucide-react'

// Chat content is the real TruckHisaab demo conversation — do not embellish.
const MESSAGES = [
  {
    from: 'user',
    text: 'aaj ki trip record karo — Delhi se Mumbai',
    time: '10:42',
  },
  {
    from: 'ai',
    text: 'Trip #047 logged ✓\nRoute: Delhi → Mumbai • 1,421 km\nDiesel: ₹4,200 · Toll: ₹850\nETA: On time',
    time: '10:42',
  },
  {
    from: 'ai',
    text: 'Is hafte ka P&L update ho gaya 📊\nIncome: ₹45,200\nExpenses: ₹28,400\nNet Profit: ₹16,800 ↑8%',
    time: '10:43',
  },
]

const STATS = [
  { val: '8', sub: 'TRIPS THIS MONTH' },
  { val: '↑8%', sub: 'PROFIT VS LAST MONTH' },
  { val: '3', sub: 'TRUCKS TRACKED' },
]

/**
 * Clean card frame outside, real WhatsApp dark theme inside (realism is the
 * point, so the chat keeps its native dark UI). The whole card links to the
 * TruckHisaab page.
 */
export function WhatsAppMockup() {
  return (
    <a
      href="/truckhisaab"
      className="block w-full max-w-[420px] no-underline cursor-pointer group select-none"
    >
      {/* Card frame */}
      <div className="border border-b-0 border-line group-hover:border-brand rounded-t-xl overflow-hidden bg-surface transition-colors duration-150">
        {/* Title bar */}
        <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-line">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[13px] text-muted leading-none shrink-0">● ● ●</span>
            <span className="text-[13px] text-muted truncate">
              truckhisaab — whatsapp · active
            </span>
          </div>
          <span className="text-[13px] font-medium text-[#2e7d32] shrink-0">● Live product</span>
        </div>

        {/* Real WhatsApp look inside */}
        <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}>
          {/* WhatsApp header */}
          <div className="flex items-center gap-3 px-3 py-2.5 bg-[#202c33]">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
              <Truck size={17} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[14px] font-medium text-[#e9edef] leading-tight">TruckHisaab</p>
              <p className="text-[12px] text-[#8696a0] leading-tight">online</p>
            </div>
            <div className="ml-auto flex items-center gap-4 text-[#aebac1]">
              <Video size={18} />
              <Phone size={16} />
              <MoreVertical size={18} />
            </div>
          </div>

          {/* Chat */}
          <div className="bg-[#0b141a] px-3 py-3 flex flex-col gap-2 min-h-[240px]">
            {MESSAGES.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-2.5 py-1.5 text-[13px] leading-[1.45] whitespace-pre-line ${
                  msg.from === 'user'
                    ? 'self-end bg-[#005c4b] text-white rounded-lg rounded-tr-none'
                    : 'self-start bg-[#202c33] text-[#e9edef] rounded-lg rounded-tl-none'
                }`}
              >
                {msg.text}
                <span className="flex justify-end items-center gap-1 text-[11px] text-[#8696a0] mt-1 leading-none">
                  {msg.time}
                  {msg.from === 'user' && <CheckCheck size={14} className="text-[#53bdeb]" />}
                </span>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2.5 px-3 py-2 bg-[#202c33]">
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-[13px] text-[#8696a0]">
              Message
            </div>
            <Mic size={19} className="text-[#aebac1] shrink-0" />
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border border-t-0 border-line rounded-b-xl bg-surface divide-x divide-line">
        {STATS.map((s) => (
          <div key={s.sub} className="px-2 py-3 text-center">
            <p className="text-[16px] font-semibold text-charcoal">{s.val}</p>
            <p className="text-[13px] text-muted mt-1 leading-tight">{s.sub}</p>
          </div>
        ))}
      </div>
    </a>
  )
}
