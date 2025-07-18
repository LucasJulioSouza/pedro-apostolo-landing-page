import { Card, CardContent } from "@/components/ui/card";
import { Church, Heart, Users, Calendar } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Church,
      title: "Missas Regulares",
      description: "Celebrações eucarísticas diárias e aos finais de semana para toda a comunidade."
    },
    {
      icon: Users,
      title: "Grupos Pastorais",
      description: "Diversos grupos de oração, catequese e ação social para todas as idades."
    },
    {
      icon: Heart,
      title: "Obras Sociais",
      description: "Projetos de assistência às famílias carentes e ações comunitárias."
    },
    {
      icon: Calendar,
      title: "Festividades",
      description: "Tradicionais celebrações religiosas, incluindo a famosa Festa de São Pedro."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Nossa Paróquia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Paróquia São Pedro Apóstolo de Matinhos é um farol de fé e comunhão no litoral paranaense, 
            servindo com amor e dedicação há décadas nossa querida comunidade litorânea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-serif-display text-3xl font-semibold text-foreground">
              Nossa História
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada no coração de Matinhos, nossa paróquia tem sido um centro de fé e esperança 
              para pescadores, turistas e moradores locais. Inspirados pelo exemplo de São Pedro, 
              o pescador que se tornou apóstolo, continuamos a "pescar" almas para Cristo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa comunidade se destaca pela tradicional Festa de São Pedro, celebração que 
              une fé, cultura e tradição marítima, atraindo milhares de fiéis e visitantes 
              todos os anos no mês de junho.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg shadow-warm overflow-hidden">
              <img 
                src="/lovable-uploads/9ca09723-5f8f-415d-91df-46e3993430bc.png"
                alt="Igreja São Pedro Apóstolo de Matinhos - Vista aérea da igreja moderna com cruz branca"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-card border-border shadow-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;