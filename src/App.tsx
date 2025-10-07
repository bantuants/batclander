import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AnimationPage } from "./pages/AnimationPage";
import { TravelClubPage } from "./pages/TravelClubPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { PitchYourStoryDialog } from "./components/PitchYourStoryDialog";
import { ClubApplicationDialog } from "./components/ClubApplicationDialog";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [currentArticleId, setCurrentArticleId] = useState<string>("");
  const [pitchDialogOpen, setPitchDialogOpen] = useState<boolean>(false);
  const [clubApplicationOpen, setClubApplicationOpen] = useState<boolean>(false);

  const handleNavigate = (page: string, articleId?: string) => {
    setCurrentPage(page);
    if (articleId) {
      setCurrentArticleId(articleId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="size-full">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onJoinNow={() => setClubApplicationOpen(true)}
      />
      {currentPage === "home" && (
        <HomePage 
          onNavigateToAnimation={() => handleNavigate("animation")}
          onJoinNow={() => setClubApplicationOpen(true)}
        />
      )}
      {currentPage === "animation" && <AnimationPage onPitchStory={() => setPitchDialogOpen(true)} />}
      {currentPage === "travel" && <TravelClubPage onJoinNow={() => setClubApplicationOpen(true)} />}
      {currentPage === "blog" && (
        <BlogPage 
          onNavigateToArticle={(id) => handleNavigate("article", id)}
          onPitchStory={() => setPitchDialogOpen(true)}
        />
      )}
      {currentPage === "article" && <BlogArticlePage articleId={currentArticleId} onNavigate={handleNavigate} />}
      <Footer />
      
      <PitchYourStoryDialog 
        open={pitchDialogOpen} 
        onOpenChange={setPitchDialogOpen}
      />
      <ClubApplicationDialog 
        open={clubApplicationOpen} 
        onOpenChange={setClubApplicationOpen}
      />
      <Toaster />
    </div>
  );
}
