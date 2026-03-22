'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    text: "Genesis Agro gave our cooperative the tools and training we needed to double our yields. For the first time, we're selling surplus to the capital. This has transformed our community.",
    name: "Mary Akech",
    title: "Women's Farming Group, Bor",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The training on climate-smart agriculture has been invaluable. Our farmers now know how to adapt to changing weather patterns and still produce abundant harvests.",
    name: "James Lual",
    title: "Cooperative Leader, Juba",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Genesis Agro's market linkage program opened doors we never knew existed. Our produce now reaches buyers in Uganda and Kenya at fair prices.",
    name: "Sarah Nyibol",
    title: "Smallholder Farmer, Wau",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
]

export const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Voices from the Field</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the farmers and partners we work with
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center"
            >
              <i className="fas fa-quote-left text-4xl text-accent mb-6 inline-block"></i>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-primary">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[current].title}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-cream-dark hover:bg-primary hover:text-white transition-colors"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'w-6 bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-cream-dark hover:bg-primary hover:text-white transition-colors"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}