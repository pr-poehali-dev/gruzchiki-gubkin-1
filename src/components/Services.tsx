import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Home, Box, DollarSign } from "lucide-react";

const servicesData = [
  {
    title: "Квартирные и офисные переезды",
    description: "Организуем переезд из квартиры или офиса под ключ, с упаковкой и транспортировкой вещей",
    icon: <Home className="h-12 w-12 text-gubkin-orange" />
  },
  {
    title: "Погрузка и разгрузка мебели",
    description: "Аккуратно перенесем любую мебель, включая крупногабаритную и хрупкую",
    icon: <Box className="h-12 w-12 text-gubkin-orange" />
  },
  {
    title: "Перевозка бытовой техники",
    description: "Безопасно транспортируем холодильники, стиральные машины и другую технику",
    icon: <Package className="h-12 w-12 text-gubkin-orange" />
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Наши услуги</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Мы предлагаем полный комплекс услуг по погрузке, разгрузке и транспортировке вещей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 p-3 rounded-full bg-gubkin-orange/10">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gubkin-orange text-white p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center">
                <DollarSign className="h-10 w-10 mr-4" />
                <h3 className="text-2xl font-bold">Доступные цены</h3>
              </div>
              <p className="mt-2 max-w-md">
                Мы предлагаем прозрачное ценообразование без скрытых платежей и доплат
              </p>
            </div>
            
            <div className="flex items-center">
              <Truck className="h-10 w-10 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Свой автопарк</h3>
                <p className="mt-2">Грузовые автомобили разных размеров для любых задач</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;