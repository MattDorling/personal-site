import Image from 'next/image'
import cn from 'classnames'
import largeProfile from '../assets/profile/large.jpg'
import { useState } from 'react'
import { Link } from '../components/Link'

export function Hero() {
  const [slideIn, setSlideIn] = useState(false)
  setTimeout(() => setSlideIn(true), 1000)
  return (
    <div className="w-full bg-tertiary dark:bg-tertiary-dark transition-colors duration-300">
      <div className="max-w-screen-lg flex sm:flex-row flex-col mx-auto gap-4 py-16 px-4">
        <div className="max-w-sm sm:max-w-xs mx-auto sm:mx-0 relative flex z-10 overflow-hidden">
          <Image
            src={largeProfile}
            alt="Picture of Matt Dorling with a coastal background"
            placeholder="blur"
            priority={true}
          />
        </div>
        <div className="mx-auto sm:mx-0">
          <h1>Hi, I&apos;m Matt Dorling</h1>
          <ul className="text-2xl pt-8 space-y-2">
            <li>Software Developer</li>
            <li>
              Computer Science student at the{' '}
              <Link newTab href="https://www.ed.ac.uk">
                University of Edinburgh
              </Link>
            </li>
            <li>Skier</li>
            <li>Environmentalist</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
