interface HeroVideoProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function HeroVideo({
  videoId,
  title = "Esittelyvideo",
  description
}: HeroVideoProps) {
  return (
    <section className="w-full bg-[#f5f1ed] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        {(title || description) && (
          <div className="text-center mb-8 md:mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-[family-name:var(--font-caudex)]">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-[family-name:var(--font-nunito)]">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title || "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
