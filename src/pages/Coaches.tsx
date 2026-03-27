import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Star, Trophy } from 'lucide-react';

export default function Coaches() {
  const coaches = [
    {
      name: "GM Alex Mercer",
      role: "Head Coach & Founder",
      rating: "2650 FIDE",
      experience: "15+ Years",
      students: "500+",
      bio: "Former National Champion and Olympiad team member. Alex specializes in opening preparation and complex middlegame strategy. He has coached three students to the Grandmaster title.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "IM Sarah Jenkins",
      role: "Lead Youth Instructor",
      rating: "2420 FIDE",
      experience: "10+ Years",
      students: "1000+",
      bio: "Sarah is passionate about making chess accessible to children. Her engaging, story-based teaching method has helped hundreds of kids fall in love with the game and win scholastic titles.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "FM David Chen",
      role: "Tactics Specialist",
      rating: "2380 FIDE",
      experience: "8 Years",
      students: "300+",
      bio: "Known for his aggressive attacking style, David focuses on calculation, tactical vision, and dynamic play. His students are feared for their sharp tactical awareness.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "WGM Elena Rostova",
      role: "Endgame Expert",
      rating: "2450 FIDE",
      experience: "12 Years",
      students: "400+",
      bio: "Elena believes that true mastery is shown in the endgame. She teaches students how to convert small advantages into wins with flawless technique and deep positional understanding.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deepblue-950 mb-6">Meet Our Grandmasters</h1>
          <p className="text-lg text-slate-600">
            Learn from the best. Our coaching staff consists of titled players with decades of combined teaching experience and a proven track record of student success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {coaches.map((coach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-slate-50 flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <img 
                    src={coach.img} 
                    alt={coach.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepblue-950/80 to-transparent md:hidden"></div>
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold rounded-full mb-2">
                      {coach.rating}
                    </span>
                    <h3 className="text-xl font-bold text-white">{coach.name}</h3>
                  </div>
                </div>
                <CardContent className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="hidden md:block mb-4">
                    <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-bold rounded-full mb-2 border border-gold-200">
                      {coach.rating}
                    </span>
                    <h3 className="text-2xl font-bold text-deepblue-950">{coach.name}</h3>
                    <p className="text-gold-600 font-medium">{coach.role}</p>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {coach.bio}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Experience</div>
                      <div className="font-bold text-deepblue-950 flex items-center gap-1">
                        <Award size={16} className="text-gold-500" /> {coach.experience}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Students</div>
                      <div className="font-bold text-deepblue-950 flex items-center gap-1">
                        <Trophy size={16} className="text-gold-500" /> {coach.students}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
