'use client'
import { motion, useReducedMotion } from 'framer-motion';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6 py-32 z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-white/30 text-gray-700 rounded-full text-sm font-semibold backdrop-blur-md border border-white/40 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            👋 About Me
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Frontend Developer with 6+ years of experience building scalable, accessible web applications using React, Next.js, and modern technologies.
          </p>
        </motion.div>

        <ExperienceSection />
        <EducationSection />
      </div>
    </main>
  );
}