import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Retiro Espiritual de Quaresma",
      excerpt: "Participe do nosso retiro especial de preparação para a Páscoa com reflexões e momentos de oração.",
      date: "15 de Fevereiro, 2025",
      time: "09:00",
      category: "Eventos",
      featured: true
    },
    {
      id: 2,
      title: "Catequese para Crianças - Inscrições Abertas",
      excerpt: "Abertas as inscrições para o novo ano da catequese infantil. Vagas limitadas.",
      date: "20 de Janeiro, 2025",
      time: "14:00",
      category: "Catequese",
      featured: false
    },
    {
      id: 3,
      title: "Campanha do Agasalho 2025",
      excerpt: "Ajude-nos a arrecadar agasalhos para as famílias carentes da nossa comunidade.",
      date: "Até 30 de Junho",
      time: "Todo dia",
      category: "Ação Social",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Notícias e Eventos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fique por dentro das últimas novidades, eventos e atividades da nossa paróquia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card 
              key={item.id} 
              className={`hover-lift bg-card border-border transition-smooth ${
                item.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant={item.category === 'Eventos' ? 'default' : 'secondary'}
                    className={
                      item.category === 'Eventos' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }
                  >
                    {item.category}
                  </Badge>
                  {item.featured && (
                    <Badge className="bg-gold text-white">
                      Destaque
                    </Badge>
                  )}
                </div>
                <CardTitle className={`font-serif-display ${
                  item.featured ? 'text-2xl' : 'text-xl'
                } text-foreground leading-tight`}>
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className={`text-muted-foreground leading-relaxed ${
                  item.featured ? 'text-base' : 'text-sm'
                }`}>
                  {item.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Ver Todos os Eventos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;