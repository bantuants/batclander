import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface ShopSectionProps {
  onNavigateToShop?: () => void;
}

// Shopify store configuration
const SHOPIFY_STORE_URL = "https://xs0kk2-cz.myshopify.com";

export function ShopSection({ onNavigateToShop }: ShopSectionProps = {}) {

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4 border border-primary/30">
            <span className="text-primary">🛍️ Shop the Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Wear the Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Afrofuturist fashion meets everyday comfort. Each piece tells a story and connects you to 
            the Bantu Ants universe, whether you're traveling or living your daily adventure.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="flex w-full mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group cursor-pointer overflow-hidden w-1/2"
          >
            <div className="aspect-square relative">
                <ImageWithFallback
                    src="/bantu-ants-polo.png"
                    alt="Heritage Polo Collection"
                    className="w-full h-full object-cover"
                  />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl mb-3 font-bold" style={{ color: '#8B4513' }}>Heritage Polo Collection</h3>
                <p className="mb-6 text-sm md:text-base" style={{ color: '#A0522D' }}>
                  Classic sophistication meets Afrofuturist design in our signature polo series.
                </p>
                <Button 
                  className="w-fit font-semibold"
                  style={{ backgroundColor: '#8B4513', color: 'white' }}
                  onClick={() => {
                    if (onNavigateToShop) {
                      onNavigateToShop();
                    } else {
                      window.open(SHOPIFY_STORE_URL, '_blank');
                    }
                  }}
                >
                  Shop Polos
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group cursor-pointer overflow-hidden w-1/2"
          >
            <div className="aspect-square relative">
              <ImageWithFallback
                src="/piet.png"
                alt="Bantu Ants Casual Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl mb-3 font-bold" style={{ color: '#8B4513' }}>Essential Casual Wear</h3>
                <p className="mb-6 text-sm md:text-base" style={{ color: '#A0522D' }}>
                  Comfortable everyday pieces that celebrate African heritage and modern style.
                </p>
                <Button 
                  className="w-fit font-semibold"
                  style={{ backgroundColor: '#8B4513', color: 'white' }}
                  onClick={() => {
                    if (onNavigateToShop) {
                      onNavigateToShop();
                    } else {
                      window.open(SHOPIFY_STORE_URL, '_blank');
                    }
                  }}
                >
                  Shop Collection
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Banner */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <ImageWithFallback
                  src="/batctrip.png"
                  alt="BATC Fashion Brand"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
                                {/* Fashion Brand Card */}
                  <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-secondary/10 to-accent/10">
                    <h3 className="text-3xl mb-3 text-primary">Fashion with Purpose</h3>
                    <p className="text-muted-foreground mb-6">
                      Our fashion line represents more than just clothing—it's a celebration of African creativity, sustainable practices, and cultural expression. Each piece tells a story of heritage, innovation, and conscious living.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Ethically sourced materials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Supporting local artisans</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Contemporary African design</span>
                      </li>
                    </ul>
                <Button 
                  className="bg-accent hover:bg-accent/90 w-full md:w-auto group"
                  onClick={() => {
                    if (onNavigateToShop) {
                      onNavigateToShop();
                    } else {
                      // Fallback to external store
                      window.open(SHOPIFY_STORE_URL, '_blank');
                    }
                  }}
                >
                  Browse Full Collection
                  <ExternalLink className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
