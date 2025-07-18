import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-warm">
              <span className="text-white font-bold text-lg">SP</span>
            </div>
            <div>
              <h1 className="font-serif-display font-semibold text-xl text-foreground">
                Paróquia São Pedro
              </h1>
              <p className="text-muted-foreground text-sm">Apóstolo de Matinhos</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Phone className="w-4 h-4 mr-2" />
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;