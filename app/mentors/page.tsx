'use client';

import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { motion } from 'motion/react';
import { 
  Code, 
  Settings, 
  Building2, 
  Scale, 
  Banknote, 
  Utensils, 
  Stethoscope 
} from 'lucide-react';

const mentorshipStreams = [
  {
    category: 'Computer Science',
    icon: Code,
    items: ['Programming', 'Cloud', 'Artificial Intelligence'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    category: 'Mechanical',
    icon: Settings,
    items: ['Design', 'Manufacturing', 'Automotive'],
    color: 'bg-zinc-50 text-zinc-600',
  },
  {
    category: 'Civil',
    icon: Building2,
    items: ['Structural', 'Architecture', 'Urban Planning'],
    color: 'bg-orange-50 text-orange-600',
  },
  {
    category: 'Legal Studies',
    icon: Scale,
    items: ['Corporate Law', 'Civil Law', 'Intellectual Property'],
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    category: 'Finance',
    icon: Banknote,
    items: ['Investment Banking', 'Accounting', 'Financial Planning'],
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    category: 'Hospitality',
    icon: Utensils,
    items: ['Hotel Management', 'Tourism', 'Culinary Arts'],
    color: 'bg-amber-50 text-amber-600',
  },
  {
    category: 'Medical Science',
    icon: Stethoscope,
    items: ['Doctors', 'Nursing', 'Para Medical'],
    color: 'bg-red-50 text-red-600',
  },
];

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
          >
            Our Mentorship Streams
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500 max-w-2xl mx-auto"
          >
            Connect with experienced professionals across various industries to accelerate your career growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorshipStreams.map((stream, i) => (
              <motion.div
                key={stream.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl border border-zinc-100 bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${stream.color} flex items-center justify-center mb-6`}>
                  <stream.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">{stream.category}</h3>
                <ul className="space-y-3">
                  {stream.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
