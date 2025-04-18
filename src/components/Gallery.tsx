import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type ImageProps = {
  url: string;
  alt: string;
};

const images: ImageProps[] = [
  {
    url: "https://cdn.poehali.dev/files/f4a6869b-048f-45f2-9a25-025f714efc69.jpg",
    alt: "Грузчики переносят мебель"
  },
  {
    url: "https://cdn.poehali.dev/files/c26fc0df-3443-49ce-8b90-9fb9cdcfa5b3.jpg",
    alt: "Погрузка холодильника в грузовик"
  },
  {
    url: "https://cdn.poehali.dev/files/cbb0610d-05ef-4333-9c76-cb4352c165c3.jpg",
    alt: "Разгрузка мебели"
  },
  {
    url: "https://cdn.poehali.dev/files/c2b6becc-29b9-458e-ac3a-41f3bfa4e04a.jpg",
    alt: "Грузовик с вещами"
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Наша работа</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Посмотрите, как мы работаем. Профессиональная команда грузчиков решит любые задачи по переезду.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <AspectRatio ratio={16/9}>
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;