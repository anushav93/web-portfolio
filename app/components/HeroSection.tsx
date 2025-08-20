'use client'
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroCard, { HeroCardData } from './HeroCard';
import Modal from './Modal';
import ModalContent from './ModalContent';
import AnnouncementBanner from './AnnouncementBanner';
import { heroCards } from '../constants/heroData';
import { getActiveAnnouncements } from '../constants/announcements';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState<HeroCardData | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const activeAnnouncements = getActiveAnnouncements();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const name = "ANUSHA VENTRAPRAGADA";

  const openModal = (card: HeroCardData) => {
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
            {/* Announcement Section */}
        {activeAnnouncements.length > 0 && (
          <div className="relative z-10 max-w-5xl mx-auto px-6 mb-16">
            {activeAnnouncements.map((announcement) => (
              <AnnouncementBanner
                key={announcement.id}
                title={announcement.title}
                description={announcement.description}
                link={announcement.link}
                linkText={announcement.linkText}
                isNew={announcement.isNew}
              />
            ))}
          </div>
        )}
            <h1 className="text-xl md:text-3xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
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

      {/* Modal */}
      <Modal 
        isOpen={!!selectedCard} 
        onClose={closeModal}
        layoutId={selectedCard ? `card-${selectedCard.id}` : undefined}
      >
        {selectedCard && <ModalContent card={selectedCard} />}
      </Modal>
    </>
  );
}
