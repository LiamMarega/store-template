"use client";

import { Scissors, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#inicio', label: 'Home' },
  { href: '#galeria', label: 'Gallery' },
  { href: '#servicios', label: 'Services' },
  { href: '#nosotros', label: 'About Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/20 shadow-sm" : "bg-background/80 backdrop-blur-sm"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Left Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <a href="#inicio" className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
          <span className="text-2xl font-bold text-foreground">Echo</span>
          <span className="text-xl text-primary">✦</span>
          <span className="text-2xl font-bold text-foreground">Barber</span>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <a href="#contacto">Book Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
