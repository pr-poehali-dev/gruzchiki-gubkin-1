import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatarUrl?: string;
  service: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  name, 
  date, 
  rating, 
  text, 
  avatarUrl, 
  service 
}) => {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-gray-600 mb-4">
            {text}
          </p>
          <div className="text-sm text-gray-500">
            <span className="font-medium">Услуга:</span> {service}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const testimonials: TestimonialProps[] = [
    {
      name: "Марина Иванова",
      date: "15 января 2025",
      rating: 5,
      text: "Отличная работа! Мы переезжали из двухкомнатной квартиры, ребята справились за 3 часа, включая разборку и сборку мебели. Все вещи доставлены без повреждений, цена соответствует качеству.",
      avatarUrl: "/placeholder.svg",
      service: "Квартирный переезд"
    },
    {
      name: "Алексей Петров",
      date: "3 февраля 2025",
      rating: 5,
      text: "Второй раз обращаюсь в эту службу. Грузчики пунктуальны, аккуратны и работают слаженно. Перевозили стиральную машину и холодильник, все доставлено в целости и сохранности. Рекомендую!",
      avatarUrl: "/placeholder.svg",
      service: "Перевозка бытовой техники"
    },
    {
      name: "Ольга Смирнова",
      date: "27 февраля 2025",
      rating: 4,
      text: "Заказывала разгрузку строительных материалов. Грузчики приехали вовремя, работали быстро и не повредили ни одной упаковки. Единственный минус - немного задержались, но предупредили об этом заранее.",
      avatarUrl: "/placeholder.svg", 
      service: "Разгрузка стройматериалов"
    },
    {
      name: "Дмитрий Козлов",
      date: "15 марта 2025",
      rating: 5,
      text: "Переезжали с офисом в новое помещение. Отличная организация: грузчики работали как часы, ничего не повредили, помогли с расстановкой мебели на новом месте. На следующий день мы уже смогли полноценно работать.",
      avatarUrl: "/placeholder.svg",
      service: "Офисный переезд"
    },
    {
      name: "Екатерина Соколова",
      date: "2 апреля 2025",
      rating: 5,
      text: "Заказывала перевозку пианино. Очень переживала, но все прошло идеально! Ребята знают свое дело, инструмент доставлен в целости и даже строй не сбился. Большое спасибо за профессионализм!",
      avatarUrl: "/placeholder.svg",
      service: "Перевозка пианино"
    },
    {
      name: "Игорь Васильев",
      date: "19 апреля 2025",
      rating: 4,
      text: "Благодарен команде за качественную работу. Переезжали из частного дома, было много вещей и мебели. Справились за день, хотя изначально планировали два. Рекомендую эту службу всем, кто ценит качество и время.",
      avatarUrl: "/placeholder.svg",
      service: "Квартирный переезд"
    }
  ];

  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Отзывы наших клиентов</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Узнайте, что говорят о нас клиенты, которые уже воспользовались нашими услугами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToPrevPage}
            disabled={pageCount <= 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            {[...Array(pageCount)].map((_, i) => (
              <Button
                key={i}
                variant={i === currentPage ? "default" : "outline"}
                size="icon"
                className={`w-8 h-8 ${i === currentPage ? "bg-gubkin-orange" : ""}`}
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToNextPage}
            disabled={pageCount <= 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-gubkin-orange hover:bg-gubkin-orange/90"
            onClick={() => window.open("https://t.me/+F9hU7pOu5FIwNzcy", "_blank")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Оставить свой отзыв
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;