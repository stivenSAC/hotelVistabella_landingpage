import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      location: 'Madrid, España',
      text: 'Una experiencia inolvidable. El hotel supera todas las expectativas.',
      rating: 5
    },
    {
      name: 'John Smith',
      location: 'New York, USA',
      text: 'The 3D experience was amazing. Luxury redefined.',
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      location: 'Paris, France',
      text: 'Un séjour magnifique avec une vue spectaculaire.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair font-bold text-navy mb-4">
            Opiniones de Huéspedes
          </h2>
          <p className="text-xl text-navy/70">
            Lo que dicen nuestros visitantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0, 31, 63, 0.15)"
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="text-gold text-xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              
              <p className="text-navy/80 mb-6 italic">"{testimonial.text}"</p>
              
              <div>
                <h4 className="font-playfair font-bold text-navy">
                  {testimonial.name}
                </h4>
                <p className="text-navy/60 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;