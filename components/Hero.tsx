import Image from 'next/image'
import cn from 'classnames'
import largeProfile from '../assets/profile/large.jpg'
import { useState } from 'react'

export function Hero() {
  const [slideIn, setSlideIn] = useState(false)
  setTimeout(() => setSlideIn(true), 1000)
  return (
    <div className="w-full bg-tertiary dark:bg-tertiary-dark transition-colors duration-300 ">
      <div className="max-w-screen-lg flex flex-row mx-auto py-4 ">
        <div className="max-w-sm relative  bg-red-200 flex z-10 overflow-hidden rounded-2xl m-2">
          <Image
            src={largeProfile}
            alt="Picture of Matt Dorling with a coastal background"
            placeholder="blur"
            // layout="fill"
          />
        </div>
        <div className="">
          <h1>Welcome.</h1>
        </div>
      </div>
    </div>
  )
}
