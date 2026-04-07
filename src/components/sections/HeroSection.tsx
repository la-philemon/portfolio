'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface HeroSectionProps {
  profile: any
}

export function HeroSection({ profile }: HeroSectionProps) {
  const [currentTagline, setCurrentTagline] = useState(0)
  const taglines = profile?.taglines || ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [taglines.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float [animation-delay:1s]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-6"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {profile?.name || 'Your Name'}
              </span>
            </motion.h1>

            {/* Animated Tagline */}
            <div className="h-20 lg:h-24 mb-6">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  {taglines[currentTagline]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {profile?.title || 'Passionate about creating amazing digital experiences'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              {profile?.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-semibold border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Download CV
                </a>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              {profile?.socialLinks?.github && (
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {profile?.socialLinks?.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
              {profile?.image ? (
                <Image
                  src={urlFor(profile.image).width(500).height(500).url()}
                  alt={profile.name}
                  width={500}
                  height={500}
                  className="relative rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
                />
              ) : (
                <div className="relative rounded-full w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-600 to-purple-600 border-8 border-white dark:border-gray-800 shadow-2xl" />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-gray-600 dark:text-gray-400">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
