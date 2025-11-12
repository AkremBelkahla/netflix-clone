import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { ContentRow } from '@/components/ContentRow';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  getPopularMovies, 
  getTopRatedMovies, 
  getUpcomingMovies,
  getNowPlayingMovies,
  getContentByGenre,
  Content 
} from '@/services/tmdb';

export default function Movies() {
  const { t } = useLanguage();
  const [popular, setPopular] = useState<Content[]>([]);
  const [topRated, setTopRated] = useState<Content[]>([]);
  const [upcoming, setUpcoming] = useState<Content[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Content[]>([]);
  const [action, setAction] = useState<Content[]>([]);
  const [comedy, setComedy] = useState<Content[]>([]);
  const [drama, setDrama] = useState<Content[]>([]);
  const [horror, setHorror] = useState<Content[]>([]);
  const [sciFi, setSciFi] = useState<Content[]>([]);
  const [animation, setAnimation] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularData, topRatedData, upcomingData, nowPlayingData, actionData, comedyData, dramaData, horrorData, sciFiData, animationData] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies(),
          getNowPlayingMovies(),
          getContentByGenre(28), // Action
          getContentByGenre(35), // Comedy
          getContentByGenre(18), // Drama
          getContentByGenre(27), // Horror
          getContentByGenre(878), // Sci-Fi
          getContentByGenre(16), // Animation
        ]);
        
        setPopular(popularData);
        setTopRated(topRatedData);
        setUpcoming(upcomingData);
        setNowPlaying(nowPlayingData);
        setAction(actionData);
        setComedy(comedyData);
        setDrama(dramaData);
        setHorror(horrorData);
        setSciFi(sciFiData);
        setAnimation(animationData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 space-y-8 pb-16">
        <div className="px-4 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('movies')}</h1>
        </div>
        <ContentRow title={t('popularMovies')} content={popular} />
        <ContentRow title={t('topRated')} content={topRated} />
        <ContentRow title={t('nowPlaying')} content={nowPlaying} />
        <ContentRow title={t('upcoming')} content={upcoming} />
        <ContentRow title={t('action')} content={action} />
        <ContentRow title={t('comedy')} content={comedy} />
        <ContentRow title={t('drama')} content={drama} />
        <ContentRow title="Horror" content={horror} />
        <ContentRow title="Sci-Fi" content={sciFi} />
        <ContentRow title="Animation" content={animation} />
      </div>
      <Footer />
    </div>
  );
}
