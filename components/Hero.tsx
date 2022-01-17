import Image from 'next/image'

import { ReactNode } from 'react'

interface HeroProps {
  src: StaticImageData
  alt: string
  children: ReactNode
}
export function Hero({ src, alt, children }: HeroProps) {
  return (
    <div className="w-full bg-tertiary dark:bg-tertiary-dark transition-colors duration-300">
      <div className="max-w-screen-lg flex sm:flex-row flex-col mx-auto gap-4 py-16 px-4">
        <div className="max-w-sm sm:max-w-xs mx-auto sm:mx-0 relative flex z-10 overflow-hidden">
          <Image src={src} alt={alt} placeholder="blur" priority={true} />
        </div>
        <div className="mx-auto sm:mx-0 text-2xl space-y-4 my-auto">{children}</div>
      </div>
    </div>
  )
}
