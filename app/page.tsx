'use client'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineUser, HiOutlineCode, HiOutlineBriefcase, HiOutlineChatAlt } from 'react-icons/hi';

const heroCards = [
  {
    id: 'experience',
    title: 'Professional Experience',
    subtitle: 'Software Engineer',
    description: 'Currently at HGS Digital, building scalable React applications with 6+ years of frontend development experience.',
    backgroundColor: 'bg-yellow-300',
    hoverColor: 'hover:bg-yellow-400',
    icon: HiOutlineBriefcase,
    delay: 0,
    modalContent: {
      title: 'Professional Experience',
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">HGS Digital – Software Engineer</h3>
            <p class="text-neutral-600 font-medium mb-3">Chicago, IL | Dec 2018 – Present</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Constructed and maintained React and Next.js web applications, delivering expeditious, responsive, and SEO-optimized customer-facing features</li>
              <li>• Designed and implemented reusable UI components utilizing Tailwind CSS and SASS</li>
              <li>• Developed bespoke React plugins employing Twilio UI to satisfy diverse client requirements</li>
              <li>• Created and optimized serverless Node.js functions (AWS Lambda) for scalable backend logic</li>
              <li>• Enhanced performance and Core Web Vitals scores through lazy loading and code splitting</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Audentio, LLC – Web Developer</h3>
            <p class="text-neutral-600 font-medium mb-3">Remote | Jan 2018 – Sep 2018</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Developed custom web applications in React and SASS</li>
              <li>• Produced responsive front-end components for client projects</li>
              <li>• Delivered interactive UI solutions improving usability and visual consistency</li>
            </ul>
          </div>
        </div>
      `
    }
  },
  {
    id: 'skills',
    title: 'Technical Expertise',
    subtitle: 'Full-Stack Capabilities',
    description: 'Expert in React, Next.js, TypeScript, Node.js, and AWS. Specialized in building scalable, high-performance web applications.',
    backgroundColor: 'bg-fuchsia-300',
    hoverColor: 'hover:bg-fuchsia-400',
    icon: HiOutlineCode,
    delay: 0.05,
    modalContent: {
      title: 'Technical Expertise',
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Languages & Frameworks</h3>
            <p class="text-gray-700">JavaScript (ES6+), React, Next.js, Node.js, Redux, HTML5, CSS3, SASS, Tailwind CSS</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Tools & Platforms</h3>
            <p class="text-gray-700">AWS Lambda, Twilio UI, npm, Webpack, Vite, JIRA, Git</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Practices</h3>
            <p class="text-gray-700">Responsive Design, Accessibility (WCAG), SEO Optimization, Agile (Scrum), CI/CD, Unit Testing</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Additional</h3>
            <p class="text-gray-700">RESTful APIs, Cross-browser Testing, Chrome DevTools, Serverless Architecture</p>
          </div>
        </div>
      `
    }
  },
  {
    id: 'projects',
    title: 'Featured Projects',
    subtitle: 'Recent Work',
    description: 'Led development of enterprise applications, built 20+ reusable UI components, and created custom React plugins for enhanced user experiences.',
    backgroundColor: 'bg-indigo-300',
    hoverColor: 'hover:bg-indigo-400',
    icon: HiOutlineUser,
    delay: 0.1,
    modalContent: {
      title: 'Career Highlights',
      content: `
        <div class="space-y-4">
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Modern React Applications</h3>
            <p class="text-gray-700">Delivered customer-facing applications using React and Next.js, improving site responsiveness and SEO across eCommerce projects.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Component Library</h3>
            <p class="text-gray-700">Built 20+ reusable UI components with Tailwind CSS and SASS, standardizing design systems and accelerating development cycles.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Custom Integrations</h3>
            <p class="text-gray-700">Created custom React plugins integrated with Twilio UI to address diverse client requirements, enhancing digital engagement.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Performance Optimization</h3>
            <p class="text-gray-700">Boosted site performance and accessibility by implementing lazy loading, code splitting, and WCAG compliance.</p>
          </div>
        </div>
      `
    }
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    subtitle: 'Open to Opportunities',
    description: 'Based in Chicago, IL. Currently available for exciting frontend development opportunities and challenging projects.',
    backgroundColor: 'bg-lime-300',
    hoverColor: 'hover:bg-lime-400',
    icon: HiOutlineChatAlt,
    delay: 0.15,
    modalContent: {
      title: 'Contact Information',
      content: `
        <div class="space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to work together?</h3>
            <p class="text-gray-700 mb-6">I'm always interested in discussing new opportunities and frontend challenges.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">Email</h4>
              <a href="mailto:anushaventrapragada93@gmail.com" class="text-neutral-600 hover:text-neutral-700">anushaventrapragada93@gmail.com</a>
            </div>
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">LinkedIn</h4>
              <a href="https://linkedin.com/in/anusha-v" target="_blank" class="text-neutral-600 hover:text-neutral-700">linkedin.com/in/anusha-v</a>
            </div>
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">Phone</h4>
              <a href="tel:8152174225" class="text-neutral-600 hover:text-neutral-700">(815) 217-4225</a>
            </div>
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">Location</h4>
              <span class="text-gray-700">Chicago, IL</span>
            </div>
          </div>
          <div class="text-center">
            <h4 class="font-bold text-gray-900 mb-3">Education</h4>
            <p class="text-gray-700">M.S., Computer Science – Northern Illinois University, 2017</p>
            <p class="text-gray-700">B.S., Computer Science – V.R. Siddhartha Engineering College, 2015</p>
          </div>
        </div>
      `
    }
  }
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState<typeof heroCards[0] | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const name = "ANUSHA VENTRAPRAGADA";

  const openModal = (card: typeof heroCards[0]) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      {/* Hero Section with Google Labs inspired design */}
      <section className="relative min-h-screen overflow-hidden bg-gray-50">
        {/* Header Section */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-12">
          {/* Main Title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 border border-neutral-600 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Available for new opportunities
            </motion.div>
            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Web Developer 
            </h1> */}
            <h1 className="text-xl md:text-3xl text-gray-600 font-light max-w-5xl mx-auto leading-relaxed">
              Hi, I'm <span className="font-semibold text-gray-900">{name}</span>. I build exceptional web experiences with 6+ years of expertise in React, Next.js, and modern frontend technologies.
            </h1>
          </motion.div>
        </div>

        {/* Professional Info Cards */}
        <div className="relative z-10 mx-auto px-6 pb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {heroCards.map((card, index) => (
              <HeroCard 
                key={card.id} 
                card={card} 
                shouldReduceMotion={shouldReduceMotion ?? false}
                onClick={() => openModal(card)}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6 pb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/av.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-200"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anusha-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-300 rounded-2xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Modal with enhanced expansion animation */}
      <AnimatePresence mode="wait">
        {selectedCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0.0, 0.2, 1] // Custom cubic-bezier for smooth exit
            }}
            onClick={closeModal}
          >
            {/* Enhanced backdrop with glass effect */}
            <motion.div 
              className={`absolute inset-0 bg-white/15 backdrop-blur-2xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            />
            
            <motion.div
              layoutId={`card-${selectedCard.id}`}
              className="relative border-2 border-neutral-100/30 bg-neutral-300/50 backdrop-blur-2xl rounded-3xl max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ 
                scale: 0.85,
                opacity: 0,
                y: 20
              }}
              animate={{ 
                scale: 1,
                opacity: 1,
                y: 0
              }}
              exit={{ 
                scale: 0.85,
                opacity: 0,
                y: 20
              }}
              transition={{ 
                layout: {
                  type: "spring",
                  damping: 30,
                  stiffness: 300
                },
                default: {
                  duration: 0.4,
                  ease: [0.4, 0.0, 0.2, 1]
                }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <motion.div 
                className="relative px-8 py-10 border-b border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  delay: 0.2, 
                  duration: 0.3,
                  exit: { duration: 0.2, delay: 0 }
                }}
              >
                <button
                  onClick={closeModal}
                  className="cursor-pointer absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-100/60 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <span className="text-gray-500 text-xl">×</span>
                </button>
                
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${selectedCard.backgroundColor} mb-6`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ 
                   
                    exit: { duration: 0.2, delay: 0 }
                  }}
                >
                  <selectedCard.icon className="text-3xl text-black" />
                </motion.div>
                
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ 
                    delay: 0.25, 
                    duration: 0.3,
                    exit: { duration: 0.2, delay: 0 }
                  }}
                >
                  {selectedCard.modalContent.title}
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.3,
                    exit: { duration: 0.2, delay: 0 }
                  }}
                >
                  {selectedCard.subtitle}
                </motion.p>
              </motion.div>
              
              {/* Modal Content */}
              <motion.div 
                className="px-8 py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  delay: 0.35, 
                  duration: 0.4,
                  exit: { duration: 0.2, delay: 0 }
                }}
                dangerouslySetInnerHTML={{ __html: selectedCard.modalContent.content }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// HeroCard Component for portfolio
const HeroCard = ({ card, shouldReduceMotion, onClick }: {
  card: typeof heroCards[0];
  shouldReduceMotion: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      layoutId={`card-${card.id}`}
      className={`relative ${card.backgroundColor} ${card.hoverColor} rounded-4xl transition-all duration-300 ease-in-out cursor-pointer group`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={shouldReduceMotion ? {} : { 
        scale: 1.02,
        y: -4,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      whileTap={shouldReduceMotion ? {} : { 
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      onClick={onClick}
    >
      {/* Content */}
      <div className="p-6">
        {/* Icon with colored background */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${card.backgroundColor} mb-4`}>
          <card.icon className="text-2xl text-neutral-900" />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-neutral-800 mb-1">
              {card.subtitle}
            </p>
            <h3 className="text-lg font-bold text-neutral-800 mb-2">
              {card.title}
            </h3>
          </div>
          <p className="text-sm text-neutral-800 leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Learn More Link */}
        <div className="mt-4">
          <div className="border px-3 py-1 border-neutral-800 inline-flex items-center gap-2 text-sm font-medium text-neutral-800 group-hover:text-neutral-700 transition-colors duration-150 rounded-full">
            Learn more
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>


    </motion.div>
  );
};