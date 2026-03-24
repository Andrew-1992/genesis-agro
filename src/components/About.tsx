// src/components/About.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: '10+', label: 'Years of Experience', icon: 'fas fa-calendar-alt' },
    { value: '50+', label: 'Community Partners', icon: 'fas fa-handshake' },
    { value: '50+', label: 'Farmers Empowered', icon: 'fas fa-users' },
    { value: '100+', label: 'Acres Cultivated', icon: 'fas fa-leaf' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      {/* Background Image - Clean Agriculture Team */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us.jpg"
          alt="Genesis Agro Agriculture Team"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream-dark"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content - Mission & Vision */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
              <span className="text-sm font-medium text-primary">About Us</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Engineering innovative 
              <span className="text-primary"> Agricultural Future for South Sudan</span>
            </h2>

            {/* Mission Statement */}
            <div className="space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <i className="fas fa-bullseye text-accent"></i>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower South Sudanese farmers with sustainable agricultural solutions, 
                  quality inputs, and market access that transforms livelihoods and ensures 
                  food security for future generations.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <i className="fas fa-eye text-accent"></i>
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A food-secure South Sudan where agriculture drives economic growth, 
                  environmental sustainability, and prosperity for all farming communities.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <i className={`${stat.icon} text-2xl text-accent mb-2 block`}></i>
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
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
              <Link href="/contact">
                <button className="group inline-flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="font-semibold">Partner With Us</span>
                  <motion.i
                    className="fas fa-arrow-right"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                  />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] lg:h-[550px]">
                <Image
                  src="/about2.jpg"
                  alt="Genesis Agro Agriculture Team working with farmers"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <i className="fas fa-seedling text-primary-dark"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Since 2024</p>
                      <p className="text-sm text-gray-500">Serving South Sudanese farmers</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Accent Circles */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Core Values Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-20 pt-8 border-t border-gray-200"
        >
          {[
            { icon: '🌱', title: 'Sustainability', description: 'Climate-smart practices for future generations' },
            { icon: '🤝', title: 'Community', description: 'Working hand-in-hand with local farmers' },
            { icon: '📈', title: 'Innovation', description: 'Modern solutions for traditional farming' },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-2xl">{value.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}