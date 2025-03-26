'use client'
import PageTemplate from './components/PageTemplate';
import { motion } from 'framer-motion';

export default function Home() {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      }
    }
  };

  const highlightVariants = {
    initial: {
      backgroundSize: "0% 100%",
      backgroundPosition: "0% 100%",
    },
    animate: {
      backgroundSize: "100% 100%",
      transition: {
        duration: 1,
        delay: 0.5,
      }
    }
  };

  return (
    <PageTemplate>
      <div className="space-y-8 ">
        {/* Hero Title */}
        <h1 className="text-4xl font-bold tracking-tight ">
          <span className="">I'M ANUSHA VENTRAPRGADA</span>
        </h1>

        {/* Introduction Text */}
        <motion.div 
          className="space-y-4 text-lg leading-relaxed text-neutral-700"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.p variants={textVariants}>
            With over six years of experience building web applications, serverless solutions, and interactive user experiences,
            I specialize in{' '}
            <motion.span 
              className="font-bold bg-gradient-to-r from-blue-200 to-blue-100 bg-no-repeat"
              style={{ backgroundPosition: "0% 100%", backgroundSize: "0% 100%" }}
              variants={highlightVariants}
            >
              React, Next.js, Node.js, and AWS
            </motion.span>
            , creating everything from custom UI components to end-to-end IVR flows.
          </motion.p>
          
          <motion.p variants={textVariants}>
            Whether it's crafting sleek frontends, integrating third-party services like{' '}
            <motion.span 
              className="font-bold bg-gradient-to-r from-purple-200 to-purple-100 bg-no-repeat"
              style={{ backgroundPosition: "0% 100%", backgroundSize: "0% 100%" }}
              variants={highlightVariants}
            >
              Twilio and Amazon Connect
            </motion.span>
            , or collaborating with cross-functional teams to bring ideas to life, I am passionate about solving real-world problems with clean, efficient code. 
            I'm also experienced in using design tools like{' '}
            <motion.span 
              className="font-bold bg-gradient-to-r from-green-200 to-green-100 bg-no-repeat"
              style={{ backgroundPosition: "0% 100%", backgroundSize: "0% 100%" }}
              variants={highlightVariants}
            >
              Figma
            </motion.span>
            {' '}to ensure seamless collaboration between design and development teams, bridging the gap between visual concepts and functional applications.
          </motion.p>
        </motion.div>

        {/* Call to Action */}
        <div className="flex items-center space-x-4">
          <a 
            href="/about" 
            className="flex items-center group text-lg font-medium hover:bg-neutral-900 hover:px-3 py-2 transition-all duration-300 ease-in-out hover:text-neutral-50"
          >
            See More About Me 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </PageTemplate>
  );
}
