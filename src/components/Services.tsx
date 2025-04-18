import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, 
  Package, 
  Home, 
  Box, 
  DollarSign, 
  MoveDiagonal, 
  Boxes, 
  ShieldCheck, 
  Timer, 
  Building, 
  PaintBucket, 
  Warehouse
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const serviceCategories = [
  {
    id: "moving",
    title: "Переезды",
    services: [
      {
        title: "Квартирный переезд",
        description: "Полный комплекс услуг по переезду из квартиры или дома под ключ",
        icon: <Home className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Офисный переезд",
        description: "Профессиональный переезд компаний и офисов любого размера",
        icon: <Building className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Дачный переезд",
        description: "Переезд на дачу и обратно с упаковкой и транспортировкой вещей",
        icon: <Warehouse className="h-12 w-12 text-gubkin-orange" />
      }
    ]
  },
  {
    id: "loading",
    title: "Погрузка/разгрузка",
    services: [
      {
        title: "Погрузка и разгрузка мебели",
        description: "Аккуратная погрузка и разгрузка мебели любого размера и хрупкости",
        icon: <Box className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Разгрузка стройматериалов",
        description: "Оперативная разгрузка строительных материалов на объекте",
        icon: <PaintBucket className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Разгрузка фур и контейнеров",
        description: "Профессиональная разгрузка фур, контейнеров и другого транспорта",
        icon: <Truck className="h-12 w-12 text-gubkin-orange" />
      }
    ]
  },
  {
    id: "appliances",
    title: "Техника и ценности",
    services: [
      {
        title: "Перевозка бытовой техники",
        description: "Безопасная транспортировка холодильников, стиральных машин и другой техники",
        icon: <Package className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Перемещение сейфов",
        description: "Перемещение тяжёлых сейфов и банковского оборудования с соблюдением безопасности",
        icon: <ShieldCheck className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Перевозка пианино",
        description: "Специализированная услуга по перемещению пианино и роялей",
        icon: <MoveDiagonal className="h-12 w-12 text-gubkin-orange" />
      }
    ]
  },
  {
    id: "additional",
    title: "Дополнительные услуги",
    services: [
      {
        title: "Упаковка вещей",
        description: "Профессиональная упаковка всех вещей в специальные материалы",
        icon: <Boxes className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Срочный выезд",
        description: "Оперативный выезд бригады грузчиков в течение 30-60 минут",
        icon: <Timer className="h-12 w-12 text-gubkin-orange" />
      },
      {
        title: "Сборка/разборка мебели",
        description: "Квалифицированная сборка и разборка мебели при переезде",
        icon: <Box className="h-12 w-12 text-gubkin-orange" />
      }
    ]
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState("moving");

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Наши услуги</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Мы предлагаем полный комплекс услуг по погрузке, разгрузке и транспортировке вещей
          </p>
        </div>
        
        <Tabs defaultValue="moving" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 text-sm md:text-base"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
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
            </TabsContent>
          ))}
        </Tabs>
        
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