import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Beginner Plan",
      price: "$99",
      period: "/month",
      desc: "Perfect for kids and adults just starting their chess journey.",
      features: [
        { name: "1 Group Class / Week", included: true },
        { name: "Access to Basic Video Library", included: true },
        { name: "Weekly Tactics Homework", included: true },
        { name: "Monthly Online Tournament", included: true },
        { name: "1-on-1 Game Analysis", included: false },
        { name: "Grandmaster Masterclasses", included: false },
        { name: "Personalized Study Plan", included: false }
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Intermediate Plan",
      price: "$149",
      period: "/month",
      desc: "For club players looking to break through plateaus and improve ratings.",
      features: [
        { name: "2 Group Classes / Week", included: true },
        { name: "Access to Full Video Library", included: true },
        { name: "Advanced Tactics & Strategy", included: true },
        { name: "Weekly Online Tournaments", included: true },
        { name: "1-on-1 Game Analysis (1/mo)", included: true },
        { name: "Grandmaster Masterclasses", included: false },
        { name: "Personalized Study Plan", included: false }
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Elite Plan",
      price: "$299",
      period: "/month",
      desc: "Intensive training for serious tournament players and aspiring masters.",
      features: [
        { name: "Unlimited Group Classes", included: true },
        { name: "Access to Full Video Library", included: true },
        { name: "Daily Tactics & Calculation", included: true },
        { name: "Weekly Online Tournaments", included: true },
        { name: "1-on-1 Game Analysis (4/mo)", included: true },
        { name: "Grandmaster Masterclasses", included: true },
        { name: "Personalized Study Plan", included: true }
      ],
      popular: false,
      cta: "Contact Us"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deepblue-950 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-slate-600">
            Invest in your mind. Choose the plan that fits your goals and start improving today. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="bg-gold-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full flex flex-col ${plan.popular ? 'border-gold-500 shadow-xl ring-2 ring-gold-500/20' : 'border-slate-200 shadow-sm'} bg-white`}>
                <CardHeader className={`text-center pb-8 pt-10 ${plan.popular ? 'bg-gold-50/50' : ''}`}>
                  <CardTitle className="text-2xl font-bold text-deepblue-950 mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-600 h-10 mb-6">{plan.desc}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-deepblue-950">{plan.price}</span>
                    <span className="text-slate-500 font-medium">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check size={20} className="text-gold-500 shrink-0 mt-0.5" />
                        ) : (
                          <X size={20} className="text-slate-300 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8 pb-10">
                  <Link to={plan.name === 'Elite Plan' ? '/contact' : '/free-trial'} className="w-full">
                    <Button 
                      className={`w-full h-14 text-lg rounded-full ${
                        plan.popular 
                          ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/30' 
                          : 'bg-deepblue-950 hover:bg-deepblue-900 text-white'
                      }`}
                    >
                      {plan.cta}
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
