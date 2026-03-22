// src/app/services/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function ServicesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      title: 'Agriculture Tools',
      description: 'High-quality, durable farming equipment including plows, hoes, pruning shears, and modern mechanized tools for efficient farming.',
      features: ['Hand Tools', 'Mechanized Equipment', 'Maintenance Services'],
      icon: 'fas fa-tools',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7f8c?ixlib=rb-4.0.3',
      price: 'Custom Pricing',
    },
    {
      title: 'Agriculture Seeds & Fertilizers',
      description: 'Premium seeds of drought-resistant crops and organic fertilizers tailored for South Sudan\'s unique climate and soil conditions.',
      features: ['Hybrid Seeds', 'Organic Fertilizers', 'Soil Testing'],
      icon: 'fas fa-seedling',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3',
      price: 'Seasonal Rates',
    },
    {
      title: 'Veterinary Drugs & Tools',
      description: 'Complete veterinary care solutions including vaccines, antibiotics, and diagnostic tools for livestock health management.',
      features: ['Vaccines', 'Treatment Protocols', 'Livestock Care'],
      icon: 'fas fa-pills',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3',
      price: 'Market Price',
    },
    {
      title: 'Agriculture Extension Services',
      description: 'Expert training and advisory services on modern farming techniques, post-harvest handling, and sustainable practices.',
      features: ['Field Training', 'Technical Support', 'Best Practices'],
      icon: 'fas fa-chalkboard-user',
      image: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098f6?ixlib=rb-4.0.3',
      price: 'Custom Packages',
    },
    {
      title: 'Agricultural Research',
      description: 'Cutting-edge research on crop improvement, climate adaptation, and innovative farming solutions for South Sudanese agriculture.',
      features: ['Crop Research', 'Climate Studies', 'Innovation Labs'],
      icon: 'fas fa-flask',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3',
      price: 'Project-Based',
    },
    {
      title: 'Agriculture Consultancy',
      description: 'Professional advisory services for farm management, business planning, market analysis, and sustainable agricultural practices.',
      features: ['Farm Planning', 'Business Strategy', 'Market Analysis', 'Sustainability Consulting'],
      icon: 'fas fa-chart-line',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3',
      price: 'Hourly/Project',
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive agricultural solutions tailored for South Sudanese farmers and agribusinesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <i className={`${service.icon} text-3xl`}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-semibold text-sm">{service.price}</span>
                    <button className="text-primary group-hover:translate-x-1 transition-transform">
                      Learn More <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                  
                  {/* Expanded Features */}
                  {selectedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                            <i className="fas fa-check-circle text-accent text-xs"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition"
                      >
                        Request Service
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple process to access our services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Contact Us', description: 'Reach out via phone, email, or visit our office' },
              { step: '02', title: 'Needs Assessment', description: 'We evaluate your specific agricultural needs' },
              { step: '03', title: 'Service Delivery', description: 'Receive tailored solutions and ongoing support' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Farm?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to achieve your agricultural goals
            </p>
            <Link href="/contact" className="btn-primary bg-accent text-primary-dark hover:bg-accent-light inline-block">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}