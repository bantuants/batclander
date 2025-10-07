import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Play, ArrowRight } from "lucide-react";

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
  const characters = [
    {
      name: "🧱 Kamau the Miner",
      role: "Son of miners, child of revolutionaries",
      description:
        "Kamau digs for more than gold. He unearths stories buried by time, reclaiming relics stolen from his ancestors. Guided by visions of the lost Queen, he becomes a bridge between memory and rebellion — a seeker of truth in a fractured world.",
      powers: [
        "Ancestral intuition",
        "Strategic foresight",
        "Kwanzite resonance",
      ],
      personality: "Calm, observant, quietly defiant",
    },
    {
      name: "⚔️ Fina the Rebel Queen",
      role: "Born royal, raised by warriors",
      description:
        "Trained by the Ahosi, Fina wields both language and blade with the precision of destiny. Her presence commands loyalty; her silence, respect. She carries the wisdom of queens and the fury of generations denied their crown.",
      powers: [
        "Linguistic decoding",
        "Hand-to-hand mastery",
        "Spiritual empathy",
      ],
      personality: "Disciplined, regal, courageous",
    },
    {
      name: "🗣️ Zulu the Warrior",
      role: "Descendant of the legendary Shaka line",
      description:
        "Zulu hides pain behind laughter and wisdom behind wit. A rhythm lives in his stride, a storm in his hands. When he fights, battle becomes dance — and every loss becomes legend.",
      powers: [
        "Enhanced strength",
        "Tactical combat",
        "Ancestral echo",
      ],
      personality: "Loyal, magnetic, fiercely protective",
    },
  ];

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
            The Kwanzite Chronicles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An Afrofuturist animated series where ancient
            African kingdoms discover a mystical energy source
            that bridges past, present, and future.
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

          {/* Infinite Horizontal Scroll */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-6"
              animate={{
                x: [
                  0,
                  -1 * (historicalCharacters.length * 385),
                ],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {/* Render cards twice for seamless loop */}
              {[
                ...historicalCharacters,
                ...historicalCharacters,
              ].map((character, index) => (
                <div
                  key={`${character.name}-${index}`}
                  className="shrink-0 w-[369px]"
                >
                  <div className="h-[504px] overflow-clip relative rounded-xl border border-black shadow-lg hover:shadow-2xl transition-shadow group">
                    {/* Character Image */}
                    <div className="absolute inset-0">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-[63.89%_2.98%_2.18%_2.71%]">
                      {/* Background Blur */}
                      <div className="absolute inset-0 backdrop-blur-[5px] backdrop-filter bg-white/75 rounded-xl" />

                      {/* Title */}
                      <div className="absolute inset-[0%_0%_70%_0%] flex items-center px-4">
                        <p className="font-['Risque',_sans-serif] text-[25px] text-black truncate w-full">
                          {character.name}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="absolute inset-[30%_0%_0%_0%] px-4 pb-4 overflow-hidden">
                        <p className="font-['Alatsi',_sans-serif] text-[18px] leading-[20px] text-black/75 capitalize">
                          {character.era}
                          <br />
                          {character.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
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
    </section>
  );
}