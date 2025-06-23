import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Services from '@/components/landing/services';
import Gallery from '@/components/landing/gallery';
import Testimonials from '@/components/landing/testimonials';
import HairstyleSuggester from '@/components/landing/hairstyle-suggester';
import Contact from '@/components/landing/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <HairstyleSuggester />
      </main>
      <Contact />
    </div>
  );
}
