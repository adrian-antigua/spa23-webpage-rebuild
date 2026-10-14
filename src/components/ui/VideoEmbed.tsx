import { cn } from "@/lib/cn";

type VideoEmbedProps = {
  videoId: string;
  title?: string;
  className?: string;
};

export function VideoEmbed({ videoId, title = "Video", className }: VideoEmbedProps) {
  return (
    <div className={cn("relative aspect-video overflow-hidden bg-navy", className)}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
