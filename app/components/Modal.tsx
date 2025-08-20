'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  layoutId?: string;
}

export default function Modal({ isOpen, onClose, children, layoutId }: ModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0.0, 0.2, 1] // Custom cubic-bezier for smooth exit
          }}
          onClick={onClose}
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
            layoutId={layoutId}
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
            {/* Close Button */}
            <button
              onClick={onClose}
              className="cursor-pointer absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-100/60 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
            >
              <span className="text-gray-500 text-xl">×</span>
            </button>
            
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
