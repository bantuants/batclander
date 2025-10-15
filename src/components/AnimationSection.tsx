import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

// Import character card images
import imgMansaMusa from "figma:asset/3093334db9b018f797cda1e96c4e0681e4252e1a.png";
import imgNefertiti from "figma:asset/155a59036242946e2c12064a4b80c13cfe3bc131.png";
import imgCleopatra from "figma:asset/9c2d16c06202ab71d6c1cb16a2b7eb36a1ad2405.png";
import imgSunniAli from "figma:asset/4ba434264440e7fcc193a3f31366130220254909.png";
import imgYasuke from "figma:asset/ca1e2f2203994f5490f874d5524938c3a6501ab9.png";
import imgOkomfo from "figma:asset/4a4b1c22f1d5f9e42d2ee4a88cee40c724c796ae.png";
import imgToussaint from "figma:asset/791675dd32ce38cfa9cd81fade27c3117b97c549.png";
import imgShaka from "figma:asset/5bad6ca7fc9fc528d134342420c9b9480f70e052.png";
import imgYaa from "figma:asset/c322b961d2c24f9c39616d60e804c1a681504e49.png";
import imgNkrumah from "figma:asset/576020a663caf78293ba17cd6d1a3891ddb33d60.png";
import imgShirley from "figma:asset/1080554e30d156906c815c78d2a1dfb1b504b3da.png";
import imgChinua from "figma:asset/c17162da67f8a14f7410de301620c6f6bf1d89c5.png";
import imgMiriam from "figma:asset/6356e6b4747c74cf9a04d0fc6b3df8fa41d5eab2.png";
import imgFred from "figma:asset/131e28841535b2af8bf43a897a7a1a9e66b729bc.png";
import imgBob from "figma:asset/a53c00692eee148d8b17ba877b9b233c466226e3.png";

interface AnimationSectionProps {
  onNavigateToAnimation?: () => void;
}

// Historical character NFT cards data
const historicalCharacters = [
  {
    name: "Mansa Musa Ant",
    era: "(c. 1280–1337 CE)",
    description:
      "Emperor of Mali and possibly the wealthiest person in history, his pilgrimage to Mecca revealed West Africa's splendor to the world.",
    image: imgMansaMusa,
  },
  {
    name: "Queen Nefertiti Ant",
    era: "(c. 1370–1330 BCE)",
    description:
      "Icon of Ancient Egypt, her elegance and political influence helped usher in a golden age alongside Pharaoh Akhenaten.",
    image: imgNefertiti,
  },
  {
    name: "Cleopatra VII Ant",
    era: "(69–30 BCE)",
    description:
      "The last pharaoh of Egypt, remembered for her intelligence, charisma, and political alliances with Rome.",
    image: imgCleopatra,
  },
  {
    name: "Sunni Ali Ant",
    era: "(r. 1464–1492)",
    description:
      "Founder of the Songhai Empire, he expanded West African power through military might and strategic control of trade.",
    image: imgSunniAli,
  },
  {
    name: "Yasuke Ant",
    era: "(c. 1555–1590s)",
    description:
      "African warrior who became a samurai in Japan under Lord Oda Nobunaga — a true global enigma.",
    image: imgYasuke,
  },
  {
    name: "Okomfo Anokye Ant",
    era: "(c. 1600s–1700s)",
    description:
      "A revered spiritual leader of the Ashanti Empire who summoned the Golden Stool from the heavens, symbolizing national unity.",
    image: imgOkomfo,
  },
  {
    name: "Toussaint Louverture Ant",
    era: "(1743–1803)",
    description:
      "The architect of the Haitian Revolution, he turned enslaved people into a revolutionary army and created the first Black republic.",
    image: imgToussaint,
  },
  {
    name: "Shaka Zulu Ant",
    era: "(c. 1787–1828)",
    description:
      "A military mastermind who transformed the Zulu nation into a dominant force in Southern Africa.",
    image: imgShaka,
  },
  {
    name: "Yaa Asantewaa Ant",
    era: "(1840–1921)",
    description:
      "Queen Mother who led the Ashanti War against British colonizers, defying gender and imperial norms with bold leadership.",
    image: imgYaa,
  },
  {
    name: "Kwame Nkrumah Ant",
    era: "(1909–1972)",
    description:
      "Ghana's founding father and pan-African visionary, he inspired a continent to seek independence and unity.",
    image: imgNkrumah,
  },
  {
    name: "Shirley Chisholm Ant",
    era: "(1924–2005)",
    description:
      "The first Black woman elected to the U.S. Congress — unbought and unbossed, she shattered political ceilings.",
    image: imgShirley,
  },
  {
    name: "Chinua Achebe Ant",
    era: "(1930–2013)",
    description:
      "Nigerian novelist who redefined African literature with Things Fall Apart, centering African voices in global storytelling.",
    image: imgChinua,
  },
  {
    name: "Miriam Makeba Ant",
    era: "(1932–2008)",
    description:
      '"Mama Africa," she brought the sound of South Africa to the world and used her voice to fight apartheid.',
    image: imgMiriam,
  },
  {
    name: "Fred Hampton Ant",
    era: "(1948–1969)",
    description:
      "Charismatic Black Panther leader who built multiracial coalitions before being assassinated at 21 by the FBI.",
    image: imgFred,
  },
  {
    name: "Bob Marley Ant",
    era: "(1945–1981)",
    description:
      "Prophet of reggae, Rastafari, and resistance — his music carried the spirit of African freedom to the world.",
    image: imgBob,
  },
];

export function AnimationSection({
  onNavigateToAnimation,
}: AnimationSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<typeof historicalCharacters[0] | null>(null);



  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 200 + 12; // card width + gap
      scrollContainerRef.current.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 200 + 12; // card width + gap
      scrollContainerRef.current.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="animation"
      className="py-20 bg-gradient-to-b from-muted to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-3">
            <span className="text-purple-700">
              🎬 Animation Series
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-3 text-primary">
            The Bantu Ants Universe
          </h2>
          <p className="text-lg md:text-xl font-medium mb-4 text-primary/80">
            Where folklore meets the future.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            An Afrofuturist animated saga exploring memory, power, and identity across Africa and the diaspora. Follow the journey of miners, queens, and rebels as they uncover hidden histories and redefine the future through unity and resistance.
          </p>
        </motion.div>

        {/* Iconic Characters Section */}
        <div className="mb-10">
          <h3 className="text-2xl mb-3 text-center text-primary">
            Iconic Characters
          </h3>
          <p className="text-center text-muted-foreground mb-6 text-sm">
            Historical Legends from the Bantu Ants Universe
          </p>
          
          {/* Character Cards Slider */}
          <div className="relative"  style={{ minHeight: '320px' }}>
            {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />



            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth scrollbar-hide"
              style={{ minHeight: '320px' }}
            >
              <div className="flex gap-3" style={{ width: 'max-content', minHeight: '300px' }}>
                {historicalCharacters.map((character, index) => (
                  <div
                    key={`${character.name}-${index}`}
                    className="snap-center"
                    style={{ 
                      minWidth: '200px', 
                      maxWidth: '200px', 
                      flexShrink: 0 
                    }}
                  >
                    <div 
                      className="overflow-hidden relative rounded-xl border border-black shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
                      style={{ 
                        height: '300px',
                        background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)'
                      }}
                      onClick={() => setSelectedCharacter(character)}
                    >
                      {/* Character Image */}
                      <div style={{ position: 'absolute', inset: '0' }}>
                        <img
                          src={character.image}
                          alt={character.name}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                          }}
                        />
                      </div>

                      {/* Content Overlay */}
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '3%',
                        left: '3%', 
                        right: '3%',
                        top: '60%'
                      }}>
                        {/* Background Blur */}
                        <div 
                          className="rounded-xl"
                          style={{ 
                            position: 'absolute', 
                            inset: '0',
                            backgroundColor: 'rgba(255, 255, 255, 0.75)',
                            backdropFilter: 'blur(5px)'
                          }} 
                        />

                        {/* Title */}
                        <div style={{ 
                          position: 'absolute', 
                          top: '0%',
                          left: '0%', 
                          right: '0%',
                          bottom: '65%',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 12px'
                        }}>
                          <p style={{ 
                            fontFamily: 'Risque, sans-serif', 
                            fontSize: '16px', 
                            color: 'black',
                            width: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {character.name}
                          </p>
                        </div>

                        {/* Description */}
                        <div style={{ 
                          position: 'absolute', 
                          top: '35%',
                          left: '0%', 
                          right: '0%',
                          bottom: '0%',
                          padding: '0 12px 8px 12px',
                          overflow: 'hidden'
                        }}>
                          <p style={{ 
                            fontFamily: 'Alatsi, sans-serif', 
                            fontSize: '12px', 
                            lineHeight: '14px', 
                            color: 'rgba(0, 0, 0, 0.75)',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {character.era}
                            <br />
                            {character.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {onNavigateToAnimation && (
              <Button
                className="bg-primary hover:bg-primary/90 group"
                onClick={onNavigateToAnimation}
              >
                Explore Full Series
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </Button>
            )}
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600/10"
            >
              Follow Our Journey
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Character Detail Modal */}
      {selectedCharacter && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCharacter(null)}
        >
          <motion.div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedCharacter(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              {/* Character Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {selectedCharacter.name}
                </h2>
                <p className="text-white text-opacity-90 text-lg">
                  {selectedCharacter.era}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">About This Legend</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedCharacter.description}
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Historical Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  This legendary figure represents the rich heritage and powerful legacy of African leadership, 
                  innovation, and resilience that continues to inspire the Bantu Ants Universe.
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={() => setSelectedCharacter(null)}
                >
                  Learn More in Series
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-600/10"
                  onClick={() => setSelectedCharacter(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}