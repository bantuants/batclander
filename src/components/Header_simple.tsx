import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "../assets/batclogoblk.png";

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
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home', 'hero')}
            className="group flex-shrink-0"
          >
            <img 
              src={logo} 
              alt="Bantu Ants Travel Club" 
              className="h-[32px] w-auto group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => handleNavigation('home')} 
              className={`py-1 px-3 text-sm transition-colors ${currentPage === 'home' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('animation')} 
              className={`py-1 px-3 text-sm transition-colors ${currentPage === 'animation' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Animation
            </button>
            <button 
              onClick={() => handleNavigation('travel')} 
              className={`py-1 px-3 text-sm transition-colors ${currentPage === 'travel' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Travel Club
            </button>
            <button 
              onClick={() => handleNavigation('blog')} 
              className={`py-1 px-3 text-sm transition-colors ${currentPage === 'blog' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Blog
            </button>
            <a 
              href={SHOPIFY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-3 text-sm text-foreground hover:text-primary transition-colors"
            >
              Shop
            </a>
            <Button onClick={onJoinNow} size="sm" className="bg-accent hover:bg-accent/90">
              Join Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => handleNavigation('home')}
                className={`text-left py-2 px-3 text-sm transition-colors ${currentPage === 'home' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('animation')}
                className={`text-left py-2 px-3 text-sm transition-colors ${currentPage === 'animation' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Animation
              </button>
              <button 
                onClick={() => handleNavigation('travel')}
                className={`text-left py-2 px-3 text-sm transition-colors ${currentPage === 'travel' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Travel Club
              </button>
              <button 
                onClick={() => handleNavigation('blog')}
                className={`text-left py-2 px-3 text-sm transition-colors ${currentPage === 'blog' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Blog
              </button>
              <a 
                href={SHOPIFY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left py-2 px-3 text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </a>
              <Button onClick={onJoinNow} className="bg-accent hover:bg-accent/90 mt-2">
                Join Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}