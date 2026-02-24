import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'AI Solutions', path: '/ai-solutioning' },
  { name: 'Services', path: '/#services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact', hasDropdown: true },
];

const contactLinks = [
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
];

const serviceLinks = [
  { name: 'Website Development', path: '/services/website-development' },
  { name: 'Mobile App Development', path: '/services/mobile-app-development' },
  { name: 'Cybersecurity', path: '/services/cybersecurity' },
  { name: 'Cloud Services', path: '/services/cloud-services' },
  { name: 'IT Consulting', path: '/services/it-consulting' },
  { name: 'Data Analytics', path: '/services/data-analytics' },
];

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const location = useLocation();
  const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '/thank-you';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-lg shadow-lg shadow-primary/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-navy font-bold text-xl font-display">K</span>
              </motion.div>
              <span className="text-xl font-bold font-display bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
                Kypex-Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.name === 'Services' ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-navy-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-primary/20 overflow-hidden"
                        >
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.name === 'Contact' ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowContactDropdown(true)}
                    onMouseLeave={() => setShowContactDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {showContactDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full right-0 mt-2 w-48 bg-navy-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-primary/20 overflow-hidden"
                        >
                          {contactLinks.map((contact) => (
                            <Link
                              key={contact.path}
                              to={contact.path}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                              {contact.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-300 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                to="/consultation"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-navy-light/95 backdrop-blur-lg border-t border-primary/20 overflow-y-auto overscroll-contain touch-pan-y z-[60]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2 pb-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-primary/20 pt-2 mt-2">
                <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">Services</p>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-primary/20 pt-2 mt-2">
                <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">Support</p>
                <p className="px-4 py-2 text-sm text-gray-500">Coming soon</p>
              </div>
              <div className="border-t border-primary/20 pt-2 mt-2">
                <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">Policies</p>
                {contactLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/consultation"
                className="block text-center mt-4 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-dark border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <span className="text-navy font-bold text-xl font-display">K</span>
                </div>
                <span className="text-xl font-bold font-display text-white">Kypex-Tech</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Innovative IT solutions that transform businesses through cutting-edge technology and exceptional service.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-primary text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/assessment" className="text-gray-400 hover:text-primary text-sm transition-colors">Free Security Assessment</Link></li>
                <li><Link to="/consultation" className="text-gray-400 hover:text-primary text-sm transition-colors">Free Consultation</Link></li>
                <li><Link to="/project-start" className="text-gray-400 hover:text-primary text-sm transition-colors">Start a Project</Link></li>
                <li><Link to="/portfolio" className="text-gray-400 hover:text-primary text-sm transition-colors">Our Work</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:infor@kypextech.co.za" className="hover:text-primary transition-colors">infor@kypextech.co.za</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-semibold">Subscribe to our newsletter</h3>
                <p className="text-gray-400 text-sm">Get the latest updates and insights delivered to your inbox.</p>
              </div>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex gap-2 w-full md:w-auto"
              >
                <input type="hidden" name="access_key" value="af31cdca-fdb5-4fd7-81bd-762838f8e47f" />
                <input type="hidden" name="subject" value="Newsletter Subscription" />
                <input type="hidden" name="form_name" value="Footer Newsletter" />
                <input type="hidden" name="redirect" value={redirectUrl} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-navy-light border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-3 md:px-6 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-primary/10 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Kypex-Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-navy shadow-lg shadow-primary/30 hover:scale-110 transition-transform z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/27715731602"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </div>
  );
}
