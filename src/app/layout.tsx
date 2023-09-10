import './globals.css'
import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'


export const metadata: Metadata = {
  title: 'CrowdClothing',
  description: 'Challenge app for ITCrowd by German Soto Zulet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="bg-[#F7F5EB]" lang="en">
      <body className='2xl:h-screen '>
        <NavBar />
        {children}</body>
    </html>
  )
}
