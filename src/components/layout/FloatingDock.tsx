'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  FolderOpen, 
  Award, 
  Star,
  MessageSquare,
  Mail,
  Bot
} from 'lucide-react'

interface DockItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

const dockItems: DockItem[] = [
  { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" />, href: '#home' },
  { id: 'about', label: 'About', icon: <User className="w-5 h-5" />, href: '#about' },
  { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" />, href: '#skills' },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" />, href: '#experience' },
  { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" />, href: '#education' },
  { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" />, href: '#projects' },
  { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" />, href: '#certifications' },
  { id: 'testimonials', label: 'Testimonials', icon: <Star className="w-5 h-5" />, href: '#testimonials' },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" />, href: '#contact' },
]

interface FloatingDockProps {
  onChatOpen: () => void
}

export function FloatingDock({ onChatOpen }: FloatingDockProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Main Dock */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl px-4 py-3 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-2">
            {dockItems.map((item, index) => (
              <motion.button
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleClick(item.href)}
                className="relative p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.2, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-gray-700 dark:text-gray-300">
                  {item.icon}
                </div>
                
                {/* Tooltip */}
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-lg">
                      {item.label}
                    </div>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Twin Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onChatOpen}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:shadow-indigo-500/50 transition-shadow"
      >
        <Bot className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
      </motion.button>
    </>
  )
}
