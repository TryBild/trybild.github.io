import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-mono text-[0.58rem] tracking-[0.12em] uppercase transition-colors',
  {
    variants: {
      variant: {
        default: 'border border-border text-muted px-2.5 py-1',
        live: 'text-green',
        coming: 'text-muted',
        accent: 'bg-accent text-paper px-2.5 py-1',
        outline: 'border border-border text-muted px-2.5 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
