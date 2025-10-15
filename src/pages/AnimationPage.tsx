import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

import { Play, Sparkles, Film, Lightbulb, X } from "lucide-react";
import kamauImageUrl from "../assets/kamaushot.PNG?url";
import finaImageUrl from "../assets/finainadress.png?url";
const zuluImageUrl = "/zuluantpose.png";
const pietImageUrl = "/piet.png";
import characterDevImageUrl from "../assets/characterdev.png?url";
import batcSceneImageUrl from "../assets/batc_scene.png?url";


interface AnimationPageProps {
  onPitchStory?: () => void;
}

export function AnimationPage({ onPitchStory }: AnimationPageProps = {}) {
  const characters = [
    {
      name: "🧱 Kamau the Miner",
      role: "Son of miners, child of revolutionaries",
      description: "Kamau digs for more than gold. He unearths stories buried by time, reclaiming relics stolen from his ancestors. Guided by visions of the lost Queen, he becomes a bridge between memory and rebellion — a seeker of truth in a fractured world.",
      powers: ["Ancestral intuition", "Strategic foresight", "Kwanzite resonance"],
      personality: "Calm, observant, quietly defiant",
      image: kamauImageUrl,
    },
    {
      name: "⚔️ Fina the Rebel Queen",
      role: "Born royal, raised by warriors",
      description: "Trained by the Ahosi, Fina wields both language and blade with the precision of destiny. Her presence commands loyalty; her silence, respect. She carries the wisdom of queens and the fury of generations denied their crown.",
      powers: ["Linguistic decoding", "Hand-to-hand mastery", "Spiritual empathy"],
      personality: "Disciplined, regal, courageous",
      image: finaImageUrl,
    },
    {
      name: "🗣️ Zulu the Warrior",
      role: "Descendant of the legendary Shaka line",
      description: "Zulu hides pain behind laughter and wisdom behind wit. A rhythm lives in his stride, a storm in his hands. When he fights, battle becomes dance — and every loss becomes legend.",
      powers: ["Enhanced strength", "Tactical combat", "Ancestral echo"],
      personality: "Loyal, magnetic, fiercely protective",
      image: zuluImageUrl,
    },
    {
      name: "🐝 Bytez the Prodigy",
      role: "Born in the cyber-townships",
      description: "Bytez sees art in scrap and music in machinery. Inspired by bees — their unity, precision, and patience — he builds buzzing drones that hum rebellion into the skyline.",
      powers: ["Hacking and encryption", "Tech improvisation", "Art and dance"],
      personality: "Inventive, curious, unpredictable",
      image: "/bytez.png",
    },
    {
      name: "👑 Princess Zaida the Heir",
      role: "Born into privilege, shaped by contradiction",
      description: "Zaida moves with the grace of her lineage and the doubt of her reflection. Neither surface dweller nor miner, she stands between worlds — the symbol of unity the empire fears most.",
      powers: ["Diplomatic influence", "Charisma manipulation", "Hidden lineage power"],
      personality: "Elegant, introspective, quietly powerful",
    },
    {
      name: "🕯️ Bishop Makorokoro the High Seer",
      role: "Draped in gold and incense",
      description: "Makorokoro preaches balance while guarding the scales himself. His voice fills temples and airwaves alike — a melody of devotion and control. Whether prophet or politician depends on who you ask, and how loudly you ask it.",
      powers: ["Mastery of ceremony", "Kwanzite scripture command", "Persuasive ritual speech"],
      personality: "Charismatic, disciplined, enigmatic",
    },
    {
      name: "🪓 Piet Kruger the Enforcer",
      role: "Forged in duty, bound by silence",
      description: "Piet serves the Council with the precision of a blade, yet beneath the armor, a conscience trembles. He enforces order — even when the order itself feels wrong.",
      powers: ["Tactical command", "Advanced weaponry", "Adaptive strategy"],
      personality: "Stoic, loyal, quietly conflicted",
      image: pietImageUrl,
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState<typeof characters[0] | null>(characters[0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timeline = [
    {
      phase: "Phase 1: Development",
      status: "In Progress",
      items: [
        { task: "Character Design & Concept Art", complete: true },
        { task: "Story Bible & World Building", complete: true },
        { task: "Pilot Script", complete: true },
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
              The Bantu Ants Universe
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              Where folklore meets the future
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              An Afrofuturist animated saga that weaves together ancient wisdom and tomorrow's possibilities. 
              Follow our heroes as they navigate worlds where tradition and technology dance in harmony, 
              and every story holds the power to reshape destiny.
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
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img
            src={batcSceneImageUrl}
            alt="Bantu Ants Scene"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-white">The Story</h2>
              <p className="text-lg text-white mb-8">
                In the year 2088, beneath a world ruled by the devouring Locust Empire, a forgotten nation of Bantu Ants fights to reclaim its buried history. When a rebellious miner named Kamau uncovers a message from a vanished Queen, he and his crew are thrust into a time-bending struggle that links the kingdom's past and future. Part political satire, part Afrofuturist odyssey, Bantu Ants Travel Club unearths the truth about power, identity, and memory — proving that even underground, revolution finds a way to rise.
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
      <section className="py-20 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">Meet the Characters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the heroes and legends of The Bantu Ants Universe
            </p>
          </motion.div>

          {/* Character Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {characters.map((character, index) => (
              <motion.button
                key={character.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCharacter(character)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCharacter?.name === character.name
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-primary hover:bg-primary/10 shadow-sm hover:shadow-md'
                }`}
              >
                {character.name.split(' ').slice(1, 2).join(' ')}
              </motion.button>
            ))}
          </div>

          {/* Selected Character Card */}
          {selectedCharacter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden">
                <div className="relative">
                  <button
                    onClick={() => setSelectedCharacter(null)}
                    className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all shadow-lg"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                  
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Character Image */}
                    <div className="relative aspect-square md:aspect-auto">
                      {selectedCharacter.image ? (
                        <img 
                          src={selectedCharacter.image} 
                          alt={selectedCharacter.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-9xl">✨</span>
                        </div>
                      )}
                    </div>

                    {/* Character Details */}
                    <div className="p-8 md:p-10">
                      <h3 className="text-2xl font-bold mb-2 text-primary">{selectedCharacter.name}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{selectedCharacter.role}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{selectedCharacter.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">Powers & Abilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCharacter.powers.map((power) => (
                            <span key={power} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                              {power}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Personality</h4>
                        <p className="text-sm">{selectedCharacter.personality}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
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
                image: characterDevImageUrl,
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
