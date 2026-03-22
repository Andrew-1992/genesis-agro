// src/components/Services.tsx
'use client'

import { motion, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const services = [
  {
    title: 'Agriculture Tools',
    description: 'High-quality, durable farming equipment including plows, hoes, pruning shears, and modern mechanized tools for efficient farming.',
    bgColor: 'from-primary to-primary-light',
    features: ['Hand Tools', 'Mechanized Equipment', 'Maintenance Services'],
  },
  {
    title: 'Agriculture Seeds & Fertilizers',
    description: 'Premium seeds of drought-resistant crops and organic fertilizers tailored for South Sudan\'s unique climate and soil conditions.',
    bgColor: 'from-primary-dark to-primary',
    features: ['Hybrid Seeds', 'Organic Fertilizers', 'Soil Testing'],
  },
  {
    title: 'Veterinary Drugs & Tools',
    description: 'Complete veterinary care solutions including vaccines, antibiotics, and diagnostic tools for livestock health management.',
    bgColor: 'from-primary to-primary-light',
    features: ['Vaccines', 'Treatment Protocols', 'Livestock Care'],
  },
  {
    title: 'Agriculture Extension Services',
    description: 'Expert training and advisory services on modern farming techniques, post-harvest handling, and sustainable practices.',
    bgColor: 'from-primary-dark to-primary',
    features: ['Field Training', 'Technical Support', 'Best Practices'],
  },
  {
    title: 'Agricultural Research',
    description: 'Cutting-edge research on crop improvement, climate adaptation, and innovative farming solutions for South Sudanese agriculture.',
    bgColor: 'from-primary to-primary-light',
    features: ['Crop Research', 'Climate Studies', 'Innovation Labs'],
  },
  {
    title: 'Agriculture Consultancy',
    description: 'Professional advisory services for farm management, business planning, market analysis, and sustainable agricultural practices.',
    bgColor: 'from-primary-dark to-primary',
    features: ['Farm Planning', 'Business Strategy', 'Market Analysis', 'Sustainability Consulting'],
  },
]

export const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-cream-dark to-cream relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header with Enhanced Styling */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </motion.div>
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for every stage of the agricultural journey
          </p>
        </motion.div>

        {/* Services Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const mouseX = useMotionValue(0)
            const mouseY = useMotionValue(0)
            
            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect()
              mouseX.set(e.clientX - rect.left)
              mouseY.set(e.clientY - rect.top)
            }

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
                className="relative group"
              >
                {/* Animated Background Light Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(230, 180, 34, 0.2), transparent 70%)`,
                  }}
                />
                
                {/* Card with Green Background */}
                <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-white/20 group-hover:border-accent/50`}>
                  {/* Decorative Number Badge */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-sm font-bold text-white/80">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Title with Accent Underline Animation */}
                  <div className="relative mb-4 pt-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={hoveredIndex === index ? { width: '40px' } : { width: 0 }}
                      className="h-0.5 bg-accent mt-2 rounded-full"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List with Staggered Animation */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Link with Arrow Animation */}
                  <motion.div
                    animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                    className="mt-auto pt-4"
                  >
                    <button className="group/btn flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-light transition-colors">
                      <span>Learn More</span>
                      <motion.i 
                        animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                        className="fas fa-arrow-right text-xs transition-transform"
                      />
                    </button>
                  </motion.div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution for your agricultural needs?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 group shadow-md hover:shadow-lg">
            <span>Contact Our Experts</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
        </motion.div>
      </div>
    </section>
  )
}