import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Content } from '@/services/tmdb';
import { useLanguage } from '@/hooks/useLanguage';

interface HeroBannerProps {
  content: Content;
}

export const HeroBanner = ({ content }: HeroBannerProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={content.banner}
          alt={content.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-1/4 left-4 md:left-16 max-w-xl space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold">{content.title}</h1>
        <p className="text-lg md:text-xl text-foreground/90">
          {content.description}
        </p>
        <div className="flex gap-3">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            onClick={() => navigate(`/content/${content.type === 'series' ? 'tv' : 'movie'}/${content.id}/${content.slug || ''}`)}
          >
            <Play className="h-6 w-6 mr-2 fill-current" />
            {t('play')}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate(`/content/${content.type === 'series' ? 'tv' : 'movie'}/${content.id}/${content.slug || ''}`)}
          >
            <Info className="h-6 w-6 mr-2" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};
