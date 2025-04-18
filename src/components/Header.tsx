import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onCallClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCallClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Услуги", href: "#services" },
    { name: "Наша работа", href: "#gallery" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo className={isScrolled ? "" : "text-white"} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`font-medium hover:text-gubkin-orange transition-colors ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              className="bg-gubkin-orange hover:bg-gubkin-orange/90"
              onClick={onCallClick}
            >
              <Phone className="mr-2 h-4 w-4" />
              8-904-088-32-91
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className={`mr-2 ${isScrolled ? "text-black" : "text-white"}`}
              onClick={onCallClick}
            >
              <Phone className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={isScrolled ? "text-black" : "text-white"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-4 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block font-medium text-gray-700 hover:text-gubkin-orange py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;