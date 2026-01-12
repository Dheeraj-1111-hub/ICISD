// icisd-main/src/components/common/PageHero.tsx
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export const PageHero = ({
  title,
  subtitle,
  bgImage = "/srm-campus.jpg",
}: PageHeroProps) => {
  return (
    <section
      className="
        relative
        h-[70vh]
        min-h-[460px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-emerald-900/10" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
       

        <h1
          className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            tracking-tight
            text-white
            mb-6
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              text-white/85
              text-base
              md:text-lg
              lg:text-xl
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            {subtitle}
          </p>
        )}
      </motion.div>
      {/*curved svg path */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 180"
          className="w-full h-[150px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C240,180 480,180 720,140 960,100 1200,80 1440,110 L1440,180 L0,180 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
};
