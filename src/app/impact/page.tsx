// src/app/impact/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

export default function ImpactPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: 8200, label: 'Farmers Empowered', suffix: '+', icon: 'fas fa-users' },
    { value: 12500, label: 'Acres Cultivated', suffix: '+', icon: 'fas fa-leaf' },
    { value: 45, label: 'Cooperatives Partnered', suffix: '+', icon: 'fas fa-handshake' },
    { value: 30, label: 'Average Income Increase', suffix: '%', icon: 'fas fa-chart-line' },
    { value: 150, label: 'Jobs Created', suffix: '+', icon: 'fas fa-briefcase' },
    { value: 5000, label: 'Tons of Food Produced', suffix: '+', icon: 'fas fa-apple-alt' },
  ]

  const stories = [
    {
      name: 'Mary Akech',
      location: 'Bor, South Sudan',
      story: 'Before Genesis Agro, I struggled to feed my family. After receiving training and quality seeds, my yields doubled. Now I sell surplus to local markets and send my children to school.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      before: '2 acres, low yield',
      after: '5 acres, surplus production',
    },
    {
      name: 'James Lual',
      location: 'Juba, South Sudan',
      story: 'The irrigation system installed by Genesis Agro changed everything. I now farm year-round instead of waiting for rains. My income has increased by 40%.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      before: 'Rain-fed only',
      after: 'Year-round farming',
    },
    {
      name: 'Sarah Nyibol',
      location: 'Wau, South Sudan',
      story: 'Through the women\'s cooperative supported by Genesis Agro, we\'ve gained market access we never had before. We\'re now supplying hotels in Juba.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      before: 'Local market only',
      after: 'Regional distribution',
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
            <h1 className="text-white mb-6">Our Impact</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Transforming lives and communities through sustainable agriculture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact by the Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Measurable results from our work across South Sudan</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-2xl text-primary`}></i>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {inView && <CountUp end={stat.value} duration={2.5} />}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real stories from farmers whose lives have been transformed</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <i className="fas fa-quote-left text-accent text-2xl mb-4 inline-block"></i>
                  <p className="text-gray-600 mb-4 italic">{story.story}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-primary">{story.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">{story.location}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-red-500">Before: {story.before}</span>
                      <span className="text-green-500">After: {story.after}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Environmental Impact</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our commitment to sustainability extends beyond economic impact. We're proud to contribute to environmental conservation through:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <i className="fas fa-tree text-accent"></i>
                  <span>10,000+ trees planted for agroforestry</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-tint text-accent"></i>
                  <span>Water conservation systems installed for 500+ farms</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-sun text-accent"></i>
                  <span>Solar-powered irrigation in 8 communities</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-recycle text-accent"></i>
                  <span>Organic farming practices adopted by 2,000+ farmers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3"
                alt="Environmental conservation"
                fill
                className="object-cover"
              />
            </motion.div>
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
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Help us reach more farmers and create greater impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent text-primary-dark hover:bg-accent-light inline-block">
                Partner With Us
              </a>
              <a href="/donate" className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-block">
                Make a Donation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}