'use client'

import { useState } from 'react'
import { FloatingDock } from './FloatingDock'
import { AITwinChat } from './AITwinChat'

export function PortfolioInteractive({ profile }: { profile: any }) {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <FloatingDock onChatOpen={() => setIsChatOpen(true)} />
      <AITwinChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        profile={profile}
      />
    </>
  )
}
