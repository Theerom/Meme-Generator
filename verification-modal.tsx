"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface VerificationModalProps {
  open: boolean
  onClose: () => void
}

export function VerificationModal({ open, onClose }: VerificationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Human Verification Required</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center text-gray-600">Please complete the verification to access your meme pack.</p>
          <iframe
            src="https://bestlocker.eu/iframe/4eeb8602-f344-11ef-a1ca-c2a106037d45"
            className="w-full min-h-[400px] rounded-lg"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

