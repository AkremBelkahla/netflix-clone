import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { ContentCard } from '@/components/ContentCard';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { getMyList, getTrending, Content } from '@/services/tmdb';

export default function MyList() {
  const { t } = useLanguage();
  const [myList, setMyList] = useState<Content[]>([]);

  useEffect(() => {
    const fetchMyList = async () => {
      const trending = await getTrending();
      const myListIds = getMyList();
      const filtered = trending.filter(item => myListIds.includes(item.id));
      setMyList(filtered);
    };
    fetchMyList();
    
    // Listen for storage changes
    const handleStorageChange = () => {
      fetchMyList();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 md:px-16 pb-16">
        <h1 className="text-4xl font-bold mb-8">{t('myList')}</h1>
        {myList.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {myList.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-16">
            <p>Your list is empty. Add some content to get started!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
