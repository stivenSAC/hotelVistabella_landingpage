import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Spa & Wellness',
      description: 'Relájate en nuestro spa de clase mundial',
      icon: '🧘♀️'
    },
    {
      title: 'Restaurante Gourmet',
      description: 'Sabores exquisitos con vista al mar',
      icon: '🍷'
    },
    {
      title: 'Piscina Infinita',
      description: 'Nada hacia el horizonte',
      icon: '🏊♂️'
    },
    {
      title: 'Servicio de Playa',
      description: 'Comodidad total en la arena',
      icon: '🏖️'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair font-bold text-cream mb-4">
            Experiencias Únicas
          </h2>
          <p className="text-xl text-cream/70">
            Servicios diseñados para superar tus expectativas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-cream/10 backdrop-blur-sm rounded-2xl border border-cream/20 hover:bg-cream/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-playfair font-bold text-gold mb-2">
                {service.title}
              </h3>
              <p className="text-cream/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;