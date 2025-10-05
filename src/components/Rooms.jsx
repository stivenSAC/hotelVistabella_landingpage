import React from 'react';
import { motion } from 'framer-motion';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Suite Presidencial',
      description: 'Lujo absoluto con vista panorámica al océano',
      price: '$500/noche',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500'
    },
    {
      id: 2,
      name: 'Habitación Deluxe',
      description: 'Elegancia y comodidad en cada detalle',
      price: '$300/noche',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500'
    },
    {
      id: 3,
      name: 'Vista al Mar',
      description: 'Despierta con el sonido de las olas',
      price: '$200/noche',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500'
    }
  ];

  return (
    <section id="habitaciones" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair font-bold text-navy mb-4">
            Nuestras Habitaciones
          </h2>
          <p className="text-xl text-navy/70">
            Espacios diseñados para tu máximo confort
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 31, 63, 0.2)"
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                  {room.name}
                </h3>
                <p className="text-navy/70 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">{room.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-navy text-cream px-6 py-2 rounded-full hover:bg-navy/90 transition-colors"
                  >
                    Ver más
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;