import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FocusGroups from '@/components/FocusGroups';
import WomenFocus from '@/components/WomenFocus';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Vision Section */}
      <section className="py-24 px-6 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-400 mb-8">Our Vision</h2>
          <p className="text-3xl md:text-5xl font-display font-medium leading-tight max-w-5xl mx-auto">
            &ldquo;To be the trusted platform where professionals grow together through shared values and opportunities, building a stronger society.&rdquo;
          </p>
        </div>
      </section>

      <FocusGroups />
      <WomenFocus />
      
      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
                Empowering the <br />
                Next Generation.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-8 text-xl text-zinc-600 leading-relaxed">
                <p>
                  Aapkapath is a non-profit forum dedicated to the professional growth of individuals across various sectors. We believe in the power of community and shared knowledge.
                </p>
                <p>
                  Our platform provides the tools, mentorship, and network needed for professionals to excel in their careers while contributing positively to society.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Our Focus</h4>
                    <ul className="text-base space-y-2">
                      <li>Professional Networking</li>
                      <li>Skill Development</li>
                      <li>Entrepreneurship Support</li>
                      <li>Financial Literacy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Community</h4>
                    <ul className="text-base space-y-2">
                      <li>Expert Mentors</li>
                      <li>Startup Founders</li>
                      <li>Women Professionals</li>
                      <li>Investment Experts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
