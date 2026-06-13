import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 font-mono text-[0.72rem] tracking-[0.12em] uppercase transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-ink text-paper border border-ink hover:bg-accent hover:border-accent hover:translate-x-1',
        ghost: 'text-muted hover:text-ink',
        outline: 'border border-border text-ink hover:bg-paper-dark',
        accent: 'bg-accent text-paper border border-accent hover:bg-ink hover:border-ink',
      },
      size: {
        default: 'px-7 py-3.5',
        sm: 'px-4 py-2',
        lg: 'px-10 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
