import React, { useState } from 'react';

const AmenitiesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const amenities = [
    {img: '/images/pantalla plasma.png', name: 'TV Plasma 55"', desc: 'Televisión de alta definición con canales premium'},
    {img: '/images/armario.png', name: 'Armario Amplio', desc: 'Espacio de almacenamiento con diseño elegante'},
    {img: '/images/baño privado.png', name: 'Baño Privado', desc: 'Baño completo con acabados de lujo'},
    {img: '/images/aire acondicionado.png', name: 'Aire Acondicionado', desc: 'Control de temperatura personalizado'}
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amenities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  return (
    <section style={{padding: '4rem 2rem', backgroundColor: 'white'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 'bold', textAlign: 'center', color: '#001F3F', marginBottom: '3rem'}}>
          Amenidades de Habitaciones
        </h2>
        <div style={{position: 'relative', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}}>
          <div style={{display: 'flex', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out'}}>
            {amenities.map((amenity, i) => (
              <div key={i} style={{minWidth: '100%', position: 'relative'}}>
                <div style={{height: '400px', backgroundImage: `url('${amenity.img}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white', padding: '2rem', textAlign: 'center'}}>
                  <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>{amenity.name}</h3>
                  <p style={{fontSize: '1.1rem', opacity: 0.9}}>{amenity.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} style={{position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(200, 159, 93, 0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10}}>‹</button>
          <button onClick={nextSlide} style={{position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(200, 159, 93, 0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10}}>›</button>
          <div style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px'}}>
            {amenities.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} style={{width: '12px', height: '12px', borderRadius: '50%', border: 'none', backgroundColor: currentSlide === i ? '#C89F5D' : 'rgba(255,255,255,0.5)', cursor: 'pointer'}} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperiencesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const experiences = [
    {img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=400&fit=crop', title: 'Spa & Wellness', desc: 'Relájate en nuestro spa de clase mundial'},
    {img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop', title: 'Restaurante Gourmet', desc: 'Sabores exquisitos con vista al mar'},
    {img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=400&fit=crop', title: 'Piscina', desc: 'Nada hacia el horizonte infinito'},
    {img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop', title: 'Servicio de Playa', desc: 'Comodidad total en la arena blanca'}
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section style={{padding: '4rem 2rem', backgroundColor: '#001F3F', color: '#F9F5E7'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem'}}>
          Experiencias Únicas
        </h2>
        <div style={{position: 'relative', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}}>
          <div style={{display: 'flex', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out'}}>
            {experiences.map((experience, i) => (
              <div key={i} style={{minWidth: '100%', position: 'relative'}}>
                <div style={{height: '400px', backgroundImage: `url('${experience.img}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white', padding: '2rem', textAlign: 'center'}}>
                  <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#C89F5D'}}>{experience.title}</h3>
                  <p style={{fontSize: '1.1rem', opacity: 0.9}}>{experience.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} style={{position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(200, 159, 93, 0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10}}>‹</button>
          <button onClick={nextSlide} style={{position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(200, 159, 93, 0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10}}>›</button>
          <div style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px'}}>
            {experiences.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} style={{width: '12px', height: '12px', borderRadius: '50%', border: 'none', backgroundColor: currentSlide === i ? '#C89F5D' : 'rgba(255,255,255,0.5)', cursor: 'pointer'}} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div>
      <nav style={{position: 'fixed', top: 0, width: '100%', backgroundColor: '#001F3F', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>
        <div style={{fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 'bold', color: '#C89F5D'}}>VistaBella</div>
        <button style={{backgroundColor: '#C89F5D', color: '#001F3F', padding: '0.5rem 0.8rem', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', position: 'relative', right: 'clamp(1rem, 8vw, 4rem)'}}>Reservar</button>
      </nav>

      <section style={{height: '100vh', backgroundImage: 'url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#F9F5E7'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 31, 63, 0.6)'}}></div>
        <div style={{position: 'relative', zIndex: 1}}>
          <h1 style={{fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 'bold', marginBottom: '1rem'}}>Hotel <span style={{color: '#C89F5D'}}>VistaBella</span></h1>
          <p style={{fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '2rem', opacity: 0.9}}>Vive el lujo frente al mar</p>
          <button style={{backgroundColor: '#C89F5D', color: '#001F3F', padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)', border: 'none', borderRadius: '30px', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 'bold', cursor: 'pointer'}}>Explorar Hotel</button>
        </div>
      </section>

      <section style={{padding: '4rem 2rem', backgroundColor: '#F9F5E7'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 'bold', textAlign: 'center', color: '#001F3F', marginBottom: '3rem'}}>Nuestras Habitaciones</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {['Suite Presidencial', 'Habitación Deluxe', 'Vista al Mar'].map((room, i) => (
              <div key={i} style={{backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.25)', transition: 'transform 0.3s ease'}}>
                <div style={{height: '200px', background: `url('https://images.unsplash.com/photo-${i === 0 ? '1582719478250-c89cae4dc85b' : i === 1 ? '1566665797739-1674de7a421a' : '1571896349842-33c89424de2d'}?w=400&h=200&fit=crop') center/cover`}}></div>
                <div style={{padding: '1.5rem'}}>
                  <h3 style={{fontSize: '1.4rem', fontWeight: 'bold', color: '#001F3F', marginBottom: '0.5rem'}}>{room}</h3>
                  <p style={{color: '#666', marginBottom: '1rem'}}>{i === 0 ? 'Lujo absoluto con vista panorámica' : i === 1 ? 'Elegancia y comodidad en cada detalle' : 'Despierta con el sonido de las olas'}</p>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#C89F5D'}}>${i === 0 ? '500' : i === 1 ? '300' : '200'}/noche</span>
                    <button style={{backgroundColor: '#001F3F', color: '#F9F5E7', padding: '0.5rem 1rem', border: 'none', borderRadius: '20px', cursor: 'pointer'}}>Ver más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AmenitiesCarousel />
      <ExperiencesCarousel />

      <section style={{padding: '4rem 2rem', backgroundColor: '#F9F5E7'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#001F3F', marginBottom: '3rem'}}>Opiniones de Huéspedes</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              {name: 'María González', location: 'Madrid, España', text: 'Una experiencia inolvidable. El hotel supera todas las expectativas.', stars: 5},
              {name: 'John Smith', location: 'New York, USA', text: 'The experience was amazing. Luxury redefined.', stars: 5},
              {name: 'Sophie Laurent', location: 'Paris, France', text: 'Un séjour magnifique avec une vue spectaculaire.', stars: 5}
            ].map((review, i) => (
              <div key={i} style={{backgroundColor: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
                <div style={{display: 'flex', marginBottom: '1rem'}}>
                  {[...Array(review.stars)].map((_, j) => (
                    <span key={j} style={{color: '#C89F5D', fontSize: '1.2rem'}}>⭐</span>
                  ))}
                </div>
                <p style={{fontStyle: 'italic', color: '#666', marginBottom: '1rem'}}>"{review.text}"</p>
                <div>
                  <h4 style={{fontWeight: 'bold', color: '#001F3F'}}>{review.name}</h4>
                  <p style={{color: '#999', fontSize: '0.9rem'}}>{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding: '4rem 2rem', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#001F3F', marginBottom: '3rem'}}>Nuestra Ubicación</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center'}}>
            <div>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#001F3F', marginBottom: '1rem'}}>Santa Marta, Colombia</h3>
              <p style={{color: '#666', marginBottom: '1rem'}}>Ubicado en la hermosa costa caribeña de Santa Marta, nuestro hotel ofrece acceso directo a las mejores playas y atracciones de la región.</p>
              <div style={{color: '#666'}}>
                <p>📍 Playa Blanca, Santa Marta</p>
                <p>📞 +57 (5) 123-4567</p>
                <p>✉️ info@hotelvistabell.com</p>
              </div>
            </div>
            <div style={{height: '300px', borderRadius: '15px', overflow: 'hidden'}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d-74.199!3d11.240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sSanta%20Marta%2C%20Magdalena%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de Santa Marta"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: '4rem 2rem', backgroundColor: '#0B0B0B', color: '#F9F5E7'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Reserva tu Estadía</h2>
          <div style={{backgroundColor: 'rgba(249, 245, 231, 0.1)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(249, 245, 231, 0.2)'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Check-in</label>
                <input type="date" style={{width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid rgba(249, 245, 231, 0.3)', backgroundColor: 'rgba(249, 245, 231, 0.2)', color: '#F9F5E7'}} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Check-out</label>
                <input type="date" style={{width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid rgba(249, 245, 231, 0.3)', backgroundColor: 'rgba(249, 245, 231, 0.2)', color: '#F9F5E7'}} />
              </div>
            </div>
            <button style={{width: '100%', backgroundColor: '#C89F5D', color: '#001F3F', padding: '1rem', border: 'none', borderRadius: '15px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer'}}>Confirmar Reserva</button>
          </div>
        </div>
      </section>

      <footer style={{backgroundColor: '#001F3F', padding: '3rem 2rem', textAlign: 'center', color: '#F9F5E7'}}>
        <h3 style={{fontSize: '2rem', fontWeight: 'bold', color: '#C89F5D', marginBottom: '1rem'}}>VistaBella</h3>
        <p style={{opacity: 0.7, marginBottom: '1rem'}}>📍 Santa Marta, Colombia | 📞 +57 (5) 123-4567</p>
        <p style={{opacity: 0.6}}>© 2024 Hotel VistaBella. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;