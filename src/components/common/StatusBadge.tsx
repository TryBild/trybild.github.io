export type Status = 'live' | 'in-dev' | 'open-source'

const STYLES: Record<Status, string> = {
  live: 'bg-[#e8f5e9] text-[#2e7d32] border-[#a5d6a7]',
  'in-dev': 'bg-[#fff8e1] text-[#f57f17] border-[#ffe082]',
  'open-source': 'bg-[#fce4ec] text-[#c2185b] border-[#f48fb1]',
}

const LABELS: Record<Status, string> = {
  live: 'LIVE',
  'in-dev': 'IN DEV',
  'open-source': 'OPEN SOURCE',
}

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-block text-[13px] font-medium leading-none px-3 py-1 rounded-full border ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  )
}
