import { useParams, useNavigate } from 'react-router-dom';
import { Play, Plus, Check, ArrowLeft, Star, Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { TrailerModal } from '@/components/TrailerModal';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  addToMyList, 
  removeFromMyList, 
  isInMyList, 
  getContentById,
  Content 
} from '@/services/tmdb';

export default function ContentDetail() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [content, setContent] = useState<Content | null>(null);
  const [isInList, setIsInList] = useState(isInMyList(id || ''));

  useEffect(() => {
    const fetchContent = async () => {
      if (!id || !type) return;
      
      const found = await getContentById(id, type as 'movie' | 'tv');
      setContent(found);
    };
    fetchContent();
  }, [id, type]);

  const [showTrailer, setShowTrailer] = useState(false);

  const handlePlayTrailer = () => {
    if (content?.trailerKey) {
      setShowTrailer(true);
    }
  };

  if (!content) {
    return <LoadingScreen />;
  }

  const handleListToggle = () => {
    if (isInList) {
      removeFromMyList(content.id);
      setIsInList(false);
    } else {
      addToMyList(content.id);
      setIsInList(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative h-[80vh]">
        <img
          src={content.banner}
          alt={content.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-24 left-4 md:left-16"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-1/4 left-4 md:left-16 max-w-2xl space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">{content.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            {content.voteAverage && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{content.voteAverage.toFixed(1)}</span>
              </div>
            )}
            {content.releaseDate && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(content.releaseDate).getFullYear()}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{content.duration}</span>
            </div>
            <span>{content.type === 'series' ? 'Série TV' : 'Film'}</span>
          </div>
          <p className="text-lg">{content.description}</p>
          <div className="flex gap-2">
            {content.genre.map((g) => (
              <span key={g} className="px-3 py-1 bg-muted rounded text-sm">
                {g}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
              onClick={handlePlayTrailer}
              disabled={!content.trailerKey}
            >
              <Play className="h-6 w-6 mr-2 fill-current" />
              {t('play')}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleListToggle}
            >
              {isInList ? (
                <>
                  <Check className="h-6 w-6 mr-2" />
                  {t('inMyList')}
                </>
              ) : (
                <>
                  <Plus className="h-6 w-6 mr-2" />
                  {t('addToList')}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Casting */}
      {content.cast && content.cast.length > 0 && (
        <div className="px-4 md:px-16 py-8">
          <h2 className="text-2xl font-bold mb-4">Casting</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {content.cast
              .filter((person, index, self) => 
                person.profile_path && 
                index === self.findIndex((p) => p.id === person.id)
              )
              .map((person) => (
                <div key={person.id} className="space-y-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                    alt={person.name}
                    className="w-full rounded aspect-[2/3] object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{person.name}</p>
                    {person.character && (
                      <p className="text-xs text-muted-foreground">{person.character}</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Équipe */}
      {content.crew && content.crew.length > 0 && (
        <div className="px-4 md:px-16 py-8">
          <h2 className="text-2xl font-bold mb-4">Équipe</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {content.crew
              .filter((person, index, self) => 
                person.profile_path && 
                index === self.findIndex((p) => p.id === person.id && p.job === person.job)
              )
              .map((person) => (
                <div key={`${person.id}-${person.job}`} className="space-y-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                    alt={person.name}
                    className="w-full rounded aspect-[2/3] object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{person.name}</p>
                    {person.job && (
                      <p className="text-xs text-muted-foreground">{person.job}</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Images */}
      {content.images && content.images.length > 0 && (
        <div className="px-4 md:px-16 py-8">
          <h2 className="text-2xl font-bold mb-4">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${content.title} - ${index + 1}`}
                className="w-full rounded aspect-video object-cover"
              />
            ))}
          </div>
        </div>
      )}

      <TrailerModal videoKey={showTrailer ? content.trailerKey : null} onClose={() => setShowTrailer(false)} />
    </div>
  );
}
