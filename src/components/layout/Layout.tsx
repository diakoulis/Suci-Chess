import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Coaches', path: '/coaches' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-deepblue-950 text-white flex items-center justify-center rounded-lg font-serif font-bold text-xl group-hover:bg-gold-500 transition-colors">
              S
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-deepblue-950' : 'text-white md:text-deepblue-950'}`}>
              SUCI CHESS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                  location.pathname === link.path
                    ? 'text-gold-600'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-slate-600'
                    : 'text-white/90 md:text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/free-trial">
              <Button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-full px-6">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={location.pathname === link.path ? 'text-gold-600' : 'text-slate-900'}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-slate-100">
                <Link to="/free-trial">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-full py-6 text-lg">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-deepblue-950 text-slate-300 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gold-500 text-white flex items-center justify-center rounded-lg font-serif font-bold text-xl">
                  S
                </div>
                <span className="font-serif font-bold text-xl tracking-tight text-white">
                  SUCI CHESS
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Premium chess academy dedicated to developing strategic thinkers, competitive champions, and lifelong lovers of the game.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
                <li><Link to="/courses" className="hover:text-gold-400 transition-colors">Our Programs</Link></li>
                <li><Link to="/coaches" className="hover:text-gold-400 transition-colors">Meet the Coaches</Link></li>
                <li><Link to="/pricing" className="hover:text-gold-400 transition-colors">Pricing & Plans</Link></li>
                <li><Link to="/testimonials" className="hover:text-gold-400 transition-colors">Success Stories</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>123 Grandmaster Ave, Suite 400<br />New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-500 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gold-500 shrink-0" />
                  <span>hello@sucichess.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe to get chess tips, puzzles, and academy news.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500 transition-colors"
                />
                <Button className="bg-gold-500 hover:bg-gold-600 text-white w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} SUCI CHESS Academy. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
