// src/app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export default function AboutPage() {
  // Create separate refs for each animated section
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [milestonesRef, milestonesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const teamMembers = [
    {
      name: 'Oba John Atanasio',
      role: 'Founder & CEO',
      bio: 'Agricultural economist with 5+ years of experience in East African agriculture.',
      image: '/obaa.jpg',
    },
    {
      name: 'Okongo Martin',
      role: 'Head of Operations',
      bio: 'Expert in supply chain management and farmer cooperatives.',
      image: '/okongo.jpg',
    },
    
    {
      name: 'Andrew Omol',
      role: 'Community Relations',
      bio: 'Passionate about empowering women farmers and community development.',
      image: '/omol.jpg',
    },
  ]

  const milestones = [
    { year: '2024', title: 'Founded in Juba', description: 'Started with 50 farmers in Central Equatoria' },
    { year: '2025', title: 'Digital Innovation', description: 'Launched mobile advisory services for farmers' },
    { year: '2026', title: 'Impact Milestone', description: 'Empowered 8,200+ farmers nationwide' },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#E6B422_0%,_transparent_70%)]"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">About Trans Nile Agro</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Transforming agriculture in South Sudan through innovation, sustainability, and community empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Icons Removed */}
      <section ref={missionRef} className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality agricultural inputs, superior veterinary care, and innovative extension services through a dedicated team of experts, ensuring increased productivity and profitability for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading catalyst for agricultural transformation in the region, empowering every farmer with the tools and knowledge to achieve sustainable abundance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary text-sm font-semibold">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advancing Agriculture in South Sudan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Trans Nile Agro Ltd</strong>; is a multifaceted agricultural enterprise committed to enhancing food security and economic prosperity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We serve as a "one-stop shop" for the modern farmer, providing everything from high-quality seeds and veterinary medicines to expert consultancy. Our integrated approach ensures that our clients don't just farm —they thrive, with access to the best resources and knowledge in the industry. With a focus on sustainability and community empowerment, we are dedicated to transforming agriculture in South Sudan and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-accent pl-4">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-gray-500">Years of Impact</div>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-gray-500">Farmers Empowered</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/about1.jpg"
                alt="Genesis Agro journey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section ref={milestonesRef} className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={milestonesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
                animate={milestonesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-accent font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#E6B422_0%,_transparent_70%)]"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the agricultural transformation in South Sudan
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Partner With Us
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}