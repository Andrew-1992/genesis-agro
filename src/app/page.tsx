'use client'

import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { About } from '@/components/About'
import { Services } from '@/components/Services'

import { ImpactMetrics } from '@/components/ImpactMetrics'
import { Sustainability } from '@/components/Sustainability'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Add scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
    
      <ImpactMetrics />
      <Sustainability />
      <Testimonials />
      <CTA />
    </>
  )
}