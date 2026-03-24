// src/app/contact/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function ContactPage() {
  // Create separate refs for each section
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: 'fa-solid fa-location-dot', title: 'Visit Us', details: ['7Eleven Gudele Road, Juba, South Sudan'] },
    { icon: 'fa-solid fa-phone', title: 'Call Us', details: ['+211 922 394 689'] },
    { icon: 'fa-solid fa-envelope', title: 'Email Us', details: ['info@genesisagro.com'] },
    { icon: 'fa-solid fa-clock', title: 'Office Hours', details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM', 'Sun: Closed'] },
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
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Get in touch with our team. We're here to help you with all your agricultural needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={cardsRef} className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <i className={`${info.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to partner with us? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                >
                  <i className="fas fa-check-circle mr-2"></i>
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      placeholder="+211 XXX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Services">Service Request</option>
                    <option value="Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <i className="fas fa-paper-plane ml-2"></i>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
            
            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-cream rounded-2xl p-6 mb-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Find Us Here</h3>
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d31.6!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDAuMCJOIDMxwrAzNicyMC4wIkU!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Genesis Agro Location Map"
                  ></iframe>
                </div>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <i className="fas fa-location-dot text-accent"></i>
                  7Eleven Gudele Road, Juba, South Sudan
                </p>
              </div>
              
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
                <p className="text-white/80 mb-4">For urgent agricultural emergencies, call our 24/7 hotline:</p>
                <div className="text-2xl font-bold mb-2">+211 922 394 689</div>
                <div className="text-sm text-white/70 mb-6">Available 24 hours, 7 days a week</div>
                <div className="flex gap-4">
                  <Link 
                    href="https://wa.me/211922394689" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 group"
                  >
                    <i className="fab fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
                    <span>WhatsApp</span>
                  </Link>
                  <Link 
                    href="tel:+211922394689" 
                    className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 group"
                  >
                    <i className="fas fa-phone text-lg group-hover:scale-110 transition-transform"></i>
                    <span>Call Now</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find quick answers to common questions</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: 'What areas do you serve?', a: 'We serve farmers across South Sudan, with operations in Juba, Bor, Wau, and surrounding regions.' },
              { q: 'How can I partner with Genesis Agro?', a: 'Contact our partnership team through the form above or call our office to discuss collaboration opportunities.' },
              { q: 'Do you offer training programs?', a: 'Yes, we offer regular training sessions on sustainable farming practices, post-harvest handling, and business management.' },
              { q: 'What is the cost of your services?', a: 'Pricing varies based on the service. Contact us for a customized quote based on your needs.' },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}