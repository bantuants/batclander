import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, ExternalLink } from "lucide-react";

// TODO: Replace with your actual Shopify store URL
const SHOPIFY_STORE_URL = "https://your-store.myshopify.com";

export function ShopSection() {
  const products = [
    {
      name: "Kwanzite Glow Tee",
      price: "$35",
      image: "https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFzaGlvbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzU5MzQwMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Available",
      shopifyUrl: `${SHOPIFY_STORE_URL}/products/kwanzite-glow-tee`, // Update with actual product handle
    },
    {
      name: "Traveler's Hoodie",
      price: "$65",
      image: "https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFzaGlvbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzU5MzQwMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Available",
      shopifyUrl: `${SHOPIFY_STORE_URL}/products/travelers-hoodie`,
    },
    {
      name: "Heritage Cap",
      price: "$28",
      image: "https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFzaGlvbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzU5MzQwMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Available",
      shopifyUrl: `${SHOPIFY_STORE_URL}/products/heritage-cap`,
    },
    {
      name: "Signature Travel Bag",
      price: "$125",
      image: "https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFzaGlvbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzU5MzQwMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Pre-Order",
      shopifyUrl: `${SHOPIFY_STORE_URL}/products/signature-travel-bag`,
    },
  ];

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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                <a 
                  href={product.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-muted to-secondary/20">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.status === "Pre-Order" && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white rounded-full text-sm">
                        Pre-Order
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-primary">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl text-accent">{product.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ShoppingCart size={16} />
                      </Button>
                    </div>
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
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
                <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                  <span className="text-white text-6xl">👕</span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-secondary/10 to-accent/10">
                <h3 className="text-3xl mb-3 text-primary">Limited Edition Drops</h3>
                <p className="text-muted-foreground mb-6">
                  Our signature pieces blend Afrofuturist aesthetics with premium quality. Each design is 
                  inspired by characters and moments from our animation series.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Premium, sustainable materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Limited quantities per release</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Designed by African artists</span>
                  </li>
                </ul>
                <Button 
                  className="bg-accent hover:bg-accent/90 w-full md:w-auto group"
                  asChild
                >
                  <a href={SHOPIFY_STORE_URL} target="_blank" rel="noopener noreferrer">
                    Browse Full Collection
                    <ExternalLink className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
