import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Music, Utensils, Star } from "lucide-react";

const FestivalSection = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "29 de Junho",
      description: "Dia de São Pedro Apóstolo"
    },
    {
      icon: Users,
      title: "Procissão Marítima",
      description: "Tradicional procissão com barcos dos pescadores"
    },
    {
      icon: Music,
      title: "Shows e Apresentações",
      description: "Música sacra e apresentações culturais"
    },
    {
      icon: Utensils,
      title: "Barracas Típicas",
      description: "Pratos tradicionais da culinária litorânea"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-warm"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-gold mr-3" />
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground">
              Festa de São Pedro
            </h2>
            <Star className="w-8 h-8 text-gold ml-3" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A mais tradicional e esperada celebração de Matinhos, unindo fé, cultura e tradição marítima 
            em uma festa inesquecível no mês de junho.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <Card className="hover-lift bg-card border-border">
              <CardHeader>
                <CardTitle className="font-serif-display text-2xl text-foreground">
                  Edição 2024 - Um Sucesso Emocionante!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A Festa de São Pedro 2024 foi marcada por momentos de profunda fé e alegria. 
                  Milhares de fiéis participaram das celebrações que se estenderam por vários dias, 
                  culminando na emocionante procissão marítima no dia 29 de junho.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As tradicionais barracas ofereceram o melhor da culinária litorânea, enquanto 
                  as apresentações culturais e musicais encantaram visitantes de toda a região. 
                  A procissão com os barcos dos pescadores foi o ponto alto da festividade.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border">
              <CardHeader>
                <CardTitle className="font-serif-display text-xl text-foreground">
                  Galeria de Fotos e Vídeos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Calendar className="w-12 h-12 mx-auto mb-2 text-primary" />
                      <p className="font-medium">Procissão Marítima</p>
                      <p className="text-sm">Vídeo institucional</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Users className="w-12 h-12 mx-auto mb-2 text-primary" />
                      <p className="font-medium">Galeria de Fotos</p>
                      <p className="text-sm">Momentos marcantes</p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                >
                  Ver Galeria Completa
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-warm text-white border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="font-serif-display text-xl">
                  Próxima Edição - 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Prepare-se para mais um ano de celebração e fé! 
                  A Festa de São Pedro 2025 promete ser ainda mais especial.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white/20 hover:bg-white/30 border-white/30"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover-lift bg-card border-border">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;