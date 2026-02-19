import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Maximize2, Camera, Video } from "lucide-react";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  title?: string;
  thumbnail?: string; // For videos, we can use this as a placeholder before the iframe loads
  src: string; // This is the image path OR the YouTube embed URL
}

export const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState<"photos" | "videos">(
    "photos",
  );
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Helper to get standard YouTube link for external opening
  const getYouTubeUrl = (embedUrl: string): string => {
    const videoId = embedUrl.split("/embed/")[1]?.split("?")[0];
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  const openYouTubeFullscreen = (embedUrl: string) => {
    window.open(getYouTubeUrl(embedUrl), "_blank");
  };

  // Listen for YouTube API messages to hide captions when playing
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "string") return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange" && data.info === 1) {
          setPlayingVideoId(data.id);
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1591290619762-fefb8ad1e2ef?w=500&h=500&fit=crop",
      src: "https://www.youtube.com/embed/uZE3eE87xI4",
    },

    {
      id: "2",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1591290619762-fefb8ad1e2ef?w=500&h=500&fit=crop",
      src: "https://www.youtube.com/embed/XiWAdKJmWqI",
    },

    {
      id: "3",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1591290619762-fefb8ad1e2ef?w=500&h=500&fit=crop",
      src: "https://www.youtube.com/embed/YXqptG87GuM",
    },

    {
      id: "4",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1591290619762-fefb8ad1e2ef?w=500&h=500&fit=crop",
      src: "https://www.youtube.com/embed/xuNpHZP-JVc",
    },

    {
      id: "5",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1591290619762-fefb8ad1e2ef?w=500&h=500&fit=crop",

      src: "https://www.youtube.com/embed/AtMtsmMI2pk",
    },

    {
      id: "6",
      type: "image",
      src: "/pics/1.JPG",
    },
    {
      id: "7",
      type: "image",
      src: "/pics/2.JPG",
    },
    {
      id: "8",
      type: "image",
      src: "/pics/3.JPG",
    },
    {
      id: "9",
      type: "image",
      src: "/pics/4.JPG",
    },
    {
      id: "10",
      type: "image",
      src: "/pics/5.JPG",
    },
    {
      id: "11",
      type: "image",
      src: "/pics/6.JPG",
    },
  ];

  const filteredItems = galleryItems.filter((item) =>
    selectedFilter === "photos" ? item.type === "image" : item.type === "video",
  );

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-4 uppercase tracking-wider">
            {selectedFilter === "photos" ? (
              <Camera className="w-4 h-4" />
            ) : (
              <Video className="w-4 h-4" />
            )}
            Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Capturing the Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A visual journey through our past events, featuring global leaders
            and groundbreaking discussions.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {(["photos", "videos"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setPlayingVideoId(null); // Reset play state when switching
              }}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-emerald-600 text-white shadow-xl scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-400"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            selectedFilter === "videos"
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div
                  className={`relative w-full overflow-hidden bg-slate-900 ${
                    selectedFilter === "videos"
                      ? "aspect-video"
                      : "aspect-[4/3]"
                  }`}
                >
                  {item.type === "video" ? (
                    /* VIDEO RENDERER */
                    <>
                      <iframe
                        id={item.id}
                        src={`${item.src}?enablejsapi=1&modestbranding=1&rel=0`}
                        title={item.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={() => openYouTubeFullscreen(item.src)}
                        className="absolute top-4 right-4 bg-emerald-600/90 hover:bg-emerald-600 text-white p-2 rounded-xl z-10 transition-transform hover:scale-110"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    /* IMAGE RENDERER */
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay Caption (Hidden when video starts playing) */}
                  {playingVideoId !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
                      <h3 className="text-white font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200"
          >
            <p className="text-slate-400 text-xl font-medium">
              New content is being uploaded. Please check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
