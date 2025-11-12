import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { ContentRow } from '@/components/ContentRow';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  getPopularSeries, 
  getTopRatedSeries,
  getContentByGenre,
  Content 
} from '@/services/tmdb';

export default function TVShows() {
  const { t } = useLanguage();
  const [popular, setPopular] = useState<Content[]>([]);
  const [topRated, setTopRated] = useState<Content[]>([]);
  const [action, setAction] = useState<Content[]>([]);
  const [comedy, setComedy] = useState<Content[]>([]);
  const [drama, setDrama] = useState<Content[]>([]);
  const [sciFi, setSciFi] = useState<Content[]>([]);
  const [mystery, setMystery] = useState<Content[]>([]);
  const [animation, setAnimation] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const [popularData, topRatedData, actionData, comedyData, dramaData, sciFiData, mysteryData, animationData] = await Promise.all([
          getPopularSeries(),
          getTopRatedSeries(),
          getContentByGenre(10759, 'tv'), // Action & Adventure
          getContentByGenre(35, 'tv'), // Comedy
          getContentByGenre(18, 'tv'), // Drama
          getContentByGenre(10765, 'tv'), // Sci-Fi & Fantasy
          getContentByGenre(9648, 'tv'), // Mystery
          getContentByGenre(16, 'tv'), // Animation
        ]);
        
        setPopular(popularData);
        setTopRated(topRatedData);
        setAction(actionData);
        setComedy(comedyData);
        setDrama(dramaData);
        setSciFi(sciFiData);
        setMystery(mysteryData);
        setAnimation(animationData);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 space-y-8 pb-16">
        <div className="px-4 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('tvShows')}</h1>
        </div>
        <ContentRow title={t('popularSeries')} content={popular} />
        <ContentRow title={t('topRated')} content={topRated} />
        <ContentRow title={t('action')} content={action} />
        <ContentRow title={t('comedy')} content={comedy} />
        <ContentRow title={t('drama')} content={drama} />
        <ContentRow title={t('sciFi')} content={sciFi} />
        <ContentRow title="Mystery" content={mystery} />
        <ContentRow title="Animation" content={animation} />
      </div>
      <Footer />
    </div>
  );
}
