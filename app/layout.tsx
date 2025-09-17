import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../lib/context/LanguageContext'
import { SpeedInsights } from '@vercel/speed-insights/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yujun Zheng - Software Engineer | Full Stack Developer',
  description: 'Yujun Zheng is a results-driven Software Engineer with 4+ years of experience in full-stack development, IoT systems, and test automation. Currently pursuing MS in Computer Science at Georgia Tech.',
  keywords: 'Yujun Zheng, Software Engineer, Full Stack Developer, IoT, Test Automation, Java, Python, JavaScript, AWS, TikTok, Georgia Tech, Computer Science, AI',
  authors: [{ name: 'Yujun Zheng', url: 'https://yujunzheng.com' }],
  creator: 'Yujun Zheng',
  publisher: 'Yujun Zheng',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Yujun Zheng - Software Engineer | Full Stack Developer',
    description: 'Results-driven Software Engineer with 4+ years of experience in full-stack development, IoT systems, and test automation.',
    url: 'https://yujunzheng.com',
    siteName: 'Yujun Zheng Personal Website',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://yujunzheng.com/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Yujun Zheng - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yujun Zheng - Software Engineer',
    description: 'Results-driven Software Engineer with 4+ years of experience in full-stack development, IoT systems, and test automation.',
    images: ['https://yujunzheng.com/avatar.jpg'],
  },
  alternates: {
    canonical: 'https://yujunzheng.com',
    languages: {
      'en-US': 'https://yujunzheng.com',
      'zh-CN': 'https://yujunzheng.com',
    },
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
