import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Play, Calendar, Users, Sparkles, Film, Lightbulb } from "lucide-react";

interface AnimationPageProps {
  onPitchStory?: () => void;
}

export function AnimationPage({ onPitchStory }: AnimationPageProps = {}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const characters = [
    {
      name: "Zara the Navigator",
      role: "Time Traveler & Protagonist",
      description: "Guided by ancestral spirits, Zara journeys through past and future to protect the Kwanzite. A brilliant scientist and warrior, she bridges the wisdom of her ancestors with cutting-edge technology.",
      powers: ["Time manipulation", "Ancestral connection", "Energy channeling"],
      personality: "Curious, brave, deeply connected to heritage",
    },
    {
      name: "Kofi the Keeper",
      role: "Guardian of Stories",
      description: "A modern griot who weaves tales into reality, preserving the wisdom of generations. His words have the power to manifest truth and reshape destiny.",
      powers: ["Story weaving", "Memory preservation", "Reality manipulation"],
      personality: "Wise, witty, guardian of tradition",
    },
    {
      name: "Amara the Architect",
      role: "Builder of Worlds",
      description: "She designs the cities of tomorrow using blueprints from ancient kingdoms. Her vision merges the architectural genius of African empires with futuristic innovation.",
      powers: ["Structural creation", "Blueprint vision", "Matter manipulation"],
      personality: "Visionary, methodical, bridge between eras",
    },
    {
      name: "Jabari the Protector",
      role: "Warrior Chief",
      description: "Commander of the Kwanzite Guard, he leads the defense against those who would misuse the ancient energy. His strength is matched only by his loyalty.",
      powers: ["Enhanced strength", "Strategic mastery", "Energy shields"],
      personality: "Noble, protective, unwavering",
    },
    {
      name: "Nia the Healer",
      role: "Life Bringer",
      description: "A herbalist and energy worker who understands the life force that flows through all things. She can restore balance and heal both physical and spiritual wounds.",
      powers: ["Healing arts", "Life force manipulation", "Plant communion"],
      personality: "Compassionate, intuitive, nurturer",
    },
    {
      name: "Malik the Shadow",
      role: "The Antagonist",
      description: "Once a protector of Kwanzite, Malik believes the only way to save the future is to control it. His vision has twisted into obsession, making him a formidable adversary.",
      powers: ["Shadow manipulation", "Kwanzite corruption", "Strategic genius"],
      personality: "Complex, driven, tragic villain",
    },
  ];

  const timeline = [
    {
      phase: "Phase 1: Development",
      status: "In Progress",
      items: [
        { task: "Character Design & Concept Art", complete: true },
        { task: "Story Bible & World Building", complete: true },
        { task: "Pilot Script", complete: false },
        { task: "Voice Actor Casting", complete: false },
      ],
    },
    {
      phase: "Phase 2: Production",
      status: "Upcoming",
      items: [
        { task: "Storyboarding", complete: false },
        { task: "Animation Production", complete: false },
        { task: "Music & Sound Design", complete: false },
        { task: "Voice Recording", complete: false },
      ],
    },
    {
      phase: "Phase 3: Launch",
      status: "2026",
      items: [
        { task: "Pilot Episode Release", complete: false },
        { task: "Season 1 (6 Episodes)", complete: false },
        { task: "Community Events", complete: false },
        { task: "Merchandise Launch", complete: false },
      ],
    },
  ];

  const team = [
    { role: "Creator & Writer", name: "Coming Soon" },
    { role: "Lead Animator", name: "Coming Soon" },
    { role: "Art Director", name: "Coming Soon" },
    { role: "Music Composer", name: "Coming Soon" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-primary to-accent">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676474937597-4043441b66f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwY29uY2VwdCUyMGRlc2lnbnxlbnwxfHx8fDE3NTk0MjcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Animation Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
              <span className="text-white">🎬 Afrofuturist Animation Series</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              The Kwanzite Chronicles
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              An epic tale where ancient African kingdoms discover a mystical energy source that 
              bridges past, present, and future. Watch as heroes navigate time to preserve culture 
              and build tomorrow's world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 group">
                <Play className="mr-2" size={20} fill="currentColor" />
                Watch Teaser
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => scrollToSection('newsletter')}
              >
                Get Updates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Series Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-primary">The Story</h2>
              <p className="text-lg text-muted-foreground mb-8">
                In a world where the past holds the key to the future, six unlikely heroes must unite 
                to protect the Kwanzite—a powerful energy source that connects all of African history 
                across time and space.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Sparkles,
                  title: "Afrofuturism",
                  description: "Blending African history, mythology, and cutting-edge sci-fi imagination"
                },
                {
                  icon: Film,
                  title: "Epic Storytelling",
                  description: "Multi-layered narratives spanning centuries and dimensions"
                },
                {
                  icon: Lightbulb,
                  title: "Cultural Education",
                  description: "Each episode explores real African history and traditions"
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <item.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">Meet the Heroes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six extraordinary individuals, each connected to the Kwanzite in their own way
            </p>
          </motion.div>

          <Tabs defaultValue="zara" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {characters.map((char) => (
                <TabsTrigger key={char.name.toLowerCase().split(' ')[0]} value={char.name.toLowerCase().split(' ')[0]}>
                  {char.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {characters.map((character) => (
              <TabsContent key={character.name.toLowerCase().split(' ')[0]} value={character.name.toLowerCase().split(' ')[0]}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-primary/20 via-accent/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-9xl">✨</span>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur p-3 rounded-lg">
                          <p className="text-white text-sm">{character.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:p-10">
                      <h3 className="text-3xl mb-4 text-primary">{character.name}</h3>
                      <p className="text-muted-foreground mb-6">{character.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">Powers & Abilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {character.powers.map((power) => (
                            <span key={power} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                              {power}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Personality</h4>
                        <p className="text-sm">{character.personality}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-secondary/30 rounded-full mb-4">
              <span className="text-primary">🎨 Behind the Scenes</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">Creating the Universe</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a peek into our creative process as we bring the Kwanzite Chronicles to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Concept Art & Design",
                image: "https://images.unsplash.com/photo-1676474937597-4043441b66f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwY29uY2VwdCUyMGRlc2lnbnxlbnwxfHx8fDE3NTk0MjcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "From initial sketches to final character designs, see how we blend traditional African aesthetics with futuristic elements.",
              },
              {
                title: "Animation Studio",
                image: "https://images.unsplash.com/photo-1600447766334-36a93f35a21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NDI3MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "Inside our studio where artists and animators collaborate to create every frame of the series.",
              },
              {
                title: "Storyboarding",
                image: "https://images.unsplash.com/photo-1569766670290-f5581d3bb53f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeWJvYXJkJTIwc2tldGNoZXN8ZW58MXx8fHwxNzU5MzUzMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "Mapping out action sequences and emotional beats, ensuring every scene serves the story.",
              },
              {
                title: "Cultural Research",
                image: "https://images.unsplash.com/photo-1547496726-08e54b67e96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeXRlbGxpbmclMjBhZnJpY2F8ZW58MXx8fHwxNzU5MzQwMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "Working with historians and cultural experts to ensure authentic representation in every episode.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Production Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl mb-8 text-center text-primary">Production Timeline</h3>
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl text-primary">{phase.phase}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        phase.status === 'In Progress' 
                          ? 'bg-green-100 text-green-700'
                          : phase.status === 'Upcoming'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item.task} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            item.complete 
                              ? 'bg-accent border-accent' 
                              : 'border-muted-foreground/30'
                          }`}>
                            {item.complete && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={item.complete ? 'text-foreground' : 'text-muted-foreground'}>
                            {item.task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">The Creative Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate storytellers and artists bringing the Kwanzite Chronicles to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h4 className="mb-2 text-primary">{member.role}</h4>
                  <p className="text-sm text-muted-foreground">{member.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-primary via-accent to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Stay in the Loop</h2>
            <p className="text-xl text-white/90 mb-8">
              Get exclusive updates on production, character reveals, behind-the-scenes content, 
              and be the first to know when episodes drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 1,000+ fans already following the journey
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
