'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import * as LucideIcons from 'lucide-react'

interface SkillsSectionProps {
  skills: any[]
}

const categoryColors: { [key: string]: string } = {
  frontend: '#3b82f6',
  backend: '#10b981',
  database: '#f59e0b',
  devops: '#8b5cf6',
  design: '#ec4899',
  other: '#6366f1',
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as { [key: string]: any[] })

  const chartData = skills.map(skill => ({
    name: skill.name,
    level: skill.level,
    category: skill.category,
  }))

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.Code
    return <Icon className="w-6 h-6" />
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12" />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {Object.entries(groupedSkills).map(([category, categorySkills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill._id}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon && (
                            <div className="text-gray-700 dark:text-gray-300">
                              {getIcon(skill.icon)}
                            </div>
                          )}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: categoryColors[category] || categoryColors.other }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Proficiency Overview
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100}
                  stroke="#9ca3af"
                />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="level" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={categoryColors[entry.category] || categoryColors.other} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
