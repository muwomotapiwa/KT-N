import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Building, Target, Eye, Heart, Lightbulb, Shield, Users, Star, Award, CheckCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useRef, useState } from 'react';

// Eagerly import all brand assets and map them to categories
const imageImports = import.meta.glob('../assets/images/*.{jpeg,jpg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const corporateImageMeta = [
  { file: 'glass.jpeg', category: 'Drinkware' },
  { file: 'glassmug.jpeg', category: 'Drinkware' },
  { file: 'CupNavy.jpeg', category: 'Drinkware' },
  { file: 'CupNavy2.jpeg', category: 'Drinkware' },
  { file: 'coveredmug.jpeg', category: 'Drinkware' },
  { file: 'notebookandpennavy.jpeg', category: 'Stationery' },
  { file: 'notebookandpen.jpeg', category: 'Stationery' },
  { file: 't-shirtwhite.jpeg', category: 'Apparel' },
  { file: 't-shirtnavy.jpeg', category: 'Apparel' },
  { file: 't-shirtblack.jpeg', category: 'Apparel' },
  { file: 'longslivetshirt.jpeg', category: 'Apparel' },
  { file: 'shirtgrey.jpeg', category: 'Apparel' },
  { file: 'shirtblack.jpeg', category: 'Apparel' },
  { file: 'shirtblackwhitelogo.jpeg', category: 'Apparel' },
  { file: 'blackhoody-allbalck.jpeg', category: 'Apparel' },
  { file: 'blackhoody-allbalckv2.jpeg', category: 'Apparel' },
  { file: 'blackhoody-allbalckv3.jpeg', category: 'Apparel' },
  { file: 'greenandnavyhoody.png', category: 'Apparel' },
  { file: 'heaphonenavyandgreen.jpeg', category: 'Tech' },
  { file: 'heaphoneblack.jpeg', category: 'Tech' },
  { file: 'office1.jpeg', category: 'Tech' },
  { file: 'office2.jpeg', category: 'Tech' },
  { file: 'officecubs.jpeg', category: 'Tech' },
  { file: 'offcecubs2.jpeg', category: 'Tech' },
  { file: 'passage.jpeg', category: 'Tech' },
];

const corporateImages = corporateImageMeta.map(({ file, category }) => ({
  src: imageImports[`../assets/images/${file}`] ?? '/placeholder.jpg',
  category,
}));

// Corporate Image Card Component
function CorporateImageCard({ image, index, isExpanded }: { image: typeof corporateImages[0]; index: number; isExpanded: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98, rotateX: 2 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ 
        duration: 0.5, 
        delay: isExpanded ? index * 0.03 : index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group relative aspect-square overflow-hidden rounded-2xl bg-navy-light border border-primary/10 cursor-pointer shadow-md shadow-black/20"
      whileHover={{ scale: 1.08, zIndex: 10 }}
    >
      {/* Brand image */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src={image.src}
          alt={image.category}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125 group-hover:-translate-y-1"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/35 via-navy/20 to-dark/45" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue/15 rounded-full blur-2xl" />
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3 px-2 py-1 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm">
        <span className="text-[10px] text-primary font-medium uppercase tracking-wider">{image.category}</span>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.' },
  { icon: Shield, title: 'Transparency', description: 'Open communication and honest relationships form the foundation of our partnerships.' },
  { icon: Users, title: 'Customer Focus', description: 'Your success is our success. We prioritize understanding and exceeding your expectations.' },
  { icon: Star, title: 'Excellence', description: 'We strive for excellence in everything we do, from code quality to customer service.' },
];

const differentiators = [
  'End-to-end project ownership and accountability',
  'Agile methodology with transparent progress tracking',
  'Dedicated project managers for every engagement',
  'Post-launch support and continuous improvement',
  'Industry-specific expertise across multiple sectors',
  'Competitive pricing without compromising quality',
];

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Driving Digital <span className="text-primary">Transformation</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Kypex-Tech Solutions is a leading technology company dedicated to helping businesses thrive in the digital age through innovative IT solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-navy-light/50 border border-primary/10 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-navy" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional value through cutting-edge IT services, strategic consulting, and unwavering customer focus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-navy-light/50 border border-primary/10 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue to-blue-light flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400">
                To be the most trusted technology partner for businesses seeking digital transformation. We envision a future where every organization, regardless of size, has access to world-class IT solutions that unlock their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              What Drives <span className="text-primary">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-navy-light/50 border border-primary/10 rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-blue/20 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                What Sets Us <span className="text-primary">Apart</span>
              </h2>
              <p className="text-gray-400 mb-8">
                We combine deep technical expertise with a genuine commitment to your success. Our team doesn't just deliver projects – we build lasting partnerships.
              </p>
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                  <div className="p-6 bg-navy-light border border-primary/20 rounded-2xl">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Identity Collection */}
      <CorporateIdentitySection />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-light to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Ready to Work <span className="text-primary">Together</span>?
            </h2>
            <p className="text-gray-300 mb-10">
              Let's discuss how we can help transform your business with innovative IT solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Corporate Identity Collection Section Component
function CorporateIdentitySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const visibleImages = isExpanded ? corporateImages : corporateImages.slice(0, 6);

  const handleToggle = () => {
    if (isExpanded) {
      // Scroll to section header when collapsing
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-navy overflow-hidden"
    >
      {/* Animated Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient blob 1 */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #34d9b9 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating gradient blob 2 */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #0578ac 0%, transparent 70%)',
            bottom: '20%',
            right: '-5%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating gradient blob 3 */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #04a9b0 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle noise overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Cinematic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Brand Identity</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6"
          >
            Corporate Identity <span className="text-primary">Collection</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            A curated showcase of our branded corporate apparel, executive gifts, and tech lifestyle 
            merchandise that represent the Kypex-Tech identity.
          </motion.p>
        </motion.div>

        {/* Image Grid with Staggered Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => (
              <CorporateImageCard 
                key={`${image.label}-${index}`}
                image={image}
                index={index}
                isExpanded={isExpanded}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand/Collapse Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={handleToggle}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-navy-light to-dark border border-primary/30 text-white font-semibold rounded-xl hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{isExpanded ? 'Collapse Collection' : 'View Full Collection'}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary" />
              )}
            </motion.span>
            
            {/* Item count badge */}
            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
              {isExpanded ? `${corporateImages.length} items` : `+${corporateImages.length - 6} more`}
            </span>
          </motion.button>
        </motion.div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {['Apparel', 'Drinkware', 'Stationery', 'Tech'].map((category) => (
            <div key={category} className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <span>{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
