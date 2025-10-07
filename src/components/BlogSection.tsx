import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export function BlogSection() {
  const posts = [
    {
      title: "The Legend of Kwanzite: Ancient Energy for Modern Times",
      category: "Mythology",
      date: "Sep 15, 2025",
      excerpt: "Discover the mythical energy source that powers our Afrofuturist saga and its roots in African folklore.",
      image: "https://images.unsplash.com/photo-1547496726-08e54b67e96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeXRlbGxpbmclMjBhZnJpY2F8ZW58MXx8fHwxNzU5MzQwMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Behind the Scenes: Animating Our First Episode",
      category: "Production",
      date: "Sep 28, 2025",
      excerpt: "Take a peek into our creative process and see how we're bringing the Bantu Ants universe to life.",
      image: "https://images.unsplash.com/photo-1758633854855-3059c5b48674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGF0dGVybiUyMGRlc2lnbnxlbnwxfHx8fDE3NTkzNDAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Travel Guide: 10 Must-Visit Heritage Sites in West Africa",
      category: "Travel",
      date: "Oct 1, 2025",
      excerpt: "From ancient kingdoms to sacred forests, explore the places that connect us to our ancestors.",
      image: "https://images.unsplash.com/photo-1513745207416-d7a917f86625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjB0cmF2ZWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU5MzQwMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-secondary/30 rounded-full mb-4 border border-secondary/50">
            <span className="text-primary">📚 The Clubhouse</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Stories, Insights & Adventures</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into African history, mythology, and culture. Plus, get exclusive behind-the-scenes 
            content from our animation studio and travel experiences.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <button className="text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Explore All Stories
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            New posts every week • Join our newsletter for updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
