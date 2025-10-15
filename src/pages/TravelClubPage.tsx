import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import headerIslandImageUrl from "../assets/headerisland.jpg?url";
import { 
  Compass, 
  GraduationCap, 
  Music, 
  MessageCircle, 
  Globe, 
  Users, 
  Sparkles,
  Calendar,
  MapPin,
  Crown,
  Star,
  ArrowRight
} from "lucide-react";

interface TravelClubPageProps {
  onJoinNow: () => void;
}

export function TravelClubPage({ onJoinNow }: TravelClubPageProps) {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Learn",
      subtitle: "Immersive History",
      description: "Walk through ancient kingdoms, UNESCO sites, and living museums. Connect with local historians, griots, and cultural custodians who bring centuries of wisdom to life.",
      highlights: [
        "Private access to historical sites",
        "Workshops with cultural experts",
        "Ancestral genealogy experiences",
        "Traditional ceremony participation"
      ],
      color: "from-primary to-primary/70"
    },
    {
      icon: Music,
      title: "Party",
      subtitle: "Celebrate Culture",
      description: "Experience Africa's legendary nightlife, festivals, and celebrations. From Afrobeats in Lagos to jazz in Cape Town, immerse yourself in the rhythms that move the continent.",
      highlights: [
        "VIP festival experiences",
        "Private yacht & rooftop parties",
        "Underground music scenes",
        "Cultural celebration access"
      ],
      color: "from-accent to-accent/70"
    },
    {
      icon: MessageCircle,
      title: "Talk",
      subtitle: "Deep Conversations",
      description: "Intimate gatherings with changemakers, artists, entrepreneurs, and visionaries. Share stories, build connections, and engage in meaningful dialogue about our collective future.",
      highlights: [
        "Fireside chats with leaders",
        "Mastermind sessions",
        "Community building circles",
        "Cross-cultural dialogues"
      ],
      color: "from-secondary to-secondary/70"
    }
  ];

  const upcomingExperiences = [
    {
      title: "Ghana: Homecoming Renaissance",
      date: "November 2025",
      duration: "10 Days",
      location: "Accra, Cape Coast, Kumasi",
      price: "$5,500",
      status: "Limited Spots",
      highlights: ["Door of No Return ceremony", "Ashanti cultural immersion", "Detty December preview"]
    },
    {
      title: "Ethiopia: Ancient Kingdoms Trail",
      date: "January 2026",
      duration: "12 Days",
      location: "Addis Ababa, Lalibela, Axum",
      price: "$6,200",
      status: "Waitlist",
      highlights: ["Rock-hewn churches exploration", "Ethiopian coffee ceremony", "Private monastery access"]
    },
    {
      title: "South Africa: Innovation & Heritage",
      date: "March 2026",
      duration: "8 Days",
      location: "Johannesburg, Cape Town, Soweto",
      price: "$4,800",
      status: "Open",
      highlights: ["Soweto tech ecosystem tour", "Robben Island private tour", "Cape Winelands experience"]
    }
  ];

  const memberBenefits = [
    {
      title: "Curated Itineraries",
      description: "Meticulously designed experiences you won't find anywhere else",
      icon: Compass
    },
    {
      title: "Intimate Groups",
      description: "Maximum 15-20 members per experience for meaningful connections",
      icon: Users
    },
    {
      title: "Exclusive Access",
      description: "Private tours, closed events, and behind-the-scenes cultural moments",
      icon: Crown
    },
    {
      title: "Expert Guides",
      description: "Local cultural ambassadors and historians as your personal guides",
      icon: Star
    },
    {
      title: "Luxury Accommodation",
      description: "Boutique hotels and unique stays that honor local culture",
      icon: Sparkles
    },
    {
      title: "Global Network",
      description: "Join a community of innovators, creators, and cultural custodians",
      icon: Globe
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={headerIslandImageUrl}
            alt="Travel Club Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge className="mb-6 bg-accent/90 text-white border-none px-4 py-2">
              <Crown className="mr-2" size={16} />
              Exclusive Travel Community
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              Travel Africa.<br />Transform Your Life.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Join an elite community of cultural explorers on immersive journeys through Africa 
              and the Diaspora. Learn from history. Celebrate culture. Build lasting connections.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white group"
                onClick={onJoinNow}
              >
                Join Club
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 backdrop-blur"
              >
                View Experiences
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Ethos - Three Pillars */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-6 text-primary">Our Three Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A holistic approach to cultural exploration that engages mind, body, and spirit
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${pillar.color}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                      <pillar.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl mb-2 text-primary">{pillar.title}</h3>
                    <p className="text-accent mb-4">{pillar.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Experiences */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-6 text-primary">Upcoming Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meticulously curated journeys designed for cultural depth and transformation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {upcomingExperiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute top-4 right-4">
                      <Badge className={`${
                        experience.status === 'Limited Spots' 
                          ? 'bg-accent text-white' 
                          : experience.status === 'Waitlist'
                          ? 'bg-primary text-white'
                          : 'bg-green-600 text-white'
                      }`}>
                        {experience.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Calendar size={14} />
                          <span>{experience.date}</span>
                          <span className="mx-2">•</span>
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-3 text-primary">{experience.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin size={16} />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl text-accent">{experience.price}</span>
                      <Button 
                        className="bg-primary hover:bg-primary/90"
                        onClick={onJoinNow}
                      >
                        Reserve Spot
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-6 text-primary">Why Join Our Club</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience Africa like never before with benefits designed for the discerning traveler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {memberBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>






    </main>
  );
}
