import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to page names for the header
  const getPageFromPath = (pathname: string): string => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/animation')) return 'animation';
    if (pathname.startsWith('/travel')) return 'travel';
    if (pathname.startsWith('/store') || pathname.startsWith('/shop')) return 'shop';
    return 'home';
  };

  const handleNavigate = (page: string) => {
    const routeMap: { [key: string]: string } = {
      home: '/',
      animation: '/animation',
      travel: '/travel',
      shop: '/store',
      store: '/store'
    };
    
    const route = routeMap[page] || '/';
    navigate(route);
  };

  const handleCart = () => {
    // Navigate to cart page (to be created)
    console.log('Cart');
  };

  const currentPage = getPageFromPath(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onCart={handleCart}
        cartItemCount={0}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
