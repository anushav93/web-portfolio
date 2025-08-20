'use client'
import { motion, useReducedMotion } from 'framer-motion';
import { Education } from '../constants/experienceData';

interface EducationCardProps {
  education: Education;
  index: number;
}

export default function EducationCard({ education, index }: EducationCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
    >
      <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mb-4">
        {education.period}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{education.degree}</h3>
      <div className="text-gray-600">
        <p className="font-semibold">{education.school}</p>
        <p className="text-sm">{education.location}</p>
      </div>
    </motion.div>
  );
}
