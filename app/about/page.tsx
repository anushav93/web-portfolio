'use client'
import { motion, useReducedMotion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineCode, HiOutlineUsers } from 'react-icons/hi';

const experiences = [
  {
    title: "Web Developer",
    company: "HGS Digital",
    location: "Chicago, IL",
    period: "2018 - Present",
    description: "Leading end-to-end development of enterprise communication solutions with Twilio integration and AWS serverless architecture.",
    achievements: [
      "Led an end-to-end Twilio project, overseeing architecture, development, testing, and production deployment for IVR flows and AWS serverless integration.",
      "Designed and built custom Twilio plugins using React, Redux, and AWS Lambda (Node.js), improving customer interaction efficiency.",
      "Created IVR flows for Twilio and Amazon Connect, enhancing automation and streamlining user experiences.",
      "Developed serverless web applications using React, Next.js, and Tailwind CSS, ensuring performance, scalability, and security.",
      "Built modern, accessible UI components with SASS/CSS, optimizing responsiveness across devices."
    ],
    tags: ["React", "Next.js", "AWS", "Twilio", "Amazon Connect", "Contentful", "Node.js"]
  },
  {
    title: "Web Developer",
    company: "Audentio",
    location: "Rockford, IL", 
    period: "2018",
    description: "Collaborated with cross-functional teams to build optimized web applications focused on user experience and performance.",
    achievements: [
      "Created custom form solutions in React, improving data collection and user experience.",
      "Collaborated with designers and backend engineers to build and optimize web applications for speed and usability."
    ],
    tags: ["React", "JavaScript", "SCSS"]
  }
];

const education = [
  {
    degree: "Master's in Computer Science",
    school: "Northern Illinois University",
    location: "Dekalb, IL",
    period: "2015 - 2017"
  },
  {
    degree: "Bachelor's in Computer Science", 
    school: "V.R. Siddhartha Engineering College",
    location: "Vijayawada, India",
    period: "2011 - 2015"
  }
];

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

        {/* Experience Section */}
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
              <motion.div
                key={index}
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
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 font-light leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                      <span className="font-light leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-full text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
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
              <motion.div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
              >
                <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mb-4">
                  {edu.period}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <div className="text-gray-600">
                  <p className="font-semibold">{edu.school}</p>
                  <p className="text-sm">{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}