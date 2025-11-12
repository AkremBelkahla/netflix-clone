import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search as SearchIcon } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ContentCard } from '@/components/ContentCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';
import { searchContent, getTrending, Content } from '@/services/tmdb';

export default function Search() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState<Content[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchInitial = async () => {
      const trending = await getTrending();
      setFilteredContent(trending);
    };
    fetchInitial();
  }, []);

  const handleSearch = async (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      setIsSearching(true);
      try {
        const results = await searchContent(value);
        setFilteredContent(results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsSearching(false);
      }
    } else {
      const trending = await getTrending();
      setFilteredContent(trending);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 md:px-16">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="relative flex-1 max-w-2xl">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {isSearching 
              ? 'Searching...' 
              : searchQuery 
                ? `${filteredContent.length} ${t('noResults')} "${searchQuery}"` 
                : t('trendingNow')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredContent.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
