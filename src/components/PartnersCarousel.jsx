import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Import images
import wellpartImg from '../assets/partners/wellpart.jpg';
import sunwodaImg from '../assets/partners/sunwoda.png';
import topcableImg from '../assets/partners/topcable.png';
import beklemerImg from '../assets/beklemer.webp';

const partners = [
  { id: 1, name: 'Beklemer', logo: beklemerImg, scale: 1.2 },
  { id: 2, name: 'Sunwoda', logo: sunwodaImg, scale: 1 },
  { id: 3, name: 'Wellpart', logo: wellpartImg, scale: 1.1 },
  { id: 4, name: 'Top Cable', logo: topcableImg, scale: 1.1 },
  // Duplicate for seamless loop
  { id: 5, name: 'Beklemer', logo: beklemerImg, scale: 1.2 },
  { id: 6, name: 'Sunwoda', logo: sunwodaImg, scale: 1 },
  { id: 7, name: 'Wellpart', logo: wellpartImg, scale: 1.1 },
  { id: 8, name: 'Top Cable', logo: topcableImg, scale: 1.1 },
];

const PartnersCarousel = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-black text-secondary">
          {lang === 'ar' ? 'شركاء النجاح' : 'Our Trusted Partners'}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent"></div>

        <div className="flex w-full">
          <motion.div
            className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24"
            animate={{
              x: lang === 'ar' ? [0, 1000] : [0, -1000], // Adjust direction based on loop logic
            }}
            style={{
              x: 0 // Starting point
            }}
          // Using a simple CSS animation might be smoother for infinite loop than Framer Motion logic sometimes, 
          // but let's try a robust marquee approach.
          >
            {/* 
                Better approach for infinite marquee in Framer Motion:
                Translate X from 0% to -100% (or vice versa) of the *content* width.
                We need two sets of partners to ensure no gap.
             */}
          </motion.div>
        </div>

        {/* Simple Marquee Wrapper */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-16 md:gap-32 items-center flex-shrink-0 min-w-full justify-around px-8"
            animate={{ x: lang === 'ar' ? ["0%", "100%"] : ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 transition-all duration-500 hover:opacity-100 transform hover:scale-110 cursor-pointer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-16 md:h-24 w-auto object-contain"
                  style={{ transform: `scale(${partner.scale})` }}
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-16 md:gap-32 items-center flex-shrink-0 min-w-full justify-around px-8"
            animate={{ x: lang === 'ar' ? ["0%", "100%"] : ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {partners.map((partner, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 transition-all duration-500 hover:opacity-100 transform hover:scale-110 cursor-pointer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-16 md:h-24 w-auto object-contain"
                  style={{ transform: `scale(${partner.scale})` }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
