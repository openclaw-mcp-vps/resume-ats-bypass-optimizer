import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ATS Resume Optimizer – Beat the Bots, Land the Interview',
  description: 'AI-powered resume analysis that extracts keywords from job descriptions and optimizes your resume to pass ATS filters. Real-time scoring and downloadable results.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5c046c95-e61d-42c3-8562-690e5b1334ae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
