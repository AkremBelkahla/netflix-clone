import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContentCard } from './ContentCard';
import { Content } from '@/services/tmdb';

interface ContentRowProps {
  title: string;
  content: Content[];
}

export const ContentRow = ({ title, content }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 px-4 md:px-16 mb-8 pb-32">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {content.map((item) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
};
