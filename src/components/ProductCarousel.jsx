import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ProductCarousel = ({ products }) => {
    const { t, lang } = useLanguage();
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 320; // Approx card width
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative group/carousel">
            {/* Navigation Buttons (Desktop) */}
            <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-secondary hover:bg-action hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 hidden md:flex"
                aria-label="Previous"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-secondary hover:bg-action hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
                aria-label="Next"
            >
                <ChevronRight size={24} />
            </button>

            {/* Scroll Container (Native Snap) */}
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="snap-center flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col group relative hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Hover Overlay */}
                        <Link to="/products" className="absolute inset-0 z-30" />

                        <div className="h-56 bg-gradient-to-b from-gray-50 to-white p-6 flex items-center justify-center relative">
                            <img
                                src={product.image}
                                alt={t(product.titleKey) || product.titleKey}
                                className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-gray-100 uppercase tracking-wide">
                                {t(product.category)}
                            </div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow relative bg-white">
                            <div className="mb-4">
                                <h3 className="font-bold text-lg text-secondary mb-1 leading-tight group-hover:text-action transition-colors line-clamp-1">
                                    {t(product.titleKey) || product.titleKey}
                                </h3>
                                <p className="text-gray-400 text-xs line-clamp-2 h-8">
                                    {t(product.descKey) || product.descKey}
                                </p>
                            </div>
                            
                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">{lang === 'ar' ? 'السعر' : 'Price'}</p>
                                    <span className="font-black text-xl text-secondary">{product.price}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-action text-white flex items-center justify-center shadow-lg shadow-action/30 group-hover:scale-110 transition-transform">
                                    <ShoppingCart size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile Hint */}
            <div className="md:hidden flex justify-center gap-1.5 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-action animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-action/50 animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-action/20 animate-bounce delay-200"></div>
            </div>
        </div>
    );
};

export default ProductCarousel;
