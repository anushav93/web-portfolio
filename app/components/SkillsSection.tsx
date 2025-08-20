'use client'
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiGit,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiRedux,
  SiSass,
  SiWebpack,
  SiVite,
  SiVercel,
  SiNetlify,
  SiStripe,
  SiTwilio,
  SiSocketdotio
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaAws } from 'react-icons/fa';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
  { name: 'Twilio', icon: SiTwilio, color: '#F22F46' },
];

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



function TechCard({ tech, variant = "featured", index = 0 }: { 
  tech: typeof technologies[0]; 
  variant?: "primary" | "secondary" | "featured" | "grid" | "portfolio";
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  if (variant === "portfolio") {
    return (
      <motion.div
        className="group relative"
        whileHover={shouldReduceMotion ? {} : { y: -2 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.03 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-300">
          {/* Icon */}
          <motion.div
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.1
            }}
            transition={{ duration: 0.3 }}
          >
            <tech.icon 
              className="text-3xl mb-2 transition-all duration-300"
              style={{ color: tech.color }}
            />
          </motion.div>
          
          {/* Tech name */}
          <span className="text-xs font-medium text-gray-800 text-center">
            {tech.name}
          </span>
        </div>
      </motion.div>
    );
  }

  if (variant === "grid") {
    return (
      <motion.div
        className="group relative"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 relative overflow-hidden">
          {/* Icon */}
          <motion.div
            className="relative z-10"
            whileHover={shouldReduceMotion ? {} : { 
              rotate: [0, -5, 5, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <tech.icon 
              className="text-3xl mb-2 transition-all duration-300"
              style={{ color: tech.color }}
            />
          </motion.div>
          
          {/* Tech name */}
          <span className="text-xs font-medium text-gray-800 text-center relative z-10">
            {tech.name}
          </span>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className="flex-shrink-0 group relative"
      whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center p-8 bg-white/90 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 min-w-[160px] backdrop-blur-sm transition-all duration-300 relative overflow-hidden">
        {/* Icon */}
        <motion.div
          className="relative z-10"
          whileHover={shouldReduceMotion ? {} : { 
            rotate: [0, -8, 8, 0],
            scale: 1.1
          }}
          transition={{ duration: 0.6 }}
        >
          <tech.icon 
            className="text-6xl mb-6 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-lg"
            style={{ color: tech.color }}
          />
        </motion.div>
        
        {/* Tech name */}
        <span className="text-base font-semibold text-gray-800 text-center whitespace-nowrap relative z-10">
          {tech.name}
        </span>
        
        {/* Decorative dot */}
        <motion.div
          className="w-2 h-2 rounded-full mt-3 opacity-60 relative z-10"
          style={{ backgroundColor: tech.color }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}