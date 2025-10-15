import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePageWrapper, TravelClubPageWrapper, AnimationPageWrapper } from './components/PageWrappers';
import Shop from './pages/Shop';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with Layout */}
        <Route path="/" element={<Layout><HomePageWrapper /></Layout>} />
        <Route path="/animation" element={<Layout><AnimationPageWrapper /></Layout>} />
        <Route path="/travel" element={<Layout><TravelClubPageWrapper /></Layout>} />
        <Route path="/store" element={<Layout><Shop /></Layout>} />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
