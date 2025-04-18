import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Maximize } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [views, setViews] = useState(124);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        // Увеличиваем счетчик просмотров при воспроизведении
        if (!isPlaying) {
          setViews(prev => prev + 1);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-16 bg-white" id="video">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Посмотрите, как мы работаем</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Наша команда профессиональных грузчиков всегда готова решить любые задачи по переезду и транспортировке
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl bg-black">
            <div className="relative">
              <AspectRatio ratio={16/9}>
                <video 
                  ref={videoRef}
                  poster="https://cdn.poehali.dev/files/f4a6869b-048f-45f2-9a25-025f714efc69.jpg"
                  className="w-full h-full object-cover"
                  onClick={handlePlayPause}
                  onEnded={() => setIsPlaying(false)}
                >
                  {/* Здесь должна быть ссылка на видео. Мы используем заглушку, так как реального видео нет */}
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              </AspectRatio>
              
              <div className="absolute inset-0 flex items-center justify-center">
                {!isPlaying && (
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full w-16 h-16 bg-gubkin-orange/80 hover:bg-gubkin-orange border-white text-white"
                    onClick={handlePlayPause}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                )}
              </div>
            </div>
            
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="text-white border-white hover:bg-white/20 hover:text-white"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <div>
                  <span className="text-sm">{views} просмотров</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="icon"
                className="text-white border-white hover:bg-white/20 hover:text-white"
                onClick={handleFullscreen}
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              В этом видео показан процесс перевозки мебели и бытовой техники нашей командой профессиональных грузчиков. 
              Мы демонстрируем все этапы: от упаковки вещей до разгрузки на новом месте.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;