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
    <html lang="en">
      <body className='bg-[#F7F5EB]'>
        <NavBar />
        {children}</body>
    </html>
  )
}
