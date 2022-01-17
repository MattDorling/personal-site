import NextLink from 'next/link'
import { ReactNode } from 'react'

interface MyLinkProps {
  href: string
  newTab?: boolean
  children: ReactNode
}
export function Link({
  href,
  newTab = false,
  children,
  ...props
}: MyLinkProps) {
  return (
    <NextLink href={href} {...props}>
      <a
        rel={newTab && 'noopener noreferrer'}
        target={newTab && '_blank'}
        className="font-medium hover:underline focus:underline hover:opacity-80"
      >
        {children}
      </a>
    </NextLink>
  )
}
