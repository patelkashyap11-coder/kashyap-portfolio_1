'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { href: '/fashion', label: 'Fashion' },
  { href: '/food-hospitality', label: 'Food & Hospitality' },
  { href: '/jewellery', label: 'Jewellery' },
  { href: '/products', label: 'Products' },
  { href: '/interiors', label: 'Interiors' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDark = pathname === '/contact' || pathname?.includes('/fashion') ||
    pathname?.includes('/food') || pathname?.includes('/jewellery') ||
    pathname?.includes('/products') || pathname?.includes('/interiors');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const textColor = isDark ? 'text-white' : 'text-[#0A0A0A]';
  const borderColor = isDark ? 'border-white/10' : 'border-[#0A0A0A]/10';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled ? (isDark ? 'bg-black/80 backdrop-blur-md' : 'bg-[#F2F2EF]/90 backdrop-blur-md') : ''
      }`}>
        <Link
  href="/"
  className={`${textColor} z-50 relative font-black text-3xl md:text-5xl tracking-[-0.03em] uppercase`}
>
  KASHYAP PATEL
</Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-xs font-medium tracking-widest uppercase ${textColor} opacity-70 hover:opacity-100 transition-opacity`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden z-50 relative ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="text-white heading-xl text-4xl block hover:text-[#C7E200] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className={`mt-16 pt-8 border-t border-white/10`}>
              <p className="text-white/40 text-xs tracking-widest uppercase">patelkashyap11@gmail.com</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">+91 97127 27007</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
