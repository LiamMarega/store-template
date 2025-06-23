import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Interior de la peluquería"
          fill
          className="object-cover brightness-50"
          data-ai-hint="salon interior"
          priority
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-primary-foreground">
          Estilo que Define, Elegancia que Perdura.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Descubre un santuario de belleza y sofisticación donde cada corte es una obra de arte.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#servicios">Ver Servicios</a>
          </Button>
          <Button size="lg" variant="secondary">
            Reservar Cita
          </Button>
        </div>
      </div>
    </section>
  );
}
