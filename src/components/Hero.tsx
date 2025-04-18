import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface HeroProps {
  onCallClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCallClick }) => {
  return (
    <div className="relative min-h-[500px] flex items-center py-16">
      <div 
        className="absolute inset-0 z-0 bg-black opacity-60"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/files/f4a6869b-048f-45f2-9a25-025f714efc69.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken"
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Грузчики Губкин <span className="text-gubkin-orange">№1</span>
        </h1>
        
        <div className="max-w-2xl space-y-6">
          <p className="text-lg md:text-xl">
            Команда профессионалов, готовая помочь вам с переездом в любое время. 
            Мы гарантируем надежность, безопасность и доступные цены без скрытых платежей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gubkin-orange hover:bg-gubkin-orange/90 text-white font-semibold"
              onClick={onCallClick}
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Заказать грузчиков
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Наши услуги
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;