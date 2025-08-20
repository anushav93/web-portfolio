'use client'
import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineExternalLink } from 'react-icons/hi';

interface AnnouncementProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  isNew?: boolean;
}

export default function AnnouncementBanner({ 
  title, 
  description, 
  link, 
  linkText, 
  isNew = true 
}: AnnouncementProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-200/50 border border-gray-200 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300 block cursor-pointer hover:border-blue-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
     
      whileTap={{ scale: 0.98 }}
    >
      {/* Content */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-center gap-2 mb-2">
              {isNew && (
                <motion.span 
                  className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full "
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-4 h-4 flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                     
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <HiOutlineSparkles className="text-white text-sm" />
                    </motion.div>
                  </motion.div>
                  New Project
                </motion.span>
              )}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* External Link Icon */}
        <motion.div
          className="absolute top-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineExternalLink className="text-lg" />
        </motion.div>
      </div>
    </motion.a>
  );
}
