import React from "react";
import { CheckCircle2, Clock, Users, ShieldCheck, BadgeCheck, Truck } from "lucide-react";

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="shrink-0 mr-4 text-gubkin-orange">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Оперативность",
      description: "Приезжаем в течение 30-60 минут после звонка, работаем без выходных и праздников"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Опытные сотрудники",
      description: "Все наши грузчики имеют опыт работы не менее 2 лет и регулярно проходят обучение"
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Гарантия сохранности",
      description: "Мы несем полную материальную ответственность за сохранность вашего имущества"
    },
    {
      icon: <CheckCircle2 className="h-7 w-7" />,
      title: "Прозрачные цены",
      description: "Никаких скрытых платежей – вы платите ровно ту сумму, которая была оговорена"
    },
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Собственный автопарк",
      description: "Грузовые автомобили различной вместимости для перевозки любых объемов"
    },
    {
      icon: <BadgeCheck className="h-7 w-7" />,
      title: "Официальное оформление",
      description: "Предоставляем все необходимые документы и чеки для отчетности"
    }
  ];

  return (
    <section className="py-16 bg-white" id="advantages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Наши преимущества</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Почему клиенты выбирают именно нашу службу грузчиков в Губкине
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {advantages.map((advantage, index) => (
            <Advantage
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-gubkin-orange to-gubkin-orange/80 rounded-2xl text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Нужны грузчики срочно?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Позвоните нам прямо сейчас, и мы организуем бригаду грузчиков в течение часа!
            </p>
            <a 
              href="tel:+79040883291" 
              className="inline-block bg-white text-gubkin-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              8-904-088-32-91
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;