import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameLetters = "SHADY MULLA".split('');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-[80px] animate-pulse delay-1000" />
      </div>

      {/* Geometric Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute right-[10%] top-[20%] w-72 h-72 border border-red-500/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute right-[15%] top-[25%] w-48 h-48 border border-red-500/10 rounded-full hidden lg:block"
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl lg:ml-20">
          {/* Animated Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex flex-wrap gap-1 text-sm md:text-base tracking-[0.3em] text-gray-400 font-light">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Main Title */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
            >
              Offensive Security
              <span className="inline-block mx-4 w-16 md:w-24 h-[2px] bg-white/50 align-middle" />
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-500"
            >
              Penetration Tester
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-lg mb-10"
          >
            Red Team Enthusiast | Vulnerability Researcher
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="mailto:shadymulla19@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-red-500 text-red-500 font-medium rounded-sm hover:bg-red-500/10 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { delay: 2, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#00d4aa] transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
