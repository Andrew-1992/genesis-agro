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
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home', icon: 'fa-home', description: 'Welcome to Genesis Agro' },
    { href: '/about', label: 'About', icon: 'fa-seedling', description: 'Our story & mission' },
    { href: '/services', label: 'Services', icon: 'fa-hand-holding-heart', description: 'What we offer' },
    { href: '/impact', label: 'Impact', icon: 'fa-chart-line', description: 'Making a difference' },
    { href: '/testimonials', label: 'Testimonials', icon: 'fa-quote-right', description: 'Success stories' },
    { href: '/contact', label: 'Contact', icon: 'fa-envelope', description: 'Get in touch' },
  ]

  // Logo configuration
  const logoUrl = '/logo.png' // Place your logo in public/logo.png
  const useLogo = true // Set to true when you have a logo uploaded

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
            ? 'bg-white/98 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/40 to-transparent py-6'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo with Company Name on Right */}
          <Link 
            href="/" 
            className="relative group flex items-center gap-3 z-10"
          >
            {/* Animated Logo Background Glow - Subtle */}
            <motion.div 
              className="absolute -inset-3 bg-accent/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ scale: 1.05 }}
            />
            
            {/* Logo Image */}
            <motion.div 
              id="logo-icon"
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">GA</span>
                </div>
              )}
            </motion.div>
            
            {/* Company Name on the Right */}
            <div className="relative">
              <div className="flex flex-col leading-tight">
                <motion.span 
                  className={`text-base font-heading font-bold tracking-wider transition-all duration-300 ${
                    isScrolled ? 'text-primary' : 'text-white'
                  } group-hover:text-accent`}
                  whileHover={{ x: 2 }}
                >
                  GENESIS AGRO
                </motion.span>
                <span className={`text-[11px] font-body tracking-wider transition-all duration-300 ${
                  isScrolled ? 'text-gray-500' : 'text-white/80'
                } group-hover:text-primary`}>
                  ENTERPRISES LTD
                </span>
              </div>
              {/* Animated Underline */}
              <motion.div 
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'w-0' : 'w-0'
                }`}
                whileHover={{ width: '100%' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group px-4 py-2"
                >
                  {/* Hover Background Effect */}
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <div className="relative flex flex-col items-center">
                    {/* Icon */}
                    <i className={`fas ${link.icon} text-xs mb-1 transition-all duration-300 ${
                      isScrolled 
                        ? isActive ? 'text-accent' : 'text-gray-400 group-hover:text-primary'
                        : isActive ? 'text-accent' : 'text-white/80 group-hover:text-white'
                    }`}></i>
                    
                    {/* Label */}
                    <span className={`text-sm font-medium transition-all duration-300 ${
                      isScrolled 
                        ? isActive ? 'text-primary' : 'text-gray-600 group-hover:text-primary'
                        : isActive ? 'text-accent' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                    
                    {/* Animated Bottom Border */}
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-6 ${
                      isActive ? 'w-6' : ''
                    }`}></span>
                  </div>
                </Link>
              )
            })}
            
            {/* Enhanced CTA Button */}
            <Link 
              href="/contact" 
              className="relative ml-4 overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-full"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 scale-0 group-hover:scale-100 rounded-full bg-white/20 transition-transform duration-500"></div>
              <span className="relative flex items-center gap-2 px-6 py-2.5 text-primary-dark font-semibold text-sm">
                <i className="fas fa-handshake text-sm"></i>
                Partner With Us
                <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-2' : 'top-1'
              } ${isScrolled ? 'text-primary' : 'text-white'}`}></span>
              <span className={`absolute w-5 h-0.5 bg-current top-2 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              } ${isScrolled ? 'text-primary' : 'text-white'}`}></span>
              <span className={`absolute w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-2' : 'top-3'
              } ${isScrolled ? 'text-primary' : 'text-white'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 md:hidden"
          >
            <div className="bg-white/98 backdrop-blur-xl shadow-2xl mx-4 rounded-2xl overflow-hidden border border-gray-100">
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
                      <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <i className={`fas ${link.icon} text-primary group-hover:text-white transition-colors`}></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {link.label}
                        </div>
                        <div className="text-xs text-gray-400">
                          {link.description}
                        </div>
                      </div>
                      <i className="fas fa-chevron-right ml-auto text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all"></i>
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
                    Partner With Us
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