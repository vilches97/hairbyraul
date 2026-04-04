import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

const hours = [
  { day: "Lunes", time: "17:00 – 20:30" },
  { day: "Martes", time: "9:30 – 13:30 / 17:00 – 20:30" },
  { day: "Miércoles", time: "9:30 – 13:30 / 17:00 – 20:30" },
  { day: "Jueves", time: "9:30 – 13:30 / 17:00 – 23:30" },
  { day: "Viernes", time: "9:30 – 13:30 / 17:00 – 20:30" },
  { day: "Sábado", time: "9:30 – 13:30" },
  { day: "Domingo", time: "Cerrado" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado. ¡Nos pondremos en contacto contigo pronto!");
    setFormData({ nombre: "", telefono: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-in text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Encuéntranos</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">Contacto</h2>
          <div className="w-16 h-px bg-champagne mx-auto" />
        </div>

        <div className="section-fade-in grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin size={20} className="text-champagne flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg mb-1">Dirección</h3>
                <p className="font-body text-muted-foreground text-sm">
                  Av. de San Amador 122<br />23600 Martos, Jaén
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-champagne flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg mb-1">Teléfono</h3>
                <p className="font-body text-muted-foreground text-sm">
                  <a href="tel:+34694482609" className="hover:text-champagne transition-colors">694 48 26 09</a>
                  <br />
                  <a href="tel:+34953707001" className="hover:text-champagne transition-colors">953 70 70 01</a>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={20} className="text-champagne flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg mb-1">Horario</h3>
                <div className="space-y-1">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm font-body text-muted-foreground gap-4">
                      <span className="font-medium text-foreground">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Instagram size={20} className="text-champagne flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg mb-1">Redes sociales</h3>
                <div className="font-body text-muted-foreground text-sm space-y-1">
                  <a
                    href="https://www.instagram.com/hair_byraul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-champagne transition-colors"
                  >
                    <Instagram size={14} /> @hair_byraul
                  </a>
                  <a
                    href="https://www.facebook.com/hairbyraulmartos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-champagne transition-colors"
                  >
                    <Facebook size={14} /> Hairbyraul Martos
                  </a>
                </div>
            </div>
            </div>

            <div className="w-full h-64 mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8!2d-3.9715!3d37.7215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQzJzE3LjQiTiAzwrA1OCcxNy40Ilc!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Hair_byRaul"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-body mb-2">Nombre</label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-transparent font-body text-sm focus:outline-none focus:border-champagne transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-body mb-2">Teléfono</label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-transparent font-body text-sm focus:outline-none focus:border-champagne transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-body mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-transparent font-body text-sm focus:outline-none focus:border-champagne transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-body mb-2">Mensaje</label>
              <textarea
                rows={5}
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-transparent font-body text-sm focus:outline-none focus:border-champagne transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-champagne text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
