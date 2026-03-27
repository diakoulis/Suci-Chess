import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deepblue-950 mb-6">Get In Touch</h1>
          <p className="text-lg text-slate-600">
            Have questions about our programs or pricing? Our team is here to help you find the perfect fit for your chess journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-deepblue-950 mb-6">Send us a message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" className="bg-slate-50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="bg-slate-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your chess goals..." 
                      className="min-h-[150px] bg-slate-50" 
                    />
                  </div>
                  
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white h-12 text-lg rounded-xl shadow-md">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-deepblue-950 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                We're available Monday through Saturday to answer any questions you might have. Feel free to reach out via phone, email, or visit our academy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <MapPin className="text-gold-500" />
                </div>
                <div>
                  <h3 className="font-bold text-deepblue-950 mb-1">Academy Location</h3>
                  <p className="text-slate-600">123 Grandmaster Ave, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <Phone className="text-gold-500" />
                </div>
                <div>
                  <h3 className="font-bold text-deepblue-950 mb-1">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <Mail className="text-gold-500" />
                </div>
                <div>
                  <h3 className="font-bold text-deepblue-950 mb-1">Email</h3>
                  <p className="text-slate-600">hello@sucichess.com<br />support@sucichess.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <Clock className="text-gold-500" />
                </div>
                <div>
                  <h3 className="font-bold text-deepblue-950 mb-1">Operating Hours</h3>
                  <p className="text-slate-600">Mon-Fri: 10:00 AM - 8:00 PM<br />Sat: 9:00 AM - 5:00 PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl mt-8 overflow-hidden relative border border-slate-300">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-60 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded-lg shadow-md font-bold text-deepblue-950 flex items-center gap-2">
                  <MapPin size={16} className="text-gold-500" /> SUCI CHESS HQ
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
