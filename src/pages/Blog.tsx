import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: "5 Common Opening Mistakes Beginners Make",
      excerpt: "Are you losing games in the first 10 moves? Learn how to avoid these common opening traps and start your games with a solid advantage.",
      author: "GM Alex Mercer",
      date: "Oct 12, 2023",
      category: "Strategy",
      img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "How to Analyze Your Own Chess Games",
      excerpt: "The secret to rapid improvement isn't just playing more games—it's analyzing the ones you've already played. Here's our step-by-step guide.",
      author: "IM Sarah Jenkins",
      date: "Oct 05, 2023",
      category: "Improvement",
      img: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Psychology of Tournament Chess",
      excerpt: "Handling pressure, bouncing back from a tough loss, and maintaining focus during a 4-hour game. Mental training tips for competitive players.",
      author: "FM David Chen",
      date: "Sep 28, 2023",
      category: "Tournament Prep",
      img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mastering the Endgame: Rook and Pawn",
      excerpt: "Rook endgames are the most common type of endgame in chess. If you want to increase your rating, you must master these fundamental positions.",
      author: "WGM Elena Rostova",
      date: "Sep 15, 2023",
      category: "Endgame",
      img: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Why Chess is the Perfect Extracurricular for Kids",
      excerpt: "From improved math scores to better emotional regulation, discover the science-backed benefits of teaching children chess at an early age.",
      author: "IM Sarah Jenkins",
      date: "Sep 02, 2023",
      category: "Education",
      img: "https://images.unsplash.com/photo-1629337535560-6302f37c768a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Understanding Pawn Structures",
      excerpt: "Pawns are the soul of chess. Learn how different pawn structures dictate your middlegame plans and where you should place your pieces.",
      author: "GM Alex Mercer",
      date: "Aug 20, 2023",
      category: "Strategy",
      img: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deepblue-950 mb-6">Resources & Articles</h1>
          <p className="text-lg text-slate-600">
            Free chess lessons, tournament recaps, and improvement guides from our grandmaster coaching staff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-deepblue-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link to="#" className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors">
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="border-deepblue-950 text-deepblue-950 hover:bg-deepblue-50 rounded-full px-8 h-12">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
