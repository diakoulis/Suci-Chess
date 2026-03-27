import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Parent of 8yo student",
      rating: 5,
      text: "Since joining SUCI CHESS, my son's focus in school has improved dramatically. His math grades went up, and he actually looks forward to his weekly lessons! The coaches are incredibly patient and know exactly how to keep young minds engaged.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "David Chen",
      role: "Adult Beginner",
      rating: 5,
      text: "I always wanted to learn chess but felt intimidated. The coaches here broke it down so perfectly. Within 3 months, I beat my dad for the first time. The curriculum is structured logically, so you never feel overwhelmed.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Michael R.",
      role: "Tournament Player (1800 ELO)",
      rating: 5,
      text: "The grandmaster analysis sessions are invaluable. They helped me identify weaknesses in my middlegame planning that I couldn't see myself. My rating jumped 150 points in just six months of the Elite Plan.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Emily Wong",
      role: "Parent of 12yo student",
      rating: 5,
      text: "SUCI CHESS isn't just about moving pieces; it's about building character. My daughter learned how to lose gracefully and analyze her mistakes. She recently won her first state scholastic tournament!",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "James T.",
      role: "Intermediate Player",
      rating: 4,
      text: "The online platform is fantastic. I can review my lessons anytime, and the weekly tactics homework really keeps me sharp. I finally broke the 1500 barrier on Chess.com thanks to Coach David.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "The Patel Family",
      role: "Parents of two students",
      rating: 5,
      text: "Both our kids (7 and 10) are enrolled. The sibling discount is great, but the real value is seeing them sit down together to analyze games instead of playing video games. Highly recommend SUCI CHESS.",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deepblue-950 mb-6">Success Stories</h1>
          <p className="text-lg text-slate-600">
            Read what our students and parents have to say about their experience at SUCI CHESS Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-slate-50 border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-6 right-6 text-gold-200">
                  <Quote size={48} />
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star 
                        key={j} 
                        className={j < testimonial.rating ? "fill-gold-500 text-gold-500" : "fill-slate-200 text-slate-200"} 
                        size={18} 
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-deepblue-950">{testimonial.name}</div>
                      <div className="text-sm text-gold-600 font-medium">{testimonial.role}</div>
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
