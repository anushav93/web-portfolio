'use client'
import { motion, useReducedMotion } from 'framer-motion';
import { IconType } from 'react-icons';

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface TechCardProps {
  tech: Technology;
  variant?: "primary" | "secondary" | "featured" | "grid" | "portfolio";
  index?: number;
}

export default function TechCard({ tech, variant = "featured", index = 0 }: TechCardProps) {
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
