import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isPulsing, setIsPulsing] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Pulse for the first 8 seconds, then remain static
    const timer = setTimeout(() => {
      setIsPulsing(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "9934889491";
  const message = "Hi Avinash, I came across your portfolio and would like to connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      <motion.div
        key="whatsapp-btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-[99] bottom-[20px] right-[20px] md:bottom-[24px] md:right-[24px] flex"
      >
        <motion.div
          animate={
            isPulsing
              ? { scale: [1, 1.05, 1] }
              : { scale: 1 }
          }
          transition={
            isPulsing
              ? { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
              : { duration: 0.3 }
          }
          className="flex"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:scale-[1.08] hover:-translate-y-[3px] hover:shadow-[0_6px_16px_rgba(37,211,102,0.5)] transition-all duration-[250ms] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
            aria-label="Chat with me on WhatsApp"
          >
            <FaWhatsapp className="w-8 h-8 md:w-[34px] md:h-[34px]" />
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WhatsAppButton;
