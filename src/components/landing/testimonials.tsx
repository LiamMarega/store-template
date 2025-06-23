import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ana García",
    avatar: "https://placehold.co/100x100.png",
    fallback: "AG",
    text: "¡El mejor servicio de la ciudad! Salí sintiéndome como una estrella de cine. El color es exactamente lo que quería y el trato fue inmejorable."
  },
  {
    name: "Carlos Martínez",
    avatar: "https://placehold.co/100x100.png",
    fallback: "CM",
    text: "Profesionalismo puro. Entendieron perfectamente el corte que buscaba y el ambiente del salón es muy relajante. Volveré sin dudarlo."
  },
  {
    name: "Sofía Rodríguez",
    avatar: "https://placehold.co/100x100.png",
    fallback: "SR",
    text: "Mi cabello nunca se ha visto tan sano. Los tratamientos que me recomendaron hicieron maravillas. ¡100% recomendado!"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Lo que Dicen Nuestros Clientes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Nos enorgullece crear experiencias memorables.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between p-6 bg-background rounded-2xl shadow-lg border-transparent">
              <CardContent className="p-0 flex-grow">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-foreground/90 mb-6">{testimonial.text}</p>
              </CardContent>
              <div className="flex items-center gap-4 mt-auto">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
