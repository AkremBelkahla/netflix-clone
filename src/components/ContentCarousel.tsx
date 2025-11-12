import { Content } from '@/services/tmdb';
import { ContentCard } from './ContentCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ContentCarouselProps {
  title: string;
  content: Content[];
}

export const ContentCarousel = ({ title, content }: ContentCarouselProps) => {
  return (
    <div className="space-y-2 px-4 md:px-16 mb-8 pb-32">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {content.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <ContentCard content={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};
