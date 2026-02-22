import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

export function ThankYou() {
  const highlights = [
    { title: 'Projects Delivered', value: '180+', detail: 'Across web, mobile, cloud & AI' },
    { title: 'Avg. Response Time', value: '2 hrs', detail: 'When you reach out to our team' },
    { title: 'Client Satisfaction', value: '4.9/5', detail: 'Ongoing partnerships worldwide' },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-navy via-[#0b1a2f] to-black text-white relative">
      {/* Glow layers */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-10 w-96 h-96 bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-light/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-sm text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span>We received your submission</span>
          </div>

          <div className="relative p-10 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-primary/5 to-transparent pointer-events-none" />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 80 }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30"
            >
              <CheckCircle2 className="w-8 h-8 text-navy" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold font-display mb-3">Thank you for trusting Kypex-Tech</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              Your message is in the hands of our specialists. We&apos;ll review it and respond promptly with the next steps to move your vision forward.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold shadow-lg shadow-primary/30 hover:translate-y-[-2px] transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition-all"
              >
                See Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-inner shadow-primary/10"
            >
              <p className="text-sm text-gray-400">{item.title}</p>
              <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
              <p className="text-sm text-gray-400 mt-1">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
