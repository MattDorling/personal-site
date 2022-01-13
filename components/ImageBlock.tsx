import { ReactNode } from 'react'
import Image from 'next/image'

interface ImageBlockProps {
  src: StaticImageData
  alt: string
  children: ReactNode
}
export function ImageBlock({ src, alt, children }: ImageBlockProps) {
  return (
    <div className="w-full bg-tertiary dark:bg-tertiary-dark transition-colors duration-300">
      <div className="max-w-screen-lg flex sm:flex-row flex-col mx-auto gap-4 py-16 px-4">
        <div className="sm:w-1/3 my-auto space-y-4">{children}</div>
        <div className="sm:w-2/3 relative flex z-10 overflow-hidden ">
          <Image src={src} alt={alt}
            placeholder="blur"/>
        </div>
      </div>
    </div>
  )
}
