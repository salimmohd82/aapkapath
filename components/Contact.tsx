'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-zinc-900 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8"
            >
              Get in touch <br />
              with our <br />
              <span className="text-emerald-400">community.</span>
            </motion.h2>
            
            <p className="text-zinc-400 text-xl max-w-md leading-relaxed mb-12">
              Have questions about our mentorship programs or focus groups? We&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-6">
              <a 
                href="mailto:contact@aapkapath.org" 
                className="text-2xl md:text-3xl font-medium hover:text-emerald-400 transition-colors flex items-center gap-4"
              >
                contact@aapkapath.org
                <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center">
                  <Mail size={18} />
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Social</h4>
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                    <Twitter size={16} /> Twitter
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Location</h4>
                <p className="text-zinc-400">
                  Global Community <br />
                  Connecting Professionals
                </p>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6 text-sm text-zinc-500">
              <p>© 2024 Aapkapath. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
