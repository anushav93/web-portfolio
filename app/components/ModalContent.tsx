'use client'
import { motion } from 'framer-motion';
import { HeroCardData } from './HeroCard';

interface ModalContentProps {
  card: HeroCardData;
}

export default function ModalContent({ card }: ModalContentProps) {
  return (
    <>
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
        <motion.div 
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${card.backgroundColor} mb-6`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ 
            exit: { duration: 0.2, delay: 0 }
          }}
        >
          <card.icon className="text-3xl text-black" />
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
          {card.modalContent.title}
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
          {card.subtitle}
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
        dangerouslySetInnerHTML={{ __html: card.modalContent.content }}
      />
    </>
  );
}
