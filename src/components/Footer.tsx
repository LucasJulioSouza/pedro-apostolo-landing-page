import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Church, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  MessageCircle 
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  const quickLinks = [
    { label: "Sobre Nós", href: "#about" },
    { label: "Festa de São Pedro", href: "#festival" },
    { label: "Eventos", href: "#events" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 p-0 shadow-lg hover-glow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <Church className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif-display font-semibold text-xl">
                  Paróquia São Pedro
                </h3>
                <p className="text-primary-foreground/80">Apóstolo de Matinhos</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-md">
              Uma comunidade de fé no litoral paranaense, dedicada a servir com amor e 
              levar a palavra de Cristo a todos os corações.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/90">
                    Rua São Pedro, 123<br />
                    Centro - Matinhos, PR
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-sm text-primary-foreground/90">
                  (41) 3452-1234
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-sm text-primary-foreground/90">
                  contato@saopedro-matinhos.org.br
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <Card className="bg-gold/10 border-gold/20 p-6 mt-12">
          <div className="text-center">
            <h4 className="font-serif-display text-xl font-semibold mb-3">
              Receba Nossas Novidades
            </h4>
            <p className="text-primary-foreground/80 mb-4">
              Cadastre-se para receber informações sobre eventos e atividades da paróquia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-md bg-primary-foreground text-primary placeholder:text-primary/60"
              />
              <Button 
                className="bg-gold hover:bg-gold-dark text-white"
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </Card>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Paróquia São Pedro Apóstolo de Matinhos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;