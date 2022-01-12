import { ReactNode } from 'react'

interface TextBlockProps {
    children: ReactNode
}
export function TextBlock({children}: TextBlockProps) {
  return (
      <div className="max-w-screen-lg lg:w-2/3 mx-auto space-y-8 py-16 px-4">
        {children}
      </div>
  )
}
