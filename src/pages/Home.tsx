import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { ContentRow } from '@/components/ContentRow';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  getTrending, 
  getPopularMovies, 
  getPopularSeries, 
  getContentByGenre,
  getTopRatedMovies,
  getTopRatedSeries,
  Content 
} from '@/services/tmdb';

export default function Home() {
  const { t } = useLanguage();
  const [featured, setFeatured] = useState<Content | null>(null);
  const [trending, setTrending] = useState<Content[]>([]);
  const [movies, setMovies] = useState<Content[]>([]);
  const [series, setSeries] = useState<Content[]>([]);
  const [action, setAction] = useState<Content[]>([]);
  const [comedy, setComedy] = useState<Content[]>([]);
  const [horror, setHorror] = useState<Content[]>([]);
  const [romance, setRomance] = useState<Content[]>([]);
  const [topMovies, setTopMovies] = useState<Content[]>([]);
  const [topSeries, setTopSeries] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [
          trendingData, 
          moviesData, 
          seriesData, 
          actionData, 
          comedyData, 
          horrorData, 
          romanceData,
          topMoviesData,
          topSeriesData
        ] = await Promise.all([
          getTrending(),
          getPopularMovies(),
          getPopularSeries(),
          getContentByGenre(28), // Action
          getContentByGenre(35), // Comedy
          getContentByGenre(27), // Horror
          getContentByGenre(10749), // Romance
          getTopRatedMovies(),
          getTopRatedSeries(),
        ]);
        
        setTrending(trendingData);
        setMovies(moviesData);
        setSeries(seriesData);
        setAction(actionData);
        setComedy(comedyData);
        setHorror(horrorData);
        setRomance(romanceData);
        setTopMovies(topMoviesData);
        setTopSeries(topSeriesData);
        setFeatured(trendingData[0]);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading || !featured) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner content={featured} />
      <div className="relative -mt-32 space-y-8 pb-16">
        <ContentRow title={t('trendingNow')} content={trending.slice(0, 6)} />
        <ContentRow title={t('popularMovies')} content={movies.slice(0, 6)} />
        <ContentRow title={t('popularSeries')} content={series.slice(0, 6)} />
        <ContentRow title={t('topRated') + ' ' + t('movies')} content={topMovies.slice(0, 6)} />
        <ContentRow title={t('topRated') + ' ' + t('tvShows')} content={topSeries.slice(0, 6)} />
        <ContentRow title={t('action')} content={action.slice(0, 6)} />
        <ContentRow title={t('comedy')} content={comedy.slice(0, 6)} />
        <ContentRow title={t('horror')} content={horror.slice(0, 6)} />
        <ContentRow title={t('romance')} content={romance.slice(0, 6)} />
      </div>
      <Footer />
    </div>
  );
}
