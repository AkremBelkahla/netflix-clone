import { useState } from 'react';
import { Play, Plus, Check, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Content, addToMyList, removeFromMyList, isInMyList } from '@/services/tmdb';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

interface ContentCardProps {
  content: Content;
}

export const ContentCard = ({ content }: ContentCardProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isInList, setIsInList] = useState(isInMyList(content.id));
  const [isHovered, setIsHovered] = useState(false);

  const handleListToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInList) {
      removeFromMyList(content.id);
      setIsInList(false);
    } else {
      addToMyList(content.id);
      setIsInList(true);
    }
  };

  return (
    <div
      className="group relative min-w-[150px] md:min-w-[220px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`relative transition-all duration-300 ${isHovered ? 'scale-110 z-[100]' : 'scale-100'}`}
        onClick={() => navigate(`/content/${content.type === 'series' ? 'tv' : 'movie'}/${content.id}/${content.slug || ''}`)}
      >
        <img
          src={content.thumbnail}
          alt={content.title}
          className="w-full h-[180px] md:h-[280px] object-cover rounded-t"
        />
        
        {isHovered && (
          <div className="absolute top-full left-0 w-full bg-zinc-900 shadow-2xl rounded-b border border-zinc-800 animate-fade-in">
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white hover:bg-white/90 text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/content/${content.type === 'series' ? 'tv' : 'movie'}/${content.id}/${content.slug || ''}`);
                  }}
                >
                  <Play className="h-5 w-5 fill-current" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full border-2 border-zinc-400 hover:border-white bg-zinc-800/80 hover:bg-zinc-700"
                  onClick={handleListToggle}
                >
                  {isInList ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full border-2 border-zinc-400 hover:border-white ml-auto bg-zinc-800/80 hover:bg-zinc-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/content/${content.type === 'series' ? 'tv' : 'movie'}/${content.id}/${content.slug || ''}`);
                  }}
                >
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500 font-bold">{content.rating}</span>
                <span className="text-muted-foreground">{content.year}</span>
                <span className="text-muted-foreground">{content.duration}</span>
                <span className="px-1 border border-muted-foreground/50 text-xs">HD</span>
              </div>
              
              <div className="flex gap-2 flex-wrap text-sm">
                {content.genre.map((g, idx) => (
                  <span key={g} className="text-muted-foreground">
                    {g}{idx < content.genre.length - 1 ? ' •' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
