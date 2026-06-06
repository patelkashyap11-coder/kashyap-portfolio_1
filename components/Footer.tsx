'use client';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <p className="logo-mark text-white mb-3">KASHYAP<br />PATEL</p>
            <p className="text-white/30 text-xs leading-relaxed max-w-xs">
              Photographer & Filmmaker. Visual stories for brands that dare to stand out.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Work</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Fashion', href: '/fashion' },
                  { label: 'Food & Hospitality', href: '/food-hospitality' },
                  { label: 'Jewellery', href: '/jewellery' },
                  { label: 'Products', href: '/products' },
                  { label: 'Interiors', href: '/interiors' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/60 text-xs hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Contact</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:patelkashyap11@gmail.com" className="text-white/60 text-xs hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={10} /> Email
                </a>
                <a href="tel:+919712727007" className="text-white/60 text-xs hover:text-white transition-colors flex items-center gap-2">
                  <Phone size={10} /> +91 97127 27007
                </a>
                <a href="https://instagram.com/ikashyap__" target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://wa.me/919712727007" target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Kashyap Patel. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
