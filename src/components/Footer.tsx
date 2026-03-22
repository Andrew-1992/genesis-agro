// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Logo configuration - Replace with your actual logo path
  const logoUrl = '/logo.png' // Place your logo in public/logo.png
  const useLogo = true // Set to true when you have a logo uploaded

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setEmail('')
    }
  }

  const footerLinks = {
    services: [
      { name: 'Farm Input Supply', href: '/services' },
      { name: 'Seeds & Fertilizers', href: '/services' },
      { name: 'Veterinary Services', href: '/services' },
      { name: 'Extension Services', href: '/services' },
      { name: 'Agricultural Research', href: '/services' },
      { name: 'Consultancy', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Impact', href: '/impact' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  }

  // Updated social links - Only Facebook, X (Twitter), LinkedIn, and Instagram
  const socialLinks = [
    { 
      icon: 'fab fa-facebook-f', 
      href: 'https://facebook.com/genesisagro', 
      label: 'Facebook', 
      color: 'hover:bg-[#1877f2]',
      iconColor: 'text-white'
    },
    { 
      icon: 'fab fa-x-twitter', 
      href: 'https://twitter.com/genesisagro', 
      label: 'X (Twitter)', 
      color: 'hover:bg-[#000000]',
      iconColor: 'text-white'
    },
    { 
      icon: 'fab fa-linkedin-in', 
      href: 'https://linkedin.com/company/genesisagro', 
      label: 'LinkedIn', 
      color: 'hover:bg-[#0a66c2]',
      iconColor: 'text-white'
    },
    { 
      icon: 'fab fa-instagram', 
      href: 'https://instagram.com/genesisagro', 
      label: 'Instagram', 
      color: 'hover:bg-[#e4405f]',
      iconColor: 'text-white'
    },
  ]

  return (
    <footer className="relative bg-primary-dark text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      

      {/* Main Footer Content */}
      <div className="container-custom pt-12 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column - Logo with Company Name on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block group mb-4">
              <div className="flex items-center gap-3">
                {/* Logo Image - No Background Box */}
                <div className="relative flex items-center justify-center">
                  {useLogo ? (
                    <Image
                      src={logoUrl}
                      alt="Genesis Agro Logo"
                      width={50}
                      height={50}
                      className="object-contain h-12 w-auto"
                      priority
                    />
                  ) : (
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">GA</span>
                    </div>
                  )}
                </div>
                
                {/* Company Name on the Right */}
                <div className="flex flex-col">
                  <span className="text-base font-heading font-bold tracking-wide leading-tight text-white group-hover:text-accent transition-colors">
                    GENESIS AGRO
                  </span>
                  <span className="text-[10px] font-body tracking-wider text-white/60 group-hover:text-white/80 transition-colors">
                    ENTERPRISES LTD
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Empowering South Sudanese farmers through sustainable agriculture and market access since 2012.
            </p>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Services
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent rounded-full"></div>
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <i className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 -translate-x-2"></i>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Company
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent rounded-full"></div>
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <i className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 -translate-x-2"></i>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Contact Info
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm group">
                <i className="fas fa-map-marker-alt text-accent mt-0.5 group-hover:scale-110 transition-transform"></i>
                <span>Juba, South Sudan</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm group">
                <i className="fas fa-phone text-accent group-hover:scale-110 transition-transform"></i>
                <a href="tel:+211912345678" className="hover:text-accent transition">+211 912 345 678</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm group">
                <i className="fas fa-envelope text-accent group-hover:scale-110 transition-transform"></i>
                <a href="mailto:info@genesisagro.com" className="hover:text-accent transition">info@genesisagro.com</a>
              </li>
            </ul>
            
            {/* Office Hours */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="text-sm font-semibold mb-2">Office Hours</h5>
              <p className="text-white/60 text-xs">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-white/60 text-xs">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-white/60 text-xs">Sunday: Closed</p>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links - Only 4 Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="py-10 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-white/50 text-sm uppercase tracking-wider mb-6">Connect With Us</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-xl ${social.color}`}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-xl md:text-2xl group-hover:scale-110 transition-transform ${social.iconColor}`}></i>
                    
                    {/* Tooltip on Hover */}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg z-20">
                      {social.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-xs">
              <p>&copy; {new Date().getFullYear()} Genesis Agro Enterprises Ltd. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-xs">
              <Link href="/privacy" className="text-white/40 hover:text-accent transition">Privacy Policy</Link>
              <Link href="/terms" className="text-white/40 hover:text-accent transition">Terms of Service</Link>
              <Link href="/cookies" className="text-white/40 hover:text-accent transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
      </motion.button>
    </footer>
  )
}