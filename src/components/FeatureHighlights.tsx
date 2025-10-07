import { motion } from "motion/react";
import { Film, Compass, ShoppingBag, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

export function FeatureHighlights() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Film,
      title: "Watch the Animation",
      description: "Dive into an Afrofuturist saga where ancient wisdom meets tomorrow's vision.",
      action: "Explore Series",
      sectionId: "animation",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Compass,
      title: "Join the Travel Club",
      description: "Immersive journeys across Africa that bring our stories to life.",
      action: "View Trips",
      sectionId: "travel",
      gradient: "from-accent to-orange-500",
    },
    {
      icon: ShoppingBag,
      title: "Shop the Collection",
      description: "Afrofuturist fashion and lifestyle pieces inspired by our journey.",
      action: "Browse Shop",
      sectionId: "shop",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section id="home" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">Three Ways to Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with African heritage through animation, travel, and fashion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/50"
                onClick={() => scrollToSection(feature.sectionId)}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <button className="text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                  {feature.action}
                  <ArrowRight size={16} />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
