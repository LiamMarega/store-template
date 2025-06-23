import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Sobre Shear Elegance</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Fundada en 2010, Shear Elegance nació de una pasión por el arte de la peluquería y el deseo de crear un espacio donde la belleza y el bienestar se unieran.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nuestra misión es simple: realzar tu belleza natural a través de un servicio excepcional y personalizado. Creemos que un buen corte de pelo puede cambiar tu día, y nos dedicamos a que cada visita sea una experiencia rejuvenecedora y lujosa.
            </p>
          </div>
          <div>
            <Card className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://placehold.co/600x700.png"
                alt="El equipo de Shear Elegance"
                width={600}
                height={700}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                data-ai-hint="salon team"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
