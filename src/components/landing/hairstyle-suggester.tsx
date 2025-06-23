"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Lightbulb } from 'lucide-react';

export default function HairstyleSuggester() {
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSuggestion('');
    
    // Simulate AI call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuggestion("Basado en la forma de tu rostro y las tendencias actuales, te recomendamos un corte 'bob' con capas ligeras para dar volumen. Un flequillo de cortina enmarcaría tu rostro maravillosamente. En cuanto al color, unos reflejos 'caramel' aportarían calidez y dimensión.");
    setIsLoading(false);
  };

  return (
    <section id="sugerencias" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">¿No sabes qué estilo elegir?</h2>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              Usa nuestra herramienta de IA para obtener una sugerencia de peinado personalizada. Sube una foto o describe tu tipo de cabello y la forma de tu rostro.
            </p>
          </div>
          <Card className="shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Lightbulb className="text-primary" />
                Sugerencia de Estilo con IA
              </CardTitle>
              <CardDescription>Describe tus facciones y te daremos una idea.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="faceShape">Describe tu rostro y cabello</Label>
                  <Textarea id="faceShape" placeholder="Ej: Rostro ovalado, cabello fino y liso..." required className="mt-2"/>
                </div>
                <div>
                  <Label htmlFor="photo">Sube una foto (opcional)</Label>
                  <Input id="photo" type="file" className="mt-2" />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Generando..." : "Obtener Sugerencia"}
                </Button>
              </form>
              {suggestion && !isLoading && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-primary mb-2">Nuestra Sugerencia:</h4>
                  <p className="text-foreground/90">{suggestion}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
