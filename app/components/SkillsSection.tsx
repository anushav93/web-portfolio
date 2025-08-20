'use client'
import { motion, useReducedMotion } from 'framer-motion';
import TechCard from './TechCard';
import { technologies } from '../constants/technologies';

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="py-16 relative overflow-hidden bg-white" id="skills">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The tools and technologies I use to build exceptional web applications
          </p>
        </motion.div>

        {/* Technology Grid - All Technologies */}
        <motion.div 
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} variant="portfolio" index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Let's discuss how these technologies can bring your project to life
          </p>
          <motion.a
            href="mailto:anushaventrapragada93@gmail.com"
            className="px-6 py-3 bg-black text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}



