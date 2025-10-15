import { useNavigate } from 'react-router-dom';
import { HomePage as HomePageComponent } from '../pages/HomePage';
import { TravelClubPage as TravelClubPageComponent } from '../pages/TravelClubPage';
import { AnimationPage as AnimationPageComponent } from '../pages/AnimationPage';
import { useState } from 'react';
import { PitchYourStoryDialog } from './PitchYourStoryDialog';
import { ClubApplicationDialog } from './ClubApplicationDialog';

export function HomePageWrapper() {
  const navigate = useNavigate();
  const [clubApplicationOpen, setClubApplicationOpen] = useState(false);

  return (
    <>
      <HomePageComponent
        onNavigateToAnimation={() => navigate('/animation')}
        onJoinNow={() => setClubApplicationOpen(true)}
        onNavigateToShop={() => navigate('/store')}
      />
      <ClubApplicationDialog 
        open={clubApplicationOpen} 
        onOpenChange={setClubApplicationOpen}
      />
    </>
  );
}

export function TravelClubPageWrapper() {
  const [clubApplicationOpen, setClubApplicationOpen] = useState(false);

  return (
    <>
      <TravelClubPageComponent onJoinNow={() => setClubApplicationOpen(true)} />
      <ClubApplicationDialog 
        open={clubApplicationOpen} 
        onOpenChange={setClubApplicationOpen}
      />
    </>
  );
}

export function AnimationPageWrapper() {
  const [pitchDialogOpen, setPitchDialogOpen] = useState(false);

  return (
    <>
      <AnimationPageComponent onPitchStory={() => setPitchDialogOpen(true)} />
      <PitchYourStoryDialog 
        open={pitchDialogOpen} 
        onOpenChange={setPitchDialogOpen}
      />
    </>
  );
}
