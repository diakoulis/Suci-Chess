import { motion } from 'motion/react';
import { Target, Eye, Award, Users, ShieldCheck, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-deepblue-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Chess pieces" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-deepblue-950/80"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Founded by grandmasters, SUCI CHESS is on a mission to make world-class chess education accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-deepblue-950 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower individuals of all ages through the game of chess, fostering critical thinking, emotional intelligence, and a lifelong passion for strategic problem-solving.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-deepblue-50 p-10 rounded-3xl border border-deepblue-100"
            >
              <div className="w-14 h-14 bg-deepblue-100 text-deepblue-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-deepblue-950 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the global leader in chess education, creating a community where every student has the tools and guidance to reach their maximum potential on and off the board.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deepblue-950 mb-6">The SUCI CHESS Journey</h2>
            <p className="text-lg text-slate-600">
              What started as a small local club has grown into a premier academy recognized worldwide for its excellence in coaching.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold-200 hidden md:block"></div>
            
            {[
              { year: "2015", title: "The Beginning", desc: "Founded by GM Alex Mercer with just 10 students in a small community center." },
              { year: "2018", title: "First Champions", desc: "Our students won 3 national titles, putting SUCI CHESS on the map." },
              { year: "2020", title: "Going Global", desc: "Launched our interactive online platform, reaching students in over 40 countries." },
              { year: "2023", title: "Premier Academy", desc: "Opened our flagship 10,000 sq ft facility and expanded our coaching roster to 50+ titled players." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 px-6 py-4 text-center md:text-left">
                  <div className={`md:hidden text-gold-500 font-bold text-xl mb-2`}>{item.year}</div>
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-deepblue-950 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gold-500 rounded-full border-4 border-white items-center justify-center z-10 shadow-md">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deepblue-950 mb-6">Our Philosophy</h2>
            <p className="text-lg text-slate-600">
              We believe that anyone can master chess with the right guidance, structure, and mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen />, title: "Structured Learning", desc: "No more random puzzles. Our curriculum is carefully designed to build knowledge step-by-step." },
              { icon: <Users />, title: "Community First", desc: "Learning is better together. We foster a supportive environment where students analyze and grow together." },
              { icon: <ShieldCheck />, title: "Character Building", desc: "We teach resilience, sportsmanship, and how to learn from losses—skills that translate to real life." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-slate-50 text-deepblue-950 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-deepblue-950 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
