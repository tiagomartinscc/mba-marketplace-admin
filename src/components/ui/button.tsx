/* eslint-disable @stylistic/max-len */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center rounded-xl justify-center whitespace-nowrap rounded-xsm transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'flex gap-4 bg-orange-base text-white hover:bg-orange-dark',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-orange-base bg-background text-orange-base hover:text-orange-dark hover:border-orange-dark',
        secondary:
          'flex items-center gap-4 bg-base-shape text-orange-base hover:text-orange-dark',
        ghost: 'flex gap-4 text-grayscale-300 hover:bg-accent hover:text-back',
        link: 'text-orange-base underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-14 px-5 py-4',
        sm: 'h-9 rounded-md px-3',
        icon: 'h-10 w-10',
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
    const Comp = asChild
      ? Slot
      : 'button'
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
