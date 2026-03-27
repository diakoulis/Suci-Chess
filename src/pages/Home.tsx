import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Star, Users, Trophy, Brain, Target, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepblue-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            alt="Chess board" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepblue-950 via-deepblue-950/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-400 text-sm font-semibold tracking-wider mb-6 border border-gold-500/30">
                PREMIUM CHESS ACADEMY
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Master the Board.<br />
                <span className="text-gold-500">Master Your Mind.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Join SUCI CHESS and transform your strategic thinking. From absolute beginners to competitive tournament players, our grandmaster-designed curriculum guarantees rapid improvement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/free-trial">
                  <Button size="lg" className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                    Start Your Free Trial
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white text-lg h-14 px-8 rounded-full bg-transparent">
                    View Programs
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-gold-500" />
                  <span>Certified Coaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-gold-500" />
                  <span>Structured Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-gold-500" />
                  <span>Online & Offline</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-deepblue-950 mb-2">5,000+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Active Students</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-deepblue-950 mb-2 flex items-center justify-center gap-1">
                4.9 <Star className="fill-gold-500 text-gold-500" size={24} />
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-deepblue-950 mb-2">50+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Titled Coaches</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-deepblue-950 mb-2">120+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Tournament Wins</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deepblue-950 mb-6">Why Learn Chess With Us?</h2>
            <p className="text-lg text-slate-600">
              Chess is more than just a game. It's a powerful tool for cognitive development, strategic thinking, and character building.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-10 h-10 text-gold-500" />,
                title: "Improve Focus & Memory",
                desc: "Chess demands intense concentration, naturally extending attention spans and improving memory retention in both kids and adults."
              },
              {
                icon: <Target className="w-10 h-10 text-gold-500" />,
                title: "Strategic Thinking",
                desc: "Learn to anticipate your opponent's moves, evaluate complex scenarios, and make calculated decisions under pressure."
              },
              {
                icon: <Trophy className="w-10 h-10 text-gold-500" />,
                title: "Competitive Success",
                desc: "Our tournament-focused training prepares students for local, national, and international chess competitions."
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gold-50 flex items-center justify-center mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-deepblue-950 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-deepblue-950 mb-6">Programs for Every Level</h2>
              <p className="text-lg text-slate-600">
                Whether you're touching a chess piece for the first time or preparing for a national championship, we have the right program for you.
              </p>
            </div>
            <Link to="/courses">
              <Button variant="outline" className="border-deepblue-950 text-deepblue-950 hover:bg-deepblue-50 rounded-full px-6">
                View All Programs
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kids Program",
                level: "Ages 5-12",
                desc: "Fun, engaging lessons that teach the basics while building cognitive skills.",
                img: "https://images.unsplash.com/photo-1629337535560-6302f37c768a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Beginner",
                level: "Rating 0-1000",
                desc: "Master the rules, basic tactics, and fundamental opening principles.",
                img: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Intermediate",
                level: "Rating 1000-1600",
                desc: "Deepen your positional understanding and master complex tactical motifs.",
                img: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Tournament",
                level: "Rating 1600+",
                desc: "Intense preparation, opening repertoire building, and psychological training.",
                img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 rounded-t-2xl overflow-hidden">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepblue-950/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold rounded-full mb-2">
                      {course.level}
                    </span>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-b-2xl border border-t-0 border-slate-100 h-full">
                  <p className="text-slate-600 text-sm mb-4">{course.desc}</p>
                  <span className="text-gold-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight size={16} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-deepblue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-slate-300">
              Don't just take our word for it. Hear from the parents and students whose lives have been transformed by chess.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Parent of 8yo student",
                text: "Since joining SUCI CHESS, my son's focus in school has improved dramatically. His math grades went up, and he actually looks forward to his weekly lessons!"
              },
              {
                name: "David Chen",
                role: "Adult Beginner",
                text: "I always wanted to learn chess but felt intimidated. The coaches here broke it down so perfectly. Within 3 months, I beat my dad for the first time."
              },
              {
                name: "Michael R.",
                role: "Tournament Player (1800 ELO)",
                text: "The grandmaster analysis sessions are invaluable. They helped me identify weaknesses in my middlegame planning that I couldn't see myself."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="fill-gold-500 text-gold-500" size={18} />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gold-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deepblue-950 mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-deepblue-950">What age can my child start learning?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                We accept students as young as 5 years old. Our Kids Program is specifically designed with engaging, story-based lessons that make learning the rules of chess fun and accessible for young minds.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-deepblue-950">Do I need to know how to play before joining?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                Not at all! We have a dedicated Beginner Program for absolute novices. We'll teach you everything from how the pieces move to basic checkmating patterns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-deepblue-950">Are classes online or in-person?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                We offer both! You can choose 100% online classes via our interactive virtual classroom, or attend in-person sessions at our physical academy locations. Many students choose a hybrid approach.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-deepblue-950">How much do the classes cost?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                Pricing depends on the program level and frequency of classes. Our group sessions start at $99/month, while private 1-on-1 coaching starts at $60/hour. Visit our Pricing page for detailed information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="chess-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="50" height="50" fill="currentColor" />
                <rect x="50" y="50" width="50" height="50" fill="currentColor" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#chess-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepblue-950 mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl text-deepblue-900/80 mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of students who have improved their game and sharpened their minds with SUCI CHESS.
          </p>
          <Link to="/free-trial">
            <Button size="lg" className="bg-deepblue-950 hover:bg-deepblue-900 text-white text-lg h-16 px-10 rounded-full shadow-xl hover:scale-105 transition-transform">
              Start Your Free Trial Today
            </Button>
          </Link>
          <p className="mt-6 text-sm text-deepblue-900/70 font-medium">No credit card required. Limited spots available.</p>
        </div>
      </section>
    </div>
  );
}
