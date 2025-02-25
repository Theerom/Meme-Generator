"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MemeGenerator() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [template, setTemplate] = useState("drake")

  const templates = [
    { value: "drake", label: "Drake", image: "/meme-templates/drake.jpg" },
    { value: "distracted-boyfriend", label: "Distracted Boyfriend", image: "/meme-templates/distracted-boyfriend.jpg" },
    { value: "two-buttons", label: "Two Buttons", image: "/meme-templates/two-buttons.jpg" },
    // Add more templates as needed
  ]

  const handleGenerate = () => {
    // Here you would typically generate the meme
    console.log("Generating meme with:", { template, topText, bottomText })
    // In a real application, you might call an API or use a library to generate the meme
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-white">
          Create Your Meme
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="template" className="text-lg font-semibold">
                  Choose a template
                </Label>
                <Select onValueChange={setTemplate} defaultValue={template}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a meme template" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="top-text" className="text-lg font-semibold">
                  Top Text
                </Label>
                <Input
                  id="top-text"
                  placeholder="Enter top text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  className="border-2 border-purple-300 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bottom-text" className="text-lg font-semibold">
                  Bottom Text
                </Label>
                <Input
                  id="bottom-text"
                  placeholder="Enter bottom text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  className="border-2 border-purple-300 focus:border-purple-500"
                />
              </div>
              <Button
                onClick={handleGenerate}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                Generate Meme
              </Button>
            </div>
            <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
              {template && (
                <Image
                  src={templates.find((t) => t.value === template)?.image || "/placeholder.svg"}
                  alt="Meme Template"
                  layout="fill"
                  objectFit="cover"
                />
              )}
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white text-shadow">
                <h3 className="text-2xl font-bold text-center">{topText}</h3>
                <h3 className="text-2xl font-bold text-center">{bottomText}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

