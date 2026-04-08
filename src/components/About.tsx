// src/components/About.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Leaf, 
  Users, 
  TrendingUp, 
  Calendar, 
  Handshake, 
  Sprout,
  Award,
  Target,
  Eye,
  ArrowRight
} from 'lucide-react'

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: '3+', label: 'Years of Experience', icon: Calendar },
    { value: '15+', label: 'Community Partners', icon: Handshake },
    { value: '25+', label: 'Farmers Empowered', icon: Users },
    { value: '100+', label: 'Acres Cultivated', icon: Leaf },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content - Executive Summary & Mission */}
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
              <span className="text-sm font-medium text-primary">About Trans Nile Agro Ltd</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Engineering Innovative{' '}
              <span className="font-normal text-primary">Agricultural Future</span>
              <br />
              for South Sudan
            </h2>

            {/* Executive Summary */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold text-primary">Trans Nile Agro Ltd</span> is a multifaceted agricultural enterprise committed to enhancing food security and economic prosperity.
                .
              </p>
              <p className="text-gray-600 leading-relaxed">
                We serve as a "one-stop shop" for modern farming, providing everything from high-quality seeds and veterinary medicines to expert consultancy. Our integrated approach ensures that our clients don't just farm 
         — they thrive.     </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To provide hgi-quality agricultural inputs, superior veterinary care, and innovative extension services through a dedicated team of experts, ensuring increased productivity and proftiability for our clients.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-accent-dark" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be the leading catalyst for agricultural transformation in the region, empowering every farmer with the tools and knowledge to achieve sustainable abundance.                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:shadow-md transition-all"
                  >
                    <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-2"
            >
              <Link href="/contact">
                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg">
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-[450px] lg:h-[500px]">
                <Image
                  src="/oba-in.jpg"
                  alt="Genesis Agro Agriculture Team working with farmers"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Sprout className="w-5 h-5 text-accent-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Since 2024</p>
                      <p className="text-xs text-gray-500">Empowering South Sudanese farmers</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Accent Circles */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-100"
        >
          {[
            { icon: Sprout, title: 'Sustainability', description: 'Climate-smart practices for future generations', color: 'text-green-600', bg: 'bg-green-50' },
            { icon: Handshake, title: 'Community', description: 'Working hand-in-hand with local farmers', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: TrendingUp, title: 'Innovation', description: 'Modern solutions for traditional farming', color: 'text-orange-600', bg: 'bg-orange-50' },
          ].map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}