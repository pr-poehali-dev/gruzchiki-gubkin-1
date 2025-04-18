import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneCall } from "lucide-react";

interface CallModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CallModal: React.FC<CallModalProps> = ({ isOpen, onOpenChange }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика обработки формы
    alert("Спасибо! Мы перезвоним вам в ближайшее время.");
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Заказать обратный звонок</DialogTitle>
          <DialogDescription>
            Оставьте свой номер телефона, и мы перезвоним вам в ближайшее время
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input id="name" placeholder="Иван Иванов" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input id="phone" placeholder="8-904-088-32-91" required />
          </div>
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Отмена
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-gubkin-orange hover:bg-gubkin-orange/90"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Позвоните мне
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallModal;