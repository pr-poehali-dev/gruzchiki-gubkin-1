import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CallModal from "@/components/CallModal";

const Index: React.FC = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const handleCallButtonClick = () => {
    setIsCallModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCallClick={handleCallButtonClick} />
      <main className="flex-grow">
        <Hero onCallClick={handleCallButtonClick} />
        <Services />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
      <CallModal 
        isOpen={isCallModalOpen}
        onOpenChange={setIsCallModalOpen}
      />
    </div>
  );
};

export default Index;