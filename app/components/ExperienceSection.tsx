'use client'
import { motion } from 'framer-motion';
import { HiOutlineBriefcase } from 'react-icons/hi';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../constants/experienceData';

export default function ExperienceSection() {
  return (
    <motion.section 
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
          <HiOutlineBriefcase className="text-white text-xl" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Work Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
