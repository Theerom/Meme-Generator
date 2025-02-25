import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meme Master - Get Viral Meme Pack",
  description: "Download the ultimate viral meme pack and dominate social media!",
  openGraph: {
    title: "Meme Master - Get Viral Meme Pack",
    description: "Download the ultimate viral meme pack and dominate social media!",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GimbryfJT62raJxjqycf8w.jfif-Kzhtq1sSNlFUin5EcEeZ3e8EcXoiBC.jpeg",
        width: 1200,
        height: 1200,
        alt: "Meme Master",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

