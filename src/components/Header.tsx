import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "motion/react";
import logo from "figma:asset/c19cad1bd882671bbff66522f2e9653a40deb8e6.png";

// TODO: Replace with your actual Shopify store URL
const SHOPIFY_STORE_URL = "https://your-store.myshopify.com";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onJoinNow: () => void;
}

export function Header({ currentPage, onNavigate, onJoinNow }: HeaderProps) {
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
        <div className="flex justify-center mb-4">
          <button 
            onClick={() => handleNavigation('home', 'hero')}
            className="group"
          >
            <img 
              src={logo} 
              alt="Bantu Ants Travel Club" 
              className="h-[150px] w-auto group-hover:scale-105 transition-transform"
            />
          </button>
        </div>

        {/* Navigation - Bottom Center */}
        <div className="flex items-center justify-between md:justify-center">
          {/* Desktop Navigation */}
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
              onClick={() => handleNavigation('blog')} 
              className={`relative py-2 transition-colors ${currentPage === 'blog' ? 'text-primary' : 'text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Clubhouse</span>
              {currentPage === 'blog' && (
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
            <motion.a 
              href={SHOPIFY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative py-2 text-foreground transition-colors"
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
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button onClick={onJoinNow} className="bg-accent hover:bg-accent/90">
                Join Now
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden mx-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              onClick={() => handleNavigation('blog')} 
              className={`text-center hover:text-primary transition-colors ${currentPage === 'blog' ? 'text-primary' : ''}`}
            >
              Clubhouse
            </button>
            <a 
              href={SHOPIFY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </a>
            <Button onClick={onJoinNow} className="bg-accent hover:bg-accent/90 w-full">
              Join Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
