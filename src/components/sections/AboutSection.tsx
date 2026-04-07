'use client'

import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import { MapPin, Mail, Phone } from 'lucide-react'

interface AboutSectionProps {
  profile: any
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12" />

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            {profile?.bio && <PortableText value={profile.bio} />}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {profile?.location && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{profile.location}</p>
                </div>
              </motion.div>
            )}

            {profile?.email && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {profile.email}
                  </a>
                </div>
              </motion.div>
            )}

            {profile?.phone && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a 
                    href={`tel:${profile.phone}`}
                    className="font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {profile.phone}
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
