import Image from "next/image";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Corte de pelo moderno", hint: "modern haircut" },
  { src: "https://placehold.co/400x600.png", alt: "Balayage rubio", hint: "blonde balayage" },
  { src: "https://placehold.co/600x400.png", alt: "Interior del salón", hint: "salon decor" },
  { src: "https://placehold.co/600x400.png", alt: "Cliente feliz", hint: "happy client" },
  { src: "https://placehold.co/400x600.png", alt: "Recogido para evento", hint: "elegant updo" },
  { src: "https://placehold.co/600x400.png", alt: "Productos de alta gama", hint: "hair products" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Nuestra Galería</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Un vistazo a nuestro arte, nuestro espacio y nuestros clientes felices.
          </p>
        </div>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl break-inside-avoid">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
