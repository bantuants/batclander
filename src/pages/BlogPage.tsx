import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { 
  BookOpen, 
  Compass, 
  Palette, 
  TrendingUp,
  Clock,
  Search,
  Filter,
  ArrowRight,
  User
} from "lucide-react";

interface BlogPageProps {
  onNavigateToArticle?: (articleId: string) => void;
  onPitchStory?: () => void;
}

export function BlogPage({ onNavigateToArticle, onPitchStory }: BlogPageProps) {
  const categories = [
    { name: "All Stories", count: 87, icon: BookOpen },
    { name: "Travel Chronicles", count: 32, icon: Compass },
    { name: "Cultural Insights", count: 24, icon: Palette },
    { name: "Animation Updates", count: 18, icon: TrendingUp },
    { name: "Community Voices", count: 13, icon: User }
  ];

  const featuredPost = {
    id: "the-golden-road-ghana",
    title: "The Golden Road: Tracing Ghana's Ancient Trade Routes",
    excerpt: "A journey through time, exploring the historical pathways that connected kingdoms and cultures across West Africa. Walk with us through centuries of commerce, culture, and connection.",
    author: "Amara Okonkwo",
    date: "October 1, 2025",
    readTime: "12 min read",
    category: "Travel Chronicles",
    featured: true
  };

  const recentPosts = [
    {
      id: "behind-animation-zara",
      title: "Behind the Animation: Creating Zara's Time-Traveling Journey",
      excerpt: "An inside look at how we designed the visual effects for our protagonist's journey through time, blending traditional African art with cutting-edge animation.",
      author: "Nia Okafor",
      date: "September 28, 2025",
      readTime: "8 min read",
      category: "Animation Updates"
    },
    {
      id: "ethiopian-churches-geometry",
      title: "The Sacred Geometry of Ethiopian Churches",
      excerpt: "Exploring the mathematical precision and spiritual significance behind Lalibela's rock-hewn architecture with a local historian.",
      author: "Dr. Ayana Tadesse",
      date: "September 25, 2025",
      readTime: "10 min read",
      category: "Cultural Insights"
    },
    {
      id: "afrofuturism-matters",
      title: "Why Afrofuturism Matters Now More Than Ever",
      excerpt: "A conversation with cultural critics about how Afrofuturism is reshaping narratives about Africa's past, present, and future.",
      author: "Marcus Johnson",
      date: "September 22, 2025",
      readTime: "7 min read",
      category: "Cultural Insights"
    },
    {
      id: "afrobeats-revolution",
      title: "From Lagos to London: The Afrobeats Global Revolution",
      excerpt: "How West African music went from local sound to worldwide phenomenon, and what it means for cultural exchange.",
      author: "Fatima Adeyemi",
      date: "September 19, 2025",
      readTime: "9 min read",
      category: "Travel Chronicles"
    },
    {
      id: "member-spotlight-business",
      title: "Member Spotlight: How One Trip Changed My Business",
      excerpt: "Tech founder shares how connections made on our Ghana experience led to a partnership that transformed her startup.",
      author: "Community Team",
      date: "September 15, 2025",
      readTime: "6 min read",
      category: "Community Voices"
    },
    {
      id: "storytelling-griots",
      title: "The Art of Storytelling: Lessons from West African Griots",
      excerpt: "What modern content creators can learn from centuries-old oral tradition about narrative, memory, and community.",
      author: "Kofi Asante",
      date: "September 12, 2025",
      readTime: "11 min read",
      category: "Cultural Insights"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-primary text-white border-none px-4 py-2">
              <BookOpen className="mr-2" size={16} />
              The Clubhouse
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-6 text-primary">
              Stories, Culture & Community
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Dive into travel chronicles, cultural insights, animation updates, and conversations 
              that matter from the Bantu Ants community.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Search stories, topics, authors..." 
                  className="pl-12 py-6 bg-white border-border"
                />
              </div>
              <Button size="lg" className="px-6">
                <Filter size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b bg-background sticky top-0 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2 transition-colors ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-muted hover:bg-muted/70 text-foreground'
                }`}
              >
                <category.icon size={16} />
                <span>{category.name}</span>
                <span className={`text-sm ${index === 0 ? 'opacity-90' : 'text-muted-foreground'}`}>
                  ({category.count})
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-white">Featured Story</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl mb-4 text-primary">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 w-fit group/btn"
                    onClick={() => onNavigateToArticle?.(featuredPost.id)}
                  >
                    Read Full Story
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-4">Recent Stories</h2>
            <p className="text-xl text-muted-foreground">
              Fresh perspectives from our community of travelers, creators, and cultural explorers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
                  onClick={() => onNavigateToArticle?.(post.id)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-black/70 backdrop-blur text-white border-none">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl mb-3 text-primary line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>{post.author}</span>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="w-full group/btn hover:bg-primary/5"
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigateToArticle?.(post.id);
                        }}
                      >
                        Read More
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Load More Stories
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Never Miss a Story</h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly insights, travel stories, and cultural perspectives delivered to your inbox. 
              Join 5,000+ readers in the Clubhouse community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-none text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam. Unsubscribe anytime. Your email is safe with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Callout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
              <h3 className="text-3xl md:text-4xl mb-4 text-primary">Have a Story to Share?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                The Clubhouse is built by our community. If you have insights on travel, culture, 
                creativity, or connections worth sharing, we'd love to hear from you.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={onPitchStory}
              >
                Pitch Your Story
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
