import { HeroSection } from "../components/HeroSection";
import { FeatureHighlights } from "../components/FeatureHighlights";
import { AnimationSection } from "../components/AnimationSection";
import { TravelSection } from "../components/TravelSection";
import { ShopSection } from "../components/ShopSection";

interface HomePageProps {
  onNavigateToAnimation: () => void;
  onJoinNow: () => void;
  onNavigateToShop?: () => void;
}

export function HomePage({ onNavigateToAnimation, onJoinNow, onNavigateToShop }: HomePageProps) {
  return (
    <main>
      <HeroSection onJoinNow={onJoinNow} />
      <AnimationSection onNavigateToAnimation={onNavigateToAnimation} />
      <FeatureHighlights />
      <TravelSection onJoinNow={onJoinNow} />
      <ShopSection onNavigateToShop={onNavigateToShop} />
    </main>
  );
}
