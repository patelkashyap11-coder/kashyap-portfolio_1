'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'patelkashyap11@gmail.com',
    href: 'mailto:patelkashyap11@gmail.com',
    note: 'Best for project briefs',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 97127 27007',
    href: 'tel:+919712727007',
    note: 'Mon–Sat, 10am–7pm IST',
  },
  {
    icon: MessageCircle,
    label: 'Instagram',
    value: '@ikashyap__',
    href: 'https://instagram.com/ikashyap__',
    note: 'DMs welcome',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/919712727007',
    note: 'Quick questions',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden">
      {/* Background accent */}
      <div className="fixed top-0 right-0 w-1/2 h-screen pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 30%, rgba(199,226,0,0.04) 0%, transparent 60%)' }} />
      <div className="fixed bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(199,226,0,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-14 pt-28 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white/30 text-xs tracking-[0.3em] uppercase font-medium mb-8"
            >
              Get in Touch
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="heading-xl text-[clamp(2.2rem,5.5vw,7rem)] leading-none text-white"
              >
                SMALL IDEA OR
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="heading-xl text-[clamp(2.2rem,5.5vw,7rem)] leading-none text-white"
              >
                BIG PROJECT?
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="heading-xl text-[clamp(2.2rem,5.5vw,7rem)] leading-none"
                style={{ color: '#C7E200' }}
              >
                LET'S TALK!
              </motion.h1>
            </div>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
                  className="group border border-white/10 p-7 hover:border-[#C7E200]/40 transition-all duration-400 block"
                  style={{ '--hover-bg': 'rgba(199,226,0,0.03)' } as React.CSSProperties}
                >
                  <div className="mb-6">
                    <div className="w-9 h-9 flex items-center justify-center border border-white/10 group-hover:border-[#C7E200]/30 transition-all duration-300">
                      <Icon size={14} className="text-white/40 group-hover:text-[#C7E200] transition-colors" />
                    </div>
                  </div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{contact.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#C7E200] transition-colors leading-snug">
                    {contact.value}
                  </p>
                  <div className="mt-4 h-px bg-white/5 group-hover:bg-[#C7E200]/20 transition-colors" />
                  <p className="mt-3 text-white/20 text-xs group-hover:text-white/40 transition-colors">
                    {contact.note}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Location + availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 border-t border-white/5 pt-8"
          >
            <div className="flex items-center gap-3">
              <MapPin size={12} className="text-white/25" />
              <p className="text-white/25 text-xs tracking-widest uppercase">Based in Ahmedabad, Gujarat</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#C7E200' }} />
              <p className="text-white/25 text-xs tracking-widest uppercase">Available for new projects</p>
            </div>
            <p className="text-white/15 text-xs">Response within 24 hours</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
