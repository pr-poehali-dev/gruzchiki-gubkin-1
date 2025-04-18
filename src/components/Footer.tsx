import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <Logo className="mb-4" />
            <p className="mt-4 text-gray-400 max-w-xs">
              Профессиональная служба грузчиков и переездов в Губкине. Качественный сервис по доступной цене.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Квартирные переезды</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Офисные переезды</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Разгрузка и погрузка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Транспортировка мебели</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 text-gubkin-orange mr-2" />
                <a href="tel:+79040883291" className="text-gray-400 hover:text-white transition-colors">
                  8-904-088-32-91
                </a>
              </div>
              
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-gubkin-orange mr-2" />
                <a 
                  href="https://t.me/+F9hU7pOu5FIwNzcy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Telegram-канал
                </a>
              </div>
              
              <Button 
                className="bg-gubkin-orange hover:bg-gubkin-orange/90 mt-2"
                onClick={() => window.location.href='tel:+79040883291'}
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Грузчики Губкин. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;