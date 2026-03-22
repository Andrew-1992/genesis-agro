'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'USAID', icon: 'fas fa-hand-holding-heart' },
  { name: 'WFP', icon: 'fas fa-utensils' },
  { name: 'Ministry of Agriculture', icon: 'fas fa-leaf' },
  { name: 'Fair Trade Certified', icon: 'fas fa-handshake' },
  { name: 'Local Cooperatives Union', icon: 'fas fa-users' },
]

export const TrustBar = () => {
  return (
    <section className="py-12 bg-cream-dark border-y border-cream-darker">
      <div className="container-custom">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wide mb-6">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300 group cursor-pointer"
            >
              <i className={`${partner.icon} text-2xl group-hover:scale-110 transition-transform`}></i>
              <span className="text-sm font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}