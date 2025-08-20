'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useMemo, useCallback, useState } from 'react';
import { HiOutlineGlobeAlt, HiOutlineCog, HiOutlineLightningBolt, HiOutlineSparkles, HiOutlineLightBulb, HiOutlineDeviceMobile } from 'react-icons/hi';

const projects = [
  {
    id: 1,
    title: "Twilio Integration Platform",
    subtitle: "Enterprise Communication Solution",
    description: "Led end-to-end development of a comprehensive Twilio integration platform featuring custom IVR flows, AWS serverless architecture, and real-time communication management.",
    backgroundColor: "bg-purple-500",
    hoverColor: "bg-purple-600",
    tags: ["React", "Redux", "AWS Lambda", "Node.js", "Twilio"],
    highlights: ["99.9% Uptime", "50% Cost Reduction", "Enterprise Scale"],
    link: "#"
  },
  {
    id: 2,
    title: "Custom React Plugins",
    subtitle: "Enhanced User Experience",
    description: "Designed and built a suite of custom Twilio plugins using modern React patterns, significantly improving customer interaction efficiency and user satisfaction.",
    backgroundColor: "bg-blue-500",
    hoverColor: "bg-blue-600",
    tags: ["React", "Redux", "TypeScript", "UI/UX"],
    highlights: ["40% Faster Workflows", "Enhanced UX", "Modular Design"],
    link: "#"
  },
  {
    id: 3,
    title: "High-Performance Web Apps",
    subtitle: "Serverless Architecture",
    description: "Developed high-performance serverless web applications with focus on accessibility, security, and scalability using cutting-edge technologies.",
    backgroundColor: "bg-orange-500",
    hoverColor: "bg-orange-600",
    tags: ["Next.js", "React", "Tailwind CSS", "AWS"],
    highlights: ["Lighthouse 100", "Zero Downtime", "Global CDN"],
    link: "#"
  },
  {
    id: 4,
    title: "Reusable UI Components",
    subtitle: "Design System Framework",
    description: "Built 20+ reusable UI components with Tailwind CSS and SASS, standardizing design systems and accelerating development cycles.",
    backgroundColor: "bg-green-500",
    hoverColor: "bg-green-600",
    tags: ["Figma", "React", "Storybook", "Design Tokens"],
    highlights: ["20+ Components", "Cross-Platform", "Accessible"],
    link: "#"
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1
      }
    }
  }), [shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world applications and solutions I've built using modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Interested in discussing a project?
          </p>
          <motion.a
            href="mailto:anushaventrapragada93@gmail.com"
            className="px-6 py-3 bg-black text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            Let's Create Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, index, shouldReduceMotion }: {
  project: typeof projects[0];
  index: number;
  shouldReduceMotion: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    const iconMap = [
      HiOutlineGlobeAlt, HiOutlineCog, HiOutlineLightningBolt, 
      HiOutlineSparkles
    ];
    const IconComponent = iconMap[index % iconMap.length];
    return <IconComponent className="text-5xl text-white opacity-90" />;
  };

  const handleClick = useCallback(() => {
    console.log('Navigate to project:', project.title);
  }, [project.title]);

  return (
    <motion.div
      className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" }
        }
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Solid Background */}
      <div className={`absolute inset-0 ${project.backgroundColor}`} />
      
      {/* Hover Overlay */}
      <motion.div
        className={`absolute inset-0 ${project.hoverColor} opacity-0`}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
        {/* Icon */}
        <motion.div
          className="self-start"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {getIcon()}
        </motion.div>

        {/* Text Content */}
        <div className="space-y-3 flex-1 flex flex-col justify-center">
          <motion.p 
            className="text-sm font-medium opacity-80 tracking-wide"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.subtitle}
          </motion.p>
          <motion.h3 
            className="text-2xl font-bold mb-3"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-sm opacity-90 leading-relaxed"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          
          {/* Tech Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Learn More Button */}
        <motion.div
          className="mt-6"
          animate={isHovered ? { y: -5, opacity: 1 } : { y: 0, opacity: 0.8 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            Learn More
            <motion.span
              animate={isHovered ? { x: 3 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>


    </motion.div>
  );
};