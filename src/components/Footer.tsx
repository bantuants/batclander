import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import logo from "../assets/batclogowht.png";

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 mt-4">
              <img 
                src={logo} 
                alt="Bantu Ants Travel Club" 
                className="!h-[48px] w-auto"
                style={{height: '48px'}}
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
              <li><a href="#shop" className="hover:text-accent transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/bantuantstravelclub" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/bantuantstravelclub" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://tiktok.com/@bantuantstravelclub" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon size={20} />
              </a>
              <a 
                href="https://youtube.com/@bantuantstravelclub" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="mailto:bantuantstravelclub@gmail.com" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Send us an email"
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
