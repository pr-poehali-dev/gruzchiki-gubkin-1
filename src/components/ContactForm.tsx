import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneCall, Send, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // Здесь будет логика отправки формы
    alert("Спасибо! Мы скоро свяжемся с вами.");
    form.reset();
  }

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Связаться с нами</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для уточнения деталей и расчета стоимости
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="shadow-xl border-none">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ваше имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Иван Иванов" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Номер телефона</FormLabel>
                        <FormControl>
                          <Input placeholder="8-904-088-32-91" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение (необязательно)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Опишите детали заказа: что и откуда нужно перевезти, количество вещей и т.д." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gubkin-orange hover:bg-gubkin-orange/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneCall className="h-6 w-6 mr-4 text-gubkin-orange" />
                <div>
                  <p className="font-semibold mb-1">Телефон</p>
                  <a 
                    href="tel:+79040883291" 
                    className="text-lg hover:text-gubkin-orange transition-colors"
                  >
                    8-904-088-32-91
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 mr-4 text-gubkin-orange" />
                <div>
                  <p className="font-semibold mb-1">Telegram</p>
                  <a 
                    href="https://t.me/+F9hU7pOu5FIwNzcy" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-gubkin-orange transition-colors"
                  >
                    @gruzchikigubkin
                  </a>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6 mt-6">
                <p className="mb-4">Присоединяйтесь к нашему Telegram-каналу для получения актуальных новостей и скидок:</p>
                <Button 
                  variant="outline" 
                  className="border-gubkin-orange text-gubkin-orange hover:bg-gubkin-orange hover:text-white"
                  onClick={() => window.open("https://t.me/+F9hU7pOu5FIwNzcy", "_blank")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Подписаться на канал
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;