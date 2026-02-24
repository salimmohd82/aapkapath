'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="https://picsum.photos/seed/event1/1920/1080"
        alt="Aapkapath Event"
        fill
        className="object-cover"
        priority
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-tight"
          >
            Professionals Growing <br /> Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium"
          >
            Empowering professionals through shared values and opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
