import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scissors, Brush, Droplets, Sparkles, Hand, Paintbrush2 } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-8 h-8 text-primary" />,
    title: "Cortes de Precisión",
    description: "Estilos modernos y clásicos adaptados a tu rostro y personalidad.",
    price: "Desde $30"
  },
  {
    icon: <Brush className="w-8 h-8 text-primary" />,
    title: "Coloración Experta",
    description: "Desde mechas balayage hasta tintes completos con productos de alta gama.",
    price: "Desde $70"
  },
  {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "Tratamientos Capilares",
    description: "Hidratación profunda, keratina y reconstrucción para un cabello sano.",
    price: "Desde $50"
  },
   {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Peinados y Recogidos",
    description: "Looks sofisticados para bodas, fiestas y cualquier evento especial.",
    price: "Desde $45"
  },
  {
    icon: <Hand className="w-8 h-8 text-primary" />,
    title: "Manicura y Pedicura",
    description: "Cuidado completo para tus manos y pies, con esmaltes de tendencia.",
    price: "Desde $25"
  },
  {
    icon: <Paintbrush2 className="w-8 h-8 text-primary" />,
    title: "Maquillaje Profesional",
    description: "Realza tu belleza para cualquier ocasión con nuestros maquilladores expertos.",
    price: "Desde $60"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Nuestros Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Ofrecemos una gama completa de servicios para que luzcas y te sientas increíble.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70 mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
