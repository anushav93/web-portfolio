'use client'
import { motion, useReducedMotion } from 'framer-motion';
import { Experience } from '../constants/experienceData';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="font-semibold">{experience.company}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
          {experience.period}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6 font-light leading-relaxed">{experience.description}</p>

      {/* Achievements */}
      <ul className="space-y-3 mb-6">
        {experience.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-700">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
            <span className="font-light leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-full text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
