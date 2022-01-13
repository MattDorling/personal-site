import { ReactNode } from 'react'
import { Header } from './Header'
import Head from 'next/head'

export interface LayoutProps {
  children: ReactNode
}
export function Layout({ children }: LayoutProps) {
  return (
    <>
    <Head>
      <title>Matt Dorling</title>
    </Head>
      <div className="bg-white dark:bg-primary transition-colors duration-300">
        <Header />
        {children}
      </div>
    </>
  )
}
