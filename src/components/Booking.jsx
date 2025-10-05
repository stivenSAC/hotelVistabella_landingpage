import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    guests: '2',
    room: 'deluxe'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
  };

  return (
    <section id="reserva" className="py-20 bg-navy relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-playfair font-bold text-cream mb-4">
            Reserva tu Estadía
          </h2>
          <p className="text-xl text-cream/70">
            Tu experiencia de lujo te espera
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-cream/10 backdrop-blur-md p-8 rounded-3xl border border-cream/20 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-cream font-semibold">Check-in</label>
              <input
                type="date"
                value={formData.checkin}
                onChange={(e) => setFormData({...formData, checkin: e.target.value})}
                className="w-full p-4 rounded-xl bg-cream/20 border border-cream/30 text-cream focus:outline-none focus:ring-2 focus:ring-gold transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-cream font-semibold">Check-out</label>
              <input
                type="date"
                value={formData.checkout}
                onChange={(e) => setFormData({...formData, checkout: e.target.value})}
                className="w-full p-4 rounded-xl bg-cream/20 border border-cream/30 text-cream focus:outline-none focus:ring-2 focus:ring-gold transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-cream font-semibold">Huéspedes</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full p-4 rounded-xl bg-cream/20 border border-cream/30 text-cream focus:outline-none focus:ring-2 focus:ring-gold transition-all"
              >
                <option value="1">1 Huésped</option>
                <option value="2">2 Huéspedes</option>
                <option value="3">3 Huéspedes</option>
                <option value="4">4 Huéspedes</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-cream font-semibold">Tipo de Habitación</label>
              <select
                value={formData.room}
                onChange={(e) => setFormData({...formData, room: e.target.value})}
                className="w-full p-4 rounded-xl bg-cream/20 border border-cream/30 text-cream focus:outline-none focus:ring-2 focus:ring-gold transition-all"
              >
                <option value="standard">Estándar</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite Presidencial</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gold text-navy py-4 rounded-xl text-lg font-bold hover:bg-gold/90 transition-all shadow-lg"
          >
            Confirmar Reserva
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;