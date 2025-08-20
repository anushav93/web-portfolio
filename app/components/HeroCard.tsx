'use client'
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

export interface HeroCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
  hoverColor: string;
  icon: IconType;
  delay: number;
  modalContent: {
    title: string;
    content: string;
  };
}

interface HeroCardProps {
  card: HeroCardData;
  shouldReduceMotion: boolean;
  onClick: () => void;
}

export default function HeroCard({ card, shouldReduceMotion, onClick }: HeroCardProps) {
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
}
