"use client";

import { Scissors, MapPin, Phone, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
             <a href="#inicio" className="flex items-center gap-2 mb-4">
              <Scissors className="h-8 w-8" />
              <span className="text-2xl font-bold font-headline">Shear Elegance</span>
            </a>
            <p className="max-w-xs text-primary-foreground/80">
              Donde la belleza se encuentra con el arte. Tu santuario personal de estilo y sofisticación.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold">Contacto</h3>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/90 hover:text-white transition-colors">
              <MapPin className="h-5 w-5" />
              <span>Calle Falsa 123, Springfield</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/90 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold">Horarios</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/90">
              <Clock className="h-5 w-5" />
              <span>Lunes a Viernes: 9am - 7pm</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/90">
              <Clock className="h-5 w-5 opacity-0" />
              <span>Sábados: 10am - 5pm</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/70">
          <p>&copy; {year} Shear Elegance. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
