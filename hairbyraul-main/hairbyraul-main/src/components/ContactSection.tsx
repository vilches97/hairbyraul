import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Reserva tu cita</h2>
        <p className="text-lg mb-8 text-muted-foreground">
          ¿Listo para tu nuevo estilo? Reserva tu cita en Hair by Raul a través de Booksy
        </p>
        <a 
          href="https://booksy.com/es-es/174023_hair-by-raul_barberia_28835_martos#ba_s=hgnm_1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-champagne text-foreground hover:opacity-90 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          Reservar en Booksy
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
