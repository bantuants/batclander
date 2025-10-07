import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Users, Utensils, Camera } from "lucide-react";

export function TravelSection() {
  const features = [
    { icon: MapPin, text: "Heritage Sites & Sacred Spaces" },
    { icon: Users, text: "Cultural Storytelling Experiences" },
    { icon: Utensils, text: "Traditional Food & Fashion" },
    { icon: Camera, text: "Behind-the-Scenes Content" },
  ];

  return (
    <section id="travel" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4 border border-accent/30">
            <span className="text-accent">🌍 Travel Club</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Step Into the Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Travel Africa like never before. Our immersive journeys take you to the real locations that 
            inspire our Afrofuturist tales, blending history, culture, and imagination.
          </p>
        </motion.div>

        {/* Featured Trip */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722481746744-c6c95b900003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaGFuYSUyMGFzaGFudGklMjBjdWx0dXJlfGVufDF8fHx8MTc1OTM0MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ghana Ashanti Kingdom Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white rounded-full text-sm">
                  Coming Soon
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl mb-3 text-primary">Ghana: Ashanti Kingdom Experience</h3>
                <p className="text-muted-foreground mb-6">
                  Journey through the legendary Ashanti Kingdom, where gold, tradition, and royal heritage 
                  come alive. Walk in the footsteps of kings, explore sacred sites, and discover the stories 
                  that shaped a civilization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <MapPin size={16} className="text-accent" />
                    </div>
                    <span className="text-sm">Kumasi • Cape Coast • Elmina</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users size={16} className="text-accent" />
                    </div>
                    <span className="text-sm">Small Groups (8-12 Travelers)</span>
                  </div>
                </div>
                <Button className="bg-accent hover:bg-accent/90 w-full md:w-auto">
                  Get Early Access
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-8 text-center text-primary">What Makes Our Trips Different</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p>{feature.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl mb-3 text-primary">Join the Travel Club</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Be among the first to receive exclusive trip invites, itineraries, and member benefits.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Sign Up for Exclusive Invites
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
