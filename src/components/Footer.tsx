import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import logo from "figma:asset/c19cad1bd882671bbff66522f2e9653a40deb8e6.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Bantu Ants Travel Club" 
                className="h-[150px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-sm">
              Where Afrofuturist storytelling meets immersive travel experiences and culture-driven fashion. 
              Join us on a journey through time, heritage, and imagination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#animation" className="hover:text-accent transition-colors">Animation</a></li>
              <li><a href="#travel" className="hover:text-accent transition-colors">Travel Club</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">Clubhouse</a></li>
              <li><a href="#shop" className="hover:text-accent transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} Bantu Ants Travel Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
