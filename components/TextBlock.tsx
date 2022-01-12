import { ReactNode } from 'react'

interface TextBlockProps {
    children: ReactNode
}
export function TextBlock({children}: TextBlockProps) {
  return (
      <div className="max-w-screen-lg flex sm:flex-row flex-col mx-auto gap-4 p-4">
        {children}
      </div>
  )
}
