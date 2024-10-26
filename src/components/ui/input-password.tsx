import * as React from 'react'

import { cn } from '@/lib/utils'

import { Access } from '@/components/icons/access'
import { AlertCircle } from '@/components/icons/alert-circle'
import { View } from '@/components/icons/view'
import { ViewOff } from '@/components/icons/view-off'
import { useState } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentType, setCurrentType] = useState('password')

    function handleVisible() {
      if (isVisible) {
        setCurrentType('password')
        setIsVisible(false)
      } else {
        setCurrentType('input')
        setIsVisible(true)
      }
    }

    const iconBgColor = (errorMessage)
      ? 'text-semantic-danger'
      : 'text-grayscale-200'
    return (
      <div>
        <div className={cn('flex items-center gap-2 border-b-2',
          'focus-within:text-orange-base focus-within:border-orange-base',
          'border-grayscale-100',
        )}
        >
          <Access
            className={
            cn('w-6 h-6 left-0 top-3',
              iconBgColor)
          }
          />
          <input
            type={currentType}
            className={cn(
              'flex-1 bg-transparent px-3 h-12 w-full outline-none',
              '',
              className,
            )}
            ref={ref}
            {...props}
          />
          {currentType === 'password'
            ? <View
                onClick={() => handleVisible()}
                className={
            cn('w-6 h-6 left-0 top-3',
              iconBgColor)
            }
              />
            : <ViewOff
                onClick={() => handleVisible()}
                className={
            cn('w-6 h-6 left-0 top-3',
              iconBgColor)
            }
              />}

        </div>
        {errorMessage &&
          <div className="flex items-center text-semantic-danger gap-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>}
      </div>
    )
  },
)
InputPassword.displayName = 'Input'

export { InputPassword }
