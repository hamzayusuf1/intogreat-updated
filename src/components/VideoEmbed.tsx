export default function VideoEmbed({
  videoId,
  title = "Video",
}: {
  videoId: string;
  title?: string;
}) {
  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(31,32,36,0.4)] bg-charcoal">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
