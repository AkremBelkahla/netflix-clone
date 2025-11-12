import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrailerModalProps {
  videoKey: string | null;
  onClose: () => void;
}

export const TrailerModal = ({ videoKey, onClose }: TrailerModalProps) => {
  const [isOpen, setIsOpen] = useState(!!videoKey);

  useEffect(() => {
    setIsOpen(!!videoKey);
  }, [videoKey]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!videoKey || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10"
        onClick={() => {
          setIsOpen(false);
          setTimeout(onClose, 300);
        }}
      >
        <X className="h-6 w-6" />
      </Button>
      <div className="w-full max-w-5xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
