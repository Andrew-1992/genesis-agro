'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const values = [
  { icon: '🌱', title: 'Regenerative Practices', description: 'Building soil health and biodiversity for future generations.' },
  { icon: '💧', title: 'Water Conservation', description: 'Efficient irrigation and rainwater harvesting systems.' },
  { icon: '🤝', title: 'Fair Trade & Equity', description: 'Ensuring fair prices and equal opportunities for all farmers.' },
]

export const Sustainability = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Our Commitment to
              <span className="text-primary"> Climate-Smart Agriculture</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Climate change poses unique challenges for South Sudanese farmers. We're leading the transition to resilient, sustainable agricultural practices that protect both livelihoods and the environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through innovative techniques and local knowledge, we're building a food system that can withstand climate shocks while reducing emissions and preserving natural resources.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <div key={value.title} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-all">
                <div className="text-4xl">{value.icon}</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}