// src/components/About.tsx
'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  
  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const stats = [
    { value: '10+', label: 'Years of Experience', description: 'Decades of agricultural expertise' },
    { value: '50+', label: 'Community Partners', description: 'Growing together across South Sudan' },
    { value: '8,200+', label: 'Farmers Empowered', description: 'Transforming lives through agriculture' },
    { value: '12,500+', label: 'Acres Cultivated', description: 'Sustainable land management' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Our Story</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We are rooted in{' '}
              <span className="relative inline-block">
                <span className="text-primary">innovative</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent/20 -z-10"
                />
              </span>
              <br />
              <span className="text-gray-800">Agriculture</span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                For over a three year period, Genesis Agro has worked hand-in-hand with South Sudanese farmers to build resilience. From conflict-sensitive agriculture to climate-smart innovations, we are deeply rooted in community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines traditional farming wisdom with modern techniques, ensuring sustainable growth that benefits both farmers and the land they cultivate. We believe that true progress comes from empowering local communities and respecting the wisdom of generations past while embracing innovation.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <motion.div
                      animate={hoveredStat === index ? { scale: 1.05 } : { scale: 1 }}
                      className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={hoveredStat === index ? { width: '40px' } : { width: 0 }}
                      className="h-0.5 bg-accent rounded-full"
                    />
                    <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="font-semibold">Discover Our Mission</span>
                <motion.i
                  className="fas fa-arrow-right"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Interactive Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-2xl"></div>
            
            {/* Main Image Container with 3D Effect */}
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-[450px] lg:h-[550px]">
                <Image
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Farmers working together in South Sudan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <i className="fas fa-hand-holding-heart text-primary-dark"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Impact Since 2012</p>
                      <p className="text-sm text-gray-500">Empowering South Sudanese farmers</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Background Accent Circle */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-20 pt-8 border-t border-gray-200"
        >
          {[
            { icon: '🌱', title: 'Sustainable Practices', description: 'Climate-smart agriculture for future generations' },
            { icon: '🤝', title: 'Community First', description: 'Working hand-in-hand with local farmers' },
            { icon: '📈', title: 'Proven Results', description: 'Measurable impact across South Sudan' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="flex items-start gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}