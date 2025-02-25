"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import { VerificationModal } from "./verification-modal"

export default function LandingPage() {
  const [showVerification, setShowVerification] = useState(false)

  const handleShare = () => {
    const text = "Get access to the ultimate viral meme pack! 🔥"
    const url = "https://meme-master.vercel.app"
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 via-white to-green-400">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white/80 backdrop-blur-md">
        <div className="flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GimbryfJT62raJxjqycf8w.jfif-Kzhtq1sSNlFUin5EcEeZ3e8EcXoiBC.jpeg"
            alt="Meme Master Logo"
            width={80}
            height={80}
            className="rounded-full border-2 border-blue-500 shadow-lg"
          />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-800 drop-shadow-lg animate-pulse">
            Unleash Your Meme Mastery!
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto">
            Get access to our exclusive pack of viral memes and dominate social media!
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => setShowVerification(true)}
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xl py-6 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Generate Memes
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="ml-4 bg-green-500 hover:bg-green-600 text-white border-none"
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Share on WhatsApp
            </Button>
            <p className="text-sm text-gray-600">Click to verify and download your meme pack instantly!</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon="🚀"
            title="Instant Access"
            description="Get your meme pack immediately after verification"
          />
          <FeatureCard icon="🔥" title="Trending Memes" description="Stay ahead with the latest viral content" />
          <FeatureCard icon="🎨" title="High Quality" description="Premium meme templates ready for customization" />
        </div>
      </main>
      <footer className="py-6 text-center bg-blue-600 text-white">
        <p>© 2024 MemeMaster. All rights reserved.</p>
      </footer>

      <VerificationModal open={showVerification} onClose={() => setShowVerification(false)} />
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

