'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const incomeWays = [
  'Remote Freelancing (Writing, Design, Admin)',
  'Online Tutoring and Education',
  'E-commerce and Artisanal Crafts',
  'Content Creation and Digital Marketing',
  'Professional Consulting Services',
  'Flexible Part-time Corporate Roles',
];

export default function WomenFocus() {
  return (
    <section id="women-focus" className="py-24 px-6 bg-zinc-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-emerald-600 font-mono text-sm uppercase tracking-widest mb-4 block">Focus Group: Women</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-zinc-900">
            Empowering Women Through <br />
            <span className="text-emerald-600">Financial Independence.</span>
          </h2>
          <p className="text-xl text-zinc-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Our Women&apos;s Focus Group is dedicated to helping women discover and cultivate sustainable monthly income streams. We provide the resources, training, and community support needed to thrive in today&apos;s digital and physical marketplaces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
            {incomeWays.map((way, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-700 bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
                <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{way}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10"
          >
            Join the Women&apos;s Network
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
