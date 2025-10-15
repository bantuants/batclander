import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";
import logo from "../assets/batclogoblk.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onCart?: () => void;
  cartItemCount?: number;
}

export function Header({ currentPage, onNavigate, onCart, cartItemCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleNavigation = (page: string, section?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (section) {
      setTimeout(() => scrollToSection(section), 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        {/* Logo - Top Center */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => handleNavigation('home', 'hero')}
            className="group mt-4 mb-4"
          >
            <img 
              src={logo} 
              alt="Bantu Ants Travel Club" 
              className="!h-[54px] w-auto group-hover:scale-105 transition-transform"
              style={{height: '54px'}}
            />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center md:justify-center relative">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute left-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.button 
              onClick={() => handleNavigation('home')} 
              className={`relative py-2 transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Home</span>
              {currentPage === 'home' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            <motion.button 
              onClick={() => handleNavigation('animation')} 
              className={`relative py-2 transition-colors ${currentPage === 'animation' ? 'text-primary' : 'text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Animation</span>
              {currentPage === 'animation' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            <motion.button 
              onClick={() => handleNavigation('travel')} 
              className={`relative py-2 transition-colors ${currentPage === 'travel' ? 'text-primary' : 'text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Travel Club</span>
              {currentPage === 'travel' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            <motion.button 
              onClick={() => handleNavigation('shop')}
              className={`relative py-2 text-foreground transition-colors ${currentPage === 'shop' ? 'text-primary' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Shop</span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </nav>

          {/* Right Side - Cart Button */}
          <div className="hidden md:flex items-center gap-3 absolute right-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={onCart} 
                variant="ghost"
                size="sm"
                className="relative p-2"
              >
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center bg-primary">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button 
              onClick={() => handleNavigation('home')} 
              className={`text-center hover:text-primary transition-colors ${currentPage === 'home' ? 'text-primary' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('animation')} 
              className={`text-center hover:text-primary transition-colors ${currentPage === 'animation' ? 'text-primary' : ''}`}
            >
              Animation
            </button>
            <button 
              onClick={() => handleNavigation('travel')} 
              className={`text-center hover:text-primary transition-colors ${currentPage === 'travel' ? 'text-primary' : ''}`}
            >
              Travel Club
            </button>
            <button 
              onClick={() => handleNavigation('shop')} 
              className={`text-center hover:text-primary transition-colors ${currentPage === 'shop' ? 'text-primary' : ''}`}
            >
              Shop
            </button>
            
            {/* Mobile Cart Button */}
            <Button 
              onClick={onCart} 
              variant="outline"
              className="w-full relative"
            >
              <ShoppingCart size={16} className="mr-2" />
              Cart
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 text-xs p-0 flex items-center justify-center">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
