'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface ProjectsSectionProps {
  projects: any[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
  const otherProjects = projects.filter(p => !p.featured).slice(0, 6)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12" />

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                {project.image && (
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={urlFor(project.image).width(600).height(400).url()}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                More Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-4 text-sm">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
