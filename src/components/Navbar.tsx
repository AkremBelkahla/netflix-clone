import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? 'bg-background' : 'bg-gradient-to-b from-background/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-primary text-3xl font-bold">
            NETFLIX
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-sm hover:text-muted-foreground transition">
              {t('home')}
            </Link>
            <Link to="/tv-shows" className="text-sm hover:text-muted-foreground transition">
              {t('tvShows')}
            </Link>
            <Link to="/movies" className="text-sm hover:text-muted-foreground transition">
              {t('movies')}
            </Link>
            <Link to="/my-list" className="text-sm hover:text-muted-foreground transition">
              {t('myList')}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/search')}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
