import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockContent } from '@/data/mockContent';

export default function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const content = mockContent.find((c) => c.id === id);

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-50"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="flex items-center justify-center min-h-screen">
        <video
          className="w-full h-full"
          controls
          autoPlay
          src={content.videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
