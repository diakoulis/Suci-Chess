import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, Clock, Users, BookOpen, Trophy, Target, ShieldCheck, Brain } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      id: "kids",
      title: "Kids Chess Program",
      level: "Ages 5-12",
      icon: <Users className="w-8 h-8 text-gold-500" />,
      desc: "A fun, story-based introduction to chess that builds cognitive skills, focus, and sportsmanship.",
      learn: [
        "Piece movements and basic rules",
        "Simple checkmating patterns",
        "Opening principles",
        "Sportsmanship and etiquette"
      ],
      duration: "12 Weeks (1 hr/week)",
      price: "$99/mo"
    },
    {
      id: "beginner",
      title: "Beginner Program",
      level: "Rating 0-1000",
      icon: <BookOpen className="w-8 h-8 text-gold-500" />,
      desc: "For absolute beginners and casual players looking to build a solid foundation and stop blundering.",
      learn: [
        "Tactical motifs (pins, forks, skewers)",
        "Basic endgame checkmates",
        "Developing a solid opening repertoire",
        "How to analyze your own games"
      ],
      duration: "16 Weeks (1.5 hrs/week)",
      price: "$129/mo"
    },
    {
      id: "intermediate",
      title: "Intermediate Program",
      level: "Rating 1000-1600",
      icon: <Target className="w-8 h-8 text-gold-500" />,
      desc: "Take your game to the next level by mastering positional play, complex tactics, and endgame theory.",
      learn: [
        "Positional understanding (pawn structures, outposts)",
        "Advanced tactical combinations",
        "Theoretical endgames (rook endings, pawn races)",
        "Building a competitive opening repertoire"
      ],
      duration: "24 Weeks (2 hrs/week)",
      price: "$149/mo"
    },
    {
      id: "advanced",
      title: "Advanced Program",
      level: "Rating 1600-2000",
      icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
      desc: "Intensive training for serious players aiming for expert level and national tournament success.",
      learn: [
        "Deep opening preparation and novelties",
        "Complex middlegame planning",
        "Practical endgame technique",
        "Psychological preparation and time management"
      ],
      duration: "Ongoing (3 hrs/week)",
      price: "$199/mo"
    },
    {
      id: "tournament",
      title: "Tournament Training",
      level: "Rating 1800+",
      icon: <Trophy className="w-8 h-8 text-gold-500" />,
      desc: "Elite coaching for competitive players preparing for major tournaments and title norms.",
      learn: [
        "Opponent preparation and profiling",
        "Grandmaster game analysis",
        "Calculation training under pressure",
        "Opening repertoire refinement"
      ],
      duration: "Intensive Bootcamps",
      price: "Custom"
    },
    {
      id: "adult",
      title: "Adult Chess Program",
      level: "All Levels",
      icon: <Brain className="w-8 h-8 text-gold-500" />,
      desc: "Tailored coaching for adults looking to learn a new skill, improve their game, or compete.",
      learn: [
        "Flexible scheduling",
        "Focus on practical improvement",
        "Strategic thinking applications",
        "Community events and casual play"
      ],
      duration: "Flexible",
      price: "$129/mo"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deepblue-950 mb-6">Our Programs</h1>
          <p className="text-lg text-slate-600">
            From absolute beginners to aspiring grandmasters, we have a structured curriculum designed to elevate your game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center">
                      {course.icon}
                    </div>
                    <span className="inline-block px-3 py-1 bg-deepblue-50 text-deepblue-700 text-xs font-bold rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-deepblue-950">{course.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-base mt-2">
                    {course.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-deepblue-950 text-sm uppercase tracking-wider">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {course.learn.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check size={16} className="text-gold-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <div className="font-bold text-xl text-deepblue-950">{course.price}</div>
                  <Link to="/free-trial">
                    <Button className="bg-gold-500 hover:bg-gold-600 text-white rounded-full px-6">
                      Enroll Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
