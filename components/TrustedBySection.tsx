'use client';
import { motion } from 'framer-motion';

// Client logos — replace with actual logo files in /public/clients/
const clients = [
  { name: 'Brand One', logo: null },
  { name: 'Brand Two', logo: null },
  { name: 'Brand Three', logo: null },
  { name: 'Brand Four', logo: null },
  { name: 'Brand Five', logo: null },
  { name: 'Brand Six', logo: null },
  { name: 'Brand Seven', logo: null },
  { name: 'Brand Eight', logo: null },
];

// Set to true when you have actual client logos
const hasLogos = false;

export function TrustedBySection() {
  if (!hasLogos) return null;

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#F2F2EF] border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-[#6B6B6B] font-medium mb-12 text-center"
        >
          Trusted By
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex items-center justify-center h-12 opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-8 max-w-[120px] object-contain" />
              ) : (
                <span className="text-sm font-medium tracking-wider text-[#0A0A0A]">{client.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
