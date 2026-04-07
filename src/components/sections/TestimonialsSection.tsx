'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface TestimonialsSectionProps {
  testimonials: any[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimonial */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <Quote className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-6" />
                
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                  "{current.content}"
                </p>

                <div className="flex items-center gap-4 mb-6">
                  {current.image && (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(current.image).width(100).height(100).url()}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {current.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {current.position} {current.company && `at ${current.company}`}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < current.rating
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </button>
                </>
              )}
            </div>

            {/* Indicators */}
            {testimonials.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-indigo-600 w-8'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* All Testimonials Grid (Small Preview) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setCurrentIndex(index)}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {testimonial.image && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(testimonial.image).width(50).height(50).url()}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h5>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < testimonial.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {testimonial.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
