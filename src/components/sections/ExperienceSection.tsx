'use client'

import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { format } from 'date-fns'

interface ExperienceSectionProps {
  experience: any[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600" />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1.5 md:-translate-x-2 z-10 ring-4 ring-white dark:ring-gray-900" />

                  <div className="ml-8 md:ml-0 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {format(new Date(exp.startDate), 'MMM yyyy')} -{' '}
                          {exp.current ? 'Present' : format(new Date(exp.endDate), 'MMM yyyy')}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    {exp.description && (
                      <div className="prose prose-sm dark:prose-invert max-w-none mb-4">
                        <PortableText value={exp.description} />
                      </div>
                    )}

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
