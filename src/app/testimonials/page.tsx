// src/app/testimonials/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'

export default function TestimonialsPage() {
  // Create separate refs for each section
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [filtersRef] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [videosRef, videosInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [filter, setFilter] = useState('all')

  const testimonials = [
    {
      id: 1,
      name: 'Mary Akech',
      role: 'Women\'s Farming Group Leader',
      location: 'Bor, South Sudan',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'Genesis Agro gave our cooperative the tools and training we needed to double our yields. For the first time, we\'re selling surplus to the capital. This has transformed our community.',
      rating: 5,
      category: 'farmers',
      date: 'March 2024',
    },
    {
      id: 2,
      name: 'James Lual',
      role: 'Cooperative Leader',
      location: 'Juba, South Sudan',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'The training on climate-smart agriculture has been invaluable. Our farmers now know how to adapt to changing weather patterns and still produce abundant harvests.',
      rating: 5,
      category: 'cooperatives',
      date: 'February 2024',
    },
    {
      id: 3,
      name: 'Sarah Nyibol',
      role: 'Smallholder Farmer',
      location: 'Wau, South Sudan',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'Genesis Agro\'s market linkage program opened doors we never knew existed. Our produce now reaches buyers in Uganda and Kenya at fair prices.',
      rating: 5,
      category: 'farmers',
      date: 'January 2024',
    },
    {
      id: 4,
      name: 'Dr. Michael Deng',
      role: 'Agricultural Researcher',
      location: 'Ministry of Agriculture',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      content: 'The research collaboration with Genesis Agro has produced valuable insights into climate adaptation strategies for South Sudanese agriculture.',
      rating: 5,
      category: 'partners',
      date: 'December 2023',
    },
    {
      id: 5,
      name: 'Esther Nyibol',
      role: 'Youth Farmer',
      location: 'Rumbek, South Sudan',
      image: 'https://randomuser.me/api/portraits/women/89.jpg',
      content: 'As a young farmer, the training and support from Genesis Agro gave me the confidence to start my own agricultural business. I now employ three other youth in my community.',
      rating: 5,
      category: 'farmers',
      date: 'November 2023',
    },
    {
      id: 6,
      name: 'Peter Malual',
      role: 'NGO Partnership Coordinator',
      location: 'World Food Programme',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      content: 'Genesis Agro has been an excellent partner in our food security initiatives. Their local knowledge and dedication to farmers is unmatched.',
      rating: 5,
      category: 'partners',
      date: 'October 2023',
    },
  ]

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter)

  const categories = [
    { id: 'all', label: 'All Stories', icon: 'fa-users' },
    { id: 'farmers', label: 'Farmers', icon: 'fa-seedling' },
    { id: 'cooperatives', label: 'Cooperatives', icon: 'fa-handshake' },
    { id: 'partners', label: 'Partners', icon: 'fa-building' },
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
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">Success Stories</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Hear from the farmers, partners, and communities we've worked with
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Success Stories', icon: 'fa-star' },
              { value: '98%', label: 'Satisfaction Rate', icon: 'fa-smile' },
              { value: '45+', label: 'Partner Organizations', icon: 'fa-handshake' },
              { value: '8,200+', label: 'Lives Impacted', icon: 'fa-heart' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <i className={`fas ${stat.icon} text-2xl text-accent`}></i>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section ref={filtersRef} className="py-8 bg-cream">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === cat.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:scale-105'
                }`}
              >
                <i className={`fas ${cat.icon}`}></i>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={testimonialsRef} className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Rating Stars */}
                <div className="flex mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-accent text-sm"></i>
                  ))}
                </div>
                
                {/* Quote Icon */}
                <i className="fas fa-quote-left text-3xl text-primary/20 mb-4 inline-block group-hover:text-primary/30 transition-colors"></i>
                
                {/* Testimonial Content */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent/20 group-hover:ring-accent/50 transition-all">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary group-hover:text-primary-dark transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                
                {/* Date */}
                <div className="mt-3 text-xs text-gray-400 flex items-center gap-1">
                  <i className="fas fa-calendar-alt text-accent text-[10px]"></i>
                  {testimonial.date}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <i className="fas fa-inbox text-5xl text-gray-300 mb-4 inline-block"></i>
              <p className="text-gray-500">No testimonials found for this category.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 text-primary hover:text-accent transition-colors"
              >
                View all stories
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Testimonials */}
      <section ref={videosRef} className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Watch Their Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from farmers about their transformation journey
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Mary\'s Journey to Success', duration: '3:45', thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Cooperative Transformation', duration: '4:20', thumbnail: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Youth in Agriculture', duration: '5:10', thumbnail: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            ].map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                animate={videosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-play text-primary-dark text-sm ml-0.5"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-semibold text-center text-gray-800 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
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
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Share Your Story</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Have you been impacted by our work? We'd love to hear your story.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Share Your Experience
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}