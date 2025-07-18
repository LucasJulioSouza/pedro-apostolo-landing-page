import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const LocationSection = () => {
  const schedules = [
    { day: "Segunda a Sexta", time: "07:00 e 19:00" },
    { day: "Sábado", time: "19:00" },
    { day: "Domingo", time: "07:00, 09:00 e 19:00" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Localização e Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Venha nos visitar! Estamos localizados no coração de Matinhos, sempre de portas abertas 
            para receber você e sua família.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover-lift bg-card border-border">
              <CardHeader>
                <CardTitle className="font-serif-display text-2xl text-foreground flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Nossa Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Endereço:</strong><br />
                  Rua São Pedro, 123<br />
                  Centro - Matinhos, PR<br />
                  CEP: 83260-000
                </p>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(41) 3452-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <p className="text-muted-foreground">contato@saopedro-matinhos.org.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-warm text-white border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="font-serif-display text-2xl flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  Horários das Missas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedules.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-gold font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm opacity-90">
                  * Em datas especiais e festividades, consulte a programação específica.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif-display text-xl text-foreground">
                  Mapa da Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground p-8">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-medium mb-2">Mapa do Google</p>
                    <p className="text-sm">
                      O mapa interativo será incorporado aqui<br />
                      mostrando a localização exata da paróquia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-serif-display text-xl font-semibold text-foreground mb-4">
                  Como Chegar
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">De Carro:</strong> Acesso pela BR-277, 
                    saída para Matinhos. A paróquia fica no centro da cidade.
                  </p>
                  <p>
                    <strong className="text-foreground">Transporte Público:</strong> 
                    Linhas de ônibus urbano passam próximo à igreja.
                  </p>
                  <p>
                    <strong className="text-foreground">Estacionamento:</strong> 
                    Disponível nas ruas próximas e estacionamento da própria paróquia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;