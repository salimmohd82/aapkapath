'use client';

import { motion } from 'motion/react';
import { Users, BookOpen, Rocket, TrendingUp } from 'lucide-react';

const focusGroups = [
  {
    title: 'Women',
    description: 'Helping Women to find ways to monthly income and financial independence.',
    icon: Users,
    color: 'bg-pink-50 text-pink-600',
  },
  {
    title: 'Mentoring',
    description: 'Providing help in cross skilling and upskilling to stay ahead in your career.',
    icon: BookOpen,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Start-ups',
    description: 'Helping start-ups grow by providing mentorship and guidance for financial support.',
    icon: Rocket,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Investments',
    description: 'Sharia compliant investments, secondary income generation, and family budgeting.',
    icon: TrendingUp,
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export default function FocusGroups() {
  return (
    <section id="focus-groups" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Our Focus Groups</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            We help people in their profession through four main areas of focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${group.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <group.icon size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{group.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
