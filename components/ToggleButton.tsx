import cn from 'classnames'
import { InputHTMLAttributes, ReactChild, useState } from 'react'

export interface ToggleButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  defaultChecked: boolean
  label?: string
  offIcon?: ReactChild
  onIcon?: ReactChild
}
export function ToggleButton({
  label,
  defaultChecked,
  offIcon,
  onIcon,
  ...props
}: ToggleButtonProps) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <div>
      {!!label && <span className="pr-4 text-primary">{label}</span>}
      <div
        className="cursor-pointer focus:ring-2 focus:ring-focus inline-block rounded-sm"
        onClick={(e: any) => {
          setChecked(!checked)
          props.onClick(e)
        }}
        tabIndex={0}
      >
        <input className="hidden" type="checkbox" />
        <div
          className={cn(
            'flex h-6 items-center transition-colors duration-300 p-1 ring-2 ring-inset rounded-full w-10 cursor-pointer ring-primary bg-tertiary'
          )}
        >
          <div
            className={cn(
              '-left-1 text-xs bg-gray-300 h-6 flex justify-center items-center transition-transform duration-300 ease-in-out relative ring-2 ring-inset ring-primary rounded-full w-6',
              {
                'translate-x-4': checked,
              }
            )}
          >
            <div
              className={cn(
                'transition absolute',
                checked ? 'opacity-0 ' : 'opacity-100'
              )}
            >
              {offIcon}
            </div>
            <div
              className={cn(
                'transition absolute dark:text-primary',
                checked ? 'opacity-100 ' : 'opacity-0'
              )}
            >
              {onIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
