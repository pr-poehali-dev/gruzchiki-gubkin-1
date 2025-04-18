import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Truck, ThumbsUp, Calendar } from "lucide-react";

interface CounterProps {
  endValue: number;
  duration: number;
  label: string;
  icon: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ endValue, duration, label, icon }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Рассчитываем текущее значение счетчика на основе времени
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * endValue);
      
      setCount(currentCount);
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration]);
  
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-gubkin-orange/10 text-gubkin-orange">
          {icon}
        </div>
        <div className="text-4xl font-bold mb-2">{count}</div>
        <p className="text-gray-600">{label}</p>
      </CardContent>
    </Card>
  );
};

const StatsCounter: React.FC = () => {
  const stats = [
    { endValue: 528, duration: 2000, label: "Выполненных заказов", icon: <Truck className="h-8 w-8" /> },
    { endValue: 327, duration: 2000, label: "Довольных клиентов", icon: <Users className="h-8 w-8" /> },
    { endValue: 96, duration: 2000, label: "Положительных отзывов", icon: <ThumbsUp className="h-8 w-8" /> },
    { endValue: 3, duration: 2000, label: "Года на рынке", icon: <Calendar className="h-8 w-8" /> }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Наша статистика</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Цифры говорят сами за себя - нам доверяют сотни клиентов в Губкине и окрестностях
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              endValue={stat.endValue}
              duration={stat.duration}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md border-l-4 border-gubkin-orange">
            <p className="text-gray-700 italic">
              "Мы постоянно отслеживаем качество наших услуг и собираем отзывы клиентов. 
              Благодаря этому мы совершенствуем нашу работу и предлагаем сервис самого высокого уровня."
            </p>
            <p className="mt-4 font-semibold">— Директор компании "Грузчики Губкин"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;