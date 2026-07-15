import { StatusBadge, type Status } from '@/components/common/StatusBadge'

export type Product = {
  id: string
  name: string
  status: Status
  tagline: string
  tags: string[]
  stat: string
  href: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'attendr',
    name: 'Attendr',
    status: 'live',
    tagline: 'GPS attendance for Indian SMBs. No app needed for employees.',
    tags: ['Android', 'Node.js', 'MongoDB'],
    stat: '121 paid users',
    href: '/attendr',
  },
  {
    id: 'truckhisaab',
    name: 'TruckHisaab',
    status: 'live',
    tagline: 'WhatsApp fleet AI for truck owners. Hisaab on chat.',
    tags: ['WhatsApp', 'AI', 'Fleet'],
    stat: '1000+ users',
    href: '/truckhisaab',
  },
  {
    id: 'rentpey',
    name: 'RentPey',
    status: 'in-dev',
    tagline: 'Rent collection over WhatsApp. For landlords, not accountants.',
    tags: ['WhatsApp', 'Payments'],
    stat: 'Active development',
    href: '/rentpey',
  },
  {
    id: 'jellyclaw',
    name: 'JellyClaw',
    status: 'open-source',
    tagline: 'Local multi-agent AI. The AI team that works while you sleep.',
    tags: ['Python', 'Ollama', 'CLI'],
    stat: 'Free forever',
    href: '/jellyclaw',
  },
]

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-surface border border-line rounded-xl p-7 flex flex-col h-full">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[20px] font-semibold text-charcoal">{product.name}</h3>
        <StatusBadge status={product.status} />
      </div>

      <p className="text-[16px] text-muted mt-3 leading-[1.6]">{product.tagline}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="text-[13px] text-muted border border-line rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-line">
        <span className="text-[14px] text-muted">{product.stat}</span>
        <a href={product.href} className="text-[15px] font-medium text-brand hover:underline">
          &gt; View
        </a>
      </div>
    </div>
  )
}
