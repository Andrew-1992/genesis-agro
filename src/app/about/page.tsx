// src/app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const teamMembers = [
    {
      name: 'Dr. John Malual',
      role: 'Founder & CEO',
      bio: 'Agricultural economist with 20+ years of experience in East African agriculture.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Mary Akech',
      role: 'Head of Operations',
      bio: 'Expert in supply chain management and farmer cooperatives.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'James Lual',
      role: 'Agricultural Director',
      bio: 'Specialist in climate-smart agriculture and sustainable farming.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Sarah Nyibol',
      role: 'Community Relations',
      bio: 'Passionate about empowering women farmers and community development.',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ]

  const milestones = [
    { year: '2012', title: 'Founded in Juba', description: 'Started with 50 farmers in Central Equatoria' },
    { year: '2015', title: 'Expanded Operations', description: 'Reached 5 states across South Sudan' },
    { year: '2018', title: 'Research Partnership', description: 'Collaborated with international agricultural institutions' },
    { year: '2021', title: 'Digital Innovation', description: 'Launched mobile advisory services for farmers' },
    { year: '2024', title: 'Impact Milestone', description: 'Empowered 8,200+ farmers nationwide' },
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
            <h1 className="text-white mb-6">About Genesis Agro</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Transforming agriculture in South Sudan through innovation, sustainability, and community empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-3xl text-primary"></i>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower South Sudanese farmers with sustainable agricultural solutions, market access, and knowledge that transforms livelihoods and ensures food security for future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-eye text-3xl text-primary"></i>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A food-secure South Sudan where agriculture drives economic growth, environmental sustainability, and prosperity for all farming communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary text-sm font-semibold">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Decade of Agricultural Excellence</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2012, Genesis Agro Enterprises emerged from a vision to transform South Sudan's agricultural landscape. What began as a small initiative supporting 50 farmers has grown into a comprehensive agricultural development organization reaching thousands across the nation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by resilience, innovation, and an unwavering commitment to the farmers who form the backbone of South Sudan's economy. Through conflict, climate challenges, and economic uncertainty, we've remained steadfast in our mission to empower agricultural communities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-accent pl-4">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-500">Years of Impact</div>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <div className="text-2xl font-bold text-primary">8,200+</div>
                  <div className="text-sm text-gray-500">Farmers Empowered</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Genesis Agro journey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Milestones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Key achievements on our journey of impact</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-accent font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Passionate experts driving agricultural transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the agricultural transformation in South Sudan
            </p>
            <Link href="/contact" className="btn-primary bg-accent text-primary-dark hover:bg-accent-light inline-block">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}