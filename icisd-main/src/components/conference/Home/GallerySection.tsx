import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Image as ImageIcon, Maximize2 } from "lucide-react";
import gallery1 from "@//gallery/opening.jpg";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  title: string;
  thumbnail: string;
  src?: string;
}

export const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState<"photos" | "videos">(
    "photos",
  );
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // ✅ NEW: track which video is playing
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Helper function to extract video ID and create YouTube URL
  const getYouTubeUrl = (embedUrl: string): string => {
    const videoId = embedUrl.split("/embed/")[1];
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  // Function to open video in YouTube fullscreen
  const openYouTubeFullscreen = (embedUrl: string) => {
    const youtubeUrl = getYouTubeUrl(embedUrl);
    window.open(youtubeUrl, "_blank");
  };

  // ✅ NEW: listen to YouTube play events
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

  // Sample gallery data
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
  ];

  const filteredItems =
    selectedFilter === "photos"
      ? galleryItems.filter((item) => item.type === "image")
      : galleryItems.filter((item) => item.type === "video");

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        {/* ================= HEADER (UNCHANGED) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-semibold mb-4">
            Gallery
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Moments from our previous conferences
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore photos and videos from our conference - capturing memorable
            moments and inspiring presentations
          </p>
        </motion.div>

        {/* ================= FILTER TABS (UNCHANGED) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        >
          {["photos", "videos"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter as any)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all ${
                selectedFilter === filter
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white text-slate-700 border"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* ================= GALLERY GRID ================= */}
        <div
          className={`gap-4 md:gap-6 ${
            selectedFilter === "videos"
              ? "grid grid-cols-1 lg:grid-cols-2"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => item.type === "image" && setSelectedItem(item)}
              className={
                item.type === "image" ? "group cursor-pointer" : "group"
              }
            >
              <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md group/container">
                {/* VIDEO */}
                {item.type === "video" && item.src ? (
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      id={item.id}
                      src={`${item.src}?enablejsapi=1&modestbranding=1`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                      className="w-full h-full"
                    />

                    {/* Fullscreen Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openYouTubeFullscreen(item.src);
                      }}
                      className="absolute top-4 right-4 bg-emerald-600 text-white p-2 rounded-lg z-10"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  /* IMAGE */
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* ✅ CAPTION — disappears when video plays */}
                {item.type === "video" && playingVideoId !== item.id && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <h3 className="text-white font-bold text-sm sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State for Photos */}
        {selectedFilter === "photos" && filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="inline-block px-8 py-6 bg-slate-100 rounded-lg border border-slate-200">
              <p className="text-slate-600 text-lg font-medium mb-2">
                Photos Coming Soon
              </p>
              <p className="text-slate-500 text-sm">
                Conference photos will be added shortly. Check back soon!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};