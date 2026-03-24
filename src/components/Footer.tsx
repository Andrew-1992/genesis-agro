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

  // Logo configuration
  const logoUrl = '/logo.png'
  const useLogo = true

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setEmail('')
    }
  }

  const footerLinks = {
    explore: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Our Impact', href: '/impact' },
      { name: 'Success Stories', href: '/testimonials' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Agriculture Tools', href: '/services' },
      { name: 'Seeds & Fertilizers', href: '/services' },
      { name: 'Veterinary Services', href: '/services' },
      { name: 'Extension Services', href: '/services' },
      { name: 'Research & Consultancy', href: '/services' },
    ],
    resources: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Research Reports', href: '/reports' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' },
    ],
  }

  const socialLinks = [
    { icon: 'fa-brands fa-facebook-f', href: 'https://facebook.com/genesisagro', label: 'Facebook' },
    { icon: 'fa-brands fa-twitter', href: 'https://twitter.com/genesisagro', label: 'Twitter' },
    { icon: 'fa-brands fa-linkedin-in', href: 'https://linkedin.com/company/genesisagro', label: 'LinkedIn' },
    { icon: 'fa-brands fa-instagram', href: 'https://instagram.com/genesisagro', label: 'Instagram' },
    { icon: 'fa-brands fa-youtube', href: 'https://youtube.com/genesisagro', label: 'YouTube' },
  ]

  return (
    <footer className="relative bg-[#0A2418] text-white overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2418] via-[#123524] to-[#0A2418]"></div>
      
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20">
        {/* Top Section - Newsletter & Brand */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 pb-8 border-b border-white/10">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block group mb-6">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  {useLogo ? (
                    <Image
                      src={logoUrl}
                      alt="Genesis Agro Logo"
                      width={48}
                      height={48}
                      className="object-contain h-12 w-auto"
                      priority
                    />
                  ) : (
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <span className="text-primary-dark font-bold text-lg">GA</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-heading font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                    GENESIS AGRO
                  </span>
                  <span className="text-[11px] text-white/50 tracking-wide">
                    ENTERPRISES LTD
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Empowering South Sudanese farmers through sustainable agriculture, 
              innovative solutions, and community-driven development.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-white/50 text-sm mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="group px-6 py-3 bg-accent text-primary-dark font-medium rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </button>
            </form>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-xs mt-3"
              >
                ✓ Thanks for subscribing!
              </motion.p>
            )}
          </div>
        </div>

        {/* Main Footer Links - Clean 4 Column Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Explore Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm group">
                <i className="fas fa-map-marker-alt text-accent text-sm mt-0.5"></i>
                <span>7Eleven Gudele Road, Juba, South Sudan</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm group">
                <i className="fas fa-phone text-accent text-sm"></i>
                <a href="tel:+211922394689" className="hover:text-accent transition">+211 922 394 689</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm group">
                <i className="fas fa-envelope text-accent text-sm"></i>
                <a href="mailto:info@genesisagro.com" className="hover:text-accent transition">info@genesisagro.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Icons - Now with enhanced visibility */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                  aria-label={social.label}
                >
                  <div className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg">
                    <i className={`${social.icon} text-lg text-white group-hover:text-accent transition-colors`}></i>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-white/30 text-xs">
                © {new Date().getFullYear()} GENESIS AGRO ENTERPRISES. All rights reserved.
              </p>
              <p className="text-white/20 text-[10px] mt-1">
                Designed by Faida Technologies SS
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-5 text-xs">
              <Link href="/privacy" className="text-white/30 hover:text-accent transition">Privacy</Link>
              <Link href="/terms" className="text-white/30 hover:text-accent transition">Terms</Link>
              <Link href="/cookies" className="text-white/30 hover:text-accent transition">Cookies</Link>
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
        className="fixed bottom-8 right-8 w-11 h-11 bg-accent/90 backdrop-blur-sm text-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-accent z-50 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up text-sm group-hover:-translate-y-0.5 transition-transform"></i>
      </motion.button>
    </footer>
  )
}