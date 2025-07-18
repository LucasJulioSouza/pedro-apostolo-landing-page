import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="font-serif-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Paróquia São Pedro
            <span className="block text-gold text-4xl md:text-5xl mt-2">
              Apóstolo de Matinhos
            </span>
          </h1>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 mb-8 animate-fade-in-up [animation-delay:0.3s]">
            <blockquote className="text-xl md:text-2xl font-light italic text-center">
              "Tu és Pedro, e sobre esta pedra edificarei a minha Igreja."
              <footer className="text-gold mt-4 text-lg font-medium">
                — Mateus 16:18
              </footer>
            </blockquote>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.6s]">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-white border-0 shadow-gold hover-glow"
            >
              Conheça Nossa História
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              Festa de São Pedro 2024
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1 animate-gentle-float">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;