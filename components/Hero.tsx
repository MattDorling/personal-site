import Image from 'next/image'
import largeProfile from '../assets/profile/large.jpg'

export function Hero() {
  return (
    <div className="w-full bg-tertiary dark:bg-tertiary-dark transition-colors duration-300 ">
      <div className="max-w-screen-lg mx-auto py-8 ">
        <div className="max-w-sm relative z-10 flex overflow-hidden rounded-2xl m-4">
          <Image
            src={largeProfile}
            alt="Picture of Matt Dorling"
            placeholder="blur"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
