import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Link2,
  ArrowLeft,
  BookOpen,
  Heart,
  MessageCircle
} from "lucide-react";

interface BlogArticlePageProps {
  articleId?: string;
  onNavigate: (page: string) => void;
}

export function BlogArticlePage({ articleId, onNavigate }: BlogArticlePageProps) {
  // Mock article data - in production, this would be fetched based on articleId
  const article = {
    id: "the-golden-road-ghana",
    title: "The Golden Road: Tracing Ghana's Ancient Trade Routes",
    subtitle: "A journey through time, exploring the historical pathways that connected kingdoms and cultures across West Africa",
    category: "History & Culture",
    author: {
      name: "Amara Okonkwo",
      role: "Cultural Historian & Travel Guide",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop"
    },
    publishDate: "March 15, 2024",
    readTime: "12 min read",
    featuredImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=600&fit=crop",
    tags: ["Ghana", "History", "Trade Routes", "Cultural Heritage", "West Africa"],
    content: [
      {
        type: "paragraph",
        text: "Standing at the gates of Elmina Castle, watching the Atlantic waves crash against the stone fortifications, I realized that every road in Ghana tells a story. But the story I was about to uncover wasn't written in colonial ledgers or European trade documents—it was carved into the red earth of ancient pathways that predate European contact by centuries."
      },
      {
        type: "heading",
        text: "Before the Ships Arrived"
      },
      {
        type: "paragraph",
        text: "Long before the Portuguese first landed on the Gold Coast in 1471, sophisticated networks of trade routes crisscrossed the region we now call Ghana. These weren't just paths for commerce—they were arteries of cultural exchange, intellectual discourse, and political alliances that connected the great empires of West Africa."
      },
      {
        type: "paragraph",
        text: "The trans-Saharan trade routes are well documented, but the internal West African networks remain largely unknown to most travelers. These routes connected the northern savanna kingdoms with the forest states of the south, facilitating the exchange of gold, kola nuts, salt, and ideas that would shape the region for millennia."
      },
      {
        type: "quote",
        text: "The roads of our ancestors were not paved with stone, but with wisdom. Each trading post was a university, each marketplace a parliament.",
        author: "Nana Kwame Adjei, Traditional Chief of Kumasi"
      },
      {
        type: "heading",
        text: "Walking the Kumasi-Salaga Route"
      },
      {
        type: "paragraph",
        text: "My journey began in Kumasi, the heart of the ancient Ashanti Empire. Accompanied by a local historian, Kofi Mensah, we set out to trace portions of the historic Kumasi-Salaga route—once one of the most important trade arteries in West Africa."
      },
      {
        type: "paragraph",
        text: "\"This route was the Amazon of its time,\" Kofi explained as we walked through dense forest paths that occasionally opened onto modern roads. \"Everything moved along this route: gold from the mines, kola from the forests, cattle and goods from the north. But more importantly, scholars traveled here, spreading knowledge, mathematics, and philosophy.\""
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1000&h=600&fit=crop",
        caption: "Traditional market along the historic trade route near Kumasi"
      },
      {
        type: "heading",
        text: "The Technology of Ancient Trade"
      },
      {
        type: "paragraph",
        text: "What struck me most wasn't just the historical significance—it was the sophisticated systems that supported these trade networks. Rest houses (called 'nsawam') were strategically placed every 20-30 kilometers. Water management systems ensured travelers had access to clean water. And a complex system of credit and banking, using gold dust as currency, facilitated transactions across vast distances."
      },
      {
        type: "paragraph",
        text: "At a restored trading post near Ejura, I met a craftsman demonstrating traditional gold weight production. These weren't just weights—they were miniature sculptures, each carrying proverbs and cultural wisdom. \"Every transaction was also a philosophical exchange,\" he told me, holding up a brass weight shaped like a bird. \"This one represents the proverb: 'The bird builds its nest one twig at a time.' It reminds traders that wealth is accumulated through patience and persistence.\""
      },
      {
        type: "heading",
        text: "Modern Echoes of Ancient Routes"
      },
      {
        type: "paragraph",
        text: "Today, you can still see the influence of these routes in Ghana's modern infrastructure. Many of the country's main roads follow the same paths carved out by traders centuries ago. Markets still thrive in the same locations where caravans once stopped to rest and trade."
      },
      {
        type: "paragraph",
        text: "But perhaps more fascinating is the cultural continuity. In Salaga, once a major terminus of the northern trade routes, I attended a traditional market day that has been held on the same day of the week for over 300 years. The same ethnic groups that traded there centuries ago—Hausa, Dagomba, Ashanti, and others—still gather, though now they're selling mobile phones alongside traditional crafts."
      },
      {
        type: "quote",
        text: "The routes may have changed, but the spirit of exchange remains. We still believe in the marketplace as a place not just for commerce, but for community.",
        author: "Hajia Bintu Mohammed, Salaga Market Elder"
      },
      {
        type: "heading",
        text: "For the Modern Traveler"
      },
      {
        type: "paragraph",
        text: "If you're inspired to explore these routes yourself, Ghana offers several ways to experience this history. The Manhyia Palace Museum in Kumasi provides excellent context on the Ashanti Empire's trading networks. The Salaga Slave Market Museum, while confronting difficult history, also documents the region's complex trading past."
      },
      {
        type: "paragraph",
        text: "For those seeking a more immersive experience, several tour operators now offer multi-day treks along portions of the historic routes, staying in villages and learning from local historians. It's travel that goes beyond sightseeing—it's about connecting with the economic and cultural innovations that shaped West Africa long before colonialism."
      },
      {
        type: "paragraph",
        text: "As I completed my journey, standing once again in Kumasi, I realized that these ancient routes offer us more than historical knowledge. They demonstrate the interconnectedness of African societies, the sophistication of pre-colonial African economies, and the enduring power of cultural exchange. In an age of digital highways, these golden roads remind us that the most meaningful journeys are those that connect us to our shared human story."
      }
    ],
    relatedArticles: [
      {
        id: "zanzibar-spice",
        title: "Zanzibar's Spice Routes: An Aromatic Journey",
        category: "Culture",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=250&fit=crop",
        readTime: "8 min read"
      },
      {
        id: "timbuktu-manuscripts",
        title: "The Lost Libraries of Timbuktu",
        category: "History",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
        readTime: "10 min read"
      },
      {
        id: "ethiopian-highlands",
        title: "Walking the Ethiopian Highlands: A Spiritual Trek",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1572464165585-4f2f7f8fa21d?w=400&h=250&fit=crop",
        readTime: "15 min read"
      }
    ]
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Button
              variant="ghost"
              className="mb-6 text-white hover:bg-white/20 -ml-2"
              onClick={() => onNavigate("blog")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Clubhouse
            </Button>

            <Badge className="mb-4 bg-accent text-white border-none">
              {article.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white">
              {article.title}
            </h1>

            <p className="text-xl text-white/90 mb-6">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="text-white">{article.author.name}</div>
                  <div className="text-sm text-white/70">{article.author.role}</div>
                </div>
              </div>
              <Separator orientation="vertical" className="h-10 bg-white/30" />
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{article.publishDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between mb-12 pb-6 border-b"
            >
              <div className="flex gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('copy')}
                >
                  <Link2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Article Body */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {article.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return (
                      <p key={index} className="mb-6 text-foreground leading-relaxed">
                        {block.text}
                      </p>
                    );
                  case 'heading':
                    return (
                      <h2 key={index} className="text-3xl mt-12 mb-6 text-primary">
                        {block.text}
                      </h2>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="my-8 pl-6 border-l-4 border-accent">
                        <p className="text-xl italic text-foreground/90 mb-2">
                          "{block.text}"
                        </p>
                        {block.author && (
                          <footer className="text-sm text-muted-foreground">
                            — {block.author}
                          </footer>
                        )}
                      </blockquote>
                    );
                  case 'image':
                    return (
                      <figure key={index} className="my-10">
                        <ImageWithFallback
                          src={block.url || ''}
                          alt={block.caption || ''}
                          className="w-full rounded-lg"
                        />
                        {block.caption && (
                          <figcaption className="text-sm text-muted-foreground text-center mt-3">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  default:
                    return null;
                }
              })}
            </motion.article>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-1">About {article.author.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{article.author.role}</p>
                    <p className="text-sm leading-relaxed">
                      A passionate explorer of African history and culture, {article.author.name} has spent 
                      over a decade documenting traditional trade routes, cultural practices, and untold 
                      stories across the continent. Through immersive storytelling, she bridges past and 
                      present, revealing the rich tapestry of African heritage.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary via-accent to-secondary text-white">
                <BookOpen className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl mb-3">Never Miss a Story</h3>
                <p className="text-lg mb-6 text-white/90">
                  Join our community of conscious travelers and culture enthusiasts. 
                  Get weekly stories, travel insights, and exclusive club updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center">Continue Reading</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {article.relatedArticles.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-white border-none">
                        {related.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
