import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Star, ShieldCheck, Trophy, Brain } from 'lucide-react';

export default function FreeTrial() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
          
          {/* Left Column: Copy & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-gold-100 text-gold-700 text-sm font-bold tracking-wider mb-6 border border-gold-200">
                LIMITED TIME OFFER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deepblue-950 leading-tight mb-6">
                Claim Your <span className="text-gold-500">Free</span> Trial Lesson Today
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Experience the SUCI CHESS difference. Join a live, interactive session with one of our titled coaches and see how quickly your game can improve.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Brain className="text-gold-500" size={24} />, text: "Personalized game analysis and skill assessment" },
                { icon: <ShieldCheck className="text-gold-500" size={24} />, text: "Access to our premium interactive learning platform" },
                { icon: <Trophy className="text-gold-500" size={24} />, text: "A customized roadmap to reach your chess goals" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    {item.icon}
                  </div>
                  <p className="text-slate-700 font-medium mt-2">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+5k</div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="fill-gold-500 text-gold-500" size={16} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Join over 5,000 students who have transformed their game.</p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              <CardContent className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-deepblue-950 mb-2">Secure Your Spot</h2>
                  <p className="text-slate-500 text-sm">Fill out the form below. No credit card required.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-deepblue-950 font-semibold">Full Name</Label>
                    <Input id="name" placeholder="Magnus Carlsen" className="h-12 bg-slate-50 border-slate-200 focus:border-gold-500 focus:ring-gold-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-deepblue-950 font-semibold">Email Address</Label>
                    <Input id="email" type="email" placeholder="magnus@example.com" className="h-12 bg-slate-50 border-slate-200 focus:border-gold-500 focus:ring-gold-500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-deepblue-950 font-semibold">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-slate-50 border-slate-200 focus:border-gold-500 focus:ring-gold-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="level" className="text-deepblue-950 font-semibold">Current Skill Level</Label>
                    <select 
                      id="level" 
                      defaultValue=""
                      className="flex h-12 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Select your level</option>
                      <option value="beginner">Absolute Beginner (Just learning rules)</option>
                      <option value="novice">Novice (Rating 0-1000)</option>
                      <option value="intermediate">Intermediate (Rating 1000-1600)</option>
                      <option value="advanced">Advanced (Rating 1600+)</option>
                    </select>
                  </div>
                  
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white h-14 text-lg font-bold rounded-xl shadow-lg shadow-gold-500/30 mt-4 transition-transform hover:scale-[1.02]">
                    Claim My Free Lesson
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span>100% Free. No commitment.</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
