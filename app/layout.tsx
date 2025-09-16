import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yujun Zheng - Software Engineer',
  description: 'Results-driven Software Engineer with 4+ years of experience in full-stack development, IoT systems, and test automation. Currently SDET II at TikTok.',
  keywords: 'Software Engineer, Full Stack Developer, IoT, Test Automation, Java, Python, JavaScript, AWS',
  authors: [{ name: 'Yujun Zheng' }],
  openGraph: {
    title: 'Yujun Zheng - Software Engineer',
    description: 'Results-driven Software Engineer with 4+ years of experience in full-stack development, IoT systems, and test automation.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
