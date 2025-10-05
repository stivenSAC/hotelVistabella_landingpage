import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-smoke overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 text-center text-cream px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-playfair font-bold mb-6"
        >
          Hotel <span className="text-gold">VistaBella</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl mb-8 font-light"
        >
          Vive el lujo en una experiencia frente al mar
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-navy px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all shadow-lg"
        >
          Explorar Hotel
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;