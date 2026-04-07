'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Send, X, Bot, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AITwinChatProps {
  isOpen: boolean
  onClose: () => void
  profile: any
}

export function AITwinChat({ isOpen, onClose, profile }: AITwinChatProps) {
  const [personality, setPersonality] = useState(profile?.aiTwinPersonality || 'clear')
  
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    body: { personality },
    initialMessages: profile?.aiTwinGreeting ? [{
      id: 'greeting',
      role: 'assistant',
      content: profile.aiTwinGreeting,
    }] : [],
  })

  const suggestedPrompts = profile?.suggestedPrompts || [
    "Tell me about your experience",
    "What are your key skills?",
    "Show me your recent projects",
    "What services do you offer?"
  ]

  const handlePromptClick = (prompt: string) => {
    handleInputChange({ target: { value: prompt } } as any)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-4 right-4 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-gray-700"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {profile?.name}'s AI Twin
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Always here to help</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Personality Selector */}
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              {['crisp', 'clear', 'chatty'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setPersonality(mode)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    personality === mode
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user'
                    ? 'bg-indigo-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  )}
                </div>
                <div
                  className={`flex-1 rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="flex-1 rounded-2xl px-4 py-2 bg-gray-100 dark:bg-gray-800">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}

            {/* Suggested Prompts */}
            {messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Try asking:</p>
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handlePromptClick(prompt)}
                    className="w-full text-left px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 dark:text-white"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
