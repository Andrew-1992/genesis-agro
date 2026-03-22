'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-28">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-6">Ready to Cultivate Change?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in building a food-secure future for South Sudan. Together, we can transform agriculture and empower communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-primary bg-accent text-primary hover:bg-accent-light">
              Partner With Us
            </Link>
            <Link href="#about" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Learn More About Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}