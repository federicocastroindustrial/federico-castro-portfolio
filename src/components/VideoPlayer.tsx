export default function VideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  return (
    <div className="overflow-hidden rounded-sm bg-paper-dim">
      <video
        src={src}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        className="w-full max-h-[70vh] mx-auto block"
      />
    </div>
  );
}
