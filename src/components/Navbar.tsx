// src/components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home', description: 'Welcome to Genesis Agro' },
    { href: '/about', label: 'About Us', description: 'Our story & mission' },
    { href: '/services', label: 'Services', description: 'What we offer' },
    { href: '/impact', label: 'Impact', description: 'Making a difference' },
    { href: '/testimonials', label: 'Testimonials', description: 'Success stories' },
    { href: '/contact', label: 'Contact Us', description: 'Get in touch' },
  ]

  // Logo configuration
  const logoUrl = '/logo.png'
  const useLogo = true

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/30 to-transparent py-6'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="relative group flex items-center gap-3 z-10"
          >
            {/* Animated Logo Background Glow */}
            <motion.div 
              className="absolute -inset-3 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Logo Image */}
            <motion.div 
              id="logo-icon"
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {useLogo ? (
                <Image
                  src={logoUrl}
                  alt="Genesis Agro Logo"
                  width={45}
                  height={45}
                  className="object-contain h-11 w-auto"
                  priority
                />
              ) : (
                <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">GA</span>
                </div>
              )}
            </motion.div>
            
            {/* Company Name */}
            <div className="relative">
              <div className="flex flex-col leading-tight">
                <motion.span 
                  className={`text-sm font-heading font-bold tracking-wider transition-all duration-300 ${
                    isScrolled ? 'text-primary' : 'text-white'
                  } group-hover:text-accent`}
                  whileHover={{ x: 2 }}
                >
                  GENESIS AGRO
                </motion.span>
                <span className={`text-[10px] font-body tracking-wider transition-all duration-300 ${
                  isScrolled ? 'text-gray-500' : 'text-white/70'
                } group-hover:text-primary`}>
                  ENTERPRISES LTD
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - CENTERED - Unique Hover Effects */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href)
                const isHovered = hoveredLink === link.href
                
                return (
                  <motion.div
                    key={link.href}
                    onHoverStart={() => setHoveredLink(link.href)}
                    onHoverEnd={() => setHoveredLink(null)}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className="relative block px-5 py-2 overflow-hidden"
                    >
                      {/* Unique Hover Effect 1: Expanding Circle */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: isHovered ? 1.5 : 0,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ borderRadius: '9999px' }}
                      />
                      
                      {/* Unique Hover Effect 2: Bottom Glow Line */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-accent via-accent-light to-accent"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ 
                          width: isHovered ? '80%' : 0,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                      
                      {/* Unique Hover Effect 3: Background Blur Pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-full backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: isHovered ? 0.1 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Label with Unique Hover Animation */}
                      <motion.span 
                        className={`relative block text-sm font-medium transition-all duration-300 ${
                          isScrolled 
                            ? isActive ? 'text-primary' : 'text-gray-700'
                            : isActive ? 'text-accent' : 'text-white/90'
                        }`}
                        animate={isHovered ? { 
                          y: -2,
                          scale: 1.05,
                          letterSpacing: '0.05em'
                        } : { 
                          y: 0,
                          scale: 1,
                          letterSpacing: 'normal'
                        }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                      >
                        {link.label}
                      </motion.span>
                      
                      {/* Unique Hover Effect 4: Floating Dot */}
                      <motion.div
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                        initial={{ scale: 0, opacity: 0, y: 0 }}
                        animate={{ 
                          scale: isHovered ? 1 : 0,
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? -4 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Unique Hover Effect 5: Side Glow */}
                      <motion.div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-accent via-accent-light to-accent"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: isHovered ? '60%' : 0,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      />
                      <motion.div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-accent via-accent-light to-accent"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: isHovered ? '60%' : 0,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      />
                    </Link>
                    
                    {/* Unique Hover Effect 6: Ripple Effect on Hover */}
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.8 }}
                      >
                        <div className="absolute inset-0 rounded-full border border-accent/30"></div>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CTA Button with Enhanced Effects */}
          <Link 
            href="/contact" 
            className="relative ml-auto overflow-hidden group z-10"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div 
              className="absolute inset-0 rounded-full bg-white/30"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative flex items-center gap-2 px-5 py-2 text-primary-dark font-semibold text-sm">
              <i className="fas fa-handshake text-sm"></i>
              Partner With Us
              <motion.i 
                className="fas fa-arrow-right text-xs"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="relative w-5 h-5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: -6 },
                  open: { rotate: 45, y: 0 }
                }}
                className={`absolute w-5 h-0.5 bg-current transform transition-all duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}
                style={{ top: '50%', left: 0 }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className={`absolute w-5 h-0.5 bg-current top-1/2 left-0 transition-all duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}
                style={{ transform: 'translateY(-50%)' }}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 6 },
                  open: { rotate: -45, y: 0 }
                }}
                className={`absolute w-5 h-0.5 bg-current transform transition-all duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}
                style={{ top: '50%', left: 0 }}
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl shadow-2xl mx-4 rounded-2xl overflow-hidden border border-gray-100">
              <div className="py-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-primary group-hover:text-white font-semibold text-sm">
                          {link.label.charAt(0)}
                        </span>
                      </motion.div>
                      <div>
                        <div className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {link.label}
                        </div>
                        <div className="text-xs text-gray-400">
                          {link.description}
                        </div>
                      </div>
                      <motion.i 
                        className="fas fa-chevron-right ml-auto text-gray-300 group-hover:text-primary transition-all"
                        whileHover={{ x: 5 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <div className="p-4 mt-2 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="block w-full text-center btn-primary bg-gradient-to-r from-accent to-accent-light text-primary-dark font-semibold hover:shadow-lg transition-all duration-300 py-3 rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-handshake mr-2"></i>
                    Grow With Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}