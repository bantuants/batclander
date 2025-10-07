import { HeroSection } from "../components/HeroSection";
import { FeatureHighlights } from "../components/FeatureHighlights";
import { AnimationSection } from "../components/AnimationSection";
import { TravelSection } from "../components/TravelSection";
import { BlogSection } from "../components/BlogSection";
import { ShopSection } from "../components/ShopSection";

interface HomePageProps {
  onNavigateToAnimation: () => void;
  onJoinNow: () => void;
}

export function HomePage({ onNavigateToAnimation, onJoinNow }: HomePageProps) {
  return (
    <main>
      <HeroSection onJoinNow={onJoinNow} />
      <FeatureHighlights />
      <AnimationSection onNavigateToAnimation={onNavigateToAnimation} />
      <TravelSection />
      <BlogSection />
      <ShopSection />
    </main>
  );
}
