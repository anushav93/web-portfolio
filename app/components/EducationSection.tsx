'use client'
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import EducationCard from './EducationCard';
import { education } from '../constants/experienceData';

export default function EducationSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
          <HiOutlineAcademicCap className="text-white text-xl" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
