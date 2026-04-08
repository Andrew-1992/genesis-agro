'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tomatoe.jpg"
          alt="South Sudanese farmland at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="mb-6">
              Growing South Sudan's Future,
              <span className="text-accent"> One Harvest at a Time</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Empowering farmers, strengthening food security, and building a sustainable agricultural economy across South Sudan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary bg-accent text-primary hover:bg-accent-light text-center">
                Partner With Us
              </Link>
              <Link href="#impact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-center">
                Our Impact
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-white">
                  <div className="text-4xl mb-4">🌾</div>
                  <p className="text-lg font-semibold mb-2">Since 2024</p>
                  <p className="text-sm opacity-80">Serving South Sudanese farmers with dedication</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </motion.div>
    </section>
  )
}